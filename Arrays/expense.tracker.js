const account = {
    name: 'Grald Oti',
    expenses: [],
    income : [],
    AddExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },


    AddIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },

    getAccountSummary: function(){
        let totalExpense = 0
        let totalIncome = 0
        let accountBalance = 0
        
        
        this.expenses.forEach(function(expense){
            totalExpense = totalExpense + expense.amount
        })
        
        this.Income.forEach(function(income){
            totalIncome = totalIncome + income.amount
        })

        accountBalance = totalIncome - totalExpense
        return `${this.name} has a total income of$${totalIncome} and a balance of $${accountBalance}`
    }
      
}
    

    account.AddIncome('contract1', 1000)    
    account.AddIncome('contract2', 500)
    account.AddIncome('contract3', 1000)
    account.AddExpense('Rent' , 950)
    account.AddExpense('coffee' , 5)
    console.log(account.getAccountSummary())



    
    