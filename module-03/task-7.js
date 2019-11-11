// "use strict";

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw"
// };

// const account = {
//   balance: 0,

//   transactions: [],

//   count: 0,

//   deposit(amount) {
//     this.balance = this.balance + amount;
//     const transaction = {
//       id: this.count,
//       type: Transaction.DEPOSIT,
//       amount
//     };
//     account.addTransaction(transaction);
//   },

//   withdraw(amount) {
//     this.balance = this.balance - amount;
//     if (amount > this.balance) {
//       console.log("Cнятие такой суммы невозможно, недостаточно средств.");
//     }
//     const transaction = {
//       id: this.count,
//       type: Transaction.WITHDRAW,
//       amount
//     };
//     account.addTransaction(transaction);
//   },

//   addTransaction(transaction) {
//     this.count++;
//     this.transactions.push(transaction);
//   },

//   getBalance() {
//     console.log(this.balance);
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     this.transactions.forEach(elem => {
//       if (elem.id === id) {
//         console.log(elem);
//         return elem;
//       }
//     });
//   },

//   getTransactionTotal(type) {
//     let total = 0;
//     this.transactions.forEach(elem => {
//       if (elem.type === type) {
//         total = elem.amount;
//       }
//     });
//     console.log(total);
//     return total;
//   }
// };

// console.log(account);

// account.deposit(100);
// account.withdraw(50);

// account.getBalance();
// account.getTransactionDetails(1);
// account.getTransactionTotal("deposit");
