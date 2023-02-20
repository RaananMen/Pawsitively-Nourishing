//recipes.html//
class Controller {
    constructor() {
        // TODO: add event listeners
    }

    showRecipe(recipeName: string): void {
        const recipe: Recipe | undefined = recipes.find((recipe) => recipe.name === recipeName);
        if (recipe) {
            // TODO: update view to show recipe card
        }
    }
}
