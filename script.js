// Funzione per far apparire le allert box solo quando l'utente schiaccia il pulsante
function collectData() {

    // Allert box
    let name = prompt("Inserisci il tuo nome: ");
    let surname = prompt("Inserisci il tuo cognome: ");
    let age = parseInt(prompt("Inserisci la tua età: "));
   
    // Genera un numero a caso tra 0 e 100
    let randomNumber = Math.floor(Math.random() * 101);

    // Unisce le variabili senza spazi
    let gpassword = name + surname + age + randomNumber;

    // Mostra il risultato all'utente
    document.getElementById("passwordDisplay").innerText = "Password Generata: " + gpassword;
   
    // Mostra le informazioni fornite nella console
    console.log("Nome:", name);
    console.log("Cognome:", surname);
    console.log("Età:", age);
    console.log("Numero casuale:", randomNumber);
    console.log("Password Generata:", gpassword);
   }