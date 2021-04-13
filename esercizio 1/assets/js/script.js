/* **JSnack 1**
l software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

/* var sommaNumero = 0;

for(var i=0; i < 4; i++){
  var nuovoNumero = parseInt(prompt("Inserisci un numero"));
  sommaNumero +=  nuovoNumero;
} */
 


var sommaNumero = 0;
var i = 0;
while(i < 4){
  var nuovoNumero = parseInt(prompt("Inserisci un numero"));
  sommaNumero +=  nuovoNumero;
  i++
}

document.getElementById("msg_auto").innerHTML = " La somma totale è: " + sommaNumero


