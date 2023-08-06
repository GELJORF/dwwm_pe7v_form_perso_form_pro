"use strict";

function showElement(eltId) 
{
    document.querySelector('#' + eltId).classList.remove('hidden');
}
function hideElement(eltId) 
{
    document.querySelector('#' + eltId).classList.add('hidden');
}

function handleAccountTypeChoice() 
{
    let accountType = document.querySelector('input[name="accountType"]:checked').value;

    if (accountType == 'individual') {
        hideElement('professionalForm');
        showElement('individualForm');
    } else {
        hideElement('individualForm');
        showElement('professionalForm');
    }
}

function attachAccountTypeListener() 
{
    let radios = document.querySelectorAll('input[name="accountType"]');
    let i = 0;
    while (i < radios.length) {
        radios[i].addEventListener('change', handleAccountTypeChoice);
        i++;
    }
}

function main() {
    attachAccountTypeListener();
    attachPrivateAccountListeners();
}

window.addEventListener('load', main);