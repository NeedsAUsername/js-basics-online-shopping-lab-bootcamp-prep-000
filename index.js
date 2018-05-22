var cart = [];

function getCart(name) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newObj = {
   itemName: item,
   itemPrice: (Math.floor(Math.random() * 99)+1)
 };
 cart.push(newObj)
 return `${item} has been added to your cart.`
}


function viewCart() {
  var a = 'In your cart, you have '
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  if (cart.length === 1) {
    return a +=`${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else {
    for (var i = 0; i < cart.length; i+=1) {
      a+= `${cart[i].itemName} at $${cart[i].itemPrice}, and `
    }
  var b = a.slice(0, a.length-1)
  return b + '.'
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

addToCart('Apple')
console.log(viewCart())