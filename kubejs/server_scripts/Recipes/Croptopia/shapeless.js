/**
 * Filename: Recipes/Farmer's Delight/shapeless.js
 * Author: Akoto090
 * Default QOF recipes.
 **/


ServerEvents.recipes(event => { 

  const recipes = [
    
    //The Big Breakfast
    {
      output: 'croptopia:the_big_breakfast',
      ingredients: [
        'minecraft:egg',
        'croptopia:toast',
        'croptopia:sausage',
        'croptopia:baked_beans',
        'farmersdelight:cooked_bacon',
        'croptopia:frying_pan',
        '2x croptopia:hashed_brown'


      ],
      id: 'np2:the_big_breakfast',
      keepIngredient: 'croptopia:frying_pan'
    },

    //Shredded Potatoes
    {
      output: 'croptopia:hashed_brown',
      ingredients: [
        'croptopia:olive_oil',
        'minecraft:potato',
        'croptopia:frying_pan'
        

      ],
      id: 'np2:hashed_brown'
    },

    //Potato Soup
    {
      output: 'croptopia:potato_soup',
      ingredients: [
        'croptopia:flour',
        '2x minecraft:potato',
        'croptopia:greenonion',
        'farmersdelight:bacon',
        'croptopia:water_bottle'

        

      ],
      id: 'np2:potato_soup'
    }
  ];

  recipes.forEach((recipe) => {
    const shapelessRecipe = event.shapeless(recipe.output, recipe.ingredients).id(recipe.id);
    if (recipe.keepIngredient) {
      shapelessRecipe.keepIngredient(recipe.keepIngredient);
    }
  });
});