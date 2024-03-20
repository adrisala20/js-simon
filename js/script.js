/* 
Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e 
l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

let numbersArray= [];
let userNumbers = [];

let sameNumbers=[];

const button = document.querySelector('.btn');

//creo la funzione base 
button.addEventListener('click', function(){

    let boxes = document.getElementById('numeri');
    boxes.classList.add('box');
    boxes.innerHTML='';
    console.log(boxes);

});


//funzioni
// function generateRandomNumbers(numbers){
//     let num = 
// }