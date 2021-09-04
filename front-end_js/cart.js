
// Gestion du Panier

//  Indication header icone "panier vide / panier rempli" 
        //  fonction utilisée en page index et product
            function iconCart() {
                const iconCartEmptyElement = document.getElementById("empty-icon");
                const iconCartFullElement = document.getElementById("full-icon");
                const displayEmptyCart = iconCartEmptyElement.classList;
                const displayFullCart = iconCartFullElement.classList;

                if (localStorage.getItem("cart") !== null){
                displayEmptyCart.add("d-none");
                displayFullCart.remove("d-none");
                }
            }

//  Format des prix
//  fonction utilisée en page index et product
function adaptPrice(priceNumber) {
    let price = Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 2,
        }).format(`${priceNumber}` / 100);
        return price;
    }

//Définition fonction module "Quantité"
function setQuantity() {
    displayQuantity();
    adjustQuantity();
}

    //Affichage de la valeur
    function displayQuantity() {
        const containerQuantity = document.getElementById("quantity-product");
        containerQuantity.innerHTML = quantityNumber;
        };

    //Ajuster la quantité
    function adjustQuantity() {    

        //Paramétrage bouton "-"
        const lessQuantityBtn = document.getElementById("decrement-button");
        
        lessQuantityBtn.addEventListener("click", function() {
            let less = quantityNumber--;
            displayQuantity();
        });

        //Paramétrage bouton "+"
        const addQuantityBtn = document.getElementById("increment-button");

        addQuantityBtn.addEventListener("click", function() {
            let add = quantityNumber++;
            displayQuantity();
        });
    }

/*
//  Affichage du contenu panier
const cartElement = document.getElementById("cart");

function displayCart () {
    if (localStorage.length = 0) {
        cartElement.innerHTML += `Votre panier est vide`;
    } else {
        for (line of cart) {
            let objLinea = localStorage.getItem("obj");
            let objJson = JSON.parse(objLinea);
            cartElement.innerHTML = "le panier est plein"
    }
};
displayCart();
*/