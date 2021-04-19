window.addEventListener("load", function (event) {
    console.log("Caricamento ok");
    onWindowLoad();
});

function onWindowLoad() {
    ingredients = document.querySelectorAll("[type=checkbox]");
    console.log(ingredients);
    var button = document.getElementById("button");
    button.addEventListener("click", function (event) {
        var price = parseInt(document.getElementById("price"));
        document.getElementById("price").innerHTML = calculatePrice(5).toFixed(2);
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