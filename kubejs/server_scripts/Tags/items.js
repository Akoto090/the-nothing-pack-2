/**
 * Filename: Tags/items.js
 * Author: Akoto090
 * This script creates multiple tags to unify items.
 **/


ServerEvents.tags('item', event => {
    
    event.remove('minecraft:piglin_food', ['croptopia:cooked_bacon', 'croptopia:bacon']);
    event.remove('forge:cooked_bacon', 'croptopia:cooked_bacon');
    
    //materials
    const materials = ['iron', 'brass', 'steel', 'tin', 'gold', 'lead', 'zinc', 'invar', 'bronze', 'copper', 'nickel', 'silver', 'electrum', 'signalium'];
    const raws = ['lead'];

    //plates
    materials.forEach(material => {
        const platesToRemove = [
            `thermal:${material}_plate`, 
            `railcraft:${material}_plate`, 
            `techreborn:${material}_plate`
        ];
        event.remove(`forge:plates/${material}`, platesToRemove);
    });

    //gears
    materials.forEach(material => {
        const gearsToRemove = [
            `thermal:${material}_gear`, 
            `railcraft:${material}_gear`
        ];
        event.remove(`forge:gears/${material}`, gearsToRemove);
    });

    //dusts
    materials.forEach(material => {
        const dustsToRemove = [
            `thermal:${material}_dust`, 
            `mekanism:dust_${material}`,
            `mekanism:powdered_${material}`,
            `techreborn:${material}_dust`
        ];
        event.remove(`forge:dusts/${material}`, dustsToRemove);
        event.remove('enderio:insulation_metals', dustsToRemove);
    });

    //nuggets
    materials.forEach(material => {
        const nuggetsToRemove = [
            `thermal:${material}_dust`, 
            `mekanism:dust_${material}`
        ];
        event.remove(`forge:nuggets/${material}`, nuggetsToRemove);
    });

    //raw_ores
    raws.forEach(material => {
        const raw_materialsToRemove = [
            `thermal:raw_${material}`, 
            `railcraft:${material}_raw`, 
            `techreborn:raw_${material}`,
            `mekanism:raw_${material}`,
            `eidolon:raw_${material}`
        ];
        event.remove(`forge:raw_materials/${material}`, raw_materialsToRemove);
    });
  
});
