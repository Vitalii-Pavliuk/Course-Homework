function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
const boxesContainer = document.getElementById('boxes');
const input = controls.querySelector('input[type="number"]');

controls.querySelector('[data-create]').addEventListener('click', () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
});

controls.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  let size = 30;

  for (let i = 0; i < amount; i+=1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}