/*REIEvents.hide('item', (event) => {

    // script by arzadu
    // major kudos to juh9870 and Lexxie Raven Black in the KubeJS discord for helping me out

    let enchants = {};
    event.getAllIngredients().forEach(e => {
        let item = Item.of(e);
        if (item.getId() !== 'minecraft:enchanted_book') return;

        let nbt = item.getNbt();
        for (let enchant of nbt.StoredEnchantments) {
            enchants[enchant.id] = Math.max(enchants[enchant.id] || 0, enchant.lvl);
        }
    });

    for(const enchantId in enchants) {
        for (const i = 1; i < enchants[enchantId]; i++) {
            event.hide(Item.of('minecraft:enchanted_book').enchant(enchantId, i))
        }
    };
    // console.log(enchants);
});*/