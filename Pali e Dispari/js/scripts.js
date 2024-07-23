let userChoice = prompt('Scegli P o D');
console.log('userChoice', userChoice, typeof userChoice);

while (userChoice != 'P' && userChoice != 'D'){
    userChoice = prompt('Valore non valido! Scegli P o D!');
}

let userNumber = parseInt(prompt('Scegli un numero tra 1 e 5:'));
console.log('userNumber', userNumber, typeof userNumber);

while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    userNumber = prompt( 'Valore non valido! Scegli un numero tra 1 e 5 (compresi):');
}
const pcNumber = generateRandomNumber();
console.log('pcNumber', pcNumber, typeof pcNumber);


const sum = userNumber + pcNumber;
console.log('sum', sum, typeof sum);

const sumevenOrOdd = evenOrOdd(sum);

if ((userChoice == 'P' && sumevenOrOdd == 'Pari') || (userChoice == 'D' && sumevenOrOdd == 'Dispari')) {
    alert('Hai Vinto!!');
}
else {
    alert('Hai perso..');
}

/*Funzione*/

function generateRandomNumber() {
    const num = Math.floor(Math.random() * 5) + 1;

    return num;
}

function evenOrOdd (num){
    if (num % 2 == 0){
        return 'pari';
    }
    else{
        return 'dispari';
    }
}   