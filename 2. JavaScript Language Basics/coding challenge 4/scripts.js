var mark = {
  fullname: 'mark',
  heigh: 1.60,
  mass: 80,
  calcBMIs: function() {
    this.bmi = this.mass/(this.heigh * this.heigh);
    return this.bmi;
  }
}

var john = {
  fullname: 'john',
  heigh: 1.80,
  mass: 95,
  calcBMIs: function() {
    this.bmi = this.mass/(this.heigh * this.heigh);
    return this.bmi;
  }
}

mark.calcBMIs();
john.calcBMIs();

if (mark.bmi > john.bmi) {
  console.log(mark.fullname + ' have highest BMI with ' + mark.bmi);
}
if (mark.bmi < john.bmi) {
  console.log(john.fullname + ' have highest BMI with ' + john.bmi);
}

if (mark.bmi === john.bmi) {
  console.log(mark.fullname + ' and ' + john.fullname + ' have draw BMIs ');
}
