// priority: 100
ServerEvents.recipes(event => { 
    event.remove({ output: 'quark:sturdy_stone' })
    event.shaped('quark:sturdy_stone', [// arg 1: output
        'ABA', 
        'BAB', // arg 2: the shape (array of strings)
        'ABA'  
      ], {
        A: 'minecraft:cobblestone', 
        B: 'notreepunching:clay_brick'
      }
    )

    event.remove({ output: 'minecraft:furnace' })
    event.shaped('minecraft:furnace', [// arg 1: output
        'AAA', 
        'A A', // arg 2: the shape (array of strings)
        'BBB'  
      ], {
        A: 'quark:sturdy_stone', 
        B: 'minecraft:smooth_stone'
      }
    )

    event.remove({ output: 'minecraft:smooth_stone' })
    event.custom({ type: 'create:sandpaper_polishing',
        ingredients: [{ item: 'notreepunching:stone_loose_rock' }],
        results: [{ item: 'notreepunching:smooth_loose_rock'}]
      })

    event.shaped('minecraft:smooth_stone', [// arg 1: output
        ' AA', 
        ' AA', // arg 2: the shape (array of strings)
        '   '  
      ], {
        A: 'notreepunching:smooth_loose_rock',
      }
    )

    event.remove({ output: 'create:sand_paper' })
    event.shaped('create:sand_paper', [// arg 1: output
        ' A ', 
        ' B ', // arg 2: the shape (array of strings)
        ' C '  
      ], {
        A: 'minecraft:sand',
        B: '#forge:slimeballs',
        C: 'minecraft:paper'
      }
    )

    event.remove({ output: 'create:red_sand_paper' })
    event.shaped('create:red_sand_paper', [// arg 1: output
        ' A ', 
        ' B ', // arg 2: the shape (array of strings)
        ' C '  
      ], {
        A: 'minecraft:red_sand',
        B: '#forge:slimeballs',
        C: 'minecraft:paper'
      }
    )

    event.custom({ type: 'minecraft:campfire_cooking',
        ingredient: [{ item: 'minecraft:spruce_log' }],
        result: 'minecraft:tree_resin_bowl',
        cookingtime: 2000
      })
})