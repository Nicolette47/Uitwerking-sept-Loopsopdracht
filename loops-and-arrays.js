// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in onderstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

const names = ["Henk", "Piet", "Fred", "Joop"];

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]

// input : array met namen
// output: array met namen + je overal achter.
// Stappenplan: 1. doorloop de array  2. print achter elke naam een -je erachter

for (let i = 0; i < names.length; i++) {
    console.log(names[i] + 'je');
}


// ==========================================
// Opdracht 2
// Schrijf een script dat ieder EVEN getal in onderstaande array met 2 vermenigvuldigd, en ieder ONEVEN getal met 3
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const numbers = [2, 4, 5, 29, 38];

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 4, 8, 15, 87, 76 ];

// input: numbers-array
// output: alle even getallen * 2 en oneven * 3
// Stappenplan:
// 1. bekijk alle items in de array en stel bij ieder item de volgende vraag
// 2. Is het een even nummer?  Zoja dan * 2    Zonee dan * 3.

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] * 2);
    } else {
        console.log(numbers[i] * 3);
    }
}


// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array, het volume uitrekent.
// Het volume van een vierkant is Lengte x Breedte x Hoogte
// Vervolgens moet de huidige waarde in de array overschreven worden met: "Het volume van [a] is [b]"
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const squares = [30, 2, 8, 24, 11];

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(squares) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(squares) geeft:
// [
//   'Het volume van 30 is 27000',
//   'Het volume van 2 is 8',
//   'Het volume van 8 is 512',
//   'Het volume van 24 is 13824',
//   'Het volume van 11 is 1331'
// ]

// input: squares array
// output : squares array waar met het oorspronkelijke getal het volume is berekend een a is ingebed in de zin  "Het volume van [a] is [b]"
// Stappenplan:
// 1. Loop door alle nummers van deze array
// 2. Van elk nummmer in de array moet volume worden berekend via formule lengte * breedte * hoogte
// 3. het volume-getal moet aan array worden toegevoegd via de zin  "Het volume van [a] is [b]"

for ( let i = 0; i < squares.length; i++) {
    let volume = squares[i];
    console.log(`Het volume van ${volume} is ${volume * volume * volume}`);
}