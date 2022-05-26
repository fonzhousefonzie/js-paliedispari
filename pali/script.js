const parolaInserita = prompt('Inserisci una parola palindroma');

    
    const parolaScomposta = parolaInserita.split("");
    const parolaScompostaCapovolta = [];;

    for (let i = (parolaScomposta.length - 1) ; i >= 0; i--){
        parolaScompostaCapovolta.push(parolaScomposta[i]);
    }
    
    let prova;

    for (let i = 0; i < parolaScomposta.length; i++){
        if (parolaScomposta[i] === parolaScompostaCapovolta[i]){
            prova = true;
        } else {
            prova = false;
        }
    }

    console.log(parolaScomposta)
    console.log(parolaScompostaCapovolta);
    console.log(prova);
