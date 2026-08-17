let html = "";

let jsonFile = document.body.getAttribute("data-json");

fetch("./assets/js/" + jsonFile)
    .then(response => response.json())
    .then(json => {

        for (let data of json) {

            html += `

                <div class="card">

                    <div class="productimage">

                        <img src="${data.image}" alt="${data.name}">

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

                        <a href="#" class="btn"  onclick="viewProduct('${data.name}')" >
                            View Product
                        </a>

                    </div>

                </div>

            `;
        }

        document.getElementById("p-list").innerHTML = html;

    })
    .catch(error => {

        console.log(error);

        document.getElementById("p-list").innerHTML =
            "<p>Products could not be loaded.</p>";

    });


function viewProduct(name) {

    alert("You selected: " + name);

}