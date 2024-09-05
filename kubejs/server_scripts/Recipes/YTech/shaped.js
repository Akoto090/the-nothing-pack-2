/**
 * Filename: Recipes/YTech/shaped.js
 * Author: Akoto090
 * Default QOF recipes.
 **/


ServerEvents.recipes(event => { 

  const recipes = [
  
    /*Example
    {
      output: 'nothingcore:flint_pickaxe',
      pattern: [
      'ABA', 
      ' C ', 
      ' C '
    ],
      key: {
        A: 'ytech:sharp_flint',
        B: 'ytech:leather_strips',
        C: 'minecraft:stick'
      },
      id: 'np2:flint_pickaxe'
    }*/
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});