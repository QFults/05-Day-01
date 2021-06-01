const fs = require('fs')
const action = process.argv[2]
const amount = process.argv[3]

const transaction = value => {
  fs.appendFile('bank.txt', `${value}, `, err => {
    if (err) { console.log(err) }
  })
}

const lotto = () => {
  const result = Math.random() > 0.5
  fs.appendFile('bank.txt', `-0.25, ${result ? '5, ' : ''}`, err => {
    if (err) { console.log(err) }
    console.log(result ? 'You won!' : 'You lost!')
  })
}

const balance = () => {
  fs.readFile('bank.txt', 'utf8', (err, data) => {
    if (err) { console.log(err) }
    const transactions = data.split(', ')
    transactions.pop()
    const total = transactions.reduce((total, next) => total + parseFloat(next), 0)
    console.log(`Your Balance: $${total}`)
  })
}

switch (action) {
  case 'deposit':
    transaction(amount)
    console.log(`$${amount} deposited!`)
    break
  case 'withdraw':
    transaction(`-${amount}`)
    console.log(`$${amount} withdrawn!`)
    break
  case 'lotto':
    lotto()
    break
  case 'balance':
    balance()
    break
}
