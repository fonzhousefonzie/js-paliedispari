const parolaInserita = prompt('Inserisci una parola palindroma');

    
    const parolaScomposta = parolaInserita.split("");
    const parolaScompostaCapovolta = [];

    for (let i = (parolaScomposta.length - 1) ; i >= 0; i--){
        parolaScompostaCapovolta.push(parolaScomposta[i]);
    }
    
    if (parolaScomposta === parolaScompostaCapovolta){
        console.log(true);;
    } else {
        console.log(false);;
    }