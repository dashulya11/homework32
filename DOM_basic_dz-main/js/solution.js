'use strict';

//1
const ulTag = document.querySelector('ul');
const liTag = document.querySelectorAll('li');
const allAtributeUl = document.querySelector('ul').getAttributeNames();
const array = [];
const array1 = [];
const myName = 'Dasha';

for (let value of allAtributeUl) {
    const valueAtribute = ulTag.getAttribute(value);
    array.push(valueAtribute);
}
console.log(array); //get array of attributes' value
console.log(allAtributeUl); //get array of attributes name

liTag[liTag.length-1].textContent = (`«Привет меня зовут » + ${myName}`);

liTag[0].setAttribute('data-my-name', 'Dasha');

ulTag.removeAttribute('data-dog-tail');

//2

function generateList(array) {
    const ulList = document.createElement('ul');
    const body = document.querySelector('body');
    body.append(ulList);

    for (let i = 0; i < array.length; i++) {
        let liList = document.createElement('li');
        Array.isArray(array[i]) ? liList.append(generateList(array[i]))
            : liList.append(document.createTextNode(array[i]));
        
        ulList.append(liList);
    }

    return ulList;
}
console.log(generateList([1, 2, 3]));
console.log(generateList([1, 2, [1.1, 1.2, 1.3], 3]));

//3 
const table = document.getElementById('table');

function generateTable(row, cols) {
    let num = 0;
    for (let i = 1; i <= row; i++) {
        const tr = document.createElement('tr');

        for (let j = 1; j <= cols; j++) { 
            ++num;
            const td = document.createElement('td');
            td.innerHTML = num;
            tr.append(td);
        }
        table.append(tr);
    }    
}
generateTable(5, 12);