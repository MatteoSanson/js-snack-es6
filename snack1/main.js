'use strict';

const bikeList = [
    {
        bikeName: 'Thunder',
        bikeWeight: '6'
    },
    {
        bikeName: 'Venom',
        bikeWeight: '7'
    },
    {
        bikeName: 'Steel',
        bikeWeight: '8'
    },
    {
        bikeName: 'Franco',
        bikeWeight: '9'
    },
    {
        bikeName: 'Beppi',
        bikeWeight: '6,5'
    }
]

console.log(bikeList);

bikeList.forEach((element, index) => {
    console.log(`Oggetto ${index + 1} -`, element);
    for (const key in element) {
        if (key === 'bikeWeight') {
            console.log(`Bici ${index + 1} - Peso: ${element[key]} kg`);
        } else {
            console.log(`Bici ${index + 1} - Nome: ${element[key]}`);
        }
    }
});