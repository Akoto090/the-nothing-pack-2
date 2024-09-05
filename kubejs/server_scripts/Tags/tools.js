/**
 * Filename: Tags/tools.js
 * Author: Akoto090
 * This script creates multiple tags to unify tools.
 **/


ServerEvents.tags('item', event => {
    event.remove('ytech:knives', ['ytech:golden_knife', 'ytech:iron_knife', 'ytech:flint_knife']);
    event.add('forge:tools/knives', ['rootsclassic:bark_knife', '#ytech:knives', 'divinerpg:ocean_knife', 'divinerpg:terran_knife', 'divinerpg:jungle_knife']);
    event.remove('forge:tools/knives', ['ytech:golden_knife', 'ytech:flint_knife', 'croptopia:knife', 'ytech:iron_knife']);


})

