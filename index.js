const turtle = document.querySelector('.turtle');
const arrows = document.querySelectorAll('.arrow');
const restart = document.querySelector('.restart');
let x = 0;
let y = 0;
let speed = 50;
let flipped = false;
let rotate = 0;

function handleKeydown(event) {
  if (!event.key.includes('Arrow')) {
    return;
  }
  switch (event.key) {
    case 'ArrowUp':
      y -= speed;
      rotate = '-90deg';
      break;
    case 'ArrowDown':
      y += speed;
      rotate = '90deg';
      break;
    case 'ArrowRight':
      x += speed;
      flipped = false;
      rotate = '0deg';
      break;
    case 'ArrowLeft':
      x -= speed;
      flipped = true;
      rotate = '0deg';
      break;
    default:
      console.log('This is not a valid move');
      break;
  }
  turtle.setAttribute(
    'style',
    `--rotateX: ${flipped ? '180deg' : '0deg'};
    --rotate: ${rotate};
    --x: ${x}px; 
    --y: ${y}px`
  );
}

function handleRestartClick() {
  location.reload();
}

function handleClick(event) {
    switch (event.target.classList[0]) {
        case 'up':
            y -= speed;
            rotate = '-90deg';
            break;
        case 'down':
            y += speed;
            rotate = '90deg';
            break;
        case 'right':
            x += speed;
            flipped = false;
            rotate = '0deg';
            break;
        case 'left':
            x -= speed;
            flipped = true;
            rotate = '0deg';
      break;
        default:
            console.log('This is not a valid move');
            break;
    };
    turtle.setAttribute(
        'style',
        `--rotateX: ${flipped ? '180deg' : '0deg'};
        --rotate: ${rotate};
        --x: ${x}px; 
        --y: ${y}px`
      );
}

restart.addEventListener('click', handleRestartClick);
window.addEventListener('keydown', handleKeydown);
arrows.forEach((arrow) => {
    arrow.addEventListener('click', handleClick)
})