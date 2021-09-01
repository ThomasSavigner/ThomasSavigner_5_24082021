
// Gestion du Panier

    //  Indication icone header "panier vide / panier rempli" 
    //  fonction utilisée en page index et product
    const iconCartEmptyElement = document.getElementById("empty-icon");
    const iconCartFullElement = document.getElementById("full-icon");
    const displayEmptyCart = iconCartEmptyElement.classList;
    const displayFullCart = iconCartFullElement.classList;

    let memory = localStorage.length

    function iconCart() {
        if (memory >= 1) {
            y = displayEmptyCart.add("d-none");
        } else { 
            x = displayFullCart.add("d-none");
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
    
    //  module quantité produit

        //Définition et affichage du multiple "Quantité"
        let quantityNumber = 1;
        
        function setQuantity() {
            displayQuantity();
            adjustQuantity();
        }

        function displayQuantity() {
            const containerQuantity = document.getElementById("quantity-product");
            containerQuantity.innerHTML = quantityNumber;
            };


        //Ajuster la quantité
        function adjustQuantity() {    

            //Paramétrage bouton "-"
            const lessQuantityBtn = document.getElementById("decrement-button");
            
            lessQuantityBtn.addEventListener("click", function setLessQuantity() {
                let less = quantityNumber--;
                displayQuantity();
            });

            //Paramétrage bouton "+"
            const addQuantityBtn = document.getElementById("increment-button");

            addQuantityBtn.addEventListener("click", function setAddQuantity () {
                let add = quantityNumber++;
                displayQuantity();
            });
        }

    //  Ajouter un produit au panier
    const addCartElement = document.getElementById("addtocart-button");
    
    function addToCart() {
        addCartElement.addEventListener("click", addProductInCart());
    
    
    function addProductInCart () {
        let objJson = new typeOfRowCart(document.getElementById("name").textContent, quantityNumber, document.getElementById("product-price").textContent);
        console.log(document.getElementById("name").textContent);
        console.log(document.getElementById("product-price").textContent);
        console.log(objJson);
        let objLinea = JSON.stringify(objJson);
        localStorage.setItem("obj", objLinea);
    };
}
            /*quantityNumber : "${quantityNumber}",
            price : "${adaptPrice(product.price)"};/*document.getElementById("name").innerHTML, quantityNumber : quantityNumber, price : document.getElementById("product-price").innerHTML};
            
    };

    //  Affichage du contenu panier
    const cartElement = document.getElementById("cart");

    function displayCart () {
        if (localStorage.length = 0) {
            cartElement.innerHTML += `Votre panier est vide`;
        } else {
            /*for (line of cart) {
                let objLinea = localStorage.getItem("obj");
                let objJson = JSON.parse(objLinea);
                cartElement.innerHTML = "le panier est plein"
        }
    };
    displayCart();
*/