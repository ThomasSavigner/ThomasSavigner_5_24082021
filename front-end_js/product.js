displayPreviewCart();

getAPIproduct();

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
    let imageElement = document.getElementById("img-product");
    let nameElement = document.getElementById("name");
    let productPriceElement = document.getElementById("product-price");
    let descriptionElement = document.getElementById("description");
    
    imageElement.innerHTML = `<img id="image" src="${product.imageUrl}" class="img-fluid img-thumbnail image-properties"
                                alt="Appareil photo vintage ${product.name}">`;
    nameElement.innerHTML += `<h5 class="card-title">${product.name}</h5>`;
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
    
    // on récupère le prix affiché comme valeur de variable string au format monétaire
    // on change du type de string à number
    let priceElement = document.getElementById("product-price").textContent;
    let priceStore = parseFloat(priceElement.replace('€', '').replace(/\s/g,''));

    let itemCart = {
        nameProduct : document.getElementById("name").textContent,
        quantityProduct : quantityNumber,
        priceProduct : priceStore,
        imageProduct : document.getElementById("image").src,
        urlProduct : idUrl,
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
            displayPreviewCart();
        } else if (localStorage.getItem("cart") !== null 
                    && 
                    cartContentFull.find(cart => cart.nameProduct === itemCart.nameProduct) == undefined) {
            cartContentFull.push(itemCart);
            let objLinea = JSON.stringify(cartContentFull);
            localStorage.setItem("cart", objLinea);
            displayPreviewCart();
        } else {
            cartContentEmpty.push(itemCart);
            let objLinea = JSON.stringify(cartContentEmpty);
            localStorage.setItem("cart", objLinea);
            iconCart();
            displayPreviewCart();
            ColorOrderButton()
        }
    quantityNumber = 1;
    displayQuantity();
    });

    
/*Module Quantité*/

let quantityNumber = 1;

displayQuantity();
adjustQuantity();

/* Bouton "Commander": Accéder à la page order */
ColorOrderButton();

let orderButtonElement = document.getElementById("access-order-page");

orderButtonElement.addEventListener('click', function(event) {
    if (localStorage.getItem("cart") == null) {
        event.preventDefault()
    }
})

function ColorOrderButton() {
    if (localStorage.getItem("cart") !== null) {
        document.getElementById("access-order-page").classList.remove("btn-light", "text-secondary");
        document.getElementById("access-order-page").classList.add("btn-success", "text-light");
    }
}

function defaultColorOrderButton() {
    document.getElementById("access-order-page").classList.remove("btn-success", "text-light");
    document.getElementById("access-order-page").classList.add("btn-light", "text-secondary");
    
}
