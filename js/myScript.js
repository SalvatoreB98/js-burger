window.addEventListener("load", function(event) {
    console.log("Caricamento ok");
    onWindowLoad();
});

function onWindowLoad() {
    ingredients = document.querySelectorAll("[type=checkbox]");
    console.log(ingredients);
    var button = document.getElementById("button");
    coupon = document.getElementById("coupon");
    button.addEventListener("click", function(event) {

        burgerPrice = 5;
        var totalPrice = calculatePrice(burgerPrice);
        var userCoupon = document.getElementById("coupon").value;
        // SOTTRAE LA PERCENTUALE DI SCONTO
        var finalPriceDiscounted = totalPrice - totalPrice * calculateCoupon(userCoupon);
        //INIETTA NEL CODICE IL PREZZO CALCOLATO FINALE
        document.getElementById("price").innerHTML = (finalPriceDiscounted).toFixed(2);
    });
}

function calculatePrice(burgerPrice) {
    ingredients = document.querySelectorAll("[type=checkbox]");
    var somma = burgerPrice;
    console.log("OK");
    for (var i = 0; i < ingredients.length; i++) {
        if (ingredients[i].checked) {
            somma = parseFloat(somma) + parseFloat(ingredients[i].value);
        }
    }
    return somma;
}

function calculateCoupon(couponToValidate) {
    var saleHTML = document.getElementById("sale-status");
    if (couponToValidate == "") {
        saleHTML.innerHTML = "";
        return 0;
    } else {
        var couponArray = ["12354ABCDEF", "SCONTO10", "1234"];
        var sconto = 0;
        for (var i = 0; i < couponArray.length; i++) {
            if (couponToValidate == couponArray[i]) {
                console.log("SCONTO TROVATO!");
                saleHTML.innerHTML = "IL TUO COUPON E' STATO APPLICATO";
                saleHTML.style = "color : #8cc371"
                sconto = 0.2;
                return sconto;
            } else {
                console.log("SCONTO NON TROVATO!");
                saleHTML.innerHTML = "IL TUO COUPON NON E' VALIDO";
                saleHTML.style = "color : red"

            }
        }
        return sconto;
    }
}