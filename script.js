'use strict';

/*
const diceImg = document.getElementById('dice');
function getDiceNumber() {
  return Math.trunc(Math.random() * 6) + 1;
}
const diceNumber = getDiceNumber();
console.log(diceNumber);
diceImg.src = `"dice-${diceNumber - 1}.png"`;
 */

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
