//recipes.html// 
class Recipe {
    constructor(public name: string,public  ingredients: string[],public instructions: string[]){

    }
}

const recipes: Recipe[] = [
    new Recipe(
      "Chicken and Rice",
      ["chicken breast", "brown rice", "carrots", "peas"],
      [
        "1. Cook chicken and brown rice separately.",
        "2. Mix cooked chicken and brown rice with cooked carrots and peas.",
        "3. Serve to your animal!",
      ]
    ),
    new Recipe(
      "Beef and Sweet Potato",
      ["beef", "sweet potato", "broccoli", "cauliflower"],
      [
        "1. Cook beef and sweet potato separately.",
        "2. Mix cooked beef and sweet potato with cooked broccoli and cauliflower.",
        "3. Serve to your animal!",
      ]
    ),
    new Recipe(
      "Turkey and Quinoa",
      ["turkey", "quinoa", "green beans", "carrots"],
      [
        "1. Cook turkey and quinoa separately.",
        "2. Mix cooked turkey and quinoa with cooked green beans and carrots.",
        "3. Serve to your animal!",
      ]
    ),
    new Recipe(
      "Pumpkin and Lentil",
      ["pumpkin puree", "lentils", "spinach", "green beans"],
      [
        "1. Cook lentils separately.",
        "2. Mix cooked lentils with pumpkin puree, cooked spinach, and green beans.",
        "3. Serve to your animal!",
      ]
    ),
  ];
  console.log(recipes);