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
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else {
    var default = 'In your cart, you have '
    for (var i = 0, i < cart.length, i+=1) {
      default+= `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  return default
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

viewcart()