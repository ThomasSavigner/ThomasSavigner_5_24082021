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
                            <div id="priceitem" class="w-25">${cartContent[i].priceProduct}</div>
                            <div class="d-flex">
                                <button type="button" id="decrement-button" class="btn btn-success btn-sm border border-muted border-3 hover-shadow shadow" title="diminuer la quantité">-</button>
                                <span class="align-middle m-1 p-1 border border-2">${cartContent[i].quantityProduct}</span>
                                <button type="button" id="increment-button" class="btn btn-success btn-sm border border-muted border-3 hover-shadow shadow" title="augmenter la quantité">+</button>
                            </div>
                            <div class="">${sumProductLine[i]}</div>
                        </div>
                        ` 
    }

    // Injection du contenu dans le DOM
    let concatItemsCart = itemsCart.join("");

    const cartContentElement = document.getElementById("cartlistproducts");
    cartContentElement.innerHTML = concatItemsCart;

    document.getElementById("sumcolumn").innerHTML = cartTotal;

}



