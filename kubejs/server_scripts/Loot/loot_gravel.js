/**
 * Filename: Vanilla/loot_gravel.js
 * Author: Akoto090
 * This script adds pebbles to the gravel as a drop.
 */
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:gravel")
        .randomChance(0.2) // 30%
        .addLoot("nothingcore:pebble");
});