"use strict";

function checkIfAtLeastOnePhoneNumber()
{
    let landlineNumber = document.querySelector('#landLineNumber').value;
    let gsmNumber = document.querySelector('#gsmNumber').value;

    if (landlineNumber.length > 0 || gsmNumber.length > 0) {
        return true;
    }
    document.querySelector('#errorMessage').textContent = "Merci de renseigner au moins un numéro de téléphone !";
    return false;
}

function checkZipCode()
{
    const zipCode = document.querySelector('#privatePostalCode').value;
    if ( zipCode.length == 5
        && isNumeric(zipCode)) {
        return true;
    }
    document.querySelector('#errorMessage').textContent = "Le code postal est invalide !";
    return false;
}

function checkIfCGVChecked()
{
    if (document.querySelectorAll('#privateAcceptCGV:checked').length == 1) {
        return true;
    }
    document.querySelector('#privateAcceptCGV').classList.add('CGVUnchecked');
    document.querySelector('#errorMessage').textContent = "Merci de valider les CGV !";
    return false;
}

function checkIfUserIsAtLeast13()
{
    let userBirthDate = document.querySelector('#dateOfBirth').value;
    let today = new Date();

    const userDate = new Date(userBirthDate);

    /* 1e cas : année de naissance < année courante - 13 */
    if (userDate.getFullYear() < today.getFullYear() - 13) {
        return true;
    }
    /* 2e cas : année de naissance = année courante - 13 
        et mois de naissance < mois en cours */
    if ((userDate.getFullYear() == today.getFullYear() - 13)
        && userDate.getMonth() < today.getMonth()) {
        return true;
    }
    /* 3e cas : année de naissance = année courante - 13 
        et mois de naissance = mois en cours
        et jour de naissance <= jour actuel */
    if ((userDate.getFullYear() == today.getFullYear() - 13)
    && userDate.getMonth() == today.getMonth()
    && userDate.getDate() <= today.getDate()) {
        return true;
    }

    document.querySelector('#errorMessage').textContent = "Tu n'as pas 13 ans, demande à un adulte de te créer le compte !";
    return false;
}

function buildIndividualFormResult()
{
    let result = {};

    let inputs = document.querySelectorAll('#individualForm input, #individualForm select');

    let i = 0;
    while (i < inputs.length) {
        let name = inputs[i].getAttribute('name');
        let value = inputs[i].value;
        result[name] = value;
        i++;
    }

    return result;
}

function handleIndividualFormSubmit(event)
{
    event.preventDefault();

    if (checkIfAtLeastOnePhoneNumber()
        && checkZipCode()
        && checkIfCGVChecked()
        && checkIfUserIsAtLeast13()) {
            /* Traiter le formulaire si les vérifications sont correctes  */
            console.log(buildIndividualFormResult());
    }

    return false;
}

function attachPrivateAccountListeners()
{
    document.querySelector('#individualForm')
        .addEventListener('submit', handleIndividualFormSubmit);
}

