// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23.

// COSTANTE NUMERO 23
const userFavnumber=23;
// NOTIFICA DI INIZIO SCRIPT
alert("Crea la tua password insicurissima!");
const userName=(prompt("Inserisci il tuo nome"));
const userSurname=(prompt("Inserisci il tuo cognome"));
const userFavcolor=(prompt("Inserisci il tuo colore preferito"));
document.getElementById("boh").innerHTML= userName+userSurname+userFavcolor + userFavnumber;

// VERIFICA TRAMITE CONSOLE
// console.log(userName+userSurname+userFavcolor + userFavnumber);