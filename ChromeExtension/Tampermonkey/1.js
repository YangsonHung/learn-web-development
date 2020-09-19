// ==UserScript==
// @name         获取链接
// @icon         https://react.docschina.org/favicon.ico
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       洪永鑫
// @match        https://fusion.design/74436/design/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('ok');

    let tmp;
    const id = setInterval(() => {
        tmp = document.querySelectorAll('.next-menu-item-text');
    }, 500);

    setTimeout(() => {
        if (tmp) {
            console.log('clearInterval');
            clearInterval(id);
            for (let i = 0; i < tmp.length; i++) {
                if (tmp[i].childNodes[0].href) {
                    console.log(i, tmp[i].childNodes[0].href);
                }
            }
        }
    }, 3000);
})();
