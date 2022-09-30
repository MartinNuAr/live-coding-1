"use strict"

/* Se define la cadena de entrada como la que puso el usuario y se obtiene el botón, así
como el espacio en la lista */

let myString = document.getElementById("userString");
let btnShow = document.getElementById("btnWord");

// Se define el arreglo de entrada

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

/* Función que recorre cada elemento del arreglo de entrada y lo compara con la cadena de
entrada. Cuando una cadena es más  */

function bigWords(string, array) {
    let bigWordsArray = [];
    array.forEach(element => {
        if (string.length < element.length) {
            bigWordsArray.push(element);
        }
    });
    return bigWordsArray;
 };

// 2.
// Se declara una variable con la etiqueta <ul> del html

let lista = document.getElementsByTagName("ul");

// Se escribe la función para imprimir la lista

function printList(array) {
    array.forEach(element => {
        lista[0].innerHTML +=`<li>${element}</li>`;
    });
};

// Por último, se añade un evento al botón para imprimir el resultado

btnShow.addEventListener("click", function (event) {
    let result = bigWords(myString.value, myArray);
    printList(result);
});

