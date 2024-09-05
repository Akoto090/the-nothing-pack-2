/**
 * Filename: replace.js
 * Author: Akoto090
 * Replaces inputs/outputs.
 **/


ServerEvents.recipes(event => {


    event.replaceInput({}, 'gtceu:capacitor', 'enderio:basic_capacitor')
    event.replaceInput({}, 'thermal:chiller_ball_cast', 'gtceu:cylinder_casting_mold')
    event.replaceInput({}, 'thermal:press_gear_die', 'gtceu:gear_casting_mold')
    
    //iron
    event.replaceInput({}, 'thermal:iron_plate', 'gtceu:iron_plate')
    event.replaceOutput({}, 'thermal:iron_gear', 'gtceu:iron_gear')
    event.replaceOutput({}, ['mekanism:dust_iron', 'thermal:iron_dust', 'enderio:powdered_iron'], 'gtceu:iron_dust')
    event.replaceInput({}, ['mekanism:dust_iron', 'thermal:iron_dust', 'enderio:powdered_iron'], 'gtceu:iron_dust')
    //copper
    event.replaceInput({}, ['techreborn:copper_nugget', 'thermal:copper_nugget', 'malum:copper_nugget'], 'gtceu:copper_nugget')
    event.replaceOutput({}, ['techreborn:copper_nugget', 'thermal:copper_nugget', 'malum:copper_nugget'], 'gtceu:copper_nugget')
    event.replaceOutput({}, ['mekanism:dust_copper', 'thermal:copper_dust', 'enderio:powdered_copper'], 'gtceu:copper_dust')
    event.replaceInput({}, ['mekanism:dust_copper', 'thermal:copper_dust', 'enderio:powdered_copper'], 'gtceu:copper_dust')
    //lead
    event.replaceInput({}, ['techreborn:raw_lead_storage_block', 'mekanism:block_raw_lead', 'thermal:raw_lead_block', 'eidolon:raw_lead_block'], 'gtceu:raw_lead_block')
    event.replaceOutput({}, ['techreborn:raw_lead_storage_block', 'mekanism:block_raw_lead', 'thermal:raw_lead_block', 'eidolon:raw_lead_block'], 'gtceu:raw_lead_block')
    event.replaceInput({}, ['techreborn:raw_lead', 'mekanism:raw_lead', 'thermal:raw_lead', 'railcraft:lead_raw', 'eidolon:raw_lead'], 'gtceu:raw_lead')
    event.replaceOutput({}, ['techreborn:raw_lead', 'mekanism:raw_lead', 'thermal:raw_lead', 'railcraft:lead_raw', 'eidolon:raw_lead'], 'gtceu:raw_lead')
})

