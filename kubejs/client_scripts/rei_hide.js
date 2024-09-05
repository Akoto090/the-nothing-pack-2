/**
 * Filename: rei_hide.js
 * Author: Akoto090
 * Hides REI entries.
 **/

const itemsToHide = [
    'minecraft:barrier', 
    'minecraft:light', 
    'minecraft:light',
    'minecraft:structure_void', 
    'minecraft:repeating_command_block', 
    'minecraft:chain_command_block',
    'minecraft:structure_void',
    'minecraft:structure_block',
    'minecraft:jigsaw', 
    'minecraft:command_block',
    'minecraft:written_book',
    'minecraft:command_block_minecart',
    'spectrum:pedestal_tier_1_structure_placer',
    'spectrum:pedestal_tier_2_structure_placer',
    'spectrum:pedestal_tier_3_structure_placer',
    'spectrum:fusion_shrine_structure_placer',
    'spectrum:enchanter_structure_placer',
    'spectrum:spirit_instiller_structure_placer',
    'spectrum:cinderhearth_structure_placer',
    'ytech:pebble',
];

REIEvents.hide('item', event => {
    itemsToHide.forEach(item => {
        event.hide(item);
    });
});

REIEvents.add('item', event => {
  })
