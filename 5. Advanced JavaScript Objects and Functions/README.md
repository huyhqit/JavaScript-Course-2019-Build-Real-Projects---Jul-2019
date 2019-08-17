#5. Advanced JavaScript Objects and Functions

##3. Everything Is an Object Inheritance and the Prototype Chain

- JavaScript *Everything is an Object*
- JavaScript have 2 data types:
	- Primitives:
		- Strings
		- Numbers
		- Booleans
		- Null
		- Undefined
		- when a = b; value b copy to a (b change a not change)
	- Object
		- Arrays
		- Functions
		- Objects
		- Dates
		- Wrappers for Numbers, Strings, Booleans
		- when obj1.age = obj2.age; reference obj2.age copy to obj1.age (obj2.age change => obj1.age change)
- Object include:
	- Contructor have property and instance inherit's object
	- Prototype khi thêm thuộc tính vào Object cha thì các object con đều được thừa hưởng
		- Cú pháp: Object.prototype.age = 15;
- Closures:
	*Closures summary*: An inner function has always access to the variables and prarameters of its outer function, even after the outer function has returned.
- Bind, Call, Apply
	- They provide execution context for function
	- Call(context, parameter)
	- Apply(context, array)
	- Bind(context, parameter) but return a new function
- Context vs Scope
	- *Scope* defines the access to variables of a function when the function is invoked.
	- *Context* is always the value of the reserved word `this`, which is a reference to the object that owns the execution of the code.
	- *Context* is always the value of the reserved word `this`, which is a reference to the object that owns the execution of the code.
	