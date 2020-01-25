let money = +prompt('Ваш бютжет на месяц?', '');
let time  = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  expenses: '',
  optionalExpenses: '',
  income: '',
  savings: false
}

let expensesName = prompt('Введите обязательную статью расходов в этом месяце', '');
let expensesValue = +prompt('Во сколько это обойдется?', '');
appData.expenses = {
  [expensesName]:[expensesValue]
}

alert('Бютжет на месяц - ' + (money/30) );

