//  Array "contenu Panier" sur localStorage
let cartContent = JSON.parse(localStorage.getItem("cart"));


// Calcul du montant du panier
    arithmetic();

// Chargement du panier
    // Création du contenu HTML avec les données de chaque produit du panier
    const itemsCart = [];

    for (let i=0; i < cartContent.length; i++) {
        itemsCart[i] =   `
                        <div id="lineproduct${i}"class="col-12 d-flex justify-content-between align-items-center mt-3">
                            <a href="product.html?_id=${cartContent[i].urlProduct}" title="Retourner sur la fiche du ${cartContent[i].nameProduct}" class="d-flex justify-content-between align-items-center w-50 text-decoration-none text-dark">
                                <div id="imageitem${i}" class="w-50"><img id="img${i}"" src="${cartContent[i].imageProduct}" alt="Appareil photo vintage ${cartContent[i].nameProduct}" class="cart-order-img"/></div>
                                <div id="nameitem${i}" class="w-50 mx-3">${cartContent[i].nameProduct}</div>
                            </a>
                            <div id="priceitem${i}" class="w-25 text-center">${loadPrice(cartContent[i].priceProduct)}</div>
                            <div class="d-flex w-25 justify-content-center">
                                <button id="decrement-button${i}" type="button" class="btn btn-success btn-sm border border-muted border-3 hover-shadow shadow" title="diminuer la quantité">-</button>
                                <span id="quantity-product${i}" class="align-middle m-1 p-1 border border-2 w-25 text-center">${cartContent[i].quantityProduct}</span>
                                <button id="increment-button${i}" type="button" class="btn btn-success btn-sm border border-muted border-3 hover-shadow shadow" title="augmenter la quantité">+</button>
                            </div>
                            <div id="totalproduct${i}" class="w-25 text-end mx-3">${loadPrice(sumProductLine[i])}</div>
                            <button id="deleteitem${i}" type="button" class="btn btn-warning btn-sm border border-dark border-3 hover-shadow shadow"><span class="material-icons">delete_forever</span></button>
                        </div>
                        ` 
    }

    // Injection du contenu dans le DOM
    let concatItemsCart = itemsCart.join("");

    const cartContentElement = document.getElementById("cartlistproducts");
    cartContentElement.innerHTML = concatItemsCart;

    document.getElementById("sumcolumn").innerHTML = loadPrice(cartTotal);



// Modification Panier
    /* On créé un tableau de référence du panier sur laquelle on se base pour 
       les liaisons élément / eventListener après suppression d'une ligne du panier */
    let tempCart =[];

    //Pose des écouteurs click-button modif quantitéProduct stockée
    for (i=0; i < cartContent.length; i++) {

        // On reprend la structure d'un élément du panier stocké en localStorage et dont on va modifier la quantité
        // Modélisation
        let itemCart = {
            nameProduct : document.getElementById("nameitem"+i).innerHTML,
            quantityProduct : Number(document.getElementById("quantity-product"+i).innerHTML),
            priceProduct : cartContent[i].priceProduct,
            imageProduct : document.getElementById("img"+i).src,
            urlProduct : cartContent[i].urlProduct,
        };

        
        tempCart[i] = itemCart;
        
        //Paramétrage bouton "-"
        const lessQuantityBtn = document.getElementById("decrement-button"+ i);
        
        let quantityStored = itemCart.quantityProduct;

        lessQuantityBtn.addEventListener('click', function() {
            
            quantityStored--;
                
            if (quantityStored < 1) { quantityStored = 1 }

            // On met le panier à jour en cherchant d'abord l'index de la ligne du produit dans le panier
            let indexItem = cartContent.indexOf(cartContent.find( cart => cart.nameProduct === itemCart.nameProduct));
            
            // On affecte à la ligne correspondante la quantité modifiée
            cartContent[indexItem].quantityProduct = quantityStored;

            // On renvoit le panier mis à jour
            let objLinea = JSON.stringify(cartContent);
            localStorage.setItem("cart", objLinea);            
            
            // On ventile les données modifiées dans le DOM
            
                arithmetic();

                // On cherche la ligne correspondante dans le tableau de référence pour modifier le bon élément du DOM
                let tempIndex = tempCart.indexOf(tempCart.find( cart => cart.nameProduct === itemCart.nameProduct));

                document.getElementById("quantity-product"+tempIndex).innerHTML = quantityStored;
                document.getElementById("totalproduct"+tempIndex).innerHTML = loadPrice(sumProductLine[indexItem]);
                document.getElementById("sumcolumn").innerHTML = loadPrice(cartTotal);
        });


        //Paramétrage bouton "+"
        const addQuantityBtn = document.getElementById("increment-button"+ i);

        addQuantityBtn.addEventListener('click', function() {
        
            quantityStored++;
            
            let indexItem = cartContent.indexOf(cartContent.find( cart => cart.nameProduct === itemCart.nameProduct));
            cartContent[indexItem].quantityProduct = quantityStored;
            
            let objLinea = JSON.stringify(cartContent);
            localStorage.setItem("cart", objLinea);

            arithmetic();
            let tempIndex = tempCart.indexOf(tempCart.find( cart => cart.nameProduct === itemCart.nameProduct));
            document.getElementById("quantity-product"+tempIndex).innerHTML = quantityStored;
            document.getElementById("totalproduct"+tempIndex).innerHTML = loadPrice(sumProductLine[indexItem]);
            document.getElementById("sumcolumn").innerHTML = loadPrice(cartTotal);
        
        });

        //Paramétrage bouton "effacer ligne produit"
        const deleteItemEl = document.getElementById("deleteitem"+i);

        deleteItemEl.addEventListener('click', function() {
            
            let tempIndex = tempCart.indexOf(tempCart.find( cart => cart.nameProduct === itemCart.nameProduct));

            document.getElementById("cartlistproducts").removeChild(document.getElementById("lineproduct"+tempIndex));
            
            let indexItem = cartContent.indexOf(cartContent.find( cart => cart.nameProduct === itemCart.nameProduct));
            
            cartContent.splice(indexItem, 1);
            
            let objLinea = JSON.stringify(cartContent);
            localStorage.setItem("cart", objLinea);
            
            if (cartContent.length !== 0) {
                arithmetic();
                document.getElementById("sumcolumn").innerHTML = loadPrice(cartTotal);
            } else {
               document.getElementById("statut-cart").innerHTML = `Votre panier est vide, consulter notre catalogue...`;
               document.getElementById("sumcolumn").innerHTML = ``;
               localStorage.removeItem("cart"); 
            }

        });

    }


// Validation formulaire client

for (let i=1; i < 6; i++) {
    
    const inputElement = document.getElementById("input"+i);

    inputElement.addEventListener('input', function() {
        
        if (inputElement.checkValidity() == false) {
            inputElement.classList.remove("is-valid");
            inputElement.classList.add("is-invalid");
            
        } else {
            inputElement.classList.remove("is-invalid");
            inputElement.classList.add("is-valid");
        }

        if (document.getElementById("customerform").checkValidity() == true) {
            document.getElementById("submitbtn").classList.add("bg-success");
        } else {
            document.getElementById("submitbtn").classList.remove("bg-success");
        }

    })
}


// Enregistrement de la commande

document.getElementById("submitbtn").addEventListener('click', event => {

    if (document.getElementById("customerform").checkValidity() == false) {
        
        event.preventDefault;

    } else {

        let contact = {
                firstName: document.getElementById("input1").value,
                lastName: document.getElementById("input2").value,
                address: document.getElementById("input3").value,
                city: document.getElementById("input4").value,
                email: document.getElementById("input5").value
            };        

        let products = [];
            
        for (i=0; i<cartContent.length; i++) {
                
            for (j=0; j<cartContent[i].quantityProduct; j++){

                let itemProd = cartContent[i].urlProduct;
                products.push(itemProd);

            }

        }
        
        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({contact, products}),
            
        };

        fetch(urlPost, options)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("orderId", data.orderId);
                localStorage.setItem("contact", data.contact);
                localStorage.setItem("products", data.products);
                document.location.href = "end-transaction.html";
            })
            .catch(error => alert("Erreur : " + error));
        
    }
})