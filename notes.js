/* 
math.floor returns closest lower integer
math.random() returns random number between 0-1
*/



a = [{itemName: 'apple', itemPrice: 10}, {itemName: 'orange', itemPrice:5}]

console.log(a)
a.splice(0, 1)
console.log(a)


f = 98
x = f.toString().length
console.log(x)

var cardNumber =  Math.floor(Math.random() * 100000000)

function ok(cardNumber) {
  if (Number.isInteger(cardNumber) === true) {
    console.log('true')
  }
}

ok(867)