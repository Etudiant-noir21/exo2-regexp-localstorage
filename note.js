/*Exercice 2 : Bloc-notes persistant (Local Storage + Regex)
Crée une application de bloc-notes où l'utilisateur peut écrire et sauvegarder des notes.
 Chaque note doit être filtrée pour éviter les caractères spéciaux.
Formulaire pour ajouter une note : limite la note aux caractères
 alphanumériques uniquement (utilise une regex).
Stocker les notes dans le Local Storage.
Afficher les notes sauvegardées même après rechargement.*/

// recuperation de mes donnes 
const formulaire = document.querySelector('#form')
const note = document.getElementById('notes')
let noteInput = document.getElementById('note')
//une regexp pour limiter la saisie au caractere alphanumerique est les espaces et saut de ligne
let noteRegexp = /^[\w\s]+$/
// appel de la fonction de chargement
chargement()
// empecher l'envoie par defaut
formulaire.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(noteInput.value)
    blocNote()
    sauvegarde()

}) 

// fonction pour gerer la partie note
function blocNote(){
    // verification si la texte saisie correspond au Regex
    if(!noteRegexp.test(noteInput.value)){
        alert('la saisie doit contenir seulement des caracters alphanumerique')
        formulaire.reset()
    }else{
        CrationElementnote(noteInput.value)
        formulaire.reset()
    }

}

// fonction de creation d'elements 
function CrationElementnote(contenueTexte){
    let p = document.createElement('p')
    p.innerHTML = contenueTexte
    note.appendChild(p)
}

// fonction pour la sauvegarde 
function sauvegarde(){
    localStorage.setItem('notes', note.innerHTML)
}

function chargement(){
    note.innerHTML = localStorage.getItem('notes')
}