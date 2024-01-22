console.info('Hello, World! (Loaded startup scripts)')

BlockEvents.modification(e => {
    e.modify('minecraft:dirt', block => {
      block.hasCollision = true
      block.requiresTool = true
      block.destroySpeed = 10
    })
  })
StartupEvents.registry("block", (event) => {
  event.create("example_block") // Create a new block with ID "kubejs:example_block"
})
StartupEvents.registry('item', e => {
  e.create('notreepunching:smooth_loose_rock').displayName("Smooth loose Rock") // This texture would be located at kubejs/assets/mobbo/textures/item/lava.png
  e.create('minecraft:tree_resin_bowl').displayName("Bowl of Tree Resin") 
})
