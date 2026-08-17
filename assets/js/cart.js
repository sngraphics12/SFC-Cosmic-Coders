let cart = JSON.parse(localStorage.getItem("cart")) || [];

let html = "";
let subtotal = 0;
let items = 0;

for (let i = 0; i < cart.length; i++) {

    let data = cart[i];

    let total = data.price * data.qty;

    subtotal += total;
    items += data.qty;

    html += `
        <div class="cart-item">

            <div class="product-image">
                <img src="${data.image}" alt="${data.name}">
            </div>

            <div class="product-info">

                <span>${data.category}</span>

                <h2>${data.name}</h2>

                <p>Price: Rs. ${data.price}</p>

                <p>Quantity: ${data.qty}</p>

                <button onclick="removeItem(${i})">
                    Remove
                </button>

            </div>

            <strong class="price">
                Rs. ${total}
            </strong>

        </div>
    `;
}

if (cart.length == 0) {
    html = "<h2>Your cart is empty</h2>";
}

document.getElementById("cart-products").innerHTML = html;

document.getElementById("cart-items").innerText = items;

document.getElementById("subtotal").innerText =
    "Rs. " + subtotal;

document.getElementById("grand-total").innerText =
    "Rs. " + (subtotal + 250);


function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();

}


function checkout() {

    if (cart.length == 0) {

        alert("Your cart is empty");

    } else {

        alert("Your order has been placed successfully!");

        localStorage.removeItem("cart");

        location.reload();
    }

}