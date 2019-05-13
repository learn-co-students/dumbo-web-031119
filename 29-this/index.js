// console.log('im loaded')

// the keyword "this"
console.log(this)

// - explain "execution context"


// - 4 Scenarios of `this`
//  * Scenario 1: `this` gets AUTOMATICALLY bound to the class/instance

// ruby
// class Dog
//   def initialize
//     self == ????
//     // self == instance
//   end
//
//   def self.what_is_a_dog
//     self == ????
//     // self == Class
//   end
// end

class Dog {
  constructor(name) {
    this.name = name
    console.log("What `this` is in the dog object instance: ", this)
  }

  static whatIsADog() {
    console.log("What `this` is in a Dog class method: ", this)
  }
}




//  * Scenario 2: Functions

// function saySup() {
//   console.log("What `this` is inside the `saySup` function: ", this)
// }
//
// // function makeCookie() {
// //   console.log('making batter')
// //   console.log('putting cookie in the oven')
// //   console.log('baking a cookie....')
// //   return '🍪'
// // }
//
// saySup() ===> window
//
// let cat = {
//   name: 'Cuddles',
//   speak: saySup,
//   // makeACookie: makeCookie
// }
//
// cat.speak() ==> cat
















//  * Scenario 3: Arrow Functions

// class Donkey {
//   hello = () => {
//     console.log('this')
//     return '🐴 says hi!'
//   }
// }
//
//
// function saySup() {
//   console.log("What `this` is inside the `saySup` function: ", this)
// }
//
// const arrowSaySup = () => {
//   console.log("What `this` is inside the `saySup` function: ", this)
// }
//
// // saySup() ===> ???? window?
//
// let cat = {
//   name: 'Cuddles',
//   speak: saySup,
// }

// // cat.speak() ==> ???? cat? window? function!



























//  * Scenario 4: bind/call/apply


function saySup() {
  console.log("What `this` is inside the `saySup` function: ", this)
}


// saySup() ===> ???? window?

let cat = {
  name: 'Cuddles',
  speak: saySup
}
const myBoundSaySupFunction = saySup.bind(cat)

// cat.speak() ==> ???? cat? window? function!


function sayHi(greeting) {
  return `${this.name} says: ${greeting}`
}


let eric = {
  name: 'Proud Eric'
}

let kevin = {
  name: 'KevyWevy'
}

sayHi.call(eric, 'Im proud of you')
// => "Proud Eric says: Im proud of you"
sayHi.apply(kevin, 'Thats great')
// => "KevyWevy says: Thats great"
