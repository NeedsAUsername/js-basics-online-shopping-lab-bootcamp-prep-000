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
      if (cart.length === 1) {
        a+= `${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else if (i+1 === cart.length) {
        a+= `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else {
      a+= `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    }
  return a
  }
}

function total() {
 var value = 0
  for (var i = 0; i<cart.length; i+=1) {
    value += cart[i].itemPrice
  }
  return value
}

function removeFromCart(item) {
  var counter = 0
  for (var i = 0; i<cart.length; i+=1) {
    if (cart[i].itemName === item) {
      cart.splice([i],1)
      counter += 1
    }
  if (counter === 0) {
    return 'That item is not in your cart.'
  }   
  return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
}

addToCart('Apple', 'Orange')
console.log(removeFromCart('Apple'))
console.log(cart)