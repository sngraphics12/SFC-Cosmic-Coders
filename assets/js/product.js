let html = "";

fetch("./assets/js/products.json")
    .then(response => {

        if (!response.ok) {
            throw new Error("JSON file not found");
        }

        return response.json();

    })

    .then(json => {

        for (let data of json) {

            html += `

                <div class="card">

                    <div class="productimage">

                        <img src="${data.image}" alt="${data.name}" >

                    </div>


                    <div class="productinfo">

                        <p class="category">
                            ${data.category}
                        </p>


                        <h3>
                            ${data.name}
                        </h3>


                        <div class="price">
                            Rs ${data.price}
                        </div>


                      <a href="findproduct.html?id=${data.id}" class="btn"> View Product</a>

                    </div>

                </div>

            `;
        }


        document.getElementById("p-list").innerHTML = html;

    })

    .catch(error => {

        console.log(error);

        document.getElementById("p-list").innerHTML = `
        
            <p style="color:red; text-align:center;width:100%;">Products could not be loaded.
            </p>`;

    });



function viewProduct(name) {

    alert("You selected: " + name);

}

function goCart() {

    window.location.href = "cart.html";

}