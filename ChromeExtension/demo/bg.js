'use strict';

let tabArray;
let isLoadingComplete;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // 逻辑判断，只在点击图标的那个tab页赋值一次
    if (!tabArray) {
        tabArray = request.res;
        console.table(tabArray);
        sendResponse('接收数据成功');
    }
});

chrome.browserAction.onClicked.addListener(tab => {
    if (!tabArray) {
        console.log('没有数据');
        return;
    }
    // chrome.tabs.remove(tab.id, () => {
    //     console.log('关闭手动打开的页面');
    // });

    tabArray = tabArray.slice(0, 5);
    tabArray.map((item, index) => {
        chrome.tabs.create(
            {
                url: item.url,
                active: false
            },
            createTab => {
                console.log('循环序号:', index, '创建的tab信息:', createTab);
                const timerID = setInterval(() => {
                    if (!isLoadingComplete) {
                        chrome.tabs.query({}, res => {
                            if (res) {
                                isLoadingComplete = res.every(item => {
                                    console.log(item.status);
                                    return item.status === 'complete';
                                });
                            }
                        });
                    }

                    if (isLoadingComplete) {
                        let url = !createTab.url
                            ? createTab.pendingUrl + '/*'
                            : createTab.url + '/*';
                        chrome.tabs.query(
                            {
                                url: url,
                                active: false,
                                status: 'complete'
                            },
                            res => {
                                if (
                                    res.length !== 0 &&
                                    res[0].status === 'complete'
                                ) {
                                    console.log('查询的tab页信息:', res[0]);
                                    console.log(
                                        'tab页序号:',
                                        res[0].index,
                                        '页面加载==================状态:',
                                        res[0].status
                                    );
                                    chrome.pageCapture.saveAsMHTML(
                                        {
                                            tabId: res[0].id
                                        },
                                        bin => {
                                            const blob = new Blob([bin], {
                                                type: 'plain/mhtml'
                                            });
                                            const url = URL.createObjectURL(
                                                blob
                                            );
                                            const filename = item.title.replace(
                                                /[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi,
                                                '-'
                                            );
                                            chrome.downloads.download(
                                                {
                                                    url,
                                                    conflictAction: 'overwrite',
                                                    filename:
                                                        filename + '.mhtml'
                                                },
                                                downloadItemID => {
                                                    console.log(
                                                        '循环序号:',
                                                        index,
                                                        '下载id:',
                                                        downloadItemID,
                                                        '下载文件名:',
                                                        filename,
                                                        '下载的tab页id:',
                                                        res[0].id,
                                                        '下载完成!!!!!!'
                                                    );
                                                    URL.revokeObjectURL(url);

                                                    chrome.tabs.remove(
                                                        res[0].id,
                                                        () => {
                                                            console.log(
                                                                '循环序号:',
                                                                index,
                                                                '关闭标签页的id:',
                                                                res[0].id,
                                                                '标签页已关闭!!!!!!'
                                                            );
                                                            console.log(
                                                                '======清除定时器======',
                                                                'id:' + timerID
                                                            );
                                                            clearInterval(
                                                                timerID
                                                            );
                                                        }
                                                    );
                                                }
                                            );
                                        }
                                    );
                                } else {
                                    if (res.length === 0) {
                                        console.log(
                                            '-------------数据异常:',
                                            res
                                        );
                                    } else if (res[0].status === 'loading') {
                                        console.log(
                                            'tab页序号:',
                                            res[0].index,
                                            '页面加载==================状态:',
                                            res[0].status
                                        );
                                    }
                                }
                            }
                        );
                    }
                }, 2000);
            }
        );
    });
});
