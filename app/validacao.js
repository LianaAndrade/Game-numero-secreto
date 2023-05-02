function verificaSeUmChuteEValido(chute){
    const numero =+ chute

    if(chuteForInvalido(numero)){
        console.log('valor inválido')

    }if(numeroForMaiorOuMenorQueOValorePermitido(numero)){
         console.log(`valor inválido: O valor secreto precisa estar entre ${menorValor} e ${maiorValor}`)

    }if(numero === numeroSecreto){
        document.body.innerHTML = 
        `
            <h1>Você acertou!</h1>
            <h2>O número secreto era ${numeroSecreto}</h2>
            <button id="jogar-novamente" class="btn-jogar">Tentar novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML +=
        `<h1>Ops, o número secreto é menor!</h1>`

    } else{
        elementoChute.innerHTML +=
        `<h2>Opa! O número secreto é maior!</h2>`
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorePermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
