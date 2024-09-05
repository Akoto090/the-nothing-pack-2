ItemEvents.tooltip(event => {
  event.addAdvanced(['#minecraft:tools', '#ytech:mortar_and_pestles', '#forge:tools'], (item, advanced, text) => {
    if (!event.shift) {
        const maxDurability = item.getMaxDamage();
        const currentDurability = item.getMaxDamage() - item.getDamageValue();
        const durabilityText = currentDurability === maxDurability 
          ? `\uDB80\uDD04 ${maxDurability}` 
          : `\uDB80\uDD04 ${currentDurability}/${maxDurability}`;
        text.add(Text.white(`${durabilityText}`));
    } else {
      const maxDurability = item.getMaxDamage();
      const currentDurability = item.getMaxDamage() - item.getDamageValue();
      const durabilityText = currentDurability === maxDurability 
        ? `\uDB80\uDD04 Durability: ${maxDurability}` 
        : `\uDB80\uDD04 Durability: ${currentDurability}/${maxDurability}`;
      text.add(Text.white(`${durabilityText}`));
    }
  })
})