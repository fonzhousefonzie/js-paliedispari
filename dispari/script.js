/*L’utente sceglie pari o dispari tramite un prompt
L’utente inserisce anche un numero da 1 a 5.
Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari
ha vinto l’utente, altrimenti il computer
*/

function isPari(num) {
    if(num % 2 !== 0){
        return false
    }

    return true
}

const pariODispari = prompt('scegli e scrivi pari o dispari');

if (pariODispari === "pari" || pariODispari === "dispari"){
    
    const insNum = parseInt(prompt('inserisci un numero da 1 a 5'));
    if (insNum > 0 && insNum < 6 && !isNaN(insNum)){
        console.log(insNum);
        const cpuNum = Math.floor((Math.random() * 5) + 1);
        console.log(cpuNum);
        const somma = insNum + cpuNum ;
        console.log(somma);
        if (pariODispari === "pari"){
            if (isPari(somma) === true){
                alert('Hai vinto!')
            } else {
                alert('Hai perso.')
            }
        } else {
            if (isPari(somma) === false){
                alert('Hai vinto!')
            } else {
                alert('Hai perso.')
            }
        }

    } else {
        alert('valore non valido!')
        window.location.reload()
    }

} else {
    alert('valore non valido!')
    window.location.reload()
}