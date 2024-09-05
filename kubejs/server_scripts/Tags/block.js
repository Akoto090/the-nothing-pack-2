/**
 * Filename: Tags/block.js
 * Author: Akoto090
 * This script creates multiple tags to unify blocks.
 **/


ServerEvents.tags('block', event => {
    event.remove('minecraft:needs_stone_tool', ['divinerpg:realmite_ore_deepslate', 'divinerpg:realmite_ore']);
    event.add('minecraft:needs_iron_tool', ['divinerpg:realmite_ore_deepslate', 'divinerpg:realmite_ore']);
    event.add('techreborn:rubber_logs', 'thermal:rubberwood_log');
    //lead
    event.remove('forge:storage_blocks/raw_lead', ['techreborn:raw_lead_storage_block', 'mekanism:block_raw_lead', 'thermal:raw_lead_block', 'eidolon:raw_lead_block']);
    event.remove('c:raw_lead_blocks', ['techreborn:raw_lead_storage_block', 'mekanism:block_raw_lead', 'thermal:raw_lead_block', 'eidolon:raw_lead_block']);
})

