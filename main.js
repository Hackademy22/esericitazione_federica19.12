// traccia 1
//  Traccia 1
// Scrivi un programma che dato un numero, inserito dall’utente, stampi la rispettiva tabellina corrispondente.
// Permettere all’utente di poter inserire un altro numero oppure uscire dallo script (nel senso che lo script deve terminare).



let nuovoNum = "si";

while(nuovoNum ==  "si"){
    let tab =parseFloat(prompt("inserisci un nuovo numero"));

    for (let i = 1; i <= 10; i++) {
    risultato = i * tab;
    console.log(tab + " x" + i + "=" + risultato);
   
    }
    nuovoNum = prompt("vuoi inserire un nuovo numero? si o no");
    if (nuovoNum == "no") {
    alert("grazie")
    
}
}


// Traccia 2
// Scrivi un programma che stampi i soli numeri PARI compresi tra 1 e 30. Di tutti i numeri dispari, invece, calcolare la loro media.

let sommadispari = 0 ;


for (let i = 1; i <= 30; i++) {
    // num = parseInt( prompt('inserisci un num')) ;
    if ( i % 2 === 0) {
    console.log(" i num pari sono " + i);
    }else {
        sommadispari += i
    }
}
let media = sommadispari / 15;
console.log( "la media tra i num dispari é :"  + media);

// Traccia 3
//     Scrivi un programma che simuli un distributore di bevande e che rispetti i seguenti passaggi:
//     l’utente deve poter inserire un numero
//     in console dev’essere stampato il messaggio del distributore
    
//     - se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
//     - se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
//     - se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
//     - se inserisce qualcosa di diverso, il programma dovra’ riproporre automaticamente la domanda di partenza

let tentMin = 5;
let tentMax = 0;

while (tentMin < tentMax){
    tentMin +=1
    let numUser = parseInt(prompt(" inserisci un numero da 1 a 3"));
    if (numUser == 1) {
    console.log("E’ stata selezionata l’acqua")
    
    } else if (numUser ==  2) {
    console.log("E’ stata selezionata coca cola ")
    
    } else if (numUser == 3){
    console.log("è stata selezionata la birra");
    }
}
// Traccia 4
// Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.

// Esempio:
//     Output: 1 2 3 4 5 6 7 8 9 10

//                 11 12 13 14 15 16 17 18 19 20
//                 21 22 23 24 25 26 27 28 29 30
//                 31 32 33 34 35 36 37 38 39 40
//                 41 42 43 44 45 46 47 48 49 50
//                 51 52 53 54 55 56 57 58 59 60
//                 61 62 63 64 65 66 67 68 69 70
//                 71 72 73 74 75 76 77 78 79 80
//                 81 82 83 84 85 86 87 88 89 90
//                 91 92 93 94 95 96 97 98 99 100

//   Per andare a capo usa inserite \n per poter andare a capo, dopo la stringa stampata in console. -->

let numero = ""

for (let i = 1; i < 101; i++) {

          if (i % 10 == 0) {
                    numero = numero + `${i}` + ` \n` 
          } else {
                    numero = numero + ` ${i} `
          }

}

console.log(`${numero}`);
