let url = new URLSearchParams(window.location.search);
let id = url.get("id");

let products = [];
let product;

fetch("./assets/js/products.json")
    .then(response => response.json())
    .then(data => {

        products = data;

        product = products.find(item => item.id == id);

        if (product) {
            showProduct(product);
        }

    });


function showProduct(product) {

    document.getElementById("productImage").src = product.image;

    document.getElementById("productName").innerText = product.name;

    document.getElementById("productCategory").innerText = product.category;

    document.getElementById("productPrice").innerText =
        "Rs " + product.price;

}


document.getElementById("searchInput").addEventListener("input", function () {

    let search = this.value.toLowerCase();

    let result = products.find(item =>
        item.name.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search)
    );

    if (result) {

        showProduct(result);

    }

});


document.querySelectorAll(".tag").forEach(function(tag) {

    tag.addEventListener("click", function(e) {

        e.preventDefault();

        let category = this.dataset.category.toLowerCase();

        let result = products.find(item =>
            item.name.toLowerCase().includes(category) ||
            item.category.toLowerCase().includes(category)
        );

        if (result) {
            showProduct(result);
        }

    });

});


function addToCart() {

    let qty = parseInt(document.getElementById("quantity").value);

    if (qty < 1) {
        alert("Please enter a valid quantity");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let found = cart.find(item => item.id == product.id);

    if (found) {

        found.qty += qty;

    } else {

        product.qty = qty;
        cart.push(product);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");

    window.location.href = "cart.html";
}

function goCart() {

    window.location.href = "cart.html";

}