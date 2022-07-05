function addPixel() {
  for (let index = 0; index < 25; index += 1) {
    const pixelBoard = document.querySelector('#pixel-board');
    const pixeis = document.createElement('div');
    pixeis.classList = 'pixel';
    pixelBoard.appendChild(pixeis);
  }
}

addPixel();

const color1 = document.querySelector('.um');
const color2 = document.querySelector('.dois');
const color3 = document.querySelector('.tres');
const color4 = document.querySelector('.quatro');

function selectColorOne() {
  color1.classList.add('selected');
  color2.classList.remove('selected');
  color3.classList.remove('selected');
  color4.classList.remove('selected');
}

function selectColorTwo() {
  color1.classList.remove('selected');
  color2.classList.add('selected');
  color3.classList.remove('selected');
  color4.classList.remove('selected');
}

function selectColorThree() {
  color1.classList.remove('selected');
  color2.classList.remove('selected');
  color3.classList.add('selected');
  color4.classList.remove('selected');
}

function selectColorFour() {
  color1.classList.remove('selected');
  color2.classList.remove('selected');
  color3.classList.remove('selected');
  color4.classList.add('selected');
}

color1.addEventListener('click', selectColorOne);
color2.addEventListener('click', selectColorTwo);
color3.addEventListener('click', selectColorThree);
color4.addEventListener('click', selectColorFour);

function limpar() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const botaoClear = document.getElementById('clear-board');

function getSelectedColor() {
  const selectedColor = document.getElementsByClassName('selected')[0];
  const color = getComputedStyle(selectedColor).backgroundColor;
  return color;
}

const pixel = document.getElementsByClassName('pixel');

for (let index = 0; index < pixel.length; index += 1) {
  const xablau = pixel[index];
  xablau.addEventListener('click', (event) => {
    const selectedColor = getSelectedColor();

    const clickedPixel = event.target;
    clickedPixel.style.backgroundColor = selectedColor;
  });
}

botaoClear.addEventListener('click', limpar);

window.onload = selectColorOne;
