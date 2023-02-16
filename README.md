# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

### Screenshot

![](./images/Screenshot%202023-02-16%20at%2016-10-44%20Frontend%20Mentor%20Calculator%20app.png)
![](./images/Screenshot%202023-02-16%20at%2016-11-07%20Frontend%20Mentor%20Calculator%20app.png)

### Links

- Solution URL: (https://github.com/mallow12/Calculator-project.git)
- Live Site URL:(https://abdullah-digital-calculator.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla js

### What I learned

One of the major things i leearned in this project is out to use the eval() function in javascript and i also improved my knowledge on using javascript local storage.

code i am proud of:

```html
<div class="toggle" id="theme-1">
  <i class="indicator"></i>
</div>
<div id="screen" class="screen">0</div>
```

```css
.item:nth-of-type(17) {
  grid-column: 1/3;
}
.item:nth-of-type(18) {
  grid-column: 3/5;
}
```

```js
const updateTheme = () => {
  const themeGetter = localStorage.getItem('theme');
  const themeMain = JSON.parse(themeGetter);
  html.classList = themeMain;
  toggle.id = themeMain;
};
```

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I am going to continue developing my javascript skills with future projects.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

## Author

- Frontend Mentor - [@mallow12](https://www.frontendmentor.io/profile/mallow12)

## Acknowledgments

This is acknowledgement to God for making this project easy for me and my colleagues Abdurrahman and Badru fuad for their contribution in explaining and giving me more insights on part of this project.😀
