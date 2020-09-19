'use strict';

let tabArray;
let removeCount = 0;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    sendResponse('接收数据成功');
    if (!tabArray) {
        tabArray = request.res;
        console.table(tabArray);
    }
});

chrome.browserAction.onClicked.addListener(tab => {
    if (!tabArray) return;

    tabArray.map((item, index) => {
        chrome.tabs.create(
            {
                url: item.url,
                active: true
            },
            tab => {
                console.log(index, '创建的tab信息：', tab);
            }
        );
    });

    chrome.tabs.remove(tab.id, () => {
        console.log('关闭手动打开的页面');
    });

    setTimeout(() => {
        let isLoadingComplete = false;
        let queryTabsArray;
        const intervalId = setInterval(() => {
            console.log('setInterval called', intervalId);
            chrome.tabs.query({}, res => {
                if (res) {
                    isLoadingComplete = res.every(item => {
                        console.log(item.status);
                        return item.status === 'complete';
                    });

                    if (isLoadingComplete) {
                        console.log('=====================');
                        queryTabsArray = res;
                        clearInterval(intervalId);
                        for (let i = 0; i < queryTabsArray.length; i++) {
                            chrome.pageCapture.saveAsMHTML(
                                {
                                    tabId: queryTabsArray[i].id
                                },
                                bin => {
                                    const blob = new Blob([bin], {
                                        type: 'plain/mhtml'
                                    });
                                    const url = URL.createObjectURL(blob);
                                    const filename = tabArray[i].title.replace(
                                        /[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi,
                                        '-'
                                    );
                                    chrome.downloads.download(
                                        {
                                            url,
                                            filename: filename + '.' + 'mhtml'
                                        },
                                        id => {
                                            console.log(i, '下载id:', id);
                                            URL.revokeObjectURL(url);
                                            chrome.tabs.remove(item.id, () => {
                                                removeCount++;
                                                console.log(
                                                    i,
                                                    '关闭标签页的id',
                                                    item.id
                                                );
                                            });
                                        }
                                    );
                                }
                            );
                        }
                    }
                }
            });
        }, 2000);
    }, 5000);
});
