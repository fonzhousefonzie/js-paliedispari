const parolaInserita = prompt('Inserisci una parola palindroma');

    
    const parolaScomposta = parolaInserita.split("");
    const parolaScompostaCapovolta = [];;

    for (let i = (parolaScomposta.length - 1) ; i >= 0; i--){
        parolaScompostaCapovolta.push(parolaScomposta[i]);
    }
    
    let prova;

    for (let i = 0; i < parolaScomposta.length; i++){
        console.log("primo array: " + parolaScomposta[i] + " - secondo array: " + parolaScompostaCapovolta[i]);
        if (parolaScomposta[i] === parolaScompostaCapovolta[i]){
            prova = true;
            console.log(prova);
        } else {
            prova = false;
            console.log(prova);
        }
    }

    console.log(parolaScomposta)
    console.log(parolaScompostaCapovolta);
    console.log(prova);
