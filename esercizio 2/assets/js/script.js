/* **JSnack 2**
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo */

var numero_utente = parseInt(prompt("Inserisci un numero"));

  if(numero_utente % 2 === 0){
    console.log("Il tuo numero è pari")
  }else{
    console.log("il tuo numero è dispari");
  }
