function getSelectedColor() {
  const selectedColor = document.querySelector('.selected');
  const color = getComputedStyle(selectedColor).backgroundColor;
  return color;
}

function addEventPixel() {
  const pixel = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixel.length; index += 1) {
    const xablau = pixel[index];
    xablau.addEventListener('click', (event) => {
      const selectedColor = getSelectedColor();

      const clickedPixel = event.target;
      clickedPixel.style.backgroundColor = selectedColor;
    });
  }
}

function addPixel(input) {
  let tamanho = input;
  if (input < 5) {
    tamanho = 5;
  } else if (input > 50) {
    tamanho = 50;
  }
  const valor = tamanho * tamanho;
  for (let index = 0; index < valor; index += 1) {
    const pixelBoard = document.querySelector('#pixel-board');
    const pixeis = document.createElement('div');
    pixeis.classList = 'pixel';
    pixelBoard.appendChild(pixeis);
  }
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.style.width = `${tamanho * 40}px`;
  pixelBoard.style.height = `${tamanho * 40}px`;

  addEventPixel();
}

function removePixel() {
  const lista = document.querySelectorAll('.pixel');
  for (let index = 0; index < lista.length; index += 1) {
    console.log(lista);
    lista[index].remove();
  }
}

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

botaoClear.addEventListener('click', limpar);

const btnVQV = document.querySelector('#generate-board');

function checaAlerta() {
  const inputVQV = document.querySelector('#board-size').value;
  if (inputVQV === '') {
    alert('Board inválido!');
  }
  if (inputVQV > 0) {
    removePixel();
    addPixel(inputVQV);
  }
}

btnVQV.addEventListener('click', checaAlerta);

window.onload = () => {
  selectColorOne();
  addPixel(5);
};
