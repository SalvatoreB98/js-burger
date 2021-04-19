window.addEventListener("load", function (event) {
    console.log("Caricamento ok");
    onWindowLoad();
});

function onWindowLoad() {
    var sconto =
    ingredients = document.querySelectorAll("[type=checkbox]");
    console.log(ingredients);
    var button = document.getElementById("button");
    coupon = document.getElementById("coupon");
    button.addEventListener("click", function (event) {
        var userCoupon = document.getElementById("coupon").value;
        document.getElementById("price").innerHTML = (calculatePrice(5) - (5 * calculateCoupon(userCoupon) )).toFixed(2);
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
    if (couponToValidate == "") {
        return 1;
    }
    else {

        var couponArray = ["12354ABCDEF", "SCONTO10", "1234"];
        var sconto = 1;
        var saleHTML = document.getElementById("sale-status");
        for (var i = 0; i < couponArray.length; i++) {
            if (couponToValidate == couponArray[i]) {
                console.log("SCONTO TROVATO!");
                sconto = 0.2;
                saleHTML.innerHTML = "IL TUO COUPON E' STATO APPLICATO";
                saleHTML.style = "color : #8cc371"
            }
            else {
                console.log("SCONTO NON TROVATO!");
                saleHTML.innerHTML = "IL TUO COUPON NON E' VALIDO";
                saleHTML.style = "color : red"
            }
        }
        return sconto;
    }
}