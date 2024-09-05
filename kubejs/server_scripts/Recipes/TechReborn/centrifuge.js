/**
 * Filename: Recipes/TechReborn/centrifuge.js
 * Author: Akoto090
 * Default QOF recipes.
 **/

ServerEvents.recipes(event => {

    event.custom({    
        "type": "techreborn:centrifuge",
        "power": 3,
        "time": 1500,
        "ingredients": [
            {
            "item": "gtceu:impure_nickel_dust",
            "count": 1
            }
        ],
        "results": [
        {
            "item": "gtceu:small_nickel_dust",
            "count": 2
        },
        {
            "item": "gtceu:small_iron_dust",
            "count": 2
        },
        {
            "item": "gtceu:tiny_copper_dust",
            "count": 2
        }
        ]
    })

    event.custom({    
        "type": "techreborn:centrifuge",
        "power": 5,
        "time": 1500,
        "ingredients": [
            {
            "item": "gtceu:bronze_dust",
            "count": 1
            }
        ],
        "results": [
        {
            "item": "gtceu:copper_nugget",
            "count": 6
        },
        {
            "item": "gtceu:tin_nugget",
            "count": 3
        }
        ]
    })

    event.custom({    
        "type": "techreborn:centrifuge",
        "power": 5,
        "time": 1500,
        "ingredients": [
            {
            "item": "gtceu:brass_dust",
            "count": 1
            }
        ],
        "results": [
        {
            "item": "gtceu:copper_nugget",
            "count": 6
        },
        {
            "item": "gtceu:zinc_nugget",
            "count": 3
        }
        ]
    })

    event.custom({    
        "type": "techreborn:centrifuge",
        "power": 3,
        "time": 1500,
        "ingredients": [
            {
            "item": "gtceu:impure_gold_dust",
            "count": 1
            }
        ],
        "results": [
        {
            "item": "gtceu:small_ash_dust",
            "count": 1
        },
        {
            "item": "gtceu:tiny_lead_dust",
            "count": 1
        },
        {
            "item": "2x gtceu:small_gold_dust",
            "count": 2
        },
        {
            "item": "gtceu:small_copper_dust",
            "count": 1
        }
        ]
    })

    event.custom({  
        "type": "techreborn:industrial_grinder",
        "ingredients": [
            {
                "tag": "forge:ores/gold"
            }
        ],
        "power": 64,
        "results": [
            {
                "count": 2,
                "item": "minecraft:raw_gold"
            },
            {
                "count": 3,
                "item": "techreborn:copper_nugget"
            },
            {
                "item": "techreborn:nickel_nugget"
            }
        ],
        "tank": {
            "amount": {
                "droplets": 81000
            },
            "fluid": "minecraft:water"
        },
        "time": 100
    })
})

