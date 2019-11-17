"use strict";

/*-------------TASK#1-------------*/

// const list = document.querySelectorAll(".item");

// console.log(`В списке ${list.length} категории`);

// list.forEach(item => {
//     const category = item.querySelector('h2').textContent;
//     const quantity = item.querySelectorAll('ul li').length;

//     console.log(`
//     Категория: ${category}
//     Количество элементов: ${quantity}`)

// })

/*-------------TASK#2-------------*/

// const ingredientsUl = document.querySelector("#ingredients");
// const fragment = document.createDocumentFragment();
// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы"
// ];

// ingredients.forEach(elem => {
//   const ingredientsLi = document.createElement("li");
//   ingredientsLi.textContent = elem;
//   fragment.append(ingredientsLi);
// });
// ingredientsUl.append(fragment);

/*-------------TASK#3-------------*/

// const gallery = document.querySelector("#gallery");

// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// let string = '';

// images.forEach(image => {
//   string = `<li><img src="${image.url}" alt="${image.alt}" width='400px'<li>`;
//   gallery.insertAdjacentHTML("afterbegin", string);
// });

// gallery.style.display = 'flex';

/*-------------TASK#4-------------*/

// const counter = document.querySelector("#counter");

// let counterValue = 0;
// let result = document.querySelector("#value");

// const increment = document.querySelector('[data-action="increment"]');
// increment.addEventListener("click", () => {
//   counterValue++;
//   result.textContent = counterValue;
// });

// const decrement = document.querySelector('[data-action="decrement"]');
// decrement.addEventListener("click", () => {
//   counterValue--;
//   result.textContent = counterValue;
// }); /////!!!!!!!!!!!!!!!!

/*-------------TASK#5-------------*/

// const input = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// input.addEventListener("input", (input) => {
//   const element = input.currentTarget.value;
//   output.textContent = element;
// });

/*-------------TASK#6-------------*/

// const input = document.querySelector('#validation-input[data-length="6"]');

// let correctLength = input.dataset.length;

// input.addEventListener("blur", input => {
//   const element = input.currentTarget;
//   const inputLength = element.value.length;
//   if (correctLength == inputLength) {
//     element.classList.add("valid");
//   } else element.classList.add("invalid");
// });

/*-------------TASK#7-------------*/

// const control = document.querySelector('#font-size-control[type=range]');
// const text = document.querySelector('#text');

// control.addEventListener("input", input => {
//   const value = input.currentTarget.value;
//   text.style.fontSize = value + 'px';
// });

/*-------------TASK#8-------------*/

// const control = document.querySelector("#controls");
// const render = document.querySelector('button[data-action="render"]');
// const destroy = document.querySelector('button[data-action="destroy"]');
// const boxes = document.querySelector("#boxes");
// const fragment = document.createDocumentFragment();

// const createBoxes = amount => {
//   for (let i = 0; i < amount; i++) {
//     let div = document.createElement("div");
//     fragment.appendChild(div);
//     let basicSize = 30;
//     let size = basicSize + i * 10;
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgb(${getColor()}, ${getColor()}, ${getColor()} `;
//   }
//   boxes.appendChild(fragment);
// };

// render.addEventListener("click", () => {
//   let number = document.querySelector('input[type="number"]');
//   let amount = number.value;
//   return createBoxes(amount);
// });

// function getColor() {
//   return Math.floor(Math.random() * 256);
// }

// destroy.addEventListener("click", () => {
//   boxes.innerHTML = "";
// });
