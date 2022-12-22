function esquerdaPonto(){
    var x = document.getElementById("esquerda").innerText;
    x = parseInt(x);
    x = x + 1;
    document.getElementById("esquerda").innerText = x;
    compararPontos();
}
function direitaPonto(){
    var x = document.getElementById("direita").innerText;
    x = parseInt(x);
    x = x + 1;
    document.getElementById("direita").innerText = x;
    compararPontos();
}
function compararPontos(){
    var x = document.getElementById("esquerda").innerText;
    var y = document.getElementById("direita").innerText;
    
    document.getElementById("esquerda").style.color = "white";
    document.getElementById("direita").style.color = "white";
    x = parseInt(x);
    y = parseInt(y);
    var difereca = x - y;
    var diferenca = y - x;
    if(x > y){
        if(x>=11 && difereca >= 2){
            document.getElementById("esquerda").innerText = 0;
            document.getElementById("direita").innerText = 0;
            x = 0;
            y = 0;
            var setE = document.getElementById("setE").innerText;
            setE = parseInt(setE);
            setE = setE + 1;
            document.getElementById("setE").innerText = setE;
            console.log(document.getElementById("esquerda").style.color);
        }
        if(x>=10 && difereca >= 1){
            //mudar cor
            document.getElementById("esquerda").style.color = "orange";
        }
        else if(x>=10 && difereca ==0) {
            //mudar cor
            document.getElementById("esquerda").style.color = "white";
        }
        else if(x<10){
            //mudar cor
            document.getElementById("esquerda").style.color = "white";
        }
        
    }else if(y > x){
        if(y>=11 && diferenca >= 2){
            x = 0;
            y = 0;
            document.getElementById("esquerda").innerText = 0;
            document.getElementById("direita").innerText = 0;
            var setD = document.getElementById("setD").innerText;
            setD = parseInt(setD);
            setD = setD + 1;
            document.getElementById("setD").innerText = setD;
        }
        if(y>=10 && diferenca >= 1){
            //mudar cor
            document.getElementById("direita").style.color = "orange";
        }
        else if(y>=10 && diferenca ==0) {
            //mudar cor
            document.getElementById("direita").style.color = "white";
        }
        else if(y<10){
            //mudar cor
            document.getElementById("direita").style.color = "white";
        }
    }
    if(x ==0 && y == 0){
        document.getElementById("direita").style.color = "white";
    }
}
function voltaEsquerda(){
    var x = document.getElementById("esquerda").innerText;
    x = parseInt(x);
    if(x > 0){
    x = x - 1;
    }
    document.getElementById("esquerda").innerText = x;
    compararPontos();
}
function voltaDireita(){
    var x = document.getElementById("direita").innerText;
    x = parseInt(x);
    if(x > 0){
    x = x - 1;
    }
    document.getElementById("direita").innerText = x;
    compararPontos();
}
