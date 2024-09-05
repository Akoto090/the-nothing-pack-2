/**
 * Filename: Recipes/Farmer's Delight/shaped.js
 * Author: Akoto090
 * Default QOF recipes.
 **/


ServerEvents.recipes(event => { 

  const recipes = [
  
    //Nickel-Iron battery
    {
      output: 'railcraft:nickel_iron_battery',
      pattern: [ 
      'AB ', 
      'CW '
    ],
      key: {
        A: 'railcraft:charge_terminal',
        B: 'railcraft:charge_spool_medium',
        C: 'thermal:niter',
        W: 'minecraft:water_bucket',
      },
      id: 'np2:nickel_iron_battery'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});