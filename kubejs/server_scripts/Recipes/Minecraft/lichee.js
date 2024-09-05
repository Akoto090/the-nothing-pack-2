/**
 * Filename: Recipes/Minecraft/lichee.js
 * Author: Akoto090
 * Script for Lichee recipes.
 **/


ServerEvents.recipes(event => {
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            item: "minecraft:flint"
        },
        block_in: "minecraft:stone",
        post: [
            {
                type: "drop_item",
                item: "ytech:sharp_flint"
            }
        ]
    });
    
    event.custom({
        type: "lychee:item_inside",
        item_in: {
            item: "nothingcore:raw_mushroom_stew"
        },
        block_in: "minecraft:water",
        post: [
            {
                type: "drop_item",
                item: "minecraft:mushroom_stew"
            }
        ]
    });
});
