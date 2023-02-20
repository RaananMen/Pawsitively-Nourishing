//recipes.html//
var View = /** @class */ (function () {
    function View() {
        this.recipeCardElement = null;
        this.recipeCardElement = document.querySelector(".recipe-card");
    }
    View.prototype.updateRecipeCard = function (recipeName, ingredients, instructions) {
        if (this.recipeCardElement) {
            this.recipeCardElement.innerHTML = "\n          <h3>" + recipeName + "</h3>\n          <h4>Ingredients:</h4>\n          <ul>\n            " + ingredients.map(function (ingredient) { return "<li>" + ingredient + "</li>"; }).join("") + "\n          </ul>\n          <h4>Instructions:</h4>\n          <ol>\n            " + instructions.map(function (instruction) { return "<li>" + instruction + "</li>"; }).join("") + "\n          </ol>\n        ";
        }
    };
    return View;
}());
