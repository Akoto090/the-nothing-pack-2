/**
 * Filename: gamerule.js
 * Author: Akoto090
 * Changes some gamerules.
 **/


ServerEvents.loaded(event => {
    if (event.server.persistentData.gameRules) return
    event.server.gameRules.set("doInsomnia", false)  
    event.server.persistentData.gameRules = true
  })