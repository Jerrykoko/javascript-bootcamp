let MyAccount = {
    name: 'Gerald Oti',
    Expenses: 0,
    Income: 0
}

let AddExpense = function(account, amount) {
    account.Expenses = account.Expenses + amount 
}

let AddIncome = function (account, Income) {
    account.Income = account.Income + Income
}

let resetaccount = function name(account) {
    account.Expenses = 0
    account.Income = 0
}
let accountsummary = function (account) {
 letBalance = account.Income - account.Expenses 
 return`Account for ${account.name} has ${Balance}. $${account.Income} income. $${account.Expenses} in Expense`  
}
AddIncome(MyAccount, 2000)
AddExpense(MyAccount, 2.25)
AddIncome(MyAccount, 160)
console.log(accountsummary(MyAccount))
resetaccount(MyAccount)
console.log(accountsummary(MyAccount))