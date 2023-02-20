//recipes.html//
class View {
    recipeCardElement: HTMLElement | null = null;

    constructor() {
        this.recipeCardElement = document.querySelector(".recipe-card");
    }

    updateRecipeCard(recipeName: string, ingredients: string[], instructions: string[]): void {
        if (this.recipeCardElement) {
            this.recipeCardElement.innerHTML = `
          <h3>${recipeName}</h3>
          <h4>Ingredients:</h4>
          <ul>
            ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
          </ul>
          <h4>Instructions:</h4>
          <ol>
            ${instructions.map((instruction) => `<li>${instruction}</li>`).join("")}
          </ol>
        `;
        }
    }
}
