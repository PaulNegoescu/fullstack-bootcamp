import clsx from 'clsx';

import styles from './counter.module.css';

const defaultDiff = 1;
const initialCount = 0;
let count = initialCount;

const display = document.querySelector('[data-counter-display]');
const buttons = document.querySelectorAll('[data-counter-button]');

showCount(count);
adjustDisplayColor(count)

for (const button of buttons) {
  button.addEventListener('click', handleClick);
}

function handleClick(e) {
  const clickedButton = e.currentTarget;
  const buttonAction = clickedButton.dataset.counterButton;

  switch (buttonAction) {
    case 'increment':
      count += defaultDiff;
      break;
    case 'decrement':
      count -= defaultDiff;
      break;
    case 'reset':
      count = initialCount;
      break;
    default:
      throw new Error(`Action "${buttonAction}" not implemented in code!`);
  }

  adjustDisplayColor(count);
  showCount(count);
}

function showCount(count) {
  display.textContent = count;
}

function adjustDisplayColor(count) {
  // display.classList.remove(styles.positive, styles.negative);

  // if(count < 0) {
  //   display.classList.add(styles.negative);
  // }

  // if(count > 0) {
  //   display.classList.add(styles.positive);
  // }

  display.className = clsx(
    { [styles.negative]: count < 0, [styles.positive]: count > 0 },
    styles.display,
  );
}
