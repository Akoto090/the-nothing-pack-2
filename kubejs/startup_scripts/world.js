WorldgenEvents.remove(event => {

    const undergroundOresToRemove = [
        'railcraft:lead_ore',
        'railcraft:silver_ore_buried',
        'railcraft:silver_ore',
        'railcraft:tin_ore_large',
        'railcraft:tin_ore_small',
        'railcraft:deepslate_silver_ore',
        'railcraft:deepslate_zinc_ore',
        'railcraft:deepslate_lead_ore',
        'railcraft:zinc_ore'

    ]

    undergroundOresToRemove.forEach(ore => {
        event.removeFeatureById('underground_ores', `${ore}`);
    })
})


const ores = [
    {
        "id": "resonating",
        "targets": [
            {
                "replace": "#minecraft:stone_ore_replaceables",
                "ore": "mekanism:tin_ore"
            },
            {
                "replace": "#minecraft:deepslate_ore_replaceables",
                "ore": "mekanism:deepslate_tin_ore"
            }
        ],
        "size": 5,
        "removeAir": 0,
        "chance": 0,
        "count": 4,
        "location": {
            "min": -64,
            "max": 64
        }
    },
    {
        "id": "tin_small",
        "targets": [
            {
                "replace": "#minecraft:stone_ore_replaceables",
                "ore": "mekanism:tin_ore"
            },
            {
                "replace": "#minecraft:deepslate_ore_replaceables",
                "ore": "mekanism:deepslate_tin_ore"
            }
        ],
        "size": 4,
        "removeAir": 0,
        "chance": 0,
        "count": 14,
        "location": {
            "min": -20,
            "max": 64
        }
    },
    {
        "id": "osmium_upper",
        "targets": [
            {
                "replace": "#minecraft:stone_ore_replaceables",
                "ore": "mekanism:osmium_ore"
            },
            {
                "replace": "#minecraft:deepslate_ore_replaceables",
                "ore": "mekanism:deepslate_osmium_ore"
            }
        ],
        "size": 7,
        "removeAir": 0,
        "chance": 0,
        "count": 9,
        "location": {
            "min": -24,
            "max": 64
        }
    },
]