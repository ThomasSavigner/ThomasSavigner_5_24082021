const param = new URLSearchParams(document.location.search.substring(1));
const id = param.get("_id");

const urlProduct = url+id;

let imageElement = document.getElementById("image");
let nameElement = document.getElementById("name");
let productPriceElement = document.getElementById("product-price");
let descriptionElement = document.getElementById("description");


let typeOfRowCart = class {
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
};


root();

function root() {
    getAPIproduct();
    iconCart();
    setQuantity();
    addToCart();
}

function getAPIproduct() {
    fetch(urlProduct)
        .then(response => response.json())
        .then(data => {
            const product = data;
            displayCard(data);
            displayOptions(data);
            })
        .catch(error => alert("Erreur : " + error));
}

function displayCard(product) {
    imageElement.innerHTML += `<img src="${product.imageUrl}" class="img-fluid img-thumbnail image-properties" alt="${product.name}">`;
    nameElement.innerHTML += `${product.name}`;
    productPriceElement.innerHTML += `${adaptPrice(product.price)}`;
    descriptionElement.innerHTML += `${product.description}`;
    nameContent = nameElement.innerHTML;
    console.log(nameContent)
    ;
}

function displayOptions(product) {
    for (lense of product.lenses) {
        document.getElementById("options").innerHTML += 
            `<option class="" value="${lense}" name="lense">${lense}</option>`;
    }
}
