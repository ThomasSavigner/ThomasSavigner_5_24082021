
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
    
    
    // module quantité produit

        //Définition et affichage du multiple "Quantité"
        let quantityNumber = 1;

        function displayQuantity() {
            const containerQuantity = document.getElementById("quantity-product");
            containerQuantity.innerHTML = quantityNumber;
            };
        displayQuantity();

        //Paramétrage bouton "-"
        const lessQuantityBtn = document.getElementById("decrement-button");
        
        lessQuantityBtn.addEventListener("click", function setLessQuantity () {
            let less = quantityNumber--;
            displayQuantity();
        });

        //Paramétrage bouton "+"
        const addQuantityBtn = document.getElementById("increment-button");

        addQuantityBtn.addEventListener("click", function setAddQuantity () {
            let add = quantityNumber++;
            displayQuantity();
        });



        





     
    


    
    
    