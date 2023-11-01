function collectData() {
    let name = prompt("Inserisci il tuo nome: ");
    let surname = prompt("Inserisci il tuo cognome: ");
    let age = parseInt(prompt("Inserisci la tua età: "));
   
    // Generate a random number between 0 and 100
    let randomNumber = Math.floor(Math.random() * 101);

    let gpassword = name + surname + age + randomNumber;

    document.getElementById("passwordDisplay").innerText = "Password Generata: " + gpassword;
   
    console.log("Nome:", name);
    console.log("Cognome:", surname);
    console.log("Età:", age);
    console.log("Numero casuale:", randomNumber);
    console.log("Password Generata:", gpassword);
   }