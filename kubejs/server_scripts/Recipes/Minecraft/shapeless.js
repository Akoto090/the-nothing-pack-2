/**
 * Filename: Recipes/Minecraft/shapeless.js
 * Author: Akoto090
 * Default QOF recipes.
 **/


ServerEvents.recipes(event => { 

  const recipes = [
    
    //Flint
    {
      output: 'minecraft:flint',
      ingredients: [
        '3x minecraft:gravel',
      ],
      id: 'np2:gravel'
    },

    //Raw Mushroom Stew
    {
      output: 'nothingcore:raw_mushroom_stew',
      ingredients: [
        '2x #c:mushrooms',
      ],
      id: 'np2:raw_mushroom_stew'
    },

    //Mushroom Stew
    {
      output: 'minecraft:mushroom_stew',
      ingredients: [
        '2x #c:mushrooms',
        'croptopia:water_bottle',
        'minecraft:bowl'
      ],
      id: 'np2:mushroom_stew'
    },

    //Mushroom Stew with Raw Mushroom Stew
    {
      output: 'minecraft:mushroom_stew',
      ingredients: [
        'nothingcore:raw_mushroom_stew',
        'croptopia:water_bottle',
        'minecraft:bowl'
      ],
      id: 'np2:mushroom_stew_2'
    }
  ];

  recipes.forEach((recipe) => {
    event.shapeless(recipe.output, recipe.ingredients).id(recipe.id);
    });
  });