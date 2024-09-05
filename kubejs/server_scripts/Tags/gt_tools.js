/**
 * Filename: Tags/gt_tools.js
 * Author: Akoto090
 * This script creates multiple tags to unify GregTech Tools (mostly to disable them intierly).
 **/


ServerEvents.tags('item', event => {
    const materials = [
        "hsse",
        "blue_steel",
        "red_steel",
        "naquadah",
        "vanadium_steel",
        "cobalt_brass",
        "tungsten_steel",
        "damascus_steel",
        "tungsten_carbide",
        "wrought_iron",
        "ultimet",
        "steel",
        "stainless_steel",
        "rose_gold",
        "sterling_silver",
        "invar",
        "diamond",
        "bronze",
        "duranium",
        "neutronium",
        "titanium",
        "iron",
        "aluminium",
        "flint",
        "naquadah_alloy",
        "polybenzimidazole"
    ];
    materials.forEach(material => {
        const tools = [
            `gtceu:${material}_pickaxe`,
            `gtceu:${material}_axe`,
            `gtceu:${material}_shovel`,
            `gtceu:${material}_sword`,
            `gtceu:${material}_hoe`,
            `gtceu:${material}_knife`,
            `gtceu:${material}_mortar`,
            `gtceu:${material}_hammer`,
            `gtceu:${material}_scythe`,
            `gtceu:${material}_file`,
            `gtceu:${material}_wire_cutter`,
            `gtceu:${material}_wire_saw`,
            `gtceu:${material}_screwdriver`,
            `gtceu:lv_${material}_screwdriver`,
            `gtceu:${material}_spade`,
            `gtceu:${material}_wrench`,
            `gtceu:hv_${material}_wrench`,
            `gtceu:iv_${material}_wrench`,
            `gtceu:lv_${material}_wrench`,
            `gtceu:${material}_crowbar`,
            `gtceu:${material}_butchery_knife`,
            `gtceu:${material}_saw`,
            `gtceu:${material}_mining_hammer`,
            `gtceu:${material}_drill`,
            `gtceu:lv_${material}_drill`,
            `gtceu:hv_${material}_drill`,
            `gtceu:ev_${material}_drill`,
            `gtceu:iv_${material}_drill`,
            `gtceu:mv_${material}_drill`,
            `gtceu:${material}_buzzsaw`,
            `gtceu:lv_${material}_chainsaw`,
            `gtceu:${material}_plunger`
        ];
        tools.forEach((item) => {
            event.add('c:hidden_from_recipe_viewers', item);
        });
    });
});

