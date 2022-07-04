function addPixel() {
  for (let index = 0; index < 25; index += 1) {
    const pixelBoard = document.querySelector('#pixel-board');
    const pixeis = document.createElement('div');
    pixeis.classList = 'pixel';
    pixeis.style.backgroundColor = 'white';
    pixelBoard.appendChild(pixeis);
  }
}

addPixel();
