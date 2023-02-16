'use strict';

const html = document.querySelector('html');
const toggle = document.querySelector('.toggle');
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.item');
let expression = '';

const updateTheme = () => {
  const themeGetter = localStorage.getItem('theme');
  if (themeGetter === null) {
    return (html.classList = 'theme-1');
  }
  const themeMain = JSON.parse(themeGetter);
  html.classList = themeMain;
  toggle.id = themeMain;
};

const updateBg = (e) => {
  if (toggle.id === 'theme-1') {
    toggle.id = 'theme-2';
    html.classList = 'theme-2';
    localStorage.setItem('theme', JSON.stringify('theme-2'));
  } else if (toggle.id === 'theme-2') {
    toggle.id = 'theme-3';
    html.classList = 'theme-3';
    localStorage.setItem('theme', JSON.stringify('theme-3'));
  } else {
    toggle.id = 'theme-1';
    html.classList = 'theme-1';
    localStorage.setItem('theme', JSON.stringify('theme-1'));
  }
};

toggle.addEventListener('click', updateBg);
updateTheme();

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonValue = e.target.innerText;
    if (buttonValue === 'RESET') {
      expression = '';
    } else if (buttonValue === '=') {
      expression = eval(expression);
    } else if (buttonValue === 'x') {
      expression += '*';
    } else if (buttonValue === 'DEL') {
      expression = expression.slice(0, -1);
    } else if (expression.toString().length > 11) {
      expression = expression.toString().substring(0, 12);
    } else {
      expression += buttonValue;
    }
    screen.innerHTML = expression
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  });
});
