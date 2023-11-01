function collectInformation() {
    var name = prompt("Inserisci il tuo nome:");
    var surname = prompt("Inserisci il tuo cognome:");
    var age = prompt("Inserisci la tua età:");

    var result = document.getElementById("result");
    result.innerHTML = "Nome: " + name + ", Cognome: " + surname + ", Età: " + age;
}