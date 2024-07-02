const characters = [
	{
		id: 1,
		name: "Iris",
		type: "earth",
		tileid: 875,
		owner: "player",
		level: 1,
		levelMax: 9,
		pv: 36,
		pvMax: 36,
		mp: 10,
		mpMax: 10,
		lk: 15,
		def: 15,
		att: 15,
		strongAgainstType: null
	},
	{
		id: 2,
		name: "Eldor",
		type: "fire",
		tileid: 900,
		owner: "player",
		strongAgainstType: 'wind'
	},
	{
		id: 3,
		name: "Ratt",
		type: "wind",
		tileid: 925,
		owner: "player",
		strongAgainstType: 'water'
	},
	{
		id: 4,
		name: "Dayne",
		type: "water",
		tileid: 950,
		owner: "player",
		strongAgainstType: 'fire'
	},
	{
		id: 5,
		name: "Murak",
		type: "earth",
		tileid: 975,
		owner: "player",
		strongAgainstType: null

	},
	{
		id: 6,
		name: "Frye",
		type: "earth",
		tileid: 1000,
		owner: "player",
		strongAgainstType: null

	},
	{
		id: 7,
		name: "MechantFeu",
		type: "fire",
		tileid: 1050,
		owner: "pc",
		strongAgainstType: 'wind',
		bestTarget: [1,6,5,3,2,4]
	},
	{
		id: 8,
		name: "MechantEau",
		type: "water",
		tileid: 1100,
		owner: "pc",
		strongAgainstType: 'fire',
		bestTarget: [1,6,5,2,4,3]
	},
	{
		id: 9,
		name: "MechantVent",
		type: "wind",
		tileid: 1075,
		owner: "pc",
		strongAgainstType: 'water',
		bestTarget: [1,6,5,4,3,2]
	},
	{
		id: 10,
		name: "MechantFeu",
		type: "fire",
		tileid: 1050,
		owner: "pc",
		strongAgainstType: 'wind',
		bestTarget: [1,6,5,3,2,4]
	},
	{
		id: 11,
		name: "MechantEau",
		type: "water",
		tileid: 1100,
		owner: "pc",
		strongAgainstType: 'fire',
		bestTarget: [1,6,5,2,4,3]
	},
	{
		id: 12,
		name: "MechantVent",
		type: "wind",
		tileid: 1075,
		owner: "pc",
		strongAgainstType: 'water',
		bestTarget: [1,6,5,4,3,2]
	},
	{
		id: 100,
		name: "Unknow",
		type: "earth",
		tileid: 1300,
		owner: "pc"
	},
]