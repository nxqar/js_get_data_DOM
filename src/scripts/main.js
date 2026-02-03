'use strict';

const populationElements = document.querySelectorAll('.population');
let total = 0;

populationElements.forEach((el) => {
  const num = Number(el.innerText.replace(/,/g, ''));

  if (!isNaN(num)) {
    total += num;
  }
});

const average = Math.round(total / populationElements.length);

function commas(num) {
  const str = num.toString();
  let result = '';
  let count = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (count > 0 && count % 3 === 0) {
      result = ',' + result;
    }
    result = str[i] + result;
    count++;
  }

  return result;
}

document.querySelector('.total-population').innerText = commas(total);

document.querySelector('.average-population').innerText = commas(average);
