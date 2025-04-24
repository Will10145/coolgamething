const url1 = "https://VCio3KwNlDSBTVWkCKDi4Ojt-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/element@1dd0b99d2004b84795f2745a5eb3468deb1c38a4/ts2.xml&container=ig";
const url2 = "https://AeAjHAHiVpRkwZeZZbsZn9Fv-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@0d8fb9c7430567ed0900902593eee6ba2ba8d297/ts3.xml&container=ig";
const url3 = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/RobiFet/workflow@60b41ef8c9123ae41b86bf04c9b39e1a5713aaa9/bin/gs.xml&container=ig";
const url4 = "https://geometry.monster";
const url5 = "https://serve.gamejolt.net/190223b04e193c0ce0f4c7b9f1bbfd7332533bdc0fcb22d08618d23dbadfa01c,1745605068,7/data/games/15/177/956177/files/6787d14f5ab77/index.html?gjapi_username=Goldcrescent&gjapi_token=WAyjCh";
const url6 = "https://www.xbox.com/en-us/play";

let win1, win2, win3, win4, win5, win6;

function openGame(url, winRefName) {
  if (window[winRefName]) {
    window[winRefName].focus();
    return;
  }

  const gameWin = window.open();
  gameWin.document.body.style.margin = '0';
  gameWin.document.body.style.height = '100vh';

  const iframe = gameWin.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.src = url;

  gameWin.document.body.appendChild(iframe);

  const checkClose = setInterval(() => {
    if (gameWin.closed) {
      clearInterval(checkClose);
      window[winRefName] = undefined;
    }
  }, 500);

  window[winRefName] = gameWin;
}

document.getElementById('button1').onclick = () => openGame(url1, 'win1');
document.getElementById('button2').onclick = () => openGame(url2, 'win2');
document.getElementById('button3').onclick = () => openGame(url3, 'win3');
document.getElementById('button4').onclick = () => openGame(url4, 'win4');
document.getElementById('button5').onclick = () => openGame(url5, 'win5');
document.getElementById('button6').onclick = () => openGame(ur16, 'win6');

