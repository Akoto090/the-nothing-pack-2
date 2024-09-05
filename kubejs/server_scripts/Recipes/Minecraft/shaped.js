/**
 * Filename: Recipes/Minecraft/shaped.js
 * Author: Akoto090
 * Default QOF recipes.
 **/


ServerEvents.recipes(event => { 

  const recipes = [
  
    //Flint Pickaxe
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
    },

    //Crafting Table
    {
      output: 'minecraft:crafting_table',
      pattern: [
      'AA', 
      'AA'
    ],
      key: {
        A: '#minecraft:planks'
      },
      id: 'np2:crafting_table'
    },

    //Iron Bars
    {
      output: 'minecraft:iron_bars',
      pattern: [
      'ABA', 
      'AAA'
    ],
      key: {
        A: 'gtceu:iron_rod',
        B: 'gtceu:long_iron_rod'
      },
      id: 'np2:iron_bars'
    },

    //Gold Bars
    {
      output: 'quark:gold_bars',
      pattern: [
      'ABA', 
      'AAA'
    ],
      key: {
        A: 'gtceu:gold_rod',
        B: 'gtceu:long_gold_rod'
      },
      id: 'np2:gold_bars'
    },
      
    //Leather Helmet
    {
      output: 'minecraft:leather_helmet',
      pattern: [
      'BAB', 
      'A A'
    ],
      key: {
        A: 'minecraft:leather',
        B: 'ytech:leather_strips'
      },
      id: 'np2:leather_helmet'
    },

    //Leather Chesplate
    {
      output: 'minecraft:leather_chestplate',
      pattern: [
      'B B', 
      'AAA',
      'AAA'
    ],
      key: {
        A: 'minecraft:leather',
        B: 'ytech:leather_strips'
      },
      id: 'np2:leather_chestplate'
    },

    //Leather Leggings
    {
      output: 'minecraft:leather_leggings',
      pattern: [
      'ABA', 
      'A A',
      'A A'
    ],
      key: {
        A: 'minecraft:leather',
        B: 'ytech:leather_strips'
      },
      id: 'np2:leather_leggings'
    },

    //Leather Boots
    {
      output: 'minecraft:leather_boots',
      pattern: [
      'A A',
      'B B'
    ],
      key: {
        A: 'minecraft:leather',
        B: 'ytech:leather_strips'
      },
      id: 'np2:leather_boots'
    },

    //Leather Horse Armor
    {
      output: 'leather_horse_armor',
      pattern: [
        'AWS',
        'ABA',
        ' W '
      ],
        key: {
          A: 'minecraft:leather',
          B: 'ytech:leather_strips',
          S: 'minecraft:string',
          W: 'gtceu:wood_bolt'
      },
      id: 'np2:leather_horse_armor'
    },

    //Bow
    {
      output: 'minecraft:bow',
      pattern: [
      ' WS',
      'L S',
      ' WS'
    ],
      key: {
        L: 'gtceu:long_wood_rod',
        W: 'gtceu:wood_bolt',
        S: 'minecraft:string'
      },
      id: 'np2:bow'
    },

    //Iron Horse Armor
    {
      output: 'minecraft:iron_horse_armor',
      pattern: [
      'SWN',
      'SLS',
      ' W '
    ],
      key: {
        L: 'ytech:leather_strips',
        W: 'gtceu:iron_bolt',
        S: 'gtceu:iron_plate',
        N: 'minecraft:string',
      },
      id: 'np2:iron_horse_armor'
    },

    //Golden Horse Armor
    {
      output: 'minecraft:golden_horse_armor',
      pattern: [
      'SWN',
      'SLS',
      ' W '
    ],
      key: {
        L: 'ytech:leather_strips',
        W: 'gtceu:gold_bolt',
        S: 'gtceu:gold_plate',
        N: 'minecraft:string',
      },
      id: 'np2:golden_horse_armor'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
