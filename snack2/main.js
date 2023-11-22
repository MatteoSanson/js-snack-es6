'use strict';

const soccerTeam = [
    {nameTeam:'Juventus', points: 0, foul: 0 },
    {nameTeam:'Milan', points: 0, foul: 0 },
    {nameTeam:'Inter', points: 0, foul: 0 },
    {nameTeam:'Napoli', points: 0, foul: 0 }
];

console.log('soccerTeam', soccerTeam);

soccerTeam.forEach((element, index) => {
    const { nameTeam, points, foul } = element;
    console.log(`Team ${index + 1}: ${nameTeam}, Punti: ${points}, Falli subiti: ${foul}`);
  });

