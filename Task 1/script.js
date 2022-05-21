/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const inputValue = document.getElementById('search').value;

    const outputContainer = document.getElementById('output');
    const labelContainer = document.createElement('div');
    const gramsContainer = document.createElement('div');
    const ounceContainer = document.createElement('div');

    outputContainer.innerText = '';

    const label = inputValue * 2.2046;
    const grams = inputValue / 0.0010000;
    const ounce = inputValue * 35.274;

    labelContainer.innerText = `Svarai: ${label}`;
    gramsContainer.innerText = `Gramai: ${grams}`;
    ounceContainer.innerText = `Uncijos: ${ounce}`;

    outputContainer.append(labelContainer, gramsContainer, ounceContainer);
})
