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

const NUMS = 5;

let userNumbers = [];

let sameNumbers=[];

const button = document.querySelector('.btn');

//creo la funzione base 
button.addEventListener('click', function(){

});

//funzioni
function generateRandomNumbers(){
    
    let numbersArray= [];
    console.log(numbersArray); 

    while (numbersArray.length < NUMS){
        let num = getRndInteger(1, 100);
        console.log(num);
        if(!numbersArray.includes(num)){
            numbersArray.push(num);
        }
    } 
    return numbersArray;
};

function generateBox(boxes){
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBoxes.innerHTML=`
    <span> ciao </span>
    `;

}