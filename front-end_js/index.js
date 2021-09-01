fetch(url)
    .then(response => response.json())
    .then(data => displayProducts(data))
    .catch(error => alert("Erreur : " + error))

function displayProducts(data) {
    for (product of data) {
        let price = adaptPrice(product.price);
        let cardsList = document.getElementById("products-list");
        cardsList.innerHTML +=      `<div class="card col-12 col-md-6 col-lg-4">
                                        <div class="">
                                            <a href="views/product.html?_id=${product._id}" class="stretched-link" title="Voir ce produit">
                                                <img src="${product.imageUrl}" class="card-img-top img-fluid img-thumbnail" alt="${product.name}">
                                            </a>
                                        </div>
                                        <div class="card-body d-flex justify-content-between">
                                            <h5 class="card-title">${product.name}</h5>
                                            <h6 class="card-title">${price}</h6>
                                        </div>
                                    </div>`
    }
}

