/**
 * Filename: EMI/stacks.js
 * Author: Mercenaryarek, Akoto090
 * Source: https://discord.com/channels/303440391124942858/1113195449772429354
 * Takes a list of item ids and hides them from EMI.
 * Also allows adding and reordering items in the EMI index.
**/

function emiModifyItems(config) {
    console.info("Modifying items in EMI...");

    let obj = {
        added: [],
        removed: [],
        filters: [],
        disable: false
    };

    // Add items to be hidden
    if (config.itemsToHide) {
        config.itemsToHide.forEach((i) => {
            obj.removed.push(`item:${i}`);
        });
    }

    // Auto-remove items to be added to avoid duplicates
    if (config.itemsToAdd) {
        config.itemsToAdd.forEach((item) => {
            obj.removed.push(`item:${item.stack}`);
        });
    }

    // Add items to be added and reordered
    let lastAddedStack = null;
    if (config.itemsToAdd) {
        config.itemsToAdd.forEach((item) => {
            let newItem = {
                stack: `item:${item.stack}`,
                after: lastAddedStack ? `item:${lastAddedStack}` : undefined
            };
            obj.added.push(newItem);
            lastAddedStack = item.stack;
        });
    }

    // Add filters
    if (config.filters) {
        config.filters.forEach((filter) => {
            obj.filters.push(filter);
        });
    }

    // Set disable flag
    if (config.disable !== undefined) {
        obj.disable = config.disable;
    }

    JsonIO.write("kubejs/assets/emi/index/stacks/modified_stacks.json", obj);
}

// Example configuration
let config = {
    itemsToHide: ["example:item"],
    itemsToAdd: [
        { stack: "minecraft:stone" },
        { stack: "minecraft:granite" },
        { stack: "minecraft:polished_granite" },
        { stack: "minecraft:iron_ingot" }
    ],
    filters: [],
    disable: false
};

emiModifyItems(config);