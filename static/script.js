const gameURLs = {
  button1: "https://VCio3KwNlDSBTVWkCKDi4Ojt-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/element@1dd0b99d2004b84795f2745a5eb3468deb1c38a4/ts2.xml&container=ig",
  button2: "https://AeAjHAHiVpRkwZeZZbsZn9Fv-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@0d8fb9c7430567ed0900902593eee6ba2ba8d297/ts3.xml&container=ig",
  button3: "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/RobiFet/workflow@60b41ef8c9123ae41b86bf04c9b39e1a5713aaa9/bin/gs.xml&container=ig",
  button4: "https://geometry.monster",
  button5: "https://serve.gamejolt.net/190223b04e193c0ce0f4c7b9f1bbfd7332533bdc0fcb22d08618d23dbadfa01c,1745605068,7/data/games/15/177/956177/files/6787d14f5ab77/index.html?gjapi_username=Goldcrescent&gjapi_token=WAyjCh",
  button6: "https://1v1.lol"
};

const gameWindows = {};

function openGame(url, key) {
  if (gameWindows[key] && !gameWindows[key].closed) {
    gameWindows[key].focus();
    return;
  }

  const gameWin = window.open();
  gameWin.document.body.style.margin = '0';
  gameWin.document.body.style.height = '100vh';

  const iframe = gameWin.document.createElement('iframe');
  iframe.style = 'border:none;width:100%;height:100%;margin:0;';
  iframe.src = url;

  gameWin.document.body.appendChild(iframe);

  const checker = setInterval(() => {
    if (gameWin.closed) {
      clearInterval(checker);
      gameWindows[key] = null;
    }
  }, 500);

  gameWindows[key] = gameWin;
}

// Auto attach click listeners
for (const [buttonId, url] of Object.entries(gameURLs)) {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener('click', () => openGame(url, buttonId));
  }
}