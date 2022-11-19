// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
}

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
}

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
}

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
}

const accounts = [account1, account2, account3, account4]

function CreateAcount(accounts) {
  accounts.forEach(function (user) {
    user.username = user.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('')
  })
}
CreateAcount(accounts)

console.log(accounts)

const containerInformation = document.querySelector('.information')
const amountMoney = document.querySelector('.amount-Money')
const incomes = document.querySelector('.income-Amount')
const outcomes = document.querySelector('.outcome-Amount')
const interests = document.querySelector('.interest-Amount')

const displayMovements = function (movements) {
  movements.forEach(function (mov, index, moviments) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
      <div class="${type}">
        <p class="${type}">${index + 1} ${type}</p>
        <p class="${type}-Value">${mov} €</p>
      </div>
  `
    containerInformation.insertAdjacentHTML('afterbegin', html)
  })
}
displayMovements(account1.movements)

const calculateAmount = function (moviments) {
  const valueAmount = moviments.reduce((acc, mov) => acc + mov, 0)

  const incomesAmount = moviments
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
  const outcomesAmount = moviments
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
  const interestsAmount = moviments
    .filter(mov => mov > 0)
    .map(mov => (mov * 1.2) / 100)
    .reduce((acc, mov) => acc + mov, 0)

  incomes.textContent = `${incomesAmount} € `
  outcomes.textContent = `${Math.abs(outcomesAmount)} € `
  interests.textContent = `${interestsAmount} € `
  amountMoney.textContent = `${valueAmount} € `
}
calculateAmount(account1.movements)
