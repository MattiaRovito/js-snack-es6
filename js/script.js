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
        biciPiccola.peso = biciclette[i];
    }
}


//* Stampiamo la bici con il peso inferiore tramite il destructuring

const {peso} = biciPiccola;
console.log(peso);


//* Template literal
document.getElementById('bike').innerHTML = 
`
    La bicicletta più leggera è: ${biciPiccola.nome}
    con un peso di: ${biciPiccola.peso} kg    
`;