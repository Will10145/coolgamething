const gameURLs = {
  button1: "https://VCio3KwNlDSBTVWkCKDi4Ojt-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/element@1dd0b99d2004b84795f2745a5eb3468deb1c38a4/ts2.xml&container=ig",
  button2: "https://AeAjHAHiVpRkwZeZZbsZn9Fv-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@0d8fb9c7430567ed0900902593eee6ba2ba8d297/ts3.xml&container=ig",
  button3: "/static/gunspin/gunspin.json",
  button4: "https://geometry.monster",
  button5: "https://serve.gamejolt.net/01ba4fd8a27d6efef2aec397f6ceacf76dfe9b83dfb730b8cb517009914b9ae3,1745994905,7/data/games/15/177/956177/files/6787d14f5ab77/index.html?gjapi_username=Goldcrescent&gjapi_token=WAyjChN",
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
