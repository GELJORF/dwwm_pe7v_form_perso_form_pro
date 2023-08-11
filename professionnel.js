"use strict";

function checkIfAtLeastOnePhoneNumber(event)
{
    let landlineNumber = document.querySelector('#landLineNumber').value;
    let gsmNumber = document.querySelector('#gsmNumber').value;

    if (landlineNumber.length > 0 || gsmNumber.length > 0) {
        return true;
    }
    document.querySelector('#errorMessage').textContent = "Merci de renseigner au moins un numéro de téléphone !";
    // On bloque l'envoi du formulaire
    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
}

function checkZipCode(event)
{
    const zipCode = document.querySelector('#privatePostalCode').value;
    if ( zipCode.length == 5
        && isNumeric(zipCode)) {
        return true;
    }
    document.querySelector('#errorMessage').textContent = "Le code postal est invalide !";
    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
}

function checkIfCGVChecked(event)
{
    if (document.querySelectorAll('#privateAcceptCGV:checked').length == 1) {
        return true;
    }
    document.querySelector('#privateAcceptCGV').classList.add('CGVUnchecked');
    document.querySelector('#errorMessage').textContent = "Merci de valider les CGV !";
    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
}

function checkIfUserIsAtLeast13(event)
{
    let userBirthDate = document.querySelector('#dateOfBirth').value;
    let today = new Date();

    const userDate = new Date(userBirthDate);

    /* Premier cas : année de naissance < année courante - 13 */
    if (userDate.getFullYear() < today.getFullYear() - 13) {
        return true;
    }
    /* Deuxième cas : année de naissance = année courante - 13 
        et mois de naissance < mois en cours */
    if ((userDate.getFullYear() == today.getFullYear() - 13)
        && userDate.getMonth() < today.getMonth()) {
        return true;
    }
    /* Troisième cas : année de naissance = année courante - 13 
        et mois de naissance = mois en cours
        et jour de naissance <= jour actuel */
    if ((userDate.getFullYear() == today.getFullYear() - 13)
    && userDate.getMonth() == today.getMonth()
    && userDate.getDate() <= today.getDate()) {
        return true;
    }

    document.querySelector('#errorMessage').textContent = "Tu n'as pas 13 ans, demande à un adulte de te créer le compte !";
    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
}


function attachPrivateAccountListeners()
{
    document.querySelector('#individualForm').addEventListener('submit', checkIfAtLeastOnePhoneNumber);
    document.querySelector('#individualForm').addEventListener('submit', checkZipCode);
    document.querySelector('#individualForm').addEventListener('submit', checkIfCGVChecked);
    document.querySelector('#individualForm').addEventListener('submit', checkIfUserIsAtLeast13);
}
