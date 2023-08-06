"use strict";

function checkIfAtLeastOnePhoneNumber(event) 
{
    //L'envoi du formulaire est bloqué tant que la vérification n'est pas effectuée
    event.preventDefault();

    let landlineNumber = document.querySelector('#landLineNumber').value;
    let gsmNumber = document.querySelector('#gsmNumber').value;

    if (landlineNumber.length > 0 || gsmNumber.length > 0) {
        return true;
    }
    return false;
}

function attachPrivateAccountListeners() 
{
    document.querySelector('#individualForm').addEventListener('submit', checkIfAtLeastOnePhoneNumber);
}
