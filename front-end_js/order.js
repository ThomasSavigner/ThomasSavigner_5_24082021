//  contenu Panier sur localStorage
let cartContent = JSON.parse(localStorage.getItem("cart"));localStorage.getItem("cart");
//  Prix du panier
const sumProductLine = [];
let cartTotal;



// Chargement du panier
loadCartContent();

function loadCartContent() {
    // Calcul total panier
    arithmetic();
    
    // Création du contenu HTML avec les données de chaque produit du panier
    const itemsCart = [];
    
    for (let i=0; i < cartContent.length; i++) {
        itemsCart[i] =   `
                        <div class="col-12 d-flex justify-content-between mt-3">
                            <div class="w-25"><img src="${cartContent[i].imageProduct}" alt="Appareil photo vintage ${cartContent[i].nameProduct}" class="cart-order-img"/></div>
                            <div class="w-25">${cartContent[i].nameProduct}</div>
                            <div id="priceitem" class="w-25">${loadPrice(cartContent[i].priceProduct)}</div>
                            <div class="d-flex">
                                <button id="decrement-button${i}" type="button" class="btn btn-success btn-sm border border-muted border-3 hover-shadow shadow" title="diminuer la quantité">-</button>
                                <span id="quantity-product${i}" class="align-middle m-1 p-1 border border-2">${cartContent[i].quantityProduct}</span>
                                <button id="increment-button{i}" type="button" class="btn btn-success btn-sm border border-muted border-3 hover-shadow shadow" title="augmenter la quantité">+</button>
                            </div>
                            <div class="">${loadPrice(sumProductLine[i])}</div>
                        </div>
                        ` 
    }

    // Injection du contenu dans le DOM
    let concatItemsCart = itemsCart.join("");

    const cartContentElement = document.getElementById("cartlistproducts");
    cartContentElement.innerHTML = concatItemsCart;

    document.getElementById("sumcolumn").innerHTML = loadPrice(cartTotal);
}

//Pose des écouteurs click-button modif quantitéProduct stockée
for (i=0; i < cartContent.length; i++) {
    //Paramétrage bouton "-"
        const lessQuantityBtn = document.getElementById("decrement-button"+ i);
    
        lessQuantityBtn.addEventListener('click', function() {
            cartContent[i].quantityProduct = (cartContent[i].quantityProduct)-1;
            
        if (quantityNumberArray[i] < 1) {
            quantityNumberArray[i]= 1 }
        
            displayAllQuantity()
        
    });
    }

    for (i=0; i < cartContent.length; i++) {
        //Paramétrage bouton "+"
        const addQuantityBtn = document.getElementById("increment-button{i}");

        addQuantityBtn.addEventListener('click', event => {
        let add = quantityNumberArray[i]++;
        displayAllQuantity();
        })
    };


displayAllQuantity();
console.log(document.getElementById("quantity-product2").innerHTML)
console.log((cartContent[2].quantityProduct));
adjustQuantity222();
console.log((cartContent[2].quantityProduct)--)



