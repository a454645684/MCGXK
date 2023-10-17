// Import the DimensionStages class so we can use it in the script.
import mods.dimstages.DimensionStages;

// Stages the nether to "one". This will prevent access to the dimension if access
// player does not have stage "one" unlocked. You can define more than one stage
// to require multiple stages. 
//
// Descriptor
// DimensionStages.stageDimension(dimensionId, stageNames...);
//
// Example 1
// DimensionStages.stageDimension("minecraft:the_nether", "one", "two");
//
// Example 2
// DimensionStages.stageDimension("minecraft:the_end", "end", "quest_alien");
// Stages the end dimension to stage "two". This will prevent access if the
// player does not have that stage. The player will also be shown a custom
// message when they are prevented from entering.
//
// Descriptor
// DimensionStages.stageDimensionWithMessage(dimensionId, message, stageNames...);
//
// Example 1
// DimensionStages.stageDimensionWithMessage("minecraft:the_end", "Come back later.", "two");
// 
DimensionStages.stageDimensionWithMessage("minecraft:the_end", "The end is too scary, come back later.", "two");
DimensionStages.stageDimensionWithMessage("overworldmirror:overworld", "where do you think you're going?", "real_start");
DimensionStages.stageDimensionWithMessage("minecraft:the_nether", "The nether is too scary, come back later.", "one");
DimensionStages.stageDimensionWithMessage("twilightforest:twilight_forest", "you're not magical enough, maybe some blood will help you?", "three");