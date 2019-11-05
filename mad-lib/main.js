'use strict';

document.getElementById('button').addEventListener('click', generateMadLib);

function generateMadLib() {
    document.getElementById('materialText').innerHTML = document.getElementById('material').value;
    document.getElementById('bodyPart1Text').innerHTML = document.getElementById('bodyPart1').value;
    document.getElementById('adjective1Text').innerHTML = document.getElementById('adjective1').value;
    document.getElementById('verb1Text').innerHTML = document.getElementById('verb1').value;
    document.getElementById('verbS1Text').innerHTML = document.getElementById('verbS1').value;
    document.getElementById('adjective2Text').innerHTML = document.getElementById('adjective2').value;
    document.getElementById('pluralNounText').innerHTML = document.getElementById('pluralNoun').value;
    document.getElementById('bodyPart2Text').innerHTML = document.getElementById('bodyPart2').value;
    document.getElementById('verb2Text').innerHTML = document.getElementById('verb2').value;
    document.getElementById('personText').innerHTML = document.getElementById('person').value;
    document.getElementById('verbS2Text').innerHTML = document.getElementById('verbS2').value;
    document.getElementById('placeText').innerHTML = document.getElementById('place').value;
    document.getElementById('verbS3Text').innerHTML = document.getElementById('verbS3').value;
    document.getElementById('verbS4Text').innerHTML = document.getElementById('verbS4').value;
    document.getElementById('adjective3Text').innerHTML = document.getElementById('adjective3').value;
    document.getElementById('clothingText').innerHTML = document.getElementById('clothing').value;
    document.getElementById('verbIngText').innerHTML = document.getElementById('verbIng').value;
    document.getElementById('materialText').innerHTML = document.getElementById('material').value;

    document.getElementById('madLib').style.visibility = visible;
}