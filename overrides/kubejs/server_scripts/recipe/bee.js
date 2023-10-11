ServerEvents.recipes((event) => {
	event.custom(
	{
  "type": "resourcefulbees:centrifuge",
  "ingredient": { "item": "resourcefulbees:bleed_honeycomb" },
  "itemOutputs": [
    {
      "chance": 0.7,
      "pool": [
        {
          "item": {
            "id": 'evilcraft:blood_waxed_coal',
            "count": 20
          },
          "weight": 5
        },
        {
          "item": {
            "id": 'evilcraft:blood_waxed_coal',
            "count": 25
          },
          "weight": 25
        },
        {
          "item": {
            "id": 'evilcraft:blood_waxed_coal',
            "count": 30
          },
          "weight": 50
        }
      ]
    },
    {
      "chance": 0.3,
      "pool": [
        {
          "item": {
            "id": 'evilcraft:condensed_blood',
            "count": 30
          },
          "weight": 1
        },
        {
          "item": {
            "id": 'evilcraft:condensed_blood',
            "count": 40
          },
          "weight": 99
        },
        {
          "item": {
            "id": 'evilcraft:condensed_blood',
            "count": 50
          },
          "weight": 100
        }
      ]
    }
  ],
  "fluidOutputs": [
    {
      "pool": [
        {"fluid": { "id": "evilcraft:blood", "amount": 5000 }}
      ]
    }
  ],
  "time": 250
}),
	event.custom(
	{
  "type": "resourcefulbees:centrifuge",
  "ingredient": { "item": "resourcefulbees:supremium_honeycomb" },
  "itemOutputs": [
    {
      "chance": 0.7,
      "pool": [
        {
          "item": {
            "id": 'mysticalagriculture:awakened_supremium_essence',
            "count": 10
          },
          "weight": 5
        },
        {
          "item": {
            "id": 'mysticalagriculture:supremium_block',
            "count": 1
          },
          "weight": 25
        },
        {
          "item": {
            "id": 'mysticalagriculture:supremium_essence',
            "count": 10
          },
          "weight": 50
        }
      ]
    }
  ],
  "time": 250
}),
	event.custom(
	{
  "type": "resourcefulbees:centrifuge",
  "ingredient": { "item": "resourcefulbees:create_honeycomb" },
  "itemOutputs": [
    {
      "chance": 0.5,
      "pool": [
        {
          "item": {
            "id": 'createchromaticreturn:durasteel_ingot',
            "count": 1
          },
          "weight": 30
        },
        {
          "item": {
            "id": 'createchromaticreturn:multiplite_ingot',
            "count": 1
          },
          "weight": 25
        },
        {
          "item": {
            "id": 'createchromaticreturn:bedrock_shard',
            "count": 1
          },
          "weight": 20
        }
      ]
    }
  ],
  "time": 250
}),
	event.custom(
	{
  "type": "resourcefulbees:centrifuge",
  "ingredient": { "item": "resourcefulbees:pneumatic_honeycomb" },
  "itemOutputs": [
    {
      "chance": 0.7,
      "pool": [
        {
          "item": {
            "id": 'pneumaticcraft:capacitor',
            "count": 1
          },
          "weight": 30
        },
        {
          "item": {
            "id": 'pneumaticcraft:printed_circuit_board',
            "count": 1
          },
          "weight": 25
        },
        {
          "item": {
            "id": 'pneumaticcraft:transistor',
            "count": 1
          },
          "weight": 20
        }
      ]
    }
  ],
  "fluidOutputs": [
    {
      "pool": [
        {"fluid": { "id": "pneumaticcraft:oil", "amount": 5000 }}
      ]
    }
  ],
  "time": 250
}),
	
	event.custom(
	{
  "type": "resourcefulbees:centrifuge",
  "ingredient": { "item": "resourcefulbees:gaia_honeycomb" },
  "itemOutputs": [
    {
      "chance": 0.5,
      "pool": [
        {
          "item": {
            "id": 'botanicadds:gaiasteel_ingot',
            "count": 1
          },
          "weight": 30
        },
        {
          "item": {
            "id": 'botanicadds:gaiasteel_block',
            "count": 1
          },
          "weight": 25
        }
      ]
    }
  ],
  "time": 250
})

	event.custom(
	{
  "type": "resourcefulbees:centrifuge",
  "ingredient": { "item": "resourcefulbees:elemental_honeycomb" },
  "itemOutputs": [
    {
      "chance": 0.5,
      "pool": [
        {
          "item": {
            "id": 'elementalcraft:fireite_ingot',
            "count": 1
          },
          "weight": 30
        },
        {
          "item": {
            "id": 'elementalcraft:fireite_block',
            "count": 1
          },
          "weight": 25
        },
		{
          "item": {
            "id": 'elementalcraft:purecrystal',
            "count": 1
          },
          "weight": 25
        }
      ]
    }
  ],
  "time": 250
})
})