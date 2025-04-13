// Initialize empty cart
let cart = [];
let total = 0;

// Function to add an item to the cart
function addToCart(name, price) {
  // Create a new cart item
  const item = { name, price };
  cart.push(item);
  
  // Update the total
  total += price;
  
  // Render the cart
  renderCart();
}

// Function to render the cart in the sidebar
function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  
  // Loop through each item in the cart and display it
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    
    // Optionally add a remove button for each item
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = () => removeFromCart(index);
    li.appendChild(removeBtn);
    
    cartList.appendChild(li);
  });
  
  // Update total display
  document.getElementById("total").textContent = total.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(index) {
  // Update total before removing item
  total -= cart[index].price;
  cart.splice(index, 1);
  renderCart();
}

// Function for checkout (for demonstration)
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert(`Proceeding to checkout. Your total is $${total.toFixed(2)}`);
  // Clear the cart after checkout
  cart = [];
  total = 0;
  renderCart();
}