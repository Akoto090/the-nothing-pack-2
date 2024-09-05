/**
 * Filename: Recipes/Farmer's Delight/shaped.js
 * Author: Akoto090
 * Default QOF recipes.
 **/


ServerEvents.recipes(event => { 

  const recipes = [
  
    //Flint Knife
    {
      output: 'farmersdelight:flint_knife',
      pattern: [ 
      'AB ', 
      'C  '
    ],
      key: {
        A: 'ytech:sharp_flint',
        B: 'ytech:leather_strips',
        C: 'minecraft:stick'
      },
      id: 'np2:flint_knife'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});