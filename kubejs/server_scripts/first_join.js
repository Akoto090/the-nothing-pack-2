/**
 * Filename: first_join.js
 * Author: Akoto090
 * Clears the inventory and adds first join items.
 **/
const first_items = ['heracles:quest_book', 'minecraft:diamond'];


PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items')
        event.player.inventory.clear();
        first_items.forEach(item => event.player.give(item));
        event.server.runCommandSilent(`item replace entity ${e.player.username} armor.feet with minecraft:leather_boots`);
    }
})