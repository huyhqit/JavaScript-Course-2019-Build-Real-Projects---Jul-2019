#7. Next Generation JavaScript Intro to ES6  ES2015

##1. variable let and const

- ES5 trở về trước scope sẽ được chia thành *Global scope* và *Local scope* đồng nghĩa với *Function scope*.
- Kể từ ES6 trở đi JavaScript đã thêm khái niệm *block scope* bao gồm các câu lệnh *if else*, *while*, *for* áp dụng cho *let* và *const* mà không thay đổi hành vi của *var*.
-> Vì vậy *let* và *const* không thể hoisted.

- String ES6
- Example: `This is ${firstName} + ${lastName}`

- Arrow function
	- keywork `new`
	- In methods - `this` is `window Object`
	- Create contructor
	- If you need your context to be dynamic
	-> Arrow functions are not the right choice
	
- Destructuring
- Arrays in ES6  ES2015
- The Spread Operator
- Rest Parameters
- Default Parameters
- Maps
- Class in ES6
	- Function `contructor` we need to first implement a class
	- We can only add methods to classes, no properties
	- Example ```
			class Person6 {
			  constructor (name, yearOfBirth, job) {
				this.name = name;
				this.yearOfBirth = yearOfBirth;
				this.job = job;
			  }

			  calculateAge() {
				var age = new Date().getFullYear - this.yearOfBirth;
				console.log(age);
			  }
			}

			const john6 = new Person6('John', 1990, 'teacher');
			console.log(john6);
			```
	- Use `static` before anyone method if don't want inherit

- Subclasses
	- Use `extends`