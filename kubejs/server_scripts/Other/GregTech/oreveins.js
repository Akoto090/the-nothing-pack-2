/**
 * Filename: GregTech/oreveins.js
 * Author: KilaBash
 * Source: https://gregtechceu.github.io/gtceu-modern-docs/Modpacks/Beyond-The-Docs/
 * This script removes Oreveins for GregTech.

const oresToRemove = [
'gtceu:bauxite_vein_end',
'gtceu:magnetite_vein_end',
'gtceu:naquadah_vein',
'gtceu:pitchblende_vein_end',
'gtceu:scheelite_vein',
'gtceu:sheldonite_vein',
'gtceu:banded_iron_vein',
'gtceu:beryllium_vein',
'gtceu:certus_quartz',
'gtceu:manganese_vein',
'gtceu:molybdenum_vein',
'gtceu:monazite_vein',
'gtceu:nether_quartz_vein',
'gtceu:redstone_vein',
'gtceu:saltpeter_vein',
'gtceu:sulfur_vein',
'gtceu:tetrahedrite_vein',
'gtceu:topaz_vein',
'gtceu:apatite_vein',
'gtceu:cassiterite_vein',
'gtceu:coal_vein',
'gtceu:copper_tin_vein',
'gtceu:galena_vein',
'gtceu:garnet_tin_vein',
'gtceu:garnet_vein',
'gtceu:iron_vein',
'gtceu:lubricant_vein',
'gtceu:magnetite_vein_ow',
'gtceu:mineral_sand_vein',
'gtceu:nickel_vein',
'gtceu:salts_vein',
'gtceu:oilsands_vein',
'gtceu:copper_vein',
'gtceu:diamond_vein',
'gtceu:lapis_vein',
'gtceu:manganese_vein_ow',
'gtceu:mica_vein',
'gtceu:olivine_vein',
'gtceu:redstone_vein_ow',
'gtceu:sapphire_vein'];

GTCEuServerEvents.oreVeins(event => {
    oresToRemove.forEach(ore => {
        event.remove(ore);
    });
    
});

GTCEuServerEvents.oreVeins(event => {
    GTRegistries.ORE_VEINS.keys().forEach(id => event.remove(id))
})*/

GTCEuServerEvents.oreVeins(event => { event.removeAll(); })