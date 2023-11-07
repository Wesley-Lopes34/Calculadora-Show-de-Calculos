//Função que serve para inserção de um número, ele pega o valor que foi atribuido a um botão caso o botão tenha sido clicado e exibe esse valor
function insert(num){
    
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

//Função que serve para limpar a parte de exibição de resultados e também do que foi clicado
function clean(){
    document.getElementById('resultado').innerHTML = "";
}

//Essa função serve como se fosse um borracha, ela serve para apagar um valor caso o usuario tenha digitado um valor errado
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

//Função que serve para calcular o resultado
function calcular(){

//A parte de resultado vai receber o resultado do que foi "digitado"
    var resultado = document.getElementById('resultado').innerHTML;

//Essa é uma parte de verificação, para que caso o usuario tente fazer um calculo com valores que não podem ser calculados, ele exiba uma mensagem de alerta, tem que aprimorar ainda mais essa parte
    if(resultado == '--' || resultado == '++' || resultado == '**' || resultado == '//' || resultado == '+-' || resultado == '+*' || resultado == '+/' || resultado == '-+' || resultado == '-*' || resultado == '-/' || resultado == '*-' || resultado == '*/' || resultado == '*+' || resultado == '/*' || resultado == '/-' || resultado == '/+'){
        alert("Você tem que usar somente um parametro de calculo!!")
        return clean();
    }

//Parte que checa caso não seja digitado nada
    if(resultado == '.' || resultado == '..' || resultado == '...'){
        alert("Sim, não quer fazer nenhum calculo não?")
        return clean();
    }

    if(resultado == '0'){
        alert("Para aqueles que não conhecem, esse é o numero ZERO(0)")
    }

    if(resultado){
    document.getElementById('resultado').innerHTML = eval(resultado);
}
    else{
        document.getElementById('resultado').innerHTML = "Nada...";
    }

}