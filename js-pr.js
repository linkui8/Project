'use strict'

const sun = document.getElementById('sun');
const maintext = document.getElementById('maintext');
const podmaintext = document.getElementById('podmaintext');
const hrmain = document.getElementById('hrmain');

function OnClick1() {
    document.getElementById('sun').style.visibility = 'hidden';
}

function OnClick2() {
    if (sun.style.visibility != 'hidden' && ) {
        sun.style.visibility = 'hidden';
        maintext.style.visibility = 'hidden';
        podmaintext.style.visibility = 'hidden';
        hrmain.style.visibility = 'hidden';
    } else {
        sun.style.visibility = 'visible';
        maintext.style.visibility = 'visible';
        podmaintext.style.visibility = 'visible';
        hrmain.style.visibility = 'visible';
    }
}