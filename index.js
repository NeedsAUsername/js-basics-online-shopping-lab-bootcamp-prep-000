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
  else {
    for (var i = 0; i < cart.length; i+=1) {
      if (i+1 === cart.length) {
        a+= `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else {
      a+= `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    }
  var c = b.slice(0, b.length-2)
  return c + '.'
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