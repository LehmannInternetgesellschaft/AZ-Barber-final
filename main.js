// BURGER MENU SCRIPT
// Warte, bis das gesamte HTML-Dokument vollständig geladen ist, bevor das Skript ausgeführt wird
document.addEventListener("DOMContentLoaded", function () {
    // Finde das Element mit der Klasse "hamburger" und speichere es in einer Variable
    const hamburger = document.querySelector(".hamburger");
    // Finde das Element mit der Klasse "nav-menu" und speichere es in einer Variable
    const navMenu = document.querySelector(".nav-menu");

    // Füge einen Event-Listener für den Klick auf das Hamburger-Element hinzu
    hamburger.addEventListener("click", () => {
        // Füge oder entferne die Klasse "active" vom Hamburger-Element, um das Menü zu öffnen oder zu schließen
        hamburger.classList.toggle("active");
        // Füge oder entferne die Klasse "active" vom Menü-Element, um es anzuzeigen oder zu verbergen
        navMenu.classList.toggle("active");
    });

    // Füge Event-Listener für den Klick auf jedes Element mit der Klasse "nav-link" hinzu
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => { 
        // Entferne die Klasse "active" vom Hamburger-Element, um das Menü zu schließen
        hamburger.classList.remove("active");
        // Entferne die Klasse "active" vom Menü-Element, um es zu verbergen
        navMenu.classList.remove("active");
    }));
});
;
// Script für Automatisierten Slider
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 4000);


document.addEventListener("DOMContentLoaded", function () {
    var genderSelect = document.getElementsByName("gender")[0];
    genderSelect.addEventListener("change", handleGenderChange);
});

function handleGenderChange() {
    var selectedGender = document.getElementsByName("gender")[0].value;

    // Verstecke alle Elemente mit der ID "male"
    var maleElements = document.querySelectorAll('#male');
    maleElements.forEach(function (element) {
        element.classList.add('hidden');
    });

    // Verstecke alle Elemente mit der ID "male-form"
    var maleFormElements = document.querySelectorAll('#male-form');
    maleFormElements.forEach(function (element) {
        element.classList.add('hidden');
    });

    // Verstecke alle Elemente mit der ID "female"
    var femaleElements = document.querySelectorAll('#female');
    femaleElements.forEach(function (element) {
        element.classList.add('hidden');
    });

    // Verstecke alle Elemente mit der ID "female-form"
    var femaleFormElements = document.querySelectorAll('#female-form');
    femaleFormElements.forEach(function (element) {
        element.classList.add('hidden');
    });

    // Verstecke alle Elemente mit der ID "boys"
    var boysElements = document.querySelectorAll('#boys');
    boysElements.forEach(function (element) {
        element.classList.add('hidden');
    });

    // Zeige die Elemente des ausgewählten Geschlechts
    var selectedElements = document.querySelectorAll('#' + selectedGender);
    selectedElements.forEach(function (element) {
        element.classList.remove('hidden');
    });

    // Zeige die Elemente des ausgewählten Geschlechts
    var selectedFormElements = document.querySelectorAll('#' + selectedGender + '-form');
    selectedFormElements.forEach(function (element) {
        element.classList.remove('hidden');
    });
}
