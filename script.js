
function togglePopup(){
    let popup = document.querySelector("#popup");
    popup.classList.toggle("open")

    let nomUtilisateur = document.querySelector("#username").value
    document.getElementById("1").innerHTML=nomUtilisateur 

    let motDePasse = document.querySelector("#mdp").value
    document.getElementById("2").innerHTML=motDePasse
}
