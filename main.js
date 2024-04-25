// Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
// se v e’ minore di 18,  stampare in console  “insufficiente”
// se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
// se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
// se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
// se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
// se v e’ uguale a 30, stampare in console:  “eccellente”
// Esempio:
// let v = 29;
// Output: Ottimo
// Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch.


//If else
let v;

v=31;

if (v < 18) {
    console.log('Insufficiente');
}
else if (v >= 18 && v < 21) {
    console.log('sufficiente');
}
else if (v >= 21 && v < 24) {
    console.log('buono');
}
else if (v >= 24 && v < 27) {
    console.log('distinto');
}
else if (v >= 27 && v < 29) {
    console.log('ottimo');
}
else if (v == 30) {
    console.log('eccellente');
}
else {
    console.log('Non hai inserito un voto valido (da 0 a 30)');
}

//Switch

switch (true) {
    case v < 18:
        console.log('Insufficiente');
        break;
    case v >= 18 && v < 21:
        console.log('sufficiente');
        break;
    case v >= 21 && v < 24:
        console.log('buono');
        break;
    case v >= 24 && v < 27:
        console.log('distinto');
        break;
    case v >= 27 && v < 29:
        console.log('ottimo');
        break;
    case v == 30:
        console.log('eccellente');
        break;
    default:
        console.log('Non hai inserito un voto valido (da 0 a 30)');
}
