'use strict';

const soccerTeam = [
    {nameTeam:'Juventus', points: 0, fouls: 0 },
    {nameTeam:'Milan', points: 0, fouls: 0 },
    {nameTeam:'Inter', points: 0, fouls: 0 },
    {nameTeam:'Napoli', points: 0, fouls: 0 }
];

console.log('soccerTeam originario', soccerTeam);

soccerTeam.forEach((element, index) => {
    const randomPoints = Math.floor(Math.random() * 101);
    const randomFouls = Math.floor(Math.random() * 101);

    element.points = randomPoints;
    element.fouls = randomFouls;

    console.log(`Team ${index + 1}: ${element.nameTeam}, Punti: ${randomPoints}, Falli subiti: ${randomFouls}`);
});

console.log('soccerTeam aggiornato',soccerTeam);

//// nuovo array
const newSocTeam = soccerTeam.map(({nameTeam, fouls}) => ({nameTeam, fouls}));

console.log('Nuovo array', newSocTeam);