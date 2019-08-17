var john = {
  bills: [124, 48, 268, 180, 42],
  calcTip: function(money) {
    if(money < 50) {
      this.tip = money * 0.2;
    }
  
    if(money >= 50 && money <= 200) {
      this.tip = money * 0.15;
    }
  
    if(money > 200) {
      this.tip = money * 0.10;
    }
    return this.tip;
  },
  calcAmount: function(money) {
    if(money < 50) {
      this.amount = money * 0.2 + money;
    }
  
    if(money >= 50 && money <= 200) {
      this.amount = money * 0.15 + money;
    }
  
    if(money > 200) {
      this.amount = money * 0.10 + money;
    }
    return this.amount;
  }
}

var tips = [];

for(i=0; i<john.bills.length; i++) {
  tips.push(john.calcTip(john.bills[i]));
}

console.log(tips);

var amounts = [];

for(j=0; j<john.bills.length; j++) {
  amounts.push(john.calcAmount(john.bills[j]));
}

console.log(amounts);

var a = 10;
function b() { 
  console.log(this);
  function a1() {
    // this.a = a;
    console.log(this);

    var staff = {
      fullname: 'john',
      printThis: function() {
        console.log('this into object '+this);
      }
    }

    console.log('this outer object ' + staff.printThis());
  }
  a1();
}

b();