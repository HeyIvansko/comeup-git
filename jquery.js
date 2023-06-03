alert("Bonjour IFRAN");

let prenom = prompt("Entrer votre prénom: ")
alert(prenom)

let nombre1 = prompt("Entrer votre premier nombre : ")
let nombre2 = prompt("Entrer votre deuxième nombre : ")
let Somme = Number(nombre1) + Number(nombre2)
alert("La somme est: "+ Somme);

let age = prompt(" Entrer votre age: ")
while (isNaN(age) || age <= 0) {
    alert("Erreur: Veuillez entrer un âge valide!");
    age = prompt("Entrez votre âge:");
}
alert("Vous avez " + age + " ans.");

