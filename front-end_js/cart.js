
// Gestion du Panier

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
        var quantityNumber = 1;
        var pushQtyBtn= 4;

        function displayQuantity() {
            const containerQuantity = document.getElementById("quantity-product");
            containerQuantity.innerHTML = quantityNumber;
            };

        displayQuantity();

        
        //Paramétrage bouton "-"
        const lessQuantityBtn = document.getElementById("decrement-button");
        
        lessQuantityBtn.addEventListener("click", function setLessQuantity() {
            pushQtyBtn = quantityNumber--;
            displayQuantity();
            return pushQtyBtn,console.log(pushQtyBtn);
        });

        console.log(pushQtyBtn);

        //Paramétrage bouton "+"
        const addQuantityBtn = document.getElementById("increment-button");

        addQuantityBtn.addEventListener("click", function setAddQuantity () {
            let add = quantityNumber++;
            displayQuantity();
        });
/*
    //  Ajouter un produit au panier
    let typeOfRowCart = class {
        constructor(name, quantity, price) {
            this.name = name;
            this.quantity = quantity;
            this.price = price;
        }
    };

    const addCartElement = document.getElementById("addtocart-button");

    addCartElement.addEventListener("click", addProductInCart ());
    
    function addProductInCart () {
        let objJson = new typeOfRowCart(namecamera, quantityNumber, document.getElementById("product-price").innerHTML);
        console.log(objJson);
        let objLinea = JSON.stringify(objJson);
        localStorage.setItem("obj", objLinea);

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