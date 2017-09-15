var bank = {

  account: [
    {name: "John", balance: 100},
    {name: "Paul", balance: 200},
    {name: "Lucy", balance: 500}
  ],

  addAccount: function(clientName,newBalance){
    var newAccount = {name: clientName, balance: newBalance};
    this.account.push(newAccount);
    console.log("You have opened new account under the name of " + clientName + " & your opening balance is $ " + newBalance + ".");
  },

  totalBalanceInBank: function(){
    var totalBalance = 0;
    for (var i = 0; i < bank.account.length; i++) {
      var account = bank.account[i];
      totalBalance += account.balance;
    }
    console.log(totalBalance);
  },

  depositMoney: function(clientName, depositAmount) {
    for (var i = 0; i < bank.account.length; i++) {
      var account = bank.account[i];
      if (account.name == clientName) {
        account.balance += depositAmount;
        console.log("Dear " + clientName + ", you have deposited $ " + depositAmount + " to your account.");
        console.log("Your new balance is $ " + account.balance);
        return account.balance;
      }
    }
  },

  withdrawMoney: function(clientName, withdrawAmount) {
    for (var i = 0; i < bank.account.length; i++) {
      var account = bank.account[i];
      if (account.name == clientName) {
        if (withdrawAmount > account.balance) {
          console.log("Sorry you don't have enough money in your account!");
        } else {
          account.balance -= withdrawAmount;
          console.log("Dear " + clientName + ", you have withdrawn $ " + withdrawAmount + " from your account.");
          console.log("The remaining funds are $ " + account.balance);
        }
      }
    }
  },

  transferMoney: function(client1, client2, transferAmount) {
    this.withdrawMoney(client1,transferAmount);
    this.depositMoney(client2, transferAmount);
        console.log("The amount of $ " + transferAmount + " has been transfered from " + client1 + "'s account to " + client2 + "'s account.");
  },
};
