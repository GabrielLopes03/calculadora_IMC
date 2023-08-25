const calcular = document.getElementById("calcular")

calcular.addEventListener('click',imc);

function imc(){

    /* Criando Variaveis */
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    /* Fazendo comparação lógico */
    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'Abaixo do peso';
        }else if(valorIMC < 24.9){
            classificacao = 'Peso ideal, Parabens';
        }else if(valorIMC < 29.9){
            classificacao = 'Levemente acima do peso'
        }else if(valorIMC < 34.9){
            classificacao = 'Obesidade grau |'
        }else if(valorIMC < 39.9){
            classificacao = 'Obesidade grau || (severa)'
        }else if(valorIMC > 40){
            classificacao = 'Obesidade grau ||| (mórbida)'
        }
        /* Enviando o resultado para a <DIV> com id="Resultado" */
        resultado.textContent = `${nome} seu IMCe é ${valorIMC} e você está ${classificacao}`;
    }else{

        resultado.textContent = "Preencha todos os campos"

    }


}