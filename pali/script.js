const parolaInserita = prompt('Inserisci una parola palindroma');

function isPali(parolaInserita){
    let parolaScomposta = parolaInserita.split("");
    let parolaScompostaCapovolta = [];;

    for (let i = (parolaScomposta.length - 1) ; i >= 0; i--){
        parolaScompostaCapovolta.push(parolaScomposta[i]);
    }
    
    let prova = false;

    for (let i = 0; i < parolaScomposta.length; i++){
        console.log("primo array: " + parolaScomposta[i] + " - secondo array: " + parolaScompostaCapovolta[i]);
        if (parolaScomposta[i] === parolaScompostaCapovolta[i]){
            prova = true;
        } else {
            return false;
        }
    }
}

console.log(isPali(parolaInserita));