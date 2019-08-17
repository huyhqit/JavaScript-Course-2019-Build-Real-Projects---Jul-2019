function calculatorTip(money) {
  if(money < 50) {
    return money * 0.2;
  }

  if(money >= 50 && money <= 200) {
    return money * 0.15;
  }

  if(money > 200) {
    return money * 0.10
  }
}

var listTips = [];
listTips.push(calculatorTip(124));
listTips.push(calculatorTip(48));
listTips.push(calculatorTip(268));
console.log(listTips);

function paidAmount(money) {
  return money + calculatorTip(money);
}

var listPaidAmount = [];
listPaidAmount.push(paidAmount(124));
listPaidAmount.push(paidAmount(48));
listPaidAmount.push(paidAmount(168));

console.log(listPaidAmount);