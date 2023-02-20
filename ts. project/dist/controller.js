//recipes.html//
var Controller = /** @class */ (function () {
    function Controller() {
        // TODO: add event listeners
    }
    Controller.prototype.showRecipe = function (recipeName) {
        var recipe = recipes.find(function (recipe) { return recipe.name === recipeName; });
        if (recipe) {
            // TODO: update view to show recipe card
        }
    };
    return Controller;
}());
