export const textNodes = [
    {
        id: 0,
        welcome: 'This is text quest game inspired by Fallout game series. In this game you need to explore vault 13 and find items that will help you survive the radiation poisoning. Good luck.',
        location: 'Outside vault 13 entrance',
        text: 'You are standing in front of the entrance to vault 13. You see pile of junk',
        radiationLevel: 3,
        options: [
            {
                visible: [['plastic', 'false'],],
                text: 'Search in pile of junk',
                setInventory: [['plastic', 'true'],],
                afterText: 'You find a piece of plastic, its could be useful',
            },
            {
                text: 'Enter the vault 13',
                nextText: 1,
            }
        ]
    },
    {
        id: 1,
        location: 'Vault hall',
        text: 'You entered a large room, from its condition it becomes clear that not much is left of this vault..',
        radiationLevel: 2,
        options: [
            {
                text: 'Go to corridor 1/3  ',
                nextText: 3,
            },
            {
                text: 'Go to equipment storage room  ',
                nextText: 2,
            },
            {
                text: 'Go outside  ',
                nextText: 0,
            },
        ]
    },
    {
        id: 2,
        location: 'Equipment storage room',
        text: 'You enter dark room. You see some kind of handmade respirator in corner. Its can help handle radiation',
        radiationLevel: 5,
        options: [
            {
                visible: [['respirator', 'false'],],
                text: 'Pick up respirator',
                setInventory: [['respirator', 'true'],],
                afterText: 'You found a respirator, its not in the best condition, but it will help to survive',
            },
            {
                text: 'Go back vault hall  ',
                nextText: 1,
            }
        ]
    },
    {
        id: 3,
        location: 'Corridor 1/3',
        text: 'You entered a long corridor',
        radiationLevel: 1,
        options: [
            {
                text: 'Go to medical office',
                nextText: 5,
            },
            {
                text: 'Go to storage room',
                nextText: 4,
            },
            {
                text: 'Go to corridor 2/3',
                nextText: 6,
            },
            {
                text: 'Go to vault hall',
                nextText: 1,
            },
        ]
    },
    {
        id: 4,
        location: 'Storage room',
        text: 'You have reached the storage room, not much left here, nothing to be fair, but you caught the glint of a jar with an unknown liquid',
        radiationLevel: 1,
        options: [
            {
                visible: [['antiseptic', 'false'],],
                text: 'Pick up bottle with unknown liquid',
                setInventory: [['antiseptic', 'true'],],
                afterText: 'You find a bottle of antiseptic, its could be useful',
            },
            {
                text: 'Go to laboratory  ',
                nextText: 7,
            },
            {
                text: 'Go to corridor 1/3  ',
                nextText: 3,
            },
        ]
    },
    {
        id: 5,
        location: 'Medical office',
        text: 'You enter dark room which was previously used as a medical office. You see some kind of medicine in corner',
        radiationLevel: 3,
        options: [
            {
                visible: [['medicine', 'false'],],
                text: 'Pick up unknown drug',
                setInventory: [['medicine', 'true'],],
                afterText: 'You find a Rad-X, its may help to survive',
            },
            {
                text: 'Go to kitchen  ',
                nextText: 11,
            },
            {
                text: 'Go to corridor 1/3  ',
                nextText: 3,
            },
        ]
    },
    {
        id: 6,
        location: 'Corridor 2/3',
        text: 'You entered a long corridor',
        radiationLevel: 5,
        options: [
            {
                text: 'Go to corridor 3/3  ',
                nextText: 9,
            },
            {
                text: 'Go to living room  ',
                nextText: 8,
            },
            {
                text: 'Go to corridor 1/3  ',
                nextText: 3,
            },
        ]
    },
    {
        id: 7,
        location: 'Laboratory',
        text: `You entered in to a Laboratory. On wall you see some recepie, it says 'mix glow mushrooms and antiseptic with water, and pour this mixture in plastic bottle'. Here you can craft RadAway, to survive radioactive poisoning`,
        radiationLevel: 0,
        options: [
            {
                visible: [['antiseptic', 'true'],['mushroom', 'true'],['water', 'true'],['plastic', 'true']],
                text: 'Craft RadAway',
                setInventory: [['radAway', 'true'], ['plastic', 'false'], ['water', 'false'], ['antiseptic', 'false'], ['mushroom', 'false'],],
                afterText: 'You craft a RadAway... Congrads, you survive one more day...',
            },
            {
                text: 'Go back to storage room  ',
                nextText: 4,
            },
        ]
    },
    {
        id: 8,
        location: 'Living room',
        text: 'You walk inside the room with four beds two bunks. There is also four lockers on the side of the room. Everything destroyed by time and unwelcome visitors',
        radiationLevel: 3,
        options: [
            {
                text: 'Go to bathroom  ',
                nextText: 12,
            },
            {
                text: 'Go to corridor 2/3  ',
                nextText: 6,
            },
        ]
    },
    {
        id: 9,
        location: 'Corridor 3/3',
        text: 'You entered a long corridor, you see big hazard warning sign on door to next room',
        radiationLevel: 10,
        options: [
            {
                text: 'Go to nuclear power room  ',
                nextText: 10,
            },
            {
                text: 'Go to corridor 2/3  ',
                nextText: 6,
            },
        ]
    },
    {
        id: 10,
        location: 'Nuclear power room',
        text: 'You entered former nuclear power room, now its looks more like storage room for radioactive waste. In pile of barrels you saw glowing mushrooms',
        trap: {
            text: 'Very high level of radiation in this room, you feel this on your skin, its almost burn as in boiling water... If you have medicine in your pocket, its time to use it',
            options: [
                {
                    visible: [['medicine', 'true'],],
                    text: 'Take medicine',
                    setInventory: [['medicine', 'false'],],
                    afterText: 'Immediately after you take medicine you feel relefe, you can go on',
                },
                {
                    text: 'It is what it is',
                    setRadiation: 20,
                    afterText: 'Radiation + 20',
                }
            ]
        },
        radiationLevel: 20,
        options: [
            {
                visible: [['mushroom', 'false'],],
                text: 'Harvest mushrooms',
                setInventory: [['mushroom', 'true'],],
                afterText: 'You collect a handful of mushrooms, its could be useful',
            },
            {
                text: 'Go to corridor 3/3  ',
                nextText: 9,
            },
        ]
    },
    {
        id: 11,
        location: 'Kitchen',
        text: 'You entered in to a kitchen. You see giant hole in the wall. No clue how it happen, could be explosion, or giant rats... On kitchen table you see bottle of water',
        radiationLevel: 5,
        options: [
            {
                visible: [['water', 'false'],],
                text: 'Take bottle of water',
                setInventory: [['water', 'true'],],
                afterText: 'You find a bottle of water, its could be useful',
            },
            {
                text: 'Go to bathroom through hole in wall  ',
                nextText: 12,
            },
            {
                text: 'Go to medical office  ',
                nextText: 5,
            },
        ]
    },
    {
        id: 12,
        location: 'Bathroom',
        text: 'You entered in to a bathroom. You see giant hole in the wall. No clue how it happen, could be explosion, or giant rats...',
        radiationLevel: 5,
        options: [
            {
                text: 'Go to kitchen through hole in wall  ',
                nextText: 11,
            },
            {
                text: 'Go to living room  ',
                nextText: 8,
            },
        ]
    },
]


// export const textNodes = [
//     {
//         id: 0,
//         welcome: 'This is text quest game inspired by Fallout game series. In this game you need to explore vault 13 and find items that will help you survive the radiation poisoning. Good luck.',
//         location: 'Outside vault 13 entrance',
//         text: 'You are standing in front of the entrance to vault 13. You see pile of junk',
//         radiationLevel: 3,
//         options: [
//             {
//                 visible: [['plastic', 'false'],],
//                 text: 'Search in junk pile',
//                 setInventory: [['plastic', 'true'],],
//                 afterText: 'You find a piece of plastic, its could be useful',
//             },
//             {
//                 text: 'Enter the vault 13  ',
//                 nextText: 1,
//             }
//         ]
//     },
//     {
//         id: 1,
//         location: 'Room 1',
//         text: 'You in room 1',
//         radiationLevel: 2,
//         options: [
//             {
//                 text: 'Go to room 3  ',
//                 nextText: 3,
//             },
//             {
//                 text: 'Go to room 2  ',
//                 nextText: 2,
//             },
//             {
//                 text: 'Go outside  ',
//                 nextText: 0,
//             },
//         ]
//     },
//     {
//         id: 2,
//         location: 'Room 2',
//         text: 'You enter dark room. You see some kind of handmade respirator in corner. Its can help handle radiation',
//         radiationLevel: 5,
//         options: [
//             {
//                 visible: [['respirator', 'false'],],
//                 text: 'Pick up respirator',
//                 setInventory: [['respirator', 'true'],],
//                 afterText: 'You found a respirator, its not in the best condition, but it will help to survive',
//             },
//             {
//                 text: 'Go back to room 1  ',
//                 nextText: 1,
//             }
//         ]
//     },
//     {
//         id: 3,
//         location: 'Room 3',
//         text: 'Room 3',
//         radiationLevel: 1,
//         options: [
//             {
//                 text: 'Go to room 5  ',
//                 nextText: 5,
//             },
//             {
//                 text: 'Go to room 4  ',
//                 nextText: 4,
//             },
//             {
//                 text: 'Go to room 6  ',
//                 nextText: 6,
//             },
//             {
//                 text: 'Go to room 1  ',
//                 nextText: 1,
//             },
//         ]
//     },
//     {
//         id: 4,
//         location: 'Room 4',
//         text: 'Room 4',
//         radiationLevel: 1,
//         options: [
//             {
//                 visible: [['antiseptic', 'false'],],
//                 text: 'Take unknown drug',
//                 setInventory: [['antiseptic', 'true'],],
//                 afterText: 'You find a pack of antiseptic, its could be useful',
//             },
//             {
//                 text: 'Go to room 7  ',
//                 nextText: 7,
//             },
//             {
//                 text: 'Go back to room 3  ',
//                 nextText: 3,
//             },
//         ]
//     },
//     {
//         id: 5,
//         location: 'Room 5',
//         text: 'You enter dark room. You see some kind of medicine in corner',
//         radiationLevel: 3,
//         options: [
//             {
//                 visible: [['medicine', 'false'],],
//                 text: 'Pick up unknown drug',
//                 setInventory: [['medicine', 'true'],],
//                 afterText: 'You find a Rad-X, its may help to survive',
//             },
//             {
//                 text: 'Go to room 11  ',
//                 nextText: 11,
//             },
//             {
//                 text: 'Go to room 3  ',
//                 nextText: 3,
//             },
//         ]
//     },
//     {
//         id: 6,
//         location: 'Room 6',
//         text: 'Room 6',
//         radiationLevel: 5,
//         options: [
//             {
//                 text: 'Go to room 9  ',
//                 nextText: 9,
//             },
//             {
//                 text: 'Go to room 8  ',
//                 nextText: 8,
//             },
//             {
//                 text: 'Go to room 3  ',
//                 nextText: 3,
//             },
//         ]
//     },
//     {
//         id: 7,
//         location: 'Room 7',
//         text: `Room 7 LAB. On wall you see some recepie, it says 'mix glow mushrooms and antiseptic with water, and pour in plastic bottle'. Here you can craft RadAway, to survive radioactive poisoning`,
//         radiationLevel: 0,
//         options: [
//             {
//                 visible: [['antiseptic', 'true'],['mushroom', 'true'],['water', 'true'],['plastic', 'true']],
//                 text: 'Craft RadAway',
//                 setInventory: [['radAway', 'true'], ['plastic', 'false'], ['water', 'false'], ['antiseptic', 'false'], ['mushroom', 'false'],],
//                 afterText: 'You craft a RadAway... Congrads, you survive one more day...',
//             },
//             {
//                 text: 'Go back to room 4  ',
//                 nextText: 4,
//             },
//         ]
//     },
//     {
//         id: 8,
//         location: 'Room 8',
//         text: 'Room 8',
//         radiationLevel: 3,
//         options: [
//             {
//                 text: 'Go to room 12  ',
//                 nextText: 12,
//             },
//             {
//                 text: 'Go to room 6  ',
//                 nextText: 6,
//             },
//         ]
//     },
//     {
//         id: 9,
//         location: 'Room 9',
//         text: 'Room 9. You see big hazard warning sign on door to next room',
//         radiationLevel: 10,
//         options: [
//             {
//                 text: 'Go to room 10  ',
//                 nextText: 10,
//             },
//             {
//                 text: 'Go to room 6  ',
//                 nextText: 6,
//             },
//         ]
//     },
//     {
//         id: 10,
//         location: 'Room 10',
//         text: 'Room 10. You see storage room for radioactive waste. Mushrooms on barrel',
//         trap: {
//             text: 'Very high level of radiation in this room, you feel this on your skin, its almoust burn as in boiling water... If you have medicine in your pocket, its time to use it',
//             options: [
//                 {
//                     visible: [['medicine', 'true'],],
//                     text: 'Take medicine',
//                     setInventory: [['medicine', 'false'],],
//                     afterText: 'Immediately after you take medicine you feel relefe, you can go on',
//                 },
//                 {
//                     text: 'It is what it is',
//                     setRadiation: 20,
//                     afterText: 'Radiation + 20',
//                 }
//             ]
//         },
//         radiationLevel: 20,
//         options: [
//             {
//                 visible: [['mushroom', 'false'],],
//                 text: 'Harvest mushrooms',
//                 setInventory: [['mushroom', 'true'],],
//                 afterText: 'You find a pack of antiseptic, its could be useful',
//             },
//             {
//                 text: 'Go to room 9  ',
//                 nextText: 9,
//             },
//         ]
//     },
//     {
//         id: 11,
//         location: 'Room 11',
//         text: 'Room 11 You see bottle of water',
//         radiationLevel: 5,
//         options: [
//             {
//                 visible: [['water', 'false'],],
//                 text: 'Take bottle of water',
//                 setInventory: [['water', 'true'],],
//                 afterText: 'You find a bottle of water, its could be useful',
//             },
//             {
//                 text: 'Go to room 12 through hole in wall  ',
//                 nextText: 12,
//             },
//             {
//                 text: 'Go to room 5  ',
//                 nextText: 5,
//             },
//         ]
//     },
//     {
//         id: 12,
//         location: 'Room 12',
//         text: 'Room 12',
//         radiationLevel: 5,
//         options: [
//             {
//                 text: 'Go to room 11 through hole in wall  ',
//                 nextText: 11,
//             },
//             {
//                 text: 'Go to room 8  ',
//                 nextText: 8,
//             },
//         ]
//     },
// ]
