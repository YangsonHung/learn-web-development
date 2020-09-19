(function() {
    'use strict';
    console.log('ok');

    let targetNodeList;
    const id = setInterval(() => {
        targetNodeList = document.querySelectorAll('.next-menu-item-text a');
    }, 500);

    setTimeout(() => {
        let subTargetArray = [];
        if (targetNodeList) {
            console.log('clearInterval');
            clearInterval(id);
            const targetArray = Array.from(targetNodeList).slice(7);
            for (let i = 0; i < targetArray.length; i++) {
                subTargetArray.push({
                    title: targetArray[i].text,
                    url: targetArray[i].href
                });
                // console.log(i, targetArray[i].text, targetArray[i].href);
            }
        }
        chrome.runtime.sendMessage({ res: subTargetArray }, response => {
            console.log('后台回复:', response);
        });
    }, 2000);
})();
