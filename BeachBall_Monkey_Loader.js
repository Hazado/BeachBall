// ==UserScript==
// @name         Beachball Loader
// @namespace    http://github.com/seraphina985/BeachBall
// @version      1.1
// @description  Beachball autoloader for Sandcastle Builder - SSL patch.
// @author       seraphina985
// @match        http://castle.chirpingmustard.com/castle.html
// @match        http://castle.chirpingmustard.com/classic.html
// @match        https://castle.chirpingmustard.com/castle.html
// @match        https://castle.chirpingmustard.com/classic.html
// @grant        none
// ==/UserScript==

setTimeout(loadBB, 5000);

function loadBB() {
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', 'https://seraphina985.github.io/BeachBall/BeachBall.js');
    document.head.appendChild(js);
}

// Loader patch by seraphina985 all other credit bellongs to the people bellow

// CodeRitter Beachball location
// https://github.com/codeRitter/BeachBall

// Xenko Beachball location - previous version.
// http://xenko.github.io/BeachBall/BeachBall.js
