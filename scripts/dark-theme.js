const blackIcon = document.querySelector('#ico-black');
const whiteIcon = document.querySelector('#ico-white');

const darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
darkTheme.onchange = (function onchange() {
  document.head.removeChild(darkTheme.matches ? blackIcon : whiteIcon);
  document.head.appendChild(darkTheme.matches ? whiteIcon : blackIcon);
  return onchange;
})();