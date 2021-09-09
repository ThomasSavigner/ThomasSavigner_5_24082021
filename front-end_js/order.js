//  contenu Panier sur localStorage
let cartContent = JSON.parse(localStorage.getItem("cart"));
//  Total du panier
const sumProductLine = [];
let cartTotal;



// Chargement du panier

arithmetic();
    
    // Création du contenu HTML avec les données de chaque produit du panier
    const itemsCart = [];
    
    for (let i=0; i < cartContent.length; i++) {
        itemsCart[i] =   `
                        <div class="col-12 d-flex justify-content-between mt-3">
                            <div id="imageitem${i}" class="w-25"><img src="${cartContent[i].imageProduct}" alt="Appareil photo vintage ${cartContent[i].nameProduct}" class="cart-order-img"/></div>
                            <div id="nameitem${i}" class="w-25">${cartContent[i].nameProduct}</div>
                            <div id="priceitem${i}" class="w-25">${loadPrice(cartContent[i].priceProduct)}</div>
                            <div class="d-flex">
                                <button id="decrement-button${i}" type="button" class="btn btn-success btn-sm border border-muted border-3 hover-shadow shadow" title="diminuer la quantité">-</button>
                                <span id="quantity-product${i}" class="align-middle m-1 p-1 border border-2">${cartContent[i].quantityProduct}</span>
                                <button id="increment-button${i}" type="button" class="btn btn-success btn-sm border border-muted border-3 hover-shadow shadow" title="augmenter la quantité">+</button>
                            </div>
                            <div id="totalproduct${i}" class="">${loadPrice(sumProductLine[i])}</div>
                        </div>
                        ` 
    }

    // Injection du contenu dans le DOM
    let concatItemsCart = itemsCart.join("");

    const cartContentElement = document.getElementById("cartlistproducts");
    cartContentElement.innerHTML = concatItemsCart;

    document.getElementById("sumcolumn").innerHTML = loadPrice(cartTotal);
//}


//Modification Panier
//Pose des écouteurs click-button modif quantitéProduct stockée
for (i=0; i < cartContent.length; i++) {
    // On reprend la structure d'un élément du panier stocké en localStorage et dont on va modifier la quantité
    
    //Modélisation
    let itemCart = {
        nameProduct : document.getElementById("nameitem"+i).textContent,
        quantityProduct : document.getElementById("quantity-product"+i),
        priceProduct : cartContent[i].priceProduct,
        imageProduct : document.getElementById("imageitem"+i).src,
        urlProduct : cartContent[i].urlProduct,
    };

    //Paramétrage bouton "-"
    const lessQuantityBtn = document.getElementById("decrement-button"+ i);
    let less = cartContent[i].quantityProduct;
    

    lessQuantityBtn.addEventListener('click', function() {
        less = less - 1;
        if (less < 1) { less = 1 }
        // On met le panier à jour en cherchant d'abord l'index de la ligne du produit dans le panier
        let indexItem = cartContent.indexOf(cartContent.find( cart => cart.nameProduct === itemCart.nameProduct));
        // On affecte à la ligne correspondante la quantité modifiée
        cartContent[indexItem].quantityProduct = less;
        // On renvoit le panier mis à jour
        let objLinea = JSON.stringify(cartContent);
        localStorage.setItem("cart", objLinea);            
        // On ventile les données modifiées dans le DOM
        document.getElementById("quantity-product"+indexItem).innerHTML = cartContent[indexItem].quantityProduct;

        arithmetic();

        document.getElementById("totalproduct"+indexItem).innerHTML = loadPrice(sumProductLine[indexItem]);
        document.getElementById("sumcolumn").innerHTML = loadPrice(cartTotal);
    });

    //Paramétrage bouton "+"
    const addQuantityBtn = document.getElementById("increment-button"+ i);
    let add = cartContent[i].quantityProduct;

    addQuantityBtn.addEventListener('click', function() {
        add = add + 1;
        let indexItem = cartContent.indexOf(cartContent.find( cart => cart.nameProduct === itemCart.nameProduct));
        cartContent[indexItem].quantityProduct = add;
        let objLinea = JSON.stringify(cartContent);
        localStorage.setItem("cart", objLinea);
        document.getElementById("quantity-product"+indexItem).innerHTML = cartContent[indexItem].quantityProduct;

        arithmetic();

        document.getElementById("totalproduct"+indexItem).innerHTML = loadPrice(sumProductLine[indexItem]);
        document.getElementById("sumcolumn").innerHTML = loadPrice(cartTotal);
    
    });
}




