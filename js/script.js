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
console.log(numbersArray); 
const NUMS = 5;

let userNumbers = [];

let sameNumbers=[];

const button = document.querySelector('.btn');

//creo l'evento base 
button.addEventListener('click', startGame);

//aggiungo il timeout
setTimeout(dissapearNumbers, 5000);

//creo la funzione principale
function startGame(){
    const starGameEl = document.getElementById('gioco');
    starGameEl.innerHTML='';
    
    let numberList = generateRandomNumbers(NUMS);
    //console.log(numberList);

    for(let i= 0; i < numberList.length; i++){
        //prendo il numero della lista
        let number = numberList[i];

        //passo il numero alla funzione che mi genera il box
        let newBox=generateBox(number);

        //append il nuovo box alla funzione
        starGameEl.appendChild(newBox);

    }
}

//funzioni
function generateRandomNumbers(){

    while (numbersArray.length < NUMS){
        let num = getRndInteger(1, 100);
        console.log(num);
        if(!numbersArray.includes(num)){
            numbersArray.push(num);
        }
    } 
    return numbersArray;
};

function generateBox(content){
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.innerHTML=`
    <span> ${content} </span>
    `;
    return newBox;
};

function dissapearNumbers(){
    const starGameEl = document.getElementById('gioco');
    starGameEl.classList.add('d-none');
}
