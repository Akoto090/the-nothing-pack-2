/**
 * Filename: Recipes/Minecraft/shaped.js
 * Author: Akoto090
 * Default QOF recipes.
 **/


ServerEvents.recipes(event => { 

  const recipes = [
  
    //Bark knife
    {
      output: 'rootsclassic:bark_knife',
      pattern: [
      ' SS',
      ' PS',
      'W  '
    ],
      key: {
        S: '#minecraft:saplings',
        W: 'minecraft:stick',
        P: '#minecraft:planks'
      },
      id: 'np2:bark_knife'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});