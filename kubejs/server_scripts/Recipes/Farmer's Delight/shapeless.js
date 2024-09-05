/**
 * Filename: Recipes/Farmer's Delight/shapeless.js
 * Author: Akoto090
 * Default QOF recipes.
 **/


ServerEvents.recipes(event => { 

  const recipes = [
    
    /*Chlorite Bracelet
    {
      output: 'ytech:chlorite_bracelet',
      ingredients: [
        'nothingcore:pebble',
        'ytech:sharp_flint'
      ],
      id: 'np2:chlorite_bracelet'
    }*/
  ];

  recipes.forEach((recipe) => {
    event.shapeless(recipe.output, recipe.ingredients).id(recipe.id);
    });
  });