// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	event.create('purple_sheet').texture('custom:item/purple_sheet')
	event.create('pellet_tritium').texture('custom:item/pellet_tritium')
	event.create('pellet_deuterium').texture('custom:item/pellet_deuterium').tooltip('Yea ty CaffienatedChaos :D')
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
