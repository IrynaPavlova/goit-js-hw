// "use strict";

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// //const login = prompt("Введите пароль");

// const isLoginValid = login => {
//   return login.length >= 4 && login.length <= 16;
// };

// const isLoginUnique = (allLogins, login) => {
//   if (allLogins.includes(login)) {
//     console.log("Такой логин уже используется!");
//     return false;
//   } else {
//     return true;
//   }
// };

// const addLogin = (allLogins, login) => {
//   if (isLoginValid(login)) {
//     isLoginUnique(allLogins, login) &&
//       allLogins.push(login) &&
//       console.log("Логин успешно добавлен!");
//   } else {
//     console.log("Ошибка! Логин должен быть от 4 до 16 символов");
//   }
// };

// //addLogin(logins, login);

// addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
// addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
// addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
