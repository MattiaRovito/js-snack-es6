//TODO Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const biciclette = 
[
    {
        nome : 'MNT',
        peso : 15
    },
    {
        nome : 'KTar',
        peso : 29
    },
    {
        nome : 'CaSk',
        peso : 13
    },
    {
        nome : 'ElLoc',
        peso : 18
    }
];

//* Per stampare la bici con il peso minore poniamo una variabile, biciPiccola, uguale al primo object dell'array.
let biciPiccola = biciclette[0];

//* Apriamo il ciclo for, in cui confrontiamo tutti i pesi di tutti gli oggetti con il peso del primo oggetto (biciclette[0]), che sarà il nostro peso campione. 
for (let i = 1; i < biciclette.length; i++)
{
    if (biciclette[i].peso < biciPiccola.peso){
        biciPiccola = biciclette[i];
    }
}


//* Stampiamo la bici con il peso inferiore tramite il destructuring

const {nome, peso} = biciPiccola;
console.log(nome, peso);


//* Template literal
document.getElementById('bike').innerHTML = 
`
    La bicicletta più leggera è: ${biciPiccola.nome},
    con un peso di: ${biciPiccola.peso} kg    
`;






//TODO Snack 2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti e stampiamo tutto in console.



const squadre = 
[
    {
        squadra : 'Inter',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        squadra : 'Juventus',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        squadra : 'Milan',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        squadra : 'Atalanta',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        squadra : 'Napoli',
        puntiFatti : 0,
        falliSubiti : 0
    },
]

//* funzione numeri random semplice
// function numRandom (min, max)
// {
//     return Math.floor(Math.random() * (max - min - 1) + min);
// }

//* funzione numeri random con arrow function. Qui si ha il return implicito. 
const numRandom = (min, max) => Math.floor(Math.random() * (max - min - 1) + min);



//* Con il ciclo while andiamo a generare numeri random per i punti fatti e falli subiti all'interno di ogni oggetto dell'array
let i = 0;

while (i < squadre.length)
{
    squadre[i].puntiFatti = numRandom(1,100);
    squadre[i].falliSubiti = numRandom(1,100);
    i++;
}
console.log(squadre);


//* Creiamo un nuovo array con la destrutturazione e pushiamo solo i nomi e i falli subiti degli oggetti. 

const nuoveSquadre = [];

//* Qui li pushiamo al solito con il ciclo for
// for (let i = 0; i < squadre.length; i++)
// {
//     nuoveSquadre.push(squadre[i].squadra, squadre[i].falliSubiti)
// }

// console.log(nuoveSquadre);



//* con il destructuring
