/*ClientEvents.highPriorityAssets(event => {
    const enchantedBooks = [];
    let totalRemoved = 0;
  
    Utils.getRegistry("enchantment").entrySet().forEach(entry => {
      const id = entry.key.location();
      const maxLevel = entry.value.getMaxLevel();
  
      for (let level = 1; level < maxLevel; level++) {
        enchantedBooks.push({
          type: "item",
          id: "minecraft:enchanted_book",
          nbt: `{StoredEnchantments:[{id:"${id}",lvl:${level}s}]}`
        });
  
        totalRemoved++;
      }
    });
  
    event.add("emi:index/stacks/enchanted_books", {removed: enchantedBooks});
    console.log(`Removed ${totalRemoved} enchanted book stacks`);
  });*/