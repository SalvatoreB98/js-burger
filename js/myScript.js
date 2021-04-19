window.addEventListener("load", function (event) {
    console.log("Caricamento ok");
    onWindowLoad();
});

function onWindowLoad() {
    ingredients = document.querySelectorAll("[type=checkbox]");
    console.log(ingredients);
    var button = document.getElementById("button");
    button.addEventListener("click", function (event) {
        price = document.getElementById("price");
        price.innerHTML = calculatePrice(price);
    });
}
function calculatePrice(initialBurgerPrice) {
    ingredients = document.querySelectorAll("[type=checkbox]");
    var somma = initialPrice;
    for (var i = 0; i < ingredients.length; i++) {
        if (ingredients[i].checked) {
            somma += parseInt(ingredients[i].value);
        }
    }
    return somma;
}