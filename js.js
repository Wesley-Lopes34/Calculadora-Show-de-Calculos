function insert(num){
    
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
  
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado == '--' || resultado == '++' || resultado == '**' || resultado == '//' || resultado == '+-' || resultado == '+*' || resultado == '+/' || resultado == '-+' || resultado == '-*' || resultado == '-/' || resultado == '*-' || resultado == '*/' || resultado == '*+' || resultado == '/*' || resultado == '/-' || resultado == '/+'){
        alert("Você tem que usar somente um parametro de calculo!!")
        return clean();
    }
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