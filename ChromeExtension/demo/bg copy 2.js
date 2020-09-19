'use strict';

let tabArray;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    sendResponse('接收数据成功');
    if (!tabArray) {
        tabArray = request.res;
        console.table(tabArray);
    }
});

chrome.browserAction.onClicked.addListener(tab => {
    if (!tabArray) return;

    tabArray.slice(0, 10).map((item, index) => {
        chrome.tabs.create(
            {
                url: item.url,
                active: true
            },
            createTab => {
                console.log(index, '创建的tab信息：', createTab);
                setTimeout(() => {
                    chrome.pageCapture.saveAsMHTML(
                        {
                            tabId: createTab.id
                        },
                        bin => {
                            const blob = new Blob([bin], {
                                type: 'plain/mhtml'
                            });
                            const url = URL.createObjectURL(blob);
                            const filename = item.title.replace(
                                /[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi,
                                '-'
                            );
                            chrome.downloads.download(
                                {
                                    url,
                                    filename: filename + '.' + 'mhtml'
                                },
                                id => {
                                    console.log(index, '下载id:', id);
                                    URL.revokeObjectURL(url);
                                    chrome.tabs.remove(createTab.id, () => {
                                        console.log(
                                            index,
                                            '关闭标签页的id',
                                            createTab.id
                                        );
                                    });
                                }
                            );
                        }
                    );
                }, 10000);
            }
        );
    });

    chrome.tabs.remove(tab.id, () => {
        console.log('关闭手动打开的页面');
    });
});
