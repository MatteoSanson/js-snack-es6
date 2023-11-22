'use strict';

const bikeList = [
    {
        bikeName: 'Graziella',
        bikeWeight: '12'
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
        bikeName: 'Thunder',
        bikeWeight: '6,5'
    }
]

console.log(bikeList);

const divBike = document.querySelector('.topBike');
let lightBike = bikeList[0];

// bikeList.forEach((element, index) => {
//     console.log(`Oggetto ${index + 1}`, element);
//     for (const key in element) {
//          if (key === 'bikeWeight') {
//             console.log(`Bici ${index + 1} - Peso: ${element[key]} kg`);
//         } else {
//             console.log(`Bici ${index + 1} - Nome: ${element[key]}`);
//         }
//     }
//     if (parseFloat(element.bikeWeight.replace(',', '.')) < parseFloat(lightBike.bikeWeight.replace(',', '.'))) {
//         lightBike = element;
//     }
// });

// if (lightBike) {
//     console.log(`La bici che pesa di meno è ${lightBike.bikeName} col peso di ${lightBike.bikeWeight} kg`);
//     divBike.innerHTML = `
//         <p><strong>Nome Bici: </strong>${lightBike.bikeName}</p>
//         <p><strong>Peso Bici: </strong>${lightBike.bikeWeight} kg</p>
//     `;
// } else {
//     console.log('Nessuna bici trovata.');
//     divBike.innerHTML = 'Nessuna bici trovata.';
// }

////// destructuring
bikeList.forEach((element, index) => {
    const {bikeName, bikeWeight} = element;

    console.log(`Oggetto ${index + 1}`,element);
    console.log(`Nome bici: ${bikeName}`);
    console.log(`Peso bici: ${bikeWeight} kg`);

    if (parseFloat(bikeWeight.replace(',', '.')) < parseFloat(lightBike.bikeWeight.replace(',','.'))){
        lightBike = element;
        console.log(`la bici che pesa di meno è ${bikeName} col peso di ${bikeWeight} kg`)
    }
});

