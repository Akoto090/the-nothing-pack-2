// priority: 10
ServerEvents.tags('item', e => {
  e.add('forge:slimeballs', 'minecraft:tree_resin_bowl')
})
PlayerEvents.loggedIn((e) => {
  if (!e.player.stages.has("first_join")) {
    // Add the stage
    e.player.stages.add("first_join");
    e.player.setMaxHealth(6);
  }
});
PlayerEvents.respawned((e) => {
  if (e.player.getMaxHealth() > 6) {
    e.player.setMaxHealth(e.player.getMaxHealth()-14)
    e.player.setHealth(e.player.getMaxHealth())
  }
})

