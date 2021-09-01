const param = new URLSearchParams(document.location.search.substring(1));
const id = param.get("_id");

const urlProduct = url+id;

fetch(urlProduct)
    .then(response => response.json())
    .then(data => {
        const product = data;
        displayCard(data);
        displayOptions(data);
        
        })
    .catch(error => alert("Erreur : " + error));



function displayCard(product) {
    document.getElementById("image").innerHTML += `<img src="${product.imageUrl}" class=" img-fluid img-thumbnail image-properties" alt="${product.name}">`;
    document.getElementById("name").innerHTML += `${product.name}`;
    document.getElementById("product-price").innerHTML += `${adaptPrice(product.price)}`;
    document.getElementById("description").innerHTML += `${product.description}`;
}

function displayOptions(product) {
    for (lense of product.lenses) {
        document.getElementById("options").innerHTML += 
            `<option class="" value="${lense}" name="lense">${lense}</option>`;
    }
}
