const parolaInserita = prompt('Inserisci una parola palindroma');

function isPali(parola){
    let parolaScomposta = parolaInserita.split("");
    let parolaScompostaCapovolta = [];

    for (let i = (parolaScomposta.length - 1) ; i >= 0; i--){
        parolaScompostaCapovolta.push(parolaScomposta[i]);
    }

    for (let i = 0; i < parolaScomposta.length; i++){
        if (parolaScomposta[i] !== parolaScompostaCapovolta[i]){
            return false;
        } 
    }

    return true
}

console.log(isPali(parolaInserita));