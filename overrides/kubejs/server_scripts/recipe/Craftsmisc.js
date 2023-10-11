MoreJSEvents.villagerTrades((event) => {
  // Returns the offers that were added to the villager.
	event.removeModdedTrades(['ic2:electric'],[1,5]);
})
ServerEvents.recipes((event) => {
	event.remove({id: 'minecraft:ens_ancient_debris'})
	event.remove({output: 'create_things_and_misc:blaze_ballon'})
	event.custom({ "type": "exnihilosequentia:heat", "block": 'immersiveengineering:furnace_heater', "amount": 8})
	event.custom({ "type": "exnihilosequentia:heat", "block": 'rebornstorage:multiblock_heat', "amount": 12})
	event.custom({ "type": "exnihilosequentia:heat", "block": 'mekanism:superheating_element', "amount": 40})
	//extended crafting
	event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 40000000,
  "input": {
    "item": "mysticalagriculture:prosperity_seed_base"
  },
  "ingredients": [
    {
      "item": 'mysticalagradditions:insanium_ingot_block'
    },
    {
      "item": 'mysticalagradditions:insanium_ingot_block'
    },
	{
      "item": 'mysticalagradditions:insanium_ingot_block'
    },
	{
      "item": 'mysticalagradditions:insanium_ingot_block'
    },
	{
      "item": 'mysticalagradditions:insanium_ingot_block'
    },
	{
      "item": 'mysticalagradditions:insanium_ingot_block'
    },
	{
		'type': 'forge:nbt',
					'item': 'extendedcrafting:singularity',
					'nbt': {
						'Id': 'extendedcrafting:tritium'
						},
    },
    {
		'type': 'forge:nbt',
					'item': 'extendedcrafting:singularity',
					'nbt': {
						'Id': 'extendedcrafting:deuterium'
						},
    },
    {
      "item": 'rftoolsdim:part_memory_3'
    },
    {
      "item": 'rftoolsdim:part_memory_3'
    },
    {
      "item": 'arsomega:enchanted_demonic_gem'
    },
    {
      "item": 'mysticalagriculture:hungerless_augment'
    }
  ],
  "result": {
    "item": 'mysticalagriculture:antimatter_seeds'
  }
})
	event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "         ",
        "   AAA   ",
        "  ABBBA  ",
        " ABBBBBA ",
        "ABBBCBBBA",
        "ABBCCCBBA",
        "ABBBCBBBA",
        "ABBBBBBBA",
        " AAAAAAA "
      ],
      "key": {
        "A": {
          "item": 'resourcefulbees:waxed_machine_block'
        },
        "B": {
          "item": 'mysticalagriculture:supremium_block'
        },
        "C": {
          "item": 'enigmaticlegacy:evil_ingot'
        },
	  },
      "result": {
        "item": 'resourcefulbees:supremium_bee_spawn_egg'
      }
    })
	event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "         ",
        "   AAA   ",
        "  ABBBA  ",
        " ABBBBBA ",
        "ABBBCBBBA",
        "ABBCCCBBA",
        "ABBBCBBBA",
        "ABBBBBBBA",
        " AAAAAAA "
      ],
      "key": {
        "A": {
          "item": 'resourcefulbees:waxed_machine_block'
        },
        "B": {
          "item": 'botanicadds:gaiasteel_ingot'
        },
        "C": {
          "item": 'enigmaticlegacy:evil_ingot'
        },
	  },
      "result": {
        "item": 'resourcefulbees:gaia_bee_spawn_egg'
      }
    })
	event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "         ",
        "   AAA   ",
        "  ABBBA  ",
        " ABBBBBA ",
        "ABBBCBBBA",
        "ABBCCCBBA",
        "ABBBCBBBA",
        "ABBBBBBBA",
        " AAAAAAA "
      ],
      "key": {
        "A": {
          "item": 'resourcefulbees:waxed_machine_block'
        },
        "B": {
          "item": 'evilcraft:blood_infusion_core'
        },
        "C": {
          "item": 'enigmaticlegacy:evil_ingot'
        },
	  },
      "result": {
        "item": 'resourcefulbees:bleed_bee_spawn_egg'
      }
    })
	event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "         ",
        "   AAA   ",
        "  ABBBA  ",
        " ABBBBBA ",
        "ABBBCBBBA",
        "ABBCCCBBA",
        "ABBBCBBBA",
        "ABBBBBBBA",
        " AAAAAAA "
      ],
      "key": {
        "A": {
          "item": 'resourcefulbees:waxed_machine_block'
        },
        "B": {
          "item": 'createchromaticreturn:creative_flour'
        },
        "C": {
          "item": 'enigmaticlegacy:evil_ingot'
        },
	  },
      "result": {
        "item": 'resourcefulbees:creative_bee_spawn_egg'
      }
    })
	event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "         ",
        "   AAA   ",
        "  ABBBA  ",
        " ABBBBBA ",
        "ABBBCBBBA",
        "ABBCCCBBA",
        "ABBBCBBBA",
        "ABBBBBBBA",
        " AAAAAAA "
      ],
      "key": {
        "A": {
          "item": 'resourcefulbees:waxed_machine_block'
        },
        "B": {
          "item": 'pneumaticcraft:unassembled_pcb'
        },
        "C": {
          "item": 'enigmaticlegacy:evil_ingot'
        },
	  },
      "result": {
        "item": 'resourcefulbees:pneumatic_bee_spawn_egg'
      }
    })
	event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "         ",
        "   AAA   ",
        "  ABBBA  ",
        " ABBBBBA ",
        "ABBBCBBBA",
        "ABBCCCBBA",
        "ABBBCBBBA",
        "ABBBBBBBA",
        " AAAAAAA "
      ],
      "key": {
        "A": {
          "item": 'resourcefulbees:waxed_machine_block'
        },
        "B": {
          "item": 'elementalcraft:purecrystal'
        },
        "C": {
          "item": 'enigmaticlegacy:evil_ingot'
        },
	  },
      "result": {
        "item": 'resourcefulbees:elemental_bee_spawn_egg'
      }
    })
	event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AA AAA AA",
        " AA A AA ",
        "ABBBCBBBA",
        "ABBCCCBBA",
        " ABBCBBA ",
        "  ABBBA  ",
        "   AAA   ",
        "    A    ",
        "    A    "
      ],
      "key": {
        "A": {
          "item": 'mysticalagriculture:antimatter_essence'
        },
        "B": {
          "item": 'occultism:iesnium_block'
        },
        "C": {
          "item": 'occultism:afrit_essence'
        },
	  },
      "result": {
        "item": 'mysticalagriculture:occultist_seeds'
      }
    })
	event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AA AAA AA",
        " AA A AA ",
        "ABBBCBBBA",
        "ABBCCCBBA",
        " ABBCBBA ",
        "  ABBBA  ",
        "   AAA   ",
        "    A    ",
        "    A    "
      ],
      "key": {
        "A": {
          "item": 'mysticalagriculture:antimatter_essence'
        },
        "B": {
          "item": 'forbidden_arcanus:arcane_crystal_block'
        },
        "C": {
          "item": 'forbidden_arcanus:eternal_stella'
        },
	  },
      "result": {
        "item": 'mysticalagriculture:forbidden_seeds'
      }
    })
	event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AA AAA AA",
        " AA A AA ",
        "ABBBCBBBA",
        "ABBCCCBBA",
        " ABBCBBA ",
        "  ABBBA  ",
        "   AAA   ",
        "    A    ",
        "    A    "
      ],
      "key": {
        "A": {
          "item": 'mysticalagriculture:antimatter_essence'
        },
        "B": {
          "item": 'rftoolsdim:legendary_essence'
        },
        "C": {
          "item": 'rftoolsdim:legendary_lost_knowledge'
        },
	  },
      "result": {
        "item": 'mysticalagriculture:dimensional_seeds'
      }
    })
	event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AA AAA AA",
        " AA A AA ",
        "ABBBCBBBA",
        "ABBCCCBBA",
        " ABBCBBA ",
        "  ABBBA  ",
        "   AAA   ",
        "    A    ",
        "    A    "
      ],
      "key": {
        "A": {
          "item": 'mysticalagriculture:antimatter_essence'
        },
        "B": {
          "item": 'arsomega:demonic_gem_block'
        },
        "C": {
          "item": 'ars_elemental:mark_of_mastery'
        },
	  },
      "result": {
        "item": 'mysticalagriculture:wizard_seeds'
      }
    })
	event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAAAAAA",
        "ABBBBBBBA",
        "ABECECEBA",
        "ABCDHICBA",
        "ABEGFGEBA",
        "ABCIHDCBA",
        "ABECECEBA",
        "ABBBBBBBA",
        "AAAAAAAAA"
      ],
      "key": {
        "A": {
          "item": 'industrialforegoing:supreme_black_hole_tank'
        },
        "B": {
          "item": 'thermal_extra:fluid_tank_augment_6'
        },
        "C": {
          "item": "extendedcrafting:ultimate_singularity"
        },
        "D": {
		'type': 'forge:nbt',
					'item': 'extendedcrafting:singularity',
					'nbt': {
						'Id': 'extendedcrafting:antimatter'
						},
        },
        "E": {
          "item": 'rebornstorage:larger_fluid_disk_part'
        },
        "F": {
          "item": 'forbidden_arcanus:eternal_stella'
        },
        "G": {
          "item": 'allthecompressed:glass_block_9x'
        },
        "H": {
          "item": "projectexpansion:final_star"
        },
        "I": {
          "item": 'thermal_extra:dragonsteel_glass'
        }
	  },
      "result": {
        "item": 'mekanism:creative_chemical_tank'
      }
    })
	event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAAAAAA",
        "ABBBBBBBA",
        "ABECECEBA",
        "ABCDHICBA",
        "ABEGFGEBA",
        "ABCIHDCBA",
        "ABECECEBA",
        "ABBBBBBBA",
        "AAAAAAAAA"
      ],
      "key": {
        "A": {
          "item": 'industrialforegoing:supreme_black_hole_tank'
        },
        "B": {
          "item": 'thermal_extra:fluid_tank_augment_6'
        },
        "C": {
          "item": "extendedcrafting:ultimate_singularity"
        },
        "D": {
          "item": 'extrastorage:block_1048576k_fluid'
        },
        "E": {
          "item": 'rebornstorage:larger_fluid_disk_part'
        },
        "F": {
          "item": 'forbidden_arcanus:eternal_stella'
        },
        "G": {
          "item": 'allthecompressed:glass_block_9x'
        },
        "H": {
          "item": "projectexpansion:final_star"
        },
        "I": {
          "item": 'thermal_extra:dragonsteel_glass'
        }
	  },
      "result": {
        "item": 'mekanism:creative_fluid_tank'
      }
    })
	event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAAAAAA",
        "ABBBBBBBA",
        "ABECECEBA",
        "ABCDHICBA",
        "ABEGFGEBA",
        "ABCIHDCBA",
        "ABECECEBA",
        "ABBBBBBBA",
        "AAAAAAAAA"
      ],
      "key": {
        "A": {
          "item": "mekanism:ultimate_induction_cell"
        },
        "B": {
          "item": "mekanism:ultimate_energy_cube"
        },
        "C": {
          "item": "extendedcrafting:ultimate_singularity"
        },
        "D": {
          "item": "solarpanels:photonic_energy_tablet"
        },
        "E": {
          "item": "powah:energy_hopper_nitro"
        },
        "F": {
          "item": "mekaevolution:infinite_energy_cube"
        },
        "G": {
          "item": "advanced_solars:ultimate_hybrid_solar_panel"
        },
        "H": {
          "item": "projectexpansion:final_star"
        },
        "I": {
          "item": "mekanism:ultimate_induction_provider"
        }
	  },
      "result": {
        "item": "mekanism:creative_energy_cube"
      }
    })
	event.custom({
  "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAAAAAA",
        "A       A",
        "A   E   A",
        "A  FDG  A",
        "A   H   A",
        "ACBBBBBCA",
        "ACBBBBBCA",
        "ACCCCCCCA",
        "AAAAAAAAA"
      ],
      "key": {
        "A": {
          "item": "projectexpansion:final_star"
        },
        "B": {
          "item": "projectexpansion:cyan_matter"
        },
        "C": {
          "item": "botania:tiny_planet_block"
        },
        "D": {
		'type': 'forge:nbt',
					'item': 'extendedcrafting:singularity',
					'nbt': {
						'Id': 'extendedcrafting:gaiasteel'
						},
        },
        "E": {
          "item": "mythicbotany:kvasir_mead"
        },
        "F": {
          "item": "mythicbotany:mjoellnir"
        },
        "G": {
          "item": "botania:world_seed"
        },
        "H": {
          "item": "botania:monocle"
        }
      },
      "result": {
        "item": "botania:creative_pool"
      }
    }
  )
	event.shaped(
    Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"cyclic:flight"}'),
    [ 
      ' A ', 
      'BBB',
      ' A '  
    ],
    {
      A: 'rftoolsutility:flight_module',
	  B: 'cyclic:chorus_flight'
    }
  )
  event.remove({id: 'ic2:plasma_core'}) 
  event.remove({mod: 'sophisticatedstorage'})
  event.shaped(
    Item.of('ic2:plasma_core', 1),
    [ 
      'BCB', 
      'CAC',
      'BCB'  
    ],
    {
      A: 'ic2:cell_plasma',
	  B: 'ic2:magnet',
	  C: 'ic2:plate_advanced_alloy'
    }
  )
  event.shaped(
    Item.of('cagerium:cage', 1),
    [ 
      'BCB', 
      'BAB',
      'BDB'  
    ],
    {
      A: 'mob_grinding_utils:solid_xp_block',
	  B: 'minecraft:iron_bars',
	  C: 'mob_grinding_utils:gm_chicken_feed_cursed',
	  D: 'minecraft:blackstone_slab'
    }
  )
  event.shaped(
    Item.of('cagerium:terrarium', 1),
    [ 
      'BCB', 
      'BAB',
      'DDD'  
    ],
    {
      A: 'mob_grinding_utils:solid_xp_block',
	  B: 'minecraft:glass',
	  C: 'mob_grinding_utils:nutritious_chicken_feed',
	  D: 'minecraft:oak_slab'
    }
  )
  event.shaped(
    Item.of('cagerium:plate', 1),
    [ 
      '   ', 
      '   ',
      'ABA'  
    ],
    {
      A: 'immersiveengineering:slab_storage_steel',
	  B: 'industrialforegoing:pink_slime_ingot'
    }
  )
	event.shaped(
    Item.of('create:powdered_obsidian', 9),
    [ 
      '  A', 
      '   ',
      '   '  
    ],
    {
      A: 'create_things_and_misc:powdered_obsidian_block'
    }
  )
	event.shaped(
    Item.of('summoningrituals:altar', 1),
    [ 
      'ABA', 
      'DCD',
      ' E '  
    ],
    {
      A: 'minecraft:gold_block',
	  B: 'minecraft:wither_skeleton_skull',
	  C: 'minecraft:red_wool',
	  D: 'minecraft:oak_slab',
	  E: 'minecraft:light_weighted_pressure_plate'
    }
  )
	event.custom({
    "type": "summoningrituals:altar",
    "catalyst": { "item": 'forcecraft:speed_core' },
    "outputs": [
        { "mob": "minecraft:chicken" },
        { "mob": "minecraft:chicken" }
    ],
    "inputs": [
        { "ingredient": { "item": "minecraft:feather" }, "count": 32 },
        { "ingredient": { "item": "minecraft:chicken" }, "count": 5 },
        { "ingredient": { "item": "minecraft:bone" }, "count": 10 },
    ],
    "recipe_time": 200,
    "block_below": { "block": 'quark:stick_block'}
})
	event.custom({
    "type": "summoningrituals:altar",
    "catalyst": { "item": 'forcecraft:speed_core' },
    "outputs": [
        { "mob": "minecraft:cow" },
        { "mob": "minecraft:cow" }
    ],
    "inputs": [
        { "ingredient": { "item": "minecraft:leather" }, "count": 32 },
        { "ingredient": { "item": "minecraft:beef" }, "count": 5 },
        { "ingredient": { "item": "minecraft:bone" }, "count": 10 },
    ],
    "recipe_time": 200,
    "block_below": { "block": 'allthecompressed:hay_block_1x'}
})
	event.custom({
    "type": "summoningrituals:altar",
    "catalyst": { "item": 'rftoolsbase:infused_diamond' },
    "outputs": [
	{ "item": "minecraft:slime_spawn_egg",
	  "count": 1,
	  "nbt": {"EntityTag": {
	  "id": "rftoolsdim:dimensional_blob_common","CustomName":'[{"text":"common blob"}]'},"display":{Name:'[{"text":"Common blob","italic":false}]'}}
	  }
    ],
    "inputs": [
        { "ingredient": { "item": "minecraft:slime_ball" }, "count": 64 },
        { "ingredient": { "item": "rftoolsbase:dimensionalshard" }, "count": 32 },
        { "ingredient": { "item": "rftoolsdim:common_lost_knowledge" }, "count": 10 },
    ],
    "recipe_time": 200,
    "block_below": { "block": 'rftoolsutility:matter_transmitter'}
})
	event.custom({
    "type": "summoningrituals:altar",
    "catalyst": { "item": 'rftoolsbase:infused_enderpearl' },
    "outputs": [
	{ "item": "minecraft:allay_spawn_egg",
	  "count": 1,
	  "nbt": {"EntityTag": {
	  "id": "rftoolsdim:dimensional_blob_rare","CustomName":'[{"text":"Rare blob"}]'},"display":{Name:'[{"text":"Rare blob","italic":false}]'}}
	  }
    ],
    "inputs": [
        { "ingredient": { "item": "minecraft:slime_ball" }, "count": 64 },
        { "ingredient": { "item": "rftoolsbase:dimensionalshard" }, "count": 32 },
        { "ingredient": { "item": "rftoolsdim:rare_lost_knowledge" }, "count": 10 },
    ],
    "recipe_time": 200,
    "block_below": { "block": 'rftoolsutility:matter_transmitter'}
})
	event.custom({
    "type": "summoningrituals:altar",
    "catalyst": { "item": 'rftoolspower:cell3' },
    "outputs": [
	{ "item": "minecraft:axolotl_spawn_egg",
	  "count": 1,
	  "nbt": {"EntityTag": {
	  "id": "rftoolsdim:dimensional_blob_legendary","CustomName":'[{"text":"Legendary blob"}]'},"display":{Name:'[{"text":"Legendary blob","italic":false}]'}}
	  }
    ],
    "inputs": [
        { "ingredient": { "item": "industrialforegoing:pink_slime" }, "count": 64 },
        { "ingredient": { "item": "rftoolsbase:dimensionalshard" }, "count": 32 },
        { "ingredient": { "item": "rftoolsdim:legendary_lost_knowledge" }, "count": 10 },
    ],
    "recipe_time": 200,
    "block_below": { "block": 'rftoolsutility:matter_transmitter'}
})
	event.replaceInput(
    { output: 'rfd:clay_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:clean_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:dirt_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:end_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:fungus_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:glowstone_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:grass_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:obsidian_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:snow_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:gravel_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:quartz_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:soulsand_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:ice_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:redstone_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:dye_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:netherrack_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:sand_gen_tier_1' },
    "minecraft:glass",'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'rfd:ore_gen_tier_1' },
    "minecraft:glass",
    'cobblefordays:tier_3')
	event.replaceInput(
    { output: 'hostilenetworks:blank_data_model' },
    "minecraft:smooth_stone",
    'advanced_solars:enriched_sunnarium_alloy')
  event.shaped(
    Item.of('cobblefordays:tier_2', 1),
    [ 
      'ACA', 
      'BEB',
      'ADA'  
    ],
    {
      A: 'minecraft:stone_bricks', 
      B: 'minecraft:lava_bucket',
    C: 'minecraft:diamond_block',
    D: 'cobblefordays:tier_1',
    E: 'minecraft:emerald'
    }
  )
  event.shaped(
    Item.of('cobblefordays:tier_5', 1),
    [ 
      'AEA', 
      'BCD',
      'AAA'  
    ],
    {
      A: 'minecraft:diamond', 
      B: 'minecraft:water_bucket',
      C: 'pneumaticcraft:plastic',
      D: 'minecraft:lava_bucket',
      E: 'cobblefordays:tier_4'
    }
  )
  event.shaped(
    Item.of('cobblefordays:tier_4', 1),
    [ 
      'AEA', 
      'BCD',
      'AAA'  
    ],
    {
      A: 'minecraft:gold_ingot', 
      B: 'minecraft:water_bucket',
      C: 'botania:elementium_ingot',
      D: 'minecraft:lava_bucket',
      E: 'cobblefordays:tier_3'
    }
  )
  event.shaped(
    Item.of('cobblefordays:tier_3', 1),
    [ 
      'AEA', 
      'BCD',
      'AAA'  
    ],
    {
      A: 'minecraft:iron_ingot', 
      B: 'minecraft:water_bucket',
      C: 'jaopca:storage_blocks.force',
      D: 'minecraft:lava_bucket',
      E: 'cobblefordays:tier_2'
    }
  )
  event.shaped(
      Item.of('ironjetpacks:basic_coil', 1),
      [ 
        ' AB', 
        'ACA',
        'BA '  
      ],
      {
        A: 'minecraft:iron_ingot', 
        B: 'allthecompressed:redstone_block_1x',
        C: 'immersiveengineering:ingot_hop_graphite'
      }
    )
	event.shaped(
    Item.of('ironjetpacks:advanced_coil', 1),
    [ 
      ' AB', 
      'ACA',
      'BA '  
    ],
    {
      A: 'minecraft:gold_ingot', 
      B: 'allthecompressed:redstone_block_1x',
      C: 'pneumaticcraft:plastic'
    }
  )
  event.shaped(
    Item.of('mysticalagriculture:machine_frame', 1),
    [ 
      'BAB', 
      'ACA',
      'BAB'  
    ],
    {
      A: 'minecraft:redstone_block', 
      B: 'mysticalagriculture:prosperity_ingot',
      C: 'thermal:energy_cell_frame'
    }
  )
  event.shaped(
    Item.of('ironjetpacks:elite_coil', 1),
    [ 
      ' AB', 
      'ACA',
      'BA '  
    ],
    {
      A: 'minecraft:diamond_block', 
      B: 'allthecompressed:redstone_block_1x',
      C: 'elementalcraft:artificial_air_source_seed'
    }
  )
  event.shaped(
    Item.of('ironjetpacks:ultimate_coil', 1),
    [ 
      ' AB', 
      'ACA',
      'BA '  
    ],
    {
      A: 'allthecompressed:emerald_block_1x', 
      B: 'allthecompressed:redstone_block_1x',
      C: 'powah:capacitor_nitro'
    }
  )
	event.shaped(
    Item.of('ironfurnaces:upgrade_obsidian', 1),
    [ 
      'ABA', 
      'BCB',
      'ABA'  
    ],
    {
      A: 'minecraft:obsidian', 
      B: 'thermal:dynamo_fuel_augment',
      C: 'allthecompressed:emerald_block_1x'
    }
  )
  event.shaped(
    Item.of('ironfurnaces:obsidian_furnace', 1),
    [ 
      'ABA', 
      'BCB',
      'ABA'  
    ],
    {
      A: 'minecraft:obsidian', 
      B: 'thermal:dynamo_fuel_augment',
      C: 'ironfurnaces:emerald_furnace'
    }
  )
  event.shaped(
    Item.of('ironfurnaces:diamond_furnace', 1),
    [ 
      'AAA', 
      'BCB',
      'AAA'  
    ],
    {
      A: 'minecraft:diamond', 
      B: 'evilcraft:spirit_furnace',
      C: 'ironfurnaces:gold_furnace'
    }
  )
  event.shaped(
    Item.of('ironfurnaces:upgrade_diamond', 1),
    [ 
      'AAA', 
      'BCB',
      'AAA'  
    ],
    {
      A: 'minecraft:diamond', 
      B: 'evilcraft:spirit_furnace',
      C: 'minecraft:gold_block'
    }
  )
  event.shaped(
    Item.of('ironfurnaces:netherite_furnace', 1),
    [ 
      'ABA', 
      'BCB',
      'ADA'  
    ],
    {
      A: 'minecraft:netherite_ingot', 
      B: 'forbidden_arcanus:smelter_prism',
      C: 'ironfurnaces:obsidian_furnace',
      D: 'minecraft:soul_sand'
    }
  )
  event.shaped(
    Item.of('ironfurnaces:upgrade_netherite', 1),
    [ 
      'ABA', 
      'BCB',
      'ADA'  
    ],
    {
      A: 'minecraft:netherite_ingot', 
      B: 'forbidden_arcanus:smelter_prism',
      C: 'allthecompressed:obsidian_block_2x',
      D: 'minecraft:soul_sand'
    }
  )
  event.shaped(
    Item.of('exnihilosequentia:wooden_crook', 1),
    [ 
      'AA ', 
      ' A ',
      ' A '  
    ],
    {
      A: 'armorplus:wooden_rod'
    }
  )
	event.replaceInput(
    { output: 'ironfurnaces:augment_factory' },
    "minecraft:paper",
    'ic2:buffer_storage_expansion')
	event.replaceInput(
    { output: 'ironfurnaces:augment_generator' },
    "minecraft:paper",
    'ic2:thermal_generator')
	event.shaped(
  Item.of('rfd:dust_gen_tier_1', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:oak_log',
	D: 'exnihilosequentia:dust',
	E: 'cobblefordays:tier_3'
  }
)
	event.shaped(
  Item.of('rfd:dust_gen_tier_2', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:stone',
	D: 'exnihilosequentia:dust',
	E: 'rfd:dust_gen_tier_1'
  }
)
	event.shaped(
  Item.of('rfd:dust_gen_tier_3', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:iron_block',
	D: 'exnihilosequentia:dust',
	E: 'rfd:dust_gen_tier_2'
  }
)
	event.shaped(
  Item.of('rfd:dust_gen_tier_4', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:gold_block',
	D: 'exnihilosequentia:dust',
	E: 'rfd:dust_gen_tier_3'
  }
)
	event.shaped(
  Item.of('rfd:dust_gen_tier_5', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:diamond_block',
	D: 'exnihilosequentia:dust',
	E: 'rfd:dust_gen_tier_4'
  }
)
	event.shaped(
  Item.of('rfd:crushed_endstone_gen_tier_1', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:oak_log',
	D: 'exnihilosequentia:crushed_end_stone',
	E: 'cobblefordays:tier_3'
  }
)
	event.shaped(
  Item.of('rfd:crushed_endstone_gen_tier_2', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:stone',
	D: 'exnihilosequentia:crushed_end_stone',
	E: 'rfd:crushed_endstone_gen_tier_1'
  }
)
	event.shaped(
  Item.of('rfd:crushed_endstone_gen_tier_3', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:iron_block',
	D: 'exnihilosequentia:crushed_end_stone',
	E: 'rfd:crushed_endstone_gen_tier_2'
  }
)
	event.shaped(
  Item.of('rfd:crushed_endstone_gen_tier_4', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:gold_block',
	D: 'exnihilosequentia:crushed_end_stone',
	E: 'rfd:crushed_endstone_gen_tier_3'
  }
)
	event.shaped(
  Item.of('rfd:crushed_endstone_gen_tier_5', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:diamond_block',
	D: 'exnihilosequentia:crushed_end_stone',
	E: 'rfd:crushed_endstone_gen_tier_4'
  }
)
	event.shaped(
  Item.of('rfd:crushed_netherrack_gen_tier_1', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:oak_log',
	D: 'exnihilosequentia:crushed_netherrack',
	E: 'cobblefordays:tier_3'
  }
)
	event.shaped(
  Item.of('rfd:crushed_netherrack_gen_tier_2', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:stone',
	D: 'exnihilosequentia:crushed_netherrack',
	E: 'rfd:crushed_netherrack_gen_tier_1'
  }
)
	event.shaped(
  Item.of('rfd:crushed_netherrack_gen_tier_3', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:iron_block',
	D: 'exnihilosequentia:crushed_netherrack',
	E: 'rfd:crushed_netherrack_gen_tier_2'
  }
)
	event.shaped(
  Item.of('rfd:crushed_netherrack_gen_tier_4', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:gold_block',
	D: 'exnihilosequentia:crushed_netherrack',
	E: 'rfd:crushed_netherrack_gen_tier_3'
  }
)
	event.shaped(
  Item.of('rfd:crushed_netherrack_gen_tier_5', 1),
  [ 
    'ACA', 
    'BEB',
    'ADA'  
  ],
  {
    A: 'minecraft:stone_bricks', 
    B: 'minecraft:lava_bucket',
	C: 'minecraft:diamond_block',
	D: 'exnihilosequentia:crushed_netherrack',
	E: 'rfd:crushed_netherrack_gen_tier_4'
  }
)
	event.shaped(
  Item.of('minecraft:chest', 1),
  [ 
    'AAA', 
    'A A',
    'AAA'  
  ],
  {
    A: 'minecraft:oak_planks'
  }
)
	event.shaped(
  Item.of('industrialforegoing:pink_slime', 32), // arg 1: output
  [ 
    'AAA', 
    'ABA', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'mysticalagriculture:slime_essence', 
    B: 'ic2:uumatter'
  }
)
	event.shaped(
  Item.of('forbidden_arcanus:wax', 32), // arg 1: output
  [ 
    'AAA', 
    'ABA', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'mysticalagriculture:honey_essence', 
    B: 'occultism:tallow'
  }
)
// alchemistry
	event.shaped(
  Item.of('alchemistry:fusion_chamber_controller', 1), // arg 1: output
  [ 
    'ABA', 
    'BCB', // arg 2: the shape (array of strings)
    'ADA'  
  ],
  {
    A: 'mekaevolution:infinite_control_circuit', 
    B: 'thermalendergy:vibrating_core',  //arg 3: the mapping object
    C: 'thermalendergy:stellarium_block',
	D: 'mekanism:steel_casing'
  }
)
	event.shaped(
  Item.of('alchemistry:dissolver', 1), // arg 1: output
  [ 
    'ABA', 
    'BCB', // arg 2: the shape (array of strings)
    'ADA'  
  ],
  {
    A: 'mekaevolution:infinite_control_circuit', 
    B: 'thermalendergy:vibrating_core',  //arg 3: the mapping object
    C: 'alchemistry:fission_core',
	D: 'mekanism:steel_casing'
  }
)
	event.custom({
  "type": "alchemistry:fusion",
  "group": "fusion",
  "input1": {
    "item": "chemlib:mendelevium"
  },
  "input2": {
    "item": "chemlib:praseodymium"
  },
  "output": {
    "item": "mekaevolution:infinite_control_circuit"
  }
})
	event.custom({
  "type": "alchemistry:fission",
  "group": "fission",
  "input": {
    "item": "mekanismgenerators:fusion_reactor_frame"
  },
  "output1": {
    "item": "alchemistry:fusion_core"
  },
  "output2": {
    "item": "refinedstorage:machine_casing"
  }
})
	event.shaped(
  Item.of('alchemistry:reactor_casing', 1), // arg 1: output
  [ 
    'CBC', 
    'CAC', // arg 2: the shape (array of strings)
    'CBC'  
  ],
  {
    A: 'mekaevolution:infinite_control_circuit', 
    B: 'thermalendergy:vibrating_core',  //arg 3: the mapping object
    C: 'mekanism:sps_casing'
  }
)
	event.custom({
  "type": "alchemistry:fusion",
  "group": "fusion",
  "input1": {
    "item": "chemlib:molybdenum_metal_block"
  },
  "input2": {
    "item": "mekanism:sps_port"
  },
  "output": {
    "item": "rftoolsbase:machine_frame"
  }
})
// craft remove
    
	event.remove({id: 'twilightforest:uncrafting_table'})
	event.remove({id: 'botania:mushroom_0'})
    event.remove({id: 'botania:mushroom_1'})
    event.remove({id: 'botania:mushroom_2'})
    event.remove({id: 'botania:mushroom_3'})
    event.remove({id: 'botania:mushroom_4'})
    event.remove({id: 'botania:mushroom_5'})
    event.remove({id: 'botania:mushroom_6'})
    event.remove({id: 'botania:mushroom_7'})
    event.remove({id: 'botania:mushroom_8'})
    event.remove({id: 'botania:mushroom_9'})
    event.remove({id: 'botania:mushroom_10'})
    event.remove({id: 'botania:mushroom_11'})
    event.remove({id: 'botania:mushroom_12'})
    event.remove({id: 'botania:mushroom_13'})
    event.remove({id: 'botania:mushroom_14'})
    event.remove({id: 'botania:mushroom_15'})
    event.remove({id: 'ars_nouveau:novice_spell_book'})
    event.remove({output: 'ars_nouveau:sourcestone'})
    event.remove({id: /exnihilosequentia:sieve\/ens_.*/})
    event.remove({id: 'ironjetpacks:basic_coil'})
    event.remove({id: 'ironjetpacks:advanced_coil'})
    event.remove({id: 'ironjetpacks:ultimate_coil'})
    event.remove({id: 'ironjetpacks:elite_coil'})
    event.remove({id: 'ironfurnaces:furnaces/obsidian_furnace'})
    event.remove({id: 'ironfurnaces:furnaces/obsidian_furnace2'})
    event.remove({id: 'ironfurnaces:furnaces/diamond_furnace'})
    event.remove({id: 'ironfurnaces:upgrades/upgrade_diamond'})
    event.remove({id: 'ironfurnaces:upgrades/upgrade_obsidian'})
    event.remove({id: 'ironfurnaces:furnaces/netherite_furnace'})
    event.remove({id: 'ironfurnaces:upgrades/upgrade_netherite'})
    event.remove({id: 'exnihilosequentia:ens_wooden_crook'})
    event.remove({id: 'cobblefordays:tier_3'})
    event.remove({id: 'cobblefordays:tier_4'})
    event.remove({id: 'cobblefordays:tier_5'})
    event.remove({id: 'createchromaticreturn:refined_mixture_recipe'})
	event.remove({id: 'cobblefordays:tier_2'})
	event.remove({id: 'arsomega:alchemical_diamond_block'})
	event.remove({output: 'projecte:philosophers_stone'})
	event.remove({id: 'quark:tweaks/crafting/utility/chests/oak_chest_wood'})
	event.remove({output: 'thermal:machine_frame'})
	event.remove({output: 'industrialforegoing:machine_frame_pity'})
	event.remove({output: 'integrateddynamics:facade'})
	event.remove({output: 'industrialforegoing:machine_frame_simple'})
	event.remove({output: 'industrialforegoing:machine_frame_advanced'})
	event.remove({output: 'industrialforegoing:machine_frame_supreme'})
	event.remove({output: 'mekanismgenerators:fusion_reactor_frame'})
	event.remove({output: 'mekanismgenerators:fission_reactor_casing'})
	event.remove({output: 'mekanismgenerators:turbine_casing'})
	event.remove({output: 'mekanism:induction_casing'})
	event.remove({output: 'mekanism:steel_casing'})
	event.remove({output: 'mekanism:boiler_casing'})
	event.remove({output: 'mekanism:sps_casing'})
	event.remove({output: 'extendedcrafting:frame'})
	event.remove({output: 'extendedcrafting:black_iron_ingot'})
	event.remove({id: 'mysticalagriculture:machine_frame' })
	event.remove({output: 'rftoolsbase:machine_frame'})
	event.remove({output: 'refinedstorage:machine_casing'})
	event.remove({output: 'alchemistry:reactor_casing'})
	event.remove({output: 'ic2:machine_block'})
	event.remove({output: 'powah:dielectric_casing'})
	event.remove({output: 'powah:dielectric_paste'})
	event.remove({output: 'projecte:high_covalence_dust'})
	event.remove({output: 'compactvoidminers:void_miner'})
	event.remove({output: 'compactvoidminers:void_pump'})
	event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
	event.remove({id: 'create:crafting/materials/andesite_alloy'})
	event.remove({id: 'immersiveengineering:alloysmelter/brass'})
	event.remove({id: 'alltheores:brass_dust_from_alloy_blending'})
	event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'})
	event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'})
	event.remove({id: 'pneumaticcraft:pressure_tube'})
	event.remove({id: 'pneumaticcraft:printed_circuit_board'})
	event.remove({id: 'ic2:compressor'})
	event.remove({id: 'ic2:carbon_fiber'})
	event.remove({output: 'ic2:advanced_machine_block'})
	event.remove({id: 'ic2:stabilized_machine_block'})
	event.remove({id: 'refinedstorage:quartz_enriched_iron'})
	event.remove({id: 'ic2:stabilized_machine_block'})
	event.remove({id: 'refinedstorage:controller'})
	event.remove({output: 'dimpaintings:overworld_painting'})
	event.remove({output: 'mekanism:combiner'})
	event.remove({output: 'alchemistry:fusion_chamber_controller'})
	event.remove({output: 'mekanism:metallurgic_infuser'})
	event.remove({output: 'alchemistry:dissolver'})
	event.remove({output: 'alchemistry:fission_core'})
	event.remove({output: 'alchemistry:fusion_core'})
	event.remove({output: 'extractinator:extractinator'})
	event.remove({id: 'alltheores:steel_dust_from_alloy_blending'})
	event.remove({id: 'alltheores:invar_dust_from_alloy_blending'})
	event.remove({id: 'alltheores:signalum_dust_from_alloy_blending'})
	event.remove({id: 'alltheores:lumium_dust_from_alloy_blending'})
	event.remove({id: 'alltheores:enderium_dust_from_alloy_blending'})
	event.remove({id: 'alltheores:bronze_dust_from_alloy_blending'})
	event.remove({id: 'alltheores:electrum_dust_from_alloy_blending'})
	event.remove({id: 'alltheores:constantan_dust_from_alloy_blending'})
	event.remove({id: 'thermal_extra:soul_infused_dust'})
	event.remove({id: 'thermal_extra:shellite_dust'})
	event.remove({id: 'thermal_extra:twinite_dust'})
	event.remove({id: 'thermal_extra:dragonsteel_dust'})
	event.remove({id: 'alltheores:gold_plate'})
	event.remove({id: 'alltheores:brass_plate'})
	event.remove({id: 'alltheores:copper_plate'})
	event.remove({id: 'alltheores:constantan_plate'})
	event.remove({id: 'alltheores:invar_plate'})
	event.remove({id: 'alltheores:electrum_plate'})
	event.remove({id: 'alltheores:bronze_plate'})
	event.remove({id: 'alltheores:nickel_plate'})
	event.remove({id: 'alltheores:silver_plate'})
	event.remove({id: 'alltheores:lead_plate'})
	event.remove({id: 'alltheores:tin_plate'})
	event.remove({id: 'alltheores:zinc_plate'})
	event.remove({id: 'alltheores:enderium_plate'})
	event.remove({id: 'alltheores:lumium_plate'})
	event.remove({id: 'alltheores:signalum_plate'})
	event.remove({id: 'alltheores:prismalium_plate'})
	event.remove({id: 'alltheores:melodium_plate'})
	event.remove({id: 'alltheores:stellarium_plate'})
	event.remove({id: 'alltheores:aluminum_plate'})
	event.remove({id: 'alltheores:iron_plate'})
	event.remove({id: 'alltheores:iron_gear'})
	event.remove({id: 'alltheores:gold_gear'})
	event.remove({id: 'alltheores:copper_gear'})
	event.remove({id: 'alltheores:signalum_gear'})
	event.remove({id: 'alltheores:lumium_gear'})
	event.remove({id: 'alltheores:enderium_gear'})
	event.remove({id: 'alltheores:tin_gear'})
	event.remove({id: 'alltheores:lead_gear'})
	event.remove({id: 'alltheores:silver_gear'})
	event.remove({id: 'alltheores:nickel_gear'})
	event.remove({id: 'alltheores:bronze_gear'})
	event.remove({id: 'alltheores:invar_gear'})
	event.remove({id: 'alltheores:constantan_gear'})
	event.remove({id: 'pneumaticcraft:compressed_iron_gear'})
	event.remove({id: 'thermal_extra:parts/soul_infused_gear'})
	event.remove({id: 'thermal_extra:parts/shellite_gear'})
	event.remove({id: 'thermal_extra:parts/twinite_gear'})
	event.remove({id: 'thermal_extra:parts/dragonsteel_gear'})
	event.remove({id: 'thermalendergy:prismalium_gear'})
	event.remove({id: 'thermalendergy:melodium_gear'})
	event.remove({id: 'thermalendergy:stellarium_gear'})
	event.remove({id: 'forcecraft:force_gear'})
	event.remove({id: 'ic2:circuit_0'})
	event.remove({output: "resourcefulbees:waxed_machine_block"})
	event.remove({id: 'immersiveengineering:crafting/plate_gold_hammering'})
	event.remove({id: 'immersiveengineering:crafting/plate_brass_hammering'})
	event.remove({id: 'immersiveengineering:crafting/plate_constantan_hammering'})
	event.remove({id: 'jaopca:immersiveengineering.material_to_plate_hammer.invar'})
	event.remove({id: 'jaopca:immersiveengineering.material_to_plate_hammer.obsidian'})
	event.remove({id: 'immersiveengineering:crafting/plate_electrum_hammering'})
	event.remove({id: 'jaopca:immersiveengineering.material_to_plate_hammer.bronze'})
	event.remove({id: 'immersiveengineering:crafting/plate_nickel_hammering'})
	event.remove({id: 'immersiveengineering:crafting/plate_silver_hammering'})
	event.remove({id: 'immersiveengineering:crafting/plate_lead_hammering'})
	event.remove({id: 'jaopca:immersiveengineering.material_to_plate_hammer.tin'})
	event.remove({id: 'jaopca:immersiveengineering.material_to_plate_hammer.enderium'})
	event.remove({id: 'jaopca:immersiveengineering.material_to_plate_hammer.lumium'})
	event.remove({id: 'jaopca:immersiveengineering.material_to_plate_hammer.signalum'})
	event.remove({id: 'jaopca:immersiveengineering.material_to_plate_hammer.prismalium'})
	event.remove({id: 'jaopca:immersiveengineering.material_to_plate_hammer.melodium'})
	event.remove({id: 'jaopca:immersiveengineering.material_to_plate_hammer.stellarium'})
	event.remove({id: 'jaopca:immersiveengineering.material_to_plate_hammer.zinc'})
	event.remove({id: 'immersiveengineering:crafting/plate_aluminum_hammering'})
	event.remove({mod: 'miners'})
	event.shaped(
  Item.of('integrateddynamics:crystalized_menril_chunk', 3), // arg 1: output
  [ 
    '   ', 
    'BAB', // arg 2: the shape (array of strings)
    '   '  
  ],
  {
    A: 'create:experience_nugget', 
    B: 'immersiveengineering:plate_aluminum'
  }
)
	event.shaped(
  Item.of('extractinator:extractinator', 1), // arg 1: output
  [ 
    ' C ', 
    'BAB', // arg 2: the shape (array of strings)
    ' C '  
  ],
  {
    A: 'exmachinis:flux_sieve', 
    B: 'exnihilosequentia:netherite_mesh',
	C: 'forcecraft:force_gear'
  }
)
	event.smelting('chemlib:platinum_ingot', 'create:crushed_raw_platinum')
	
	//SIEVE
	event.custom({
    "type": "exnihilosequentia:compost",
    "input": {
        "item": "minecraft:oak_log"
    },
    "amount": 500
	})
	/* Mesh netherite */
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.10,
      "mesh": "netherite"
    },
	{
      "chance": 0.09,
      "mesh": "netherite"
    },
	{
      "chance": 0.08,
      "mesh": "netherite"
    },
	{
      "chance": 0.07,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": 'thermal:bitumen',
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.50,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "exnihilosequentia:crushed_netherrack"
  },
  "result": {
	"item": "minecraft:glowstone_dust",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.40,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": 'evilcraft:undead_leaves'
  },
  "result": {
	"item": 'hexerei:sage_seed',
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.40,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": 'evilcraft:undead_leaves'
  },
  "result": {
	"item": 'hexerei:witch_hazel_sapling',
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.40,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": 'evilcraft:undead_leaves'
  },
  "result": {
	"item": 'hexerei:mahogany_sapling',
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.40,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": 'evilcraft:undead_leaves'
  },
  "result": {
	"item": 'hexerei:willow_sapling',
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "minecraft:glowstone"
  },
  "result": {
	"item": "forcecraft:power_ore",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.4,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "minecraft:glowstone"
  },
  "result": {
	"item": 'forcecraft:pile_of_gunpowder',
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.4,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "minecraft:glowstone"
  },
  "result": {
	"item": 'forcecraft:claw',
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.03,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "exnihilosequentia:crushed_end_stone"
  },
  "result": {
	"item": "minecraft:ender_pearl",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.03,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "exnihilosequentia:crushed_end_stone"
  },
  "result": {
	"item": "minecraft:ender_eye",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.02,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "exnihilosequentia:crushed_end_stone"
  },
  "result": {
	"item": "minecraft:shulker_shell",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.02,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "exnihilosequentia:crushed_end_stone"
  },
  "result": {
	"item": "minecraft:chorus_fruit",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.03,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "allthecompressed:gravel_block_1x"
  },
  "result": {
	"item": "minecraft:ancient_debris",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "allthecompressed:gravel_block_1x"
  },
  "result": {
	"item": "mekanism:raw_osmium",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "allthecompressed:gravel_block_1x"
  },
  "result": {
	"item": "minecraft:raw_gold",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "allthecompressed:gravel_block_1x"
  },
  "result": {
	"item": "minecraft:raw_copper",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "allthecompressed:gravel_block_1x"
  },
  "result": {
	"item": "minecraft:raw_iron",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "allthecompressed:gravel_block_1x"
  },
  "result": {
	"item": "create:raw_zinc",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "allthecompressed:gravel_block_1x"
  },
  "result": {
	"item": "immersiveengineering:raw_uranium",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "allthecompressed:gravel_block_1x"
  },
  "result": {
	"item": "immersiveengineering:raw_aluminum",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "allthecompressed:gravel_block_1x"
  },
  "result": {
	"item": "thermal:raw_tin",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "allthecompressed:gravel_block_1x"
  },
  "result": {
	"item": "thermal:raw_lead",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "allthecompressed:gravel_block_1x"
  },
  "result": {
	"item": "thermal:raw_silver",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "netherite"
    }
  ],
  "input": {
    "item": "allthecompressed:gravel_block_1x"
  },
  "result": {
	"item": "thermal:raw_nickel",
  },
})
	/* Mesh string */
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 1,
      "mesh": "string"
    },
	{
      "chance": 1,
      "mesh": "string"
    },
    {
      "chance": 1,
      "mesh": "string"
    },
	{
      "chance": 0.95,
      "mesh": "string"
    },
    {
      "chance": 0.90,
      "mesh": "string"
    },
	{
      "chance": 0.85,
      "mesh": "string"
    },
    {
      "chance": 0.75,
      "mesh": "string"
    },
	{
      "chance": 0.60,
      "mesh": "string"
    },
    {
      "chance": 0.5,
      "mesh": "string"
    },
	{
      "chance": 0.4,
      "mesh": "string"
    },
    {
      "chance": 0.3,
      "mesh": "string"
    },
	{
      "chance": 0.2,
      "mesh": "string"
    },
    {
      "chance": 0.10,
      "mesh": "string"
    },
	{
      "chance": 0.05,
      "mesh": "string"
    },
    {
      "chance": 0.05,
      "mesh": "string"
    },
	{
      "chance": 0.05,
      "mesh": "string"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "exnihilosequentia:stone_pebble",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 1,
      "mesh": "string"
    },
    {
      "chance": 0.9,
      "mesh": "string"
    },
    {
      "chance": 0.8,
      "mesh": "string"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "minecraft:flint",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "string"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:melon_seeds",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "string"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:pumpkin_seeds",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "string"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:beetroot_seeds",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "string"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "immersiveengineering:seed",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.4,
      "mesh": "string"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:dandelion",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.4,
      "mesh": "string"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:poppy",
  },
})
	/* Mesh flint */
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.5,
      "mesh": "flint"
    },
    {
      "chance": 0.4,
      "mesh": "flint"
    },
    {
      "chance": 0.3,
      "mesh": "flint"
    },
    {
      "chance": 0.2,
      "mesh": "flint"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "exnihilosequentia:iron_pieces",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.5,
      "mesh": "flint"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "exnihilosequentia:copper_pieces",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.5,
      "mesh": "flint"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "exnihilosequentia:tin_pieces",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "flint"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:dark_oak_sapling",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "flint"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:oak_sapling",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "flint"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:spruce_sapling",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "flint"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:acacia_sapling",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "flint"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:jungle_sapling",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "flint"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:birch_sapling",
  },
})
	/* mesh iron */
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.5,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "exnihilosequentia:gold_pieces",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.5,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "exnihilosequentia:lead_pieces",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.5,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "exnihilosequentia:zinc_pieces",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.5,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "exnihilosequentia:aluminum_pieces",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.5,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "exnihilosequentia:silver_pieces",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "exnihilosequentia:nickel_pieces",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.09,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "minecraft:diamond",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "exnihilosequentia:grass_seeds",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "exnihilosequentia:mycelium_spores",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.7,
      "mesh": "iron"
    },
	{
      "chance": 0.65,
      "mesh": "iron"
    },
	{
      "chance": 0.6,
      "mesh": "iron"
    },
	{
      "chance": 0.55,
      "mesh": "iron"
    },
	{
      "chance": 0.5,
      "mesh": "iron"
    },
	{
      "chance": 0.45,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:coal",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:lapis_lazuli",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:amethyst_shard",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:redstone",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "exnihilosequentia:dust"
  },
  "result": {
	"item": "minecraft:clay_ball",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "exnihilosequentia:dust"
  },
  "result": {
	"item": "minecraft:bone_meal",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "iron"
    }
  ],
  "input": {
    "item": "exnihilosequentia:dust"
  },
  "result": {
	"item": "minecraft:clay_ball",
  },
})
	/* Mesh diamond */
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.03,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "minecraft:emerald",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "exnihilomekanism:osmium_pieces",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "exnihilosequentia:platinum_pieces",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "exnihilosequentia:uranium_pieces",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:cocoa_beans",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:potato",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:carrot",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:sweet_berries",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "minecraft:dirt"
  },
  "result": {
	"item": "minecraft:glow_berries",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:feather",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:cactus",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:sugar_cane",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:bamboo",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "tombstone:grave_dust",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "exnihilosequentia:dust"
  },
  "result": {
	"item": "minecraft:rotten_flesh",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "exnihilosequentia:dust"
  },
  "result": {
	"item": "minecraft:bone",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "exnihilosequentia:dust"
  },
  "result": {
	"item": "minecraft:gunpowder",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "exnihilosequentia:dust"
  },
  "result": {
	"item": "minecraft:string",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "exnihilosequentia:dust"
  },
  "result": {
	"item": "minecraft:arrow",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.03,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "exnihilosequentia:dust"
  },
  "result": {
	"item": "minecraft:slime_ball",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "exnihilosequentia:dust"
  },
  "result": {
	"item": "minecraft:spider_eye",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.01,
      "mesh": "diamond"
    }
  ],
  "input": {
    "item": "exnihilosequentia:dust"
  },
  "result": {
	"item": "minecraft:phantom_membrane",
  },
})
	/* Mesh emerald */
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.03,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  },
  "result": {
	"item": "minecraft:netherite_scrap",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "exnihilosequentia:crushed_netherrack"
  },
  "result": {
	"item": "minecraft:quartz",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "exnihilosequentia:crushed_netherrack"
  },
  "result": {
	"item": "minecraft:glowstone_dust",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.03,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "exnihilosequentia:crushed_netherrack"
  },
  "result": {
	"item": "minecraft:ghast_tear",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "exnihilosequentia:crushed_netherrack"
  },
  "result": {
	"item": "minecraft:nether_wart",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.05,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "exnihilosequentia:crushed_netherrack"
  },
  "result": {
	"item": "minecraft:blaze_rod",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.06,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "exnihilosequentia:crushed_netherrack"
  },
  "result": {
	"item": "minecraft:magma_cream",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:kelp",
  },
   "waterlogged":true
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:scute",
  },
   "waterlogged":true
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:glow_ink_sac",
  },
   "waterlogged":true
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:ink_sac",
  },
   "waterlogged":true
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:nautilus_shell",
  },
   "waterlogged":true
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.03,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:prismarine_crystals",
  },
   "waterlogged":true
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.03,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:sand"
  },
  "result": {
	"item": "minecraft:prismarine_shard",
  },
   "waterlogged":true
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.7,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:hay_block"
  },
  "result": {
	"item": "minecraft:mutton",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.4,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:hay_block"
  },
  "result": {
	"item": "minecraft:rabbit_hide",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.1,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:hay_block"
  },
  "result": {
	"item": "minecraft:rabbit_foot",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.5,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:hay_block"
  },
  "result": {
	"item": "minecraft:rabbit",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.5,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:hay_block"
  },
  "result": {
	"item": "minecraft:egg",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.7,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:hay_block"
  },
  "result": {
	"item": "minecraft:chicken",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.7,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:hay_block"
  },
  "result": {
	"item": "minecraft:porkchop",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.5,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:hay_block"
  },
  "result": {
	"item": "minecraft:leather",
  },
})
	event.custom({
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 0.8,
      "mesh": "emerald"
    }
  ],
  "input": {
    "item": "minecraft:hay_block"
  },
  "result": {
	"item": "minecraft:beef",
  },
})
	//Ars Nouveau
	event.custom(
	{
  "type": "ars_nouveau:enchanting_apparatus",
  "keepNbtOfReagent": false,
  "output": {
    "item": 'mysticalagradditions:neutronium_crux'
  },
  "pedestalItems": [
    {
      "item": 'mysticalagradditions:nether_star_crux'
    },
    {
      "item": 'mysticalagradditions:nitro_crystal_crux'
    },
    {
      "item": 'mysticalagradditions:dragon_egg_crux'
    },
    {
      "item": 'mysticalagradditions:gaia_spirit_crux'
    },
	{
	  "item": 'botanicadds:gaiasteel_block'
	},
	{
	  "item": 'kubejs:purple_sheet'
	},
	{
	  "item": 'kubejs:purple_sheet'
	}
  ],
  "reagent": [
    {
      "item": 'mekaevolution:infinite_control_circuit'
    }
  ],
  "sourceCost": 10000
})
	event.shaped(
  Item.of('ars_nouveau:novice_spell_book', 1), // arg 1: output
  [ 
    'ABB', 
    'GGC', // arg 2: the shape (array of strings)
    'DEF'  
  ],
  {
    A: 'elementalcraft:artificial_air_source_seed', 
    B: 'minecraft:paper',
	C: 'minecraft:iron_shovel',
	D: 'minecraft:iron_axe',
	E: 'minecraft:iron_pickaxe',
	F: 'minecraft:iron_sword',
	G: 'minecraft:leather'
  }
)
	event.shaped(
  Item.of('ars_nouveau:sourcestone', 64),
  [ 
    'BBB', 
    'BAB',
    'BBB'  
  ],
  {
    A: 'elementalcraft:natural_earth_source_seed', 
    B: 'minecraft:stone'
  }
)
	//botania
	event.recipes.botania.orechid_ignem("evilcraft:dark_ore","minecraft:netherrack",4500)
	event.remove({id: 'botania:fertilizer_dye'})
	event.shaped(
  Item.of('botania:fertilizer', 32), // arg 1: output
  [ 
    'ABB', 
    'BB ', // arg 2: the shape (array of strings)
    '   '  
  ],
  {
    A: 'naturesaura:depth_ingot', 
    B: 'minecraft:lime_dye'
  }
)
	//botanyPot
	event.remove({mod: 'botanypotstiers'})
	event.shaped(
  Item.of('botanypotstiers:elite_terracotta_botany_pot', 1), // arg 1: output
  [ 
    'B B', 
    ' A ', // arg 2: the shape (array of strings)
    'B B'  
  ],
  {
    A: 'botanypots:terracotta_botany_pot', 
    B: 'createchromaticreturn:chromatic_compound'
  }
)
	event.shaped(
  Item.of('botanypotstiers:elite_terracotta_hopper_botany_pot', 1), // arg 1: output
  [ 
    'B B', 
    ' A ', // arg 2: the shape (array of strings)
    'B B'  
  ],
  {
    A: 'botanypots:terracotta_hopper_botany_pot', 
    B: 'createchromaticreturn:chromatic_compound'
  }
)
	event.shaped(
  Item.of('botanypotstiers:elite_terracotta_hopper_botany_pot', 1), // arg 1: output
  [ 
    '   ', 
    ' A ', // arg 2: the shape (array of strings)
    ' B '  
  ],
  {
    A: 'botanypotstiers:elite_terracotta_botany_pot', 
    B: 'minecraft:hopper'
  }
)
	event.shaped(
  Item.of('botanypotstiers:ultra_terracotta_hopper_botany_pot', 1), // arg 1: output
  [ 
    'B B', 
    ' A ', // arg 2: the shape (array of strings)
    'B B'  
  ],
  {
    A: 'botanypotstiers:elite_terracotta_hopper_botany_pot', 
    B: 'ic2:basic_field_expansion_pad_upgrade'
  }
)
	event.shaped(
  Item.of('botanypotstiers:ultra_terracotta_botany_pot', 1), // arg 1: output
  [ 
    'B B', 
    ' A ', // arg 2: the shape (array of strings)
    'B B'  
  ],
  {
    A: 'botanypotstiers:elite_terracotta_botany_pot', 
    B: 'ic2:basic_field_expansion_pad_upgrade'
  }
)
	event.shaped(
  Item.of('botanypotstiers:ultra_terracotta_hopper_botany_pot', 1), // arg 1: output
  [ 
    '   ', 
    ' A ', // arg 2: the shape (array of strings)
    ' B '  
  ],
  {
    A: 'botanypotstiers:ultra_terracotta_botany_pot', 
    B: 'minecraft:hopper'
  }
)
	event.shaped(
  Item.of('botanypotstiers:creative_terracotta_botany_pot', 1), // arg 1: output
  [ 
    'B B', 
    ' A ', // arg 2: the shape (array of strings)
    'B B'  
  ],
  {
    A: 'botanypotstiers:ultra_terracotta_botany_pot', 
    B: 'powah:ender_core'
  }
)
	event.shaped(
  Item.of('botanypotstiers:creative_terracotta_hopper_botany_pot', 1), // arg 1: output
  [ 
    'B B', 
    ' A ', // arg 2: the shape (array of strings)
    'B B'  
  ],
  {
    A: 'botanypotstiers:ultra_terracotta_hopper_botany_pot', 
    B: 'powah:ender_core'
  }
)
	event.shaped(
  Item.of('botanypotstiers:creative_terracotta_hopper_botany_pot', 1), // arg 1: output
  [ 
    ' B ', 
    ' A ', // arg 2: the shape (array of strings)
    ' B '  
  ],
  {
    A: 'botanypotstiers:creative_terracotta_botany_pot', 
    B: 'minecraft:hopper'
  }
)
	event.shaped(
  Item.of('mekanism:pellet_antimatter', 4), // arg 1: output
  [ 
    'AAA', 
    'AAA', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'mysticalagriculture:antimatter_essence'
  }
)
	event.shaped(
  Item.of('forbidden_arcanus:eternal_stella', 1), // arg 1: output
  [ 
    'AAA', 
    'AAA', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'mysticalagriculture:forbidden_essence'
  }
)
	event.shaped(
  Item.of('forbidden_arcanus:arcane_crystal', 8), // arg 1: output
  [ 
    'AAA', 
    '   ', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'mysticalagriculture:forbidden_essence'
  }
)
	event.shaped(
  Item.of('occultism:iesnium_ingot', 4), // arg 1: output
  [ 
    'AAA', 
    ' A ', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'mysticalagriculture:occultist_essence'
  }
)
	event.shaped(
  Item.of('occultism:afrit_essence', 2), // arg 1: output
  [ 
    'AAA', 
    'AAA', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'mysticalagriculture:occultist_essence'
  }
)
	event.shaped(
  Item.of('occultism:spirit_attuned_gem', 6), // arg 1: output
  [ 
    'AAA', 
    '   ', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'mysticalagriculture:occultist_essence'
  }
)
	event.shaped(
  Item.of('rftoolsbase:dimensionalshard_overworld', 4), // arg 1: output
  [ 
    'AAA', 
    '   ', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'mysticalagriculture:dimensional_essence'
  }
)
	event.shaped(
  Item.of('rftoolsdim:uncommon_lost_knowledge', 2), // arg 1: output
  [ 
    'AAA', 
    ' A ', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'mysticalagriculture:dimensional_essence'
  }
)
	event.shaped(
  Item.of('armorplus:ender_dragon_scale', 1), // arg 1: output
  [ 
    'BCB', 
    'BAB', // arg 2: the shape (array of strings)
    'BBB'  
  ],
  {
    A: 'mysticalagriculture:dimensional_essence',
	B: 'occultism:afrit_essence',
	C: 'minecraft:dragon_head'
  }
)
	event.shaped(
  Item.of('armorplus:guardian_scale', 1), // arg 1: output
  [ 
    'BCB', 
    'BAB', // arg 2: the shape (array of strings)
    'BBB'  
  ],
  {
    A: 'mysticalagriculture:dimensional_essence',
	B: 'occultism:afrit_essence',
	C:  'minecraft:guardian_spawn_egg'
	}
)
	event.shaped(
  Item.of('armorplus:wither_bone', 1), // arg 1: output
  [ 
    'BCB', 
    'BAB', // arg 2: the shape (array of strings)
    'BBB'  
  ],
  {
    A: 'mysticalagriculture:dimensional_essence',
	B: 'occultism:afrit_essence',
	C: 'mysticalagradditions:nether_star_crux'
  }
)
	event.shaped(
  Item.of('ars_nouveau:source_gem', 8), // arg 1: output
  [ 
    'AAA', 
    ' A ', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'mysticalagriculture:wizard_essence'
  }
)
	event.shaped(
  Item.of('ars_nouveau:abjuration_essence', 2), // arg 1: output
  [ 
    'A  ', 
    '   ', // arg 2: the shape (array of strings)
    '  A'  
  ],
  {
    A: 'mysticalagriculture:wizard_essence'
  }
)
	event.shaped(
  Item.of('ars_nouveau:conjuration_essence', 2), // arg 1: output
  [ 
    '  A', 
    '   ', // arg 2: the shape (array of strings)
    'A  '  
  ],
  {
    A: 'mysticalagriculture:wizard_essence'
  }
)
	event.shaped(
  Item.of('ars_nouveau:air_essence', 2), // arg 1: output
  [ 
    ' A ', 
    '   ', // arg 2: the shape (array of strings)
    ' A '  
  ],
  {
    A: 'mysticalagriculture:wizard_essence'
  }
)
	event.shaped(
  Item.of('ars_nouveau:earth_essence', 2), // arg 1: output
  [ 
    'A  ', 
    '   ', // arg 2: the shape (array of strings)
    'A  '  
  ],
  {
    A: 'mysticalagriculture:wizard_essence'
  }
)
	event.shaped(
  Item.of('ars_nouveau:fire_essence', 2), // arg 1: output
  [ 
    '  A', 
    '   ', // arg 2: the shape (array of strings)
    '  A'  
  ],
  {
    A: 'mysticalagriculture:wizard_essence'
  }
)
	event.shaped(
  Item.of('ars_nouveau:manipulation_essence', 2), // arg 1: output
  [ 
    '   ', 
    'A A', // arg 2: the shape (array of strings)
    '   '  
  ],
  {
    A: 'mysticalagriculture:wizard_essence'
  }
)
	event.shaped(
  Item.of('ars_nouveau:water_essence', 2), // arg 1: output
  [ 
    'A  ', 
    ' A ', // arg 2: the shape (array of strings)
    '   '  
  ],
  {
    A: 'mysticalagriculture:wizard_essence'
  }
)
	event.shaped(
  Item.of('arsomega:demonic_crystal', 2), // arg 1: output
  [ 
    'A A', 
    ' A ', // arg 2: the shape (array of strings)
    '   '  
  ],
  {
    A: 'mysticalagriculture:wizard_essence'
  }
)
	event.shaped(
  Item.of('arsomega:demonic_gem', 2), // arg 1: output
  [ 
    'A A', 
    ' A ', // arg 2: the shape (array of strings)
    'A A'  
  ],
  {
    A: 'mysticalagriculture:wizard_essence'
  }
)
event.recipes.botanypots.crop('mysticalagriculture:antimatter_seeds', ["crux"], 1000, 1, { block: 'mysticalagriculture:antimatter_crop' },[{output: 'mysticalagriculture:antimatter_essence', chance: 100, maxRolls: 2, }])
event.recipes.botanypots.crop('mysticalagriculture:forbidden_seeds', ["crux"], 1000, 1, { block: 'mysticalagriculture:forbidden_crop' },[{output: 'mysticalagriculture:forbidden_essence', chance: 100, maxRolls: 2, }])
event.recipes.botanypots.crop('mysticalagriculture:occultist_seeds', ["crux"], 1000, 1, { block: 'mysticalagriculture:occultist_crop' },[{output: 'mysticalagriculture:occultist_essence', chance: 100, maxRolls: 2, }])
event.recipes.botanypots.crop('mysticalagriculture:dimensional_seeds', ["crux"], 1000, 1, { block: 'mysticalagriculture:dimensional_crop' },[{output: 'mysticalagriculture:dimensional_essence', chance: 100, maxRolls: 2, }])
event.recipes.botanypots.crop('mysticalagriculture:wizard_seeds', ["crux"], 1000, 1, { block: 'mysticalagriculture:wizard_crop' },[{output: 'mysticalagriculture:wizard_essence', chance: 100, maxRolls: 2, }])

	event.recipes.botanypots.soil(
        'mysticalagradditions:neutronium_crux', // the item that this soil is attached to
        { block: 'mysticalagradditions:neutronium_crux' }, // display block
        ["crux"], // categories that this soil provides
        100 // growth ticks that this soil will provide, set to -1 for no modifier
)
	//Create
	event.remove({id: 'createchromaticreturn:generator_recipe'})
	event.remove({id: 'createchromaticreturn:creative_cake_recipe'})
	event.remove({id: 'createchromaticreturn:motor_recipe'})
	event.custom({
	  "type": "create:deploying",
	  "ingredients": [
		{
		  "item": 'minecraft:oak_sapling'
		},
		{
		  "item": 'forcecraft:force_gem'
		}
	  ],
	  "results": [
		{
		  "item": 'forcecraft:force_sapling'
		}
	  ]
	})
	//elementalcraft
	event.remove({output: 'elementalcraft:contained_crystal'})
	//evilcraft
	event.remove({output: 'evilcraft:blood_infuser'})
	event.shaped(
  Item.of('evilcraft:blood_infuser', 1), // arg 1: output
  [ 
    'BBB', 
    'BAB', // arg 2: the shape (array of strings)
    'BBB'  
  ],
  {
    A: 'botania:gaia_ingot', 
    B: 'create:fluid_tank'
  }
)
	//extendedCrafting
	event.remove({id: 'extendedcrafting:deuterium_singularity'})
	event.remove({id: 'extendedcrafting:tritium_singularity'})
	event.remove({id: 'extendedcrafting:antimatter_singularity'})
	event.custom(
	{
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 500,
  "ingredient": {
    "item": 'kubejs:pellet_deuterium'
  },
  "catalyst": {
    "item": "extendedcrafting:ender_catalyst"
  },
  "result": {
		'type': 'forge:nbt',
					'item': 'extendedcrafting:singularity',
					'nbt': {
						'Id': 'extendedcrafting:deuterium'
						},
    }
})
	event.custom(
	{
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 1000,
  "ingredient": {
    "item": 'mekanism:pellet_antimatter'
  },
  "catalyst": {
    "item": "extendedcrafting:ender_catalyst"
  },
  "result": {
		'type': 'forge:nbt',
					'item': 'extendedcrafting:singularity',
					'nbt': {
						'Id': 'extendedcrafting:antimatter'
						},
    }
})
	event.custom(
	{
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 500,
  "ingredient": {
    "item": 'kubejs:pellet_tritium'
  },
  "catalyst": {
    "item": "extendedcrafting:ender_catalyst"
  },
  "result": {
		'type': 'forge:nbt',
					'item': 'extendedcrafting:singularity',
					'nbt': {
						'Id': 'extendedcrafting:tritium'
						},
    }
})
	event.shaped(
  Item.of('extendedcrafting:black_iron_ingot', 1),
  [ 
    ' B ', 
    'BAB',
    ' B '  
  ],
  {
    A: 'resourcefulbees:wither_honeycomb_block', 
    B: 'minecraft:iron_ingot'
  }
)
	event.shaped(
  Item.of('extendedcrafting:frame', 1),
  [ 
    ' B ', 
    'BAB',
    ' B '  
  ],
  {
    A: 'rftoolspower:cell3', 
    B: 'rftoolsbuilder:space_chamber'
  }
)
	//ForbiddenArcanus
	event.remove({id: 'forbidden_arcanus:arcane_polished_darkstone'})
	event.shaped(
  Item.of('forbidden_arcanus:arcane_polished_darkstone', 8),
  [ 
    'BCB', 
    'CAC',
    'BCB'  
  ],
  {
    A: 'forbidden_arcanus:deorum_block', 
    B: 'arsomega:arcane_clay_block',
	C: 'forbidden_arcanus:polished_darkstone'
  }
)
	//forcecraft
	event.remove({output: 'naturesaura:gold_fiber'})
	event.remove({id: 'forcecraft:transmutation/force_sapling'})
	event.shaped(
  Item.of('naturesaura:gold_fiber', 64),
  [ 
    ' B ', 
    'BAB',
    ' C '  
  ],
  {
    A: 'forcecraft:force_engine', 
    B: 'forcecraft:heat_core',
	  C: 'forcecraft:time_torch'
  }
)
	//Gobber
  event.remove({id: 'gobber2:gobber2_ingot'})
  event.shaped(
    Item.of('gobber2:gobber2_ingot', 3),
    [ 
      'AB ', 
      'DC ',
      '   '  
    ],
    {
      A: 'ic2:pulsating_quartz', 
      B: 'minecraft:diamond',
      C: 'minecraft:gold_ingot',
      D: 'gobber2:gobber2_glob'
    }
  )
	event.replaceInput(
    { output: 'gobber2:gobber2_ingot_nether' },
    'minecraft:netherite_scrap',
    'mekanism:dirty_netherite_scrap')
	event.replaceInput(
    { output: 'gobber2:gobber2_ingot_end' },
    'minecraft:chorus_flower',
    'rftoolsdim:legendary_essence')
	//hexerei
	event.custom({
  "type": "hexerei:mixingcauldron",
  "liquid": {
    "fluid": "evilcraft:poison"
  },
  "ingredients": [
    {
      "item": "hexerei:infused_fabric"
    },
    {
      "item": 'elementalcraft:inertcrystal_block'
    },
    {
      "item": 'elementalcraft:inertcrystal_block'
    },
    {
      "item": 'elementalcraft:inertcrystal_block'
    },
    {
      "item": 'elementalcraft:inertcrystal_block'
    },
    {
      "item": 'hexerei:blood_sigil'
    },
    {
      "item": 'hexerei:crow_ankh_amulet'
    },
    {
      "item": 'twilightforest:magic_beans'
    }
  ],
  "output": {
    "item": 'elementalcraft:contained_crystal',
    "count": 64
  },
  "liquidOutput": {
    "fluid": "minecraft:water"
  },
  "fluidLevelsConsumed": 2000
})
	event.replaceInput(
    { output: 'hexerei:mixing_cauldron' },
    "minecraft:torch",
    'evilcraft:promise_acceptor_diamond')
	//ic2
	event.remove({id: 'ic2:empty_quantum_armor_chestplate'})
  event.remove({id: 'ic2:empty_quantum_armor_leggings'})
  event.remove({id: 'ic2:empty_quantum_armor_boots'})
  event.remove({id: 'ic2:empty_quantum_armor_helmet'})
  event.remove({id: 'ic2:normal_quantum_armor_chestplate'})
  event.remove({id: 'ic2:normal_quantum_armor_leggings'})
  event.remove({id: 'ic2:normal_quantum_armor_boots'})
  event.remove({id: 'ic2:normal_quantum_armor_helmet'})
  event.shaped(
  Item.of('ic2:compressor', 1), // arg 1: output
  [ 
    'ADA', 
    'ACA', // arg 2: the shape (array of strings)
    'ABA'  
  ],
  {
    A: 'pneumaticcraft:compressed_stone', 
    B: 'ic2:circuit',  //arg 3: the mapping object
    C: 'ic2:machine_block',
	D: 'pneumaticcraft:printed_circuit_board'
  }
)
event.shaped(
  Item.of('ic2:ingot_advanced_alloy', 2), // arg 1: output
  [ 
    'AAA', 
    'BBB', // arg 2: the shape (array of strings)
    'CCC'  
  ],
  {
    A: 'ic2:ingot_refined_iron', 
    B: 'minecraft:copper_ingot',  //arg 3: the mapping object
    C: 'immersiveengineering:ingot_aluminum'
  }
)
	event.shaped(
  Item.of('ic2:carbon_fiber', 4), // arg 1: output
  [ 
    'AAA', 
    'AAA', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'ic2:dust_coal'
  }
)
	event.shaped(
  Item.of('ic2:advanced_machine_block', 1), // arg 1: output
  [ 
    'DAD', 
    'BCB', // arg 2: the shape (array of strings)
    'DAD'  
  ],
  {
    A: 'ic2:carbon_plate',
	B: 'ic2:plate_advanced_alloy',
	C: 'ic2:machine_block',
	D: 'ic2:advanced_circuit'
  }
)
	event.shaped(
  Item.of('ic2:stabilized_machine_block', 1), // arg 1: output
  [ 
    'DAD', 
    'BCB', // arg 2: the shape (array of strings)
    'DAD'  
  ],
  {
    A: 'ic2:magnet',
	B: 'thermal:silver_ingot',
	C: 'ic2:advanced_machine_block',
	D: 'ic2:complex_circuit'
  }
)
event.shaped(
  Item.of('ic2:quantum_suit_boots', 1), // arg 1: output
  [ 
    '   ', 
    'BAB', // arg 2: the shape (array of strings)
    'DCD'  
  ],
  {
  A: 'ic2:nano_suit_boots',
	B: 'ic2:plate_iridium',
	C: 'ic2:lapatron_crystal',
	D: 'mekanism:pellet_polonium'
  }
)
event.shaped(
  Item.of('ic2:quantum_suit_leggings', 1), // arg 1: output
  [ 
    'ECE', 
    'BAB', // arg 2: the shape (array of strings)
    'D D'  
  ],
  {
  A: 'ic2:nano_suit_leggings',
	B: 'ic2:plate_iridium',
	C: 'ic2:lapatron_crystal',
	D: 'mekanism:pellet_polonium',
  E: 'ic2:machine_block'
  }
)
event.shaped(
  Item.of('ic2:quantum_suit_helmet', 1), // arg 1: output
  [ 
    ' A ', 
    'BCB', // arg 2: the shape (array of strings)
    'DED'  
  ],
  {
  A: 'ic2:nano_suit_helmet',
	B: 'ic2:plate_iridium',
	C: 'ic2:lapatron_crystal',
	D: 'mekanism:pellet_polonium',
  E: 'ic2:reinforced_glass'
  }
)
event.shaped(
  Item.of('ic2:quantum_suit_chestplate', 1), // arg 1: output
  [ 
    'DAD', 
    'BCB', // arg 2: the shape (array of strings)
    'BDB'  
  ],
  {
  A: 'ic2:nano_suit_chestplate',
	B: 'ic2:plate_iridium',
	C: 'ic2:lapatron_crystal',
	D: 'mekanism:pellet_polonium',
  }
)
	//immersiveengineering
	event.custom({"type":"immersiveengineering:mixer","energy":1600,"fluid":{"amount":1000,"tag":'minecraft:water'},"inputs":[{"item":'thermal:bitumen'}],"result":{"amount":250,"fluid":'pneumaticcraft:oil'}})
	//blast furnace//
	event.recipes.immersiveengineeringBlastFurnace('create:andesite_alloy', 'allthecompressed:andesite_block_1x')
	event.recipes.immersiveengineeringBlastFurnace('create:brass_ingot', 'create:andesite_alloy')
	//metal press//
	event.recipes.immersiveengineeringMetalPress('pneumaticcraft:ingot_iron_compressed', 'createchromaticreturn:glowing_ingot', 'immersiveengineering:mold_plate')
    event.shaped(
  Item.of("immersiveengineering:hammer", 1), // arg 1: output
  [ 
    ' CA', 
    ' BC', // arg 2: the shape (array of strings)
    'B  '  
  ],
  {
    A: 'minecraft:string',
	B: 'minecraft:stick',
	C: 'minecraft:netherite_scrap',
  }
)
event.remove({id: 'immersiveengineering:crafting/hammer'})
	//industrialforegoing
	event.recipes.thermal.smelter('industrialforegoing:machine_frame_pity', ['thermal:machine_frame', 'thermal:upgrade_augment_3', 'ic2:complex_circuit'])
	event.recipes.thermal.smelter('ic2:magnet', ['ic2:dust_rare_earth', 'ic2:ingot_refined_iron', 'minecraft:iron_ingot'])
	event.recipes.thermal.smelter('ic2:circuit', ['ic2:rubber', 'ic2:ingot_refined_iron'])
	event.custom({
		"input": [
		  {
			"item": 'refinedstorage:advanced_processor'
		  },
		  {
			"item": 'refinedstorage:advanced_processor'
		  },
		  {
			"tag": 'forge:plastic'
		  },
		  {
			"tag": 'forge:plastic'
		  },
		  {
			"item": 'thermal:obsidian_glass'
		  },
		  {
			"item": 'industrialforegoing:machine_frame_pity'
		  },
		  {
			"item": 'thermal:obsidian_glass'
		  }
		],
		"inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:1000}",
		"processingTime": 100,
		"output": {
		  "item": "industrialforegoing:machine_frame_simple",
		  "count": 1
		},
		"type": "industrialforegoing:dissolution_chamber"
	  })
	event.custom({
		"input": [
		  {
			"item": 'extrastorage:neural_processor'
		  },
		  {
			"item": 'extrastorage:neural_processor'
		  },
		  {
			"tag": 'forge:plastic'
		  },
		  {
			"tag": 'forge:plastic'
		  },
		  {
			"item": 'industrialforegoing:pink_slime_ingot'
		  },
		  {
			"item": 'industrialforegoing:machine_frame_simple'
		  },
		  {
			"item": 'industrialforegoing:pink_slime_ingot'
		  }
		],
		"inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:1000}",
		"processingTime": 100,
		"output": {
		  "item": "industrialforegoing:machine_frame_advanced",
		  "count": 1
		},
		"type": "industrialforegoing:dissolution_chamber"
	  })
	event.custom({
		"input": [
		  {
			"item": 'rebornstorage:super_advanced_processor'
		  },
		  {
			"item": 'rebornstorage:super_advanced_processor'
		  },
		  {
			"tag": 'forge:plastic'
		  },
		  {
			"tag": 'forge:plastic'
		  },
		  {
			"item": 'thermalendergy:stellarium_ingot'
		  },
		  {
			"item": 'industrialforegoing:machine_frame_advanced'
		  },
		  {
			"item": 'thermalendergy:stellarium_ingot'
		  }
		],
		"inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:100}",
		"processingTime": 100,
		"output": {
		  "item": "industrialforegoing:machine_frame_supreme",
		  "count": 1
		},
		"type": "industrialforegoing:dissolution_chamber"
	  })
	//mekanism
	event.remove({id: 'mekanism:processing/lategame/antimatter/from_pellet'})
	event.custom({"type":"mekanism:oxidizing","input":{"ingredient":{"item":"mekanism:pellet_antimatter"}},"output":{"amount":250,"gas":"mekanism:antimatter"}})
	event.custom({"type":"mekanism:nucleosynthesizing","duration":1250,"gasInput":{"amount":5000,"gas":"mekanism:antimatter"},"itemInput":{"ingredient":{"item":"mekanism:hdpe_sheet"}},"output":{"item":"kubejs:purple_sheet"}})
	event.custom({"type":"mekanism:nucleosynthesizing","duration":1250,"gasInput":{"amount":100,"gas":"mekanismgenerators:tritium"},"itemInput":{"ingredient":{"item":'mysticalagradditions:insanium_essence'}},"output":{"item":'kubejs:pellet_tritium'}})
	event.custom({"type":"mekanism:nucleosynthesizing","duration":1250,"gasInput":{"amount":100,"gas":"mekanismgenerators:deuterium"},"itemInput":{"ingredient":{"item":'mekanism:dust_fluorite'}},"output":{"item":'kubejs:pellet_deuterium'}})
	event.custom({"type":"mekanism:evaporating","input":{"amount":10,"fluid":'mekanism:lithium'},"output":{"amount":1,"fluid":'createchromaticreturn:refined_mixture'}})
	event.recipes.mekanismCombining('mekanism:steel_casing', 'mekanism:pellet_antimatter', 'refinedstorage:machine_casing')
	event.recipes.mekanismCombining('mekanismgenerators:fusion_reactor_frame','rebornstorage:multiblock_frame','mekanism:pellet_antimatter')
	event.recipes.mekanismCombining('industrialforegoing:machine_frame_supreme','industrialforegoing:machine_frame_advanced','thermalendergy:stellarium_ingot')
	event.recipes.mekanismCombining('refinedstorage:machine_casing','allthecompressed:silver_block_1x','refinedstorage:quartz_enriched_iron_block')
	event.recipes.mekanismCombining('4x powah:dielectric_paste','industrialforegoing:plastic','thermal:tar')
	event.recipes.mekanismCombining('alchemistry:fission_core','mekanismgenerators:control_rod_assembly','mekaevolution:infinite_control_circuit')
	event.replaceInput(
    { output: 'mekanismgenerators:heat_generator' },
    "minecraft:copper_ingot",
    'mekanism:basic_control_circuit')
	event.shaped(
  Item.of('mekanism:combiner', 1), // arg 1: output
  [ 
    'ABA', 
    'BCB', // arg 2: the shape (array of strings)
    'ADA'  
  ],
  {
    A: 'mekaevolution:infinite_control_circuit', 
    B: 'mekanism:pellet_plutonium',  //arg 3: the mapping object
    C: 'alchemistry:fusion_chamber_controller',
	D: 'mekanism:steel_casing'
  }
)
    event.shaped(
  Item.of('mekanismgenerators:fission_reactor_casing', 4), // arg 1: output
  [ 
    ' B ', 
    'BAB', // arg 2: the shape (array of strings)
    ' B '  
  ],
  {
    A: 'mekanism:steel_casing', 
    B: 'ic2:plating_containment'  //arg 3: the mapping object
  }
)
event.shaped(
  Item.of('mekanism:sps_casing', 64), // arg 1: output
  [ 
    ' B ', 
    'BAB', // arg 2: the shape (array of strings)
    ' B '  
  ],
  {
    A: 'mysticalagradditions:neutronium_crux', 
    B: 'mekanismgenerators:fission_reactor_casing'  //arg 3: the mapping object
  }
)
    event.shaped(
  Item.of('mekanismgenerators:turbine_casing', 4), // arg 1: output
  [ 
    ' B ', 
    'BAB', // arg 2: the shape (array of strings)
    ' B '  
  ],
  {
    B: 'pneumaticcraft:compressed_iron_block', 
    A: 'mekanismgenerators:turbine_blade'  //arg 3: the mapping object
  }
)
    event.shaped(
  Item.of('mekanism:boiler_casing', 4), // arg 1: output
  [ 
    ' B ', 
    'BAB', // arg 2: the shape (array of strings)
    ' B '  
  ],
  {
    A: 'allthecompressed:steel_block_1x', 
    B: 'ic2:steam_vent'  //arg 3: the mapping object
  }
)
    event.shaped(
  Item.of('mekanism:induction_casing', 4), // arg 1: output
  [ 
    ' B ', 
    'BAB', // arg 2: the shape (array of strings)
    ' B '  
  ],
  {
    A: 'mekanism:steel_casing', 
    B: 'technobauble:flux_core'  //arg 3: the mapping object
  }
)
    event.shaped(
  Item.of('mekanism:metallurgic_infuser', 1), // arg 1: output
  [ 
    'CBC', 
    'BAB', // arg 2: the shape (array of strings)
    'CBC'  
  ],
  {
    A: 'mekanism:steel_casing', 
    B: 'allthecompressed:osmium_block_2x',
    C: 'powah:nitro_crystal_block'
  }
)
	//Mystical agriculture
	event.remove({output: 'mysticalagriculture:infusion_altar'})
  event.remove({id: 'mysticalagriculture:seed/infusion/rubber'})
  event.remove({id: 'mysticalagriculture:prosperity_ingot'})
  event.remove({id: 'jaopca:thermal_expansion.dust_to_material.prosperity'})
  event.remove({id: 'jaopca:immersiveengineering.dust_to_material.prosperity'})
  event.remove({id: 'jaopca:immersiveengineering.dust_to_material_smelter.prosperity'})
  event.remove({id: 'jaopca:immersiveengineering.ore_to_ingot.prosperity'})
  event.remove({id: 'jaopca:thermal_expansion.create_crushed_ore_to_material.prosperity'})
  event.remove({id: 'jaopca:thermal_expansion.ore_to_material.prosperity'})
  event.remove({id: 'jaopca:dusts.to_material_blasting.prosperity'})
  event.remove({id: 'jaopca:dusts.to_material.prosperity'})
  event.remove({id: 'jaopca:create.crushed_to_material_blasting.prosperity'})
  event.remove({id: 'jaopca:create.crushed_to_material.prosperity'})
  event.remove({id: 'jaopca:create.crushed_to_material_smelting.prosperity'})
	event.shaped(
    Item.of('mysticalagriculture:prosperity_ingot', 1),
    [ 
      ' B ', 
      'BAB',
      ' B '  
    ],
    {
      A: 'occultism:iesnium_ingot', 
      B: 'mysticalagriculture:prosperity_shard'
    }
  )
	event.shaped(
    Item.of('mysticalagriculture:rubber_seeds', 1),
    [ 
      'CBD', 
      'BAB',
      'FBE'  
    ],
    {
      A: 'mysticalagriculture:prosperity_seed_base', 
      B: 'mysticalagriculture:imperium_block',
      C: 'thermal:rubber_block',
      D: 'ic2:rubber',
      E: 'pneumaticcraft:plastic',
      F: 'industrialforegoing:plastic'
    }
  )
  event.shaped(
    Item.of('mysticalagriculture:rubber_seeds', 1),
    [ 
      'CBD', 
      'BAB',
      'FBE'  
    ],
    {
      A: 'mysticalagriculture:prosperity_seed_base', 
      B: 'mysticalagriculture:imperium_block',
      C: 'thermal:rubber_block',
      D: 'ic2:rubber',
      E: 'pneumaticcraft:plastic',
      F: 'industrialforegoing:plastic'
    }
  )
  event.shaped(
    Item.of('ic2:rubber', 8),
    [ 
      'AAA', 
      '   ',
      'AAA'  
    ],
    {
      A: 'mysticalagriculture:rubber_essence'
    }
  )
  event.shaped(
    Item.of('thermal:rubber', 8),
    [ 
      'AAA', 
      'A A',
      'AAA'  
    ],
    {
      A: 'mysticalagriculture:rubber_essence'
    }
  )
  event.shaped(
    Item.of('pneumaticcraft:plastic', 8),
    [ 
      'AAA', 
      'AAA',
      'AAA'  
    ],
    {
      A: 'mysticalagriculture:rubber_essence'
    }
  )
  event.shaped(
    Item.of('industrialforegoing:dryrubber', 8),
    [ 
      'AAA', 
      ' A ',
      'AAA'  
    ],
    {
      A: 'mysticalagriculture:rubber_essence'
    }
  )
  event.shaped(
  Item.of('mysticalagriculture:infusion_altar', 1),
  [ 
    'DCB', 
    'EAE',
    'BCD'  
  ],
  {
    A: 'occultism:storage_stabilizer_tier4', 
    B: 'occultism:soul_gem',
	C: 'occultism:stable_wormhole',
	D: 'occultism:iesnium_block',
	E: 'occultism:chalk_red'
  }
)
	//Nature's aura
	event.shaped(
  Item.of('naturesaura:infused_iron', 2), // arg 1: output
  [ 
    ' B ', 
    'BAB', // arg 2: the shape (array of strings)
    ' B '  
  ],
  {
    A: 'minecraft:iron_ingot', 
    B: 'naturesaura:gold_leaf'
  }
)
	event.shaped(
  Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), // arg 1: output
  [ 
    'BBB', 
    'BAB', // arg 2: the shape (array of strings)
    'BBB'  
  ],
  {
    A: 'naturesaura:bottle_two_the_rebottling', 
    B: 'forcecraft:force_gem'
  }
 )
	//Occultism
	event.remove({output: 'occultism:golden_sacrificial_bowl'})
	event.shaped(
  Item.of('occultism:golden_sacrificial_bowl', 8),
  [ 
    'DCB', 
    'EAE',
    'BCD'  
  ],
  {
    A: 'occultism:sacrificial_bowl', 
    B: 'forbidden_arcanus:smelter_prism',
	C: 'forbidden_arcanus:ferrognetic_mixture',
	D: 'forbidden_arcanus:terrastomp_prism',
	E: 'allthecompressed:gold_block_1x'
  }
)
	//pneumaticcraft
	event.shaped(
  Item.of('pneumaticcraft:pressure_tube', 8), // arg 1: output
  [ 
    '   ', 
    'BCB', // arg 2: the shape (array of strings)
    ' A '  
  ],
  {
    A: 'create:precision_mechanism', 
    B: 'pneumaticcraft:ingot_iron_compressed',  //arg 3: the mapping object
    C: 'minecraft:glass'   
  }
)
	event.shaped(
  Item.of('pneumaticcraft:printed_circuit_board', 2), // arg 1: output
  [ 
    'DAE', 
    'BCB', // arg 2: the shape (array of strings)
    'EAD'  
  ],
  {
    A: 'pneumaticcraft:transistor', 
    B: 'pneumaticcraft:capacitor',  //arg 3: the mapping object
    C: 'pneumaticcraft:unassembled_pcb',
	D: 'createchromaticreturn:glowing_ingot',
	E: 'pneumaticcraft:plastic'
  }
)
	event.shaped(
  Item.of('ic2:machine_block', 2), // arg 1: output
  [ 
    'BBB', 
    'BAB', // arg 2: the shape (array of strings)
    'BBB'  
  ],
  {
    A: 'pneumaticcraft:printed_circuit_board', 
    B: 'ic2:ingot_refined_iron'  //arg 3: the mapping object
  }
)
	event.shaped(
  Item.of('dimpaintings:overworld_painting', 1), // arg 1: output
  [ 
    'ABA', 
    'BCB', // arg 2: the shape (array of strings)
    'ABA'  
  ],
  {
    A: 'evilcraft:promise_acceptor_diamond', 
    B: 'createchromaticreturn:industrium_ingot',  //arg 3: the mapping object
    C: 'minecraft:painting'
  }
)
	event.replaceInput(
    { output: 'pneumaticcraft:air_compressor' },
    "minecraft:furnace",
    'createchromaticreturn:industrium_ingot')
	event.replaceInput(
    { output: 'pneumaticcraft:manual_compressor' },
    'pneumaticcraft:ingot_iron_compressed',
    'createchromaticreturn:industrium_ingot')
	//powah
	event.custom({
		"input": [
		  {
			"item": 'industrialforegoing:fertilizer'
		  },
		  {
			"item": 'industrialforegoing:fertilizer'
		  },
		  {
			"item": 'powah:dielectric_paste'
		  },
		  {
			"item": 'powah:dielectric_paste'
		  },
		  {
			"item": 'powah:dielectric_paste'
		  },
		  {
			"item": 'industrialforegoing:machine_frame_supreme'
		  },
		  {
			"item": 'powah:dielectric_paste'
		  }
		],
		"inputFluid": "{FluidName:\"industrialforegoing:essence\",Amount:8000}",
		"processingTime": 100,
		"output": {
		  "item": "powah:dielectric_casing",
		  "count": 1
		},
		"type": "industrialforegoing:dissolution_chamber"
	  })
	event.shaped(
  Item.of('powah:dielectric_paste', 2), // arg 1: output
  [ 
    'AB ', 
    'CD ', // arg 2: the shape (array of strings)
    '   '  
  ],
  {
    A: 'industrialforegoing:pink_slime', 
    B: 'industrialforegoing:fertilizer',  //arg 3: the mapping object
    C: 'industrialforegoing:plastic',
	D: 'thermal:tar'
  }
)
    event.custom({
  "type": "powah:energizing",
  "ingredients": [
    {"item": "powah:capacitor_nitro"},
    {"item": "powah:dielectric_casing"},
	{"item": "allthecompressed:osmium_block_1x"},
	{"item": "powah:capacitor_nitro"},
	{"item": "powah:capacitor_nitro"},
	{"item": "powah:capacitor_nitro"}
  ],
  "energy": 40000000,
  "result": {
    "item": "mekanism:steel_casing"
  }
})
	//Project E
	event.remove({id: 'projectexpansion:emc_link/basic'})
	event.remove({id: 'projectexpansion:emc_link/magenta' })
	event.remove({id: 'projectexpansion:emc_link/blue' })
	event.remove({id: 'projectexpansion:emc_link/yellow' })
	event.remove({id: 'projectexpansion:emc_link/final' })
	event.shaped(
  Item.of('projectexpansion:final_emc_link', 1),
  [ 
    'AAA', 
    'BCD',
    'AAA'  
  ],
  {
    A: 'extendedcrafting:ultimate_singularity', 
	B: 'projectexpansion:final_relay',
	C: 'projectexpansion:fading_emc_link',
	D: 'projectexpansion:final_collector'
  }
)
	event.shaped(
  Item.of('projectexpansion:yellow_emc_link', 1),
  [ 
    'AAA', 
    'BCD',
    'AAA'  
  ],
  {
    A: 'projectexpansion:colossal_star_drei', 
	B: 'projectexpansion:yellow_relay',
	C: 'projectexpansion:lime_emc_link',
	D: 'projectexpansion:yellow_collector'
  }
)
	event.shaped(
  Item.of('projectexpansion:blue_emc_link', 1),
  [ 
    'AAA', 
    'BCD',
    'AAA'  
  ],
  {
    A: 'projectexpansion:colossal_star_ein', 
	B: 'projectexpansion:blue_relay',
	C: 'projectexpansion:magenta_emc_link',
	D: 'projectexpansion:blue_collector'
  }
)
	event.shaped(
  Item.of('projectexpansion:magenta_emc_link', 1),
  [ 
    'AAA', 
    'BCD',
    'AAA'  
  ],
  {
    A: 'projectexpansion:magnum_star_omega', 
	B: 'projectexpansion:magenta_relay',
	C: 'projectexpansion:basic_emc_link',
	D: 'projectexpansion:magenta_collector'
  }
)
	event.shaped(
  Item.of('projectexpansion:basic_emc_link', 1),
  [ 
    'ABC', 
    'DEF',
    'ABC'  
  ],
  {
    A: 'projectexpansion:magnum_star_omega', 
    B: 'projecte:klein_star_omega',
	C: 'projectextended:alchemical_barrel',
	D: 'mekanism:personal_chest',
	E: 'projecte:condenser_mk1',
	F: 'pneumaticcraft:huge_tank',
  }
)
	event.shaped(
  Item.of('projecte:philosophers_stone', 1),
  [ 
    'ABC', 
    'DEF',
    'GHI'  
  ],
  {
    A: 'rftoolsdim:part_energy_3', 
    B: 'extendedcrafting:ultimate_singularity',
	C: 'mekaevolution:qio_drive_infinite',
	D: 'mysticalagradditions:insanium_gemstone_block',
	E: 'ars_elemental:mark_of_mastery',
	F: 'botanicadds:gaiasteel_block',
	G: 'thermal_extra:dragonsteel_block',
	H: 'createchromaticreturn:multiplite_tube',
	I: 'allthecompressed:ruby_block_6x'
  }
)
	event.shaped(
  Item.of('projecte:high_covalence_dust', 1),
  [ 
    'AB ', 
    '   ',
    '   '  
  ],
  {
    A: 'mekanism:pellet_antimatter', 
    B: 'thermal:diamond_dust'
  }
)
event.shaped(
  Item.of('projecte:condenser_mk1', 1),
  [ 
    'ABA', 
    'BCB',
    'ABA'  
  ],
  {
    A: 'minecraft:obsidian', 
    B: 'projecte:void_ring',
	C: 'projecte:alchemical_chest'
  }
)
event.shaped(
  Item.of('projecte:collector_mk1', 1),
  [ 
    'ABA', 
    'ACA',
    'ADA'  
  ],
  {
    A: 'minecraft:glowstone', 
    B: 'minecraft:glass',
	C: 'projecte:aeternalis_fuel_block',
	D: 'minecraft:furnace'
  }
)
event.shaped(
  Item.of('projecte:relay_mk1', 1),
  [ 
    'ABA', 
    'ACA',
    'ADA'  
  ],
  {
    A: 'minecraft:obsidian', 
    B: 'minecraft:glass',
	C: 'projecte:aeternalis_fuel_block',
	D: 'minecraft:furnace'
  }
)
	event.remove({id: 'projecte:condenser_mk1'})
	event.remove({id: 'projecte:collector_mk1'})
	event.remove({id: 'projecte:relay_mk1'})
	//refinedstorage
	event.shaped(
  Item.of('refinedstorage:quartz_enriched_iron', 16), // arg 1: output
  [ 
    'AA ', 
    'AB ', // arg 2: the shape (array of strings)
    '   '  
  ],
  {
    A: 'ic2:pulsating_quartz', 
    B: 'ic2:uumatter'  //arg 3: the mapping object
  }
)
	event.shaped(
  Item.of('refinedstorage:controller', 1), // arg 1: output
  [ 
    'ADA', 
    'BCB', // arg 2: the shape (array of strings)
    'ABA'  
  ],
  {
    A: 'refinedstorage:quartz_enriched_iron', 
    B: 'refinedstorage:silicon',	//arg 3: the mapping object
	C: 'refinedstorage:machine_casing',
	D: 'ic2:uesc'
  }
)
	event.shaped(
  Item.of('refinedstorage:machine_casing', 1), // arg 1: output
  [ 
    'AAA', 
    'ABA', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'refinedstorage:quartz_enriched_iron', 
    B: 'ic2:stabilized_machine_block'	//arg 3: the mapping object
  }
)
	//resourcefulbees
	event.replaceInput(
    { output: "resourcefulbees:centrifuge/terminal/basic" },
    "minecraft:obsidian",
    "mysticalagradditions:insanium_ingot")
	event.shaped(
  Item.of("resourcefulbees:waxed_machine_block", 64),
  [ 
    'ABA', 
    'BCB',
    'ABA'  
  ],
  {
    A: "mysticalagriculture:awakened_supremium_block", 
    B: 'minecraft:honeycomb_block',
	C: 'resourcefulbees:waxed_planks'
  }
)
	//rftools
	event.remove({id : 'xnet:controller' })
	event.remove({id : 'xnet:redstone_proxy' })
	event.remove({id : 'xnet:wireless_router' })
	event.remove({id : 'xnet:router' })
	event.remove({id : 'rftoolsutility:crafter1' })
	event.remove({id : 'quark/building/crafting/gold_bars' })
	event.shaped(
  Item.of('xnet:router', 1), // arg 1: output
  [ 
    'EFE', 
    'BAB', // arg 2: the shape (array of strings)
    'DCD'  
  ],
  {
    A: 'rftoolsbase:machine_base', 
    B: 'allthecompressed:redstone_block_1x',
	C: 'minecraft:gold_block',
	D: 'minecraft:activator_rail',
	E: 'create:pulse_repeater',
	F: 'minecraft:comparator'
  }
)
	event.shaped(
  Item.of('xnet:wireless_router', 1), // arg 1: output
  [ 
    'DED', 
    'BAB', // arg 2: the shape (array of strings)
    'DCD'  
  ],
  {
    A: 'rftoolsbase:machine_base', 
    B: 'allthecompressed:redstone_block_2x',
	C: 'minecraft:gold_block',
	D: 'cyclic:eye_teleport',
	E: 'create:pulse_repeater',
  }
)
	event.shaped(
  Item.of('xnet:redstone_proxy', 1), // arg 1: output
  [ 
    'AAA', 
    'ABA', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'allthecompressed:redstone_block_1x', 
    B: 'rftoolsbase:machine_base',
  }
)
	event.shaped(
  Item.of('xnet:controller', 1), // arg 1: output
  [ 
    'EFE', 
    'BAB', // arg 2: the shape (array of strings)
    'DCD'  
  ],
  {
    A: 'rftoolsbase:machine_base', 
    B: 'allthecompressed:redstone_block_2x',
	C: 'minecraft:gold_block',
	D: 'allthecompressed:iron_block_1x',
	E: 'create:pulse_repeater',
	F: 'minecraft:comparator'
  }
)
	event.shaped(
  Item.of('rftoolsutility:crafter1', 1), // arg 1: output
  [ 
    ' C ', 
    'BAB', // arg 2: the shape (array of strings)
    ' C '  
  ],
  {
    A: 'cyclic:packager', 
    B: 'create:mechanical_crafter',
	C: 'minecraft:redstone_block'
  }
)
	event.replaceInput(
    { output: 'angelring:angel_ring' },
    "minecraft:feather",
    'rftoolsutility:flight_module')
	event.replaceInput(
    { output: 'rftoolsutility:syringe' },
    "minecraft:glass_bottle",
    'rftoolsdim:common_essence')
	//thermal
	event.remove({output: 'thermal:redstone_servo'})
	event.remove({output: 'thermal:rf_coil'})
	event.remove({id: 'industrialforegoing:iron_gear'})
	event.remove({id: 'thermal:parts/iron_gear'})
	event.remove({id: 'industrialforegoing:gold_gear'})
	event.remove({id: 'thermal:parts/gold_gear'})
	event.remove({id: 'industrialforegoing:diamond_gear'})
	event.remove({id: 'thermal:parts/copper_gear'})
	event.remove({id: 'thermal:enderium_dust_2'})
	event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
	event.remove({id: 'thermal:fire_charge/lumium_ingot_4'})
	event.remove({id: 'thermal:lumium_dust_4'})
	event.remove({id: 'thermal:fire_charge/signalum_ingot_4'})
	event.remove({id: 'thermal:signalum_dust_4'})
	event.remove({id: 'thermal:fire_charge/electrum_ingot_2'})
	event.remove({id: 'immersiveengineering:crafting/electrum_mix'})
	event.remove({id: 'thermal:fire_charge/invar_ingot_3'})
	event.remove({id: 'thermal:invar_dust_3'})

	event.recipes.thermal.smelter('create:precision_mechanism', ['#forge:plates/gold', 'create:cogwheel'])
	event.recipes.thermal.smelter('pneumaticcraft:printed_circuit_board', ['ic2:circuit', 'refinedstorage:raw_improved_processor'])
	event.recipes.thermal.smelter('thermal:machine_frame', ['refinedstorage:machine_casing', 'ic2:uumatter'])
	event.recipes.thermal.smelter('ic2:complex_circuit', ['ic2:circuit', 'ic2:pulsating_quartz'])

	event.shaped(
  Item.of('thermal:machine_frame', 1), // arg 1: output
  [ 
    'ACA', 
    'ABA', // arg 2: the shape (array of strings)
    'AAA'  
  ],
  {
    A: 'ic2:uumatter', 
    B: 'refinedstorage:machine_casing',  //arg 3: the mapping object
	C: 'rebornstorage:super_advanced_processor'
  }
)
	event.shaped(
  Item.of('thermal:rf_coil', 16), // arg 1: output
  [ 
    '  B', 
    ' A ', // arg 2: the shape (array of strings)
    'B  '  
  ],
  {
    A: 'ic2:uumatter', 
    B: 'minecraft:redstone'
  }
)
	event.shaped(
  Item.of('thermal:redstone_servo', 16), // arg 1: output
  [ 
    ' B ', 
    ' A ', // arg 2: the shape (array of strings)
    ' B '  
  ],
  {
    A: 'ic2:uumatter', 
    B: 'minecraft:redstone'
  }
)
	event.replaceInput(
    { output: 'thermal:energy_cell_frame' },
    'thermal:electrum_gear',
    'thermal:rf_coil')
	event.replaceInput(
    { output: 'thermal:fluid_cell_frame' },
    'thermal:bronze_gear',
    'thermal:rf_coil')


//Create
event.remove({id: 'createchromaticreturn:antimatter_recipe'})
event.custom(
	{
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "createchromaticreturn:multiplite_ingot"
    },
    {
      "item": "mekanism:pellet_polonium"
    },
    {
      "item": "mekanism:pellet_polonium"
    },
    {
      "item": "mekanism:pellet_polonium"
    },
    {
      "item": "mekanism:pellet_polonium"
    },
    {
      "item": "mekanism:pellet_plutonium"
    },
    {
      "item": "mekanism:pellet_plutonium"
    },
    {
      "item": "mekanism:pellet_plutonium"
    },
    {
      "item": "mekanism:pellet_plutonium"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    },
    {
      "item": "mekanism:block_refined_obsidian"
    }
  ],
  "results": [
    {
      "item": "mekanism:pellet_antimatter"
    }
  ],
  "heatRequirement": "superheated"
})






})