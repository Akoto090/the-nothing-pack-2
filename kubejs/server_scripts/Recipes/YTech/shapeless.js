/**
 * Filename: Recipes/YTech/shapeless.js
 * Author: Akoto090
 * Default QOF recipes.
 **/


ServerEvents.recipes(event => { 

  const recipes = [
    
    //Chlorite Bracelet
    {
      output: 'ytech:chlorite_bracelet',
      ingredients: [
        'nothingcore:pebble',
        'ytech:sharp_flint'
      ],
      id: 'np2:chlorite_bracelet'
    },

    //Leather Strips
    {
      output: 'ytech:leather_strips',
      ingredients: [
        'minecraft:leather',
        'ytech:sharp_flint'
      ],
      id: 'np2:leather_strips',
      damageIngredient: 'ytech:sharp_flint'
    }
  ];

  recipes.forEach((recipe) => {
    const shapelessRecipe = event.shapeless(recipe.output, recipe.ingredients).id(recipe.id);
    if (recipe.keepIngredient) {
      shapelessRecipe.keepIngredient(recipe.keepIngredient);
    }
    if (recipe.damageIngredient) {
      shapelessRecipe.damageIngredient(recipe.damageIngredient);
    }
  });
});