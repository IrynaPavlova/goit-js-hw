"use strict";

/*-------------TASK#1-------------*/

// const list = document.querySelectorAll(".item");

// console.log(`В списке ${list.length} категории`);

// list.forEach(item => {
//   const category = item.querySelector("h2").textContent;
//   const quantity = item.querySelectorAll("ul li").length;

//   console.log(`
//     Категория: ${category}
//     Количество элементов: ${quantity}`);
// });

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
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running"
//   }
// ];

// let string = "";

// images.forEach(image => {
//   string = `<li><img src="${image.url}" alt="${image.alt}" width='400px'<li>`;
//   gallery.insertAdjacentHTML("beforeend", string);
// });

// gallery.style.display = "flex";

/*-------------TASK#4-------------*/

// const refs = {
//   increment: document.querySelector('[data-action="increment"]'),
//   decrement: document.querySelector('[data-action="decrement"]'),
//   result: document.querySelector("#value")
// };

// let counterValue = 0;

// refs.increment.addEventListener("click", () => {
//   counterValue++;
//   refs.result.textContent = counterValue;
// });

// refs.decrement.addEventListener("click", () => {
//   counterValue--;
//   refs.result.textContent = counterValue;
// });

/*-------------TASK#5-------------*/

// const refs = {
//   input: document.querySelector("#name-input"),
//   output: document.querySelector("#name-output")
// };

// refs.input.addEventListener("input", event => {
//   const element = event.currentTarget.value;
//   refs.output.textContent = element;
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

// const refs = {
//   control: document.querySelector("#font-size-control[type=range]"),
//   text: document.querySelector("#text")
// };

// refs.control.addEventListener("input", input => {
//   const value = input.currentTarget.value;
//   refs.text.style.fontSize = value + "px";
// });

/*-------------TASK#8-------------*/

// const refs = {
//   control: document.querySelector("#controls"),
//   render: document.querySelector('button[data-action="render"]'),
//   destroy: document.querySelector('button[data-action="destroy"]'),
//   boxes: document.querySelector("#boxes"),
//   fragment: document.createDocumentFragment()
// };

// const createBoxes = amount => {
//   for (let i = 0; i < amount; i++) {
//     let div = document.createElement("div");
//     refs.fragment.appendChild(div);
//     let basicSize = 30;
//     let size = basicSize + i * 10;
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgb(${getColor()}, ${getColor()}, ${getColor()} `;
  
// }
//   refs.boxes.appendChild(refs.fragment);
// };

// refs.render.addEventListener("click", () => {
//   let number = document.querySelector('input[type="number"]');
//   let amount = number.value;
//   return createBoxes(amount);
// });

// function getColor() {
//   return Math.floor(Math.random() * 256);
// }

// refs.destroy.addEventListener("click", () => {
//   refs.boxes.innerHTML = "";
// });
