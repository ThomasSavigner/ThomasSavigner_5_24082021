
getAPIproduct();

function getAPIproduct() {
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
}

function displayCard(product) {
    let imageElement = document.getElementById("image");
    let nameElement = document.getElementById("name");
    let productPriceElement = document.getElementById("product-price");
    let descriptionElement = document.getElementById("description");
    
    imageElement.src = `${product.imageUrl}`;
    imageElement.alt += `${product.name}`;
    nameElement.innerHTML += `${product.name}`;
    productPriceElement.innerHTML += `${adaptPrice(product.price)}`;
    descriptionElement.innerHTML += `${product.description}`;
}

function displayOptions(product) {
    for (lense of product.lenses) {
        document.getElementById("options").innerHTML += 
            `<option class="" value="${lense}" name="lense">${lense}</option>`;
    }
}

iconCart()

/* Bouton ajouter au panier        */
const addCartElement = document.getElementById("addtocart-button");

addCartElement.addEventListener("click", function() {
    
    let itemCart = {
        nameProduct : document.getElementById("name").textContent,
        quantityProduct : quantityNumber,
        priceProduct : document.getElementById("product-price").textContent,
        imageProduct : document.getElementById("image").src
    };

    let cartContentEmpty = [];
    
    let cartContentFull = JSON.parse(localStorage.getItem("cart"));
    
    if (localStorage.getItem("cart") !== null 
        && 
        cartContentFull.find(cart => cart.nameProduct === itemCart.nameProduct) !== undefined) {
            let indexItem = cartContentFull.indexOf(cartContentFull.find( cart => cart.nameProduct === itemCart.nameProduct));
            let quantityContent = cartContentFull[indexItem].quantityProduct;
            let quantityAdjusted = quantityContent + itemCart.quantityProduct;
            
            cartContentFull[indexItem].quantityProduct = quantityAdjusted;

            let objLinea = JSON.stringify(cartContentFull);
            localStorage.setItem("cart", objLinea);
            
        } else if (localStorage.getItem("cart") !== null 
                    && 
                    cartContentFull.find(cart => cart.nameProduct === itemCart.nameProduct) == undefined) {
            cartContentFull.push(itemCart);
            let objLinea = JSON.stringify(cartContentFull);
            localStorage.setItem("cart", objLinea);

        } else {
            cartContentEmpty.push(itemCart);
            let objLinea = JSON.stringify(cartContentEmpty);
            localStorage.setItem("cart", objLinea);
            iconCart();
        }
    })   
;

/*Module Quantité*/

let quantityNumber = 1;

setQuantity();

