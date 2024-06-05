let indiceAtual = 1;
let indiceAtualLCD = 1;

var botao1 = document.getElementById('ls1');
var botao2 = document.getElementById('ls2');
var botao3 = document.getElementById('ls3');
var botao4 = document.getElementById('ls4');
var botao5 = document.getElementById('ls5');
var botao6 = document.getElementById('ls6');
var botao7 = document.getElementById('ls7');
var botao8 = document.getElementById('ls8');
var botao9 = document.getElementById('ls9');
var botao10 = document.getElementById('ls10');

var LCD1 = document.getElementById('lcd1');
var LCD2 = document.getElementById('lcd2');
var LCD3 = document.getElementById('lcd3');

clicks();
coresLs();
coresLCD();


function clicks (){
    botao1.addEventListener('click', function() {
        indiceAtual = 1;
        coresLs();
        }
    );

    botao2.addEventListener('click', function() {
        indiceAtual = 2;
        coresLs();
        }
    );

    botao3.addEventListener('click', function() {
        indiceAtual = 3;
        coresLs();
        }
    );
    botao4.addEventListener('click', function() {
        indiceAtual = 4;
        coresLs();
        }
    );
    botao5.addEventListener('click', function() {
        indiceAtual = 5;
        coresLs();
        }
    );
    botao6.addEventListener('click', function() {
        indiceAtual = 6;
        coresLs();
        }
    );
    botao7.addEventListener('click', function() {
        indiceAtual = 7;
        coresLs();
        }
    );
    botao8.addEventListener('click', function() {
        indiceAtual = 8;
        coresLs();
        }
    );
    botao9.addEventListener('click', function() {
        indiceAtual = 9;
        coresLs();
        }
    );
    botao10.addEventListener('click', function() {
        indiceAtual = 0;
        coresLs();
        }
    );

    LCD1.addEventListener('click', function() {
        indiceAtualLCD = 1;
        coresLCD();
        }
    );
    LCD2.addEventListener('click', function() {
        indiceAtualLCD = 2;
        coresLCD();
        }
    );
    LCD3.addEventListener('click', function() {
        indiceAtualLCD = 3;
        coresLCD();
        }
    );
}

function coresLs(){
    switch(parseInt(indiceAtual)){
        case 1:
            botao1.style.color = 'white'
            botao1.style.backgroundColor = '#65CCF9'
            botao2.style.color = '#423FCF'
            botao2.style.backgroundColor = 'white'
            botao3.style.color = '#423FCF'
            botao3.style.backgroundColor = 'white'
            botao4.style.color = '#423FCF'
            botao4.style.backgroundColor = 'white'
            botao5.style.color = '#423FCF'
            botao5.style.backgroundColor = 'white'
            botao6.style.color = '#423FCF'
            botao6.style.backgroundColor = 'white'
            botao7.style.color = '#423FCF'
            botao7.style.backgroundColor = 'white'
            botao8.style.color = '#423FCF'
            botao8.style.backgroundColor = 'white'
            botao9.style.color = '#423FCF'
            botao9.style.backgroundColor = 'white'
            botao10.style.color = '#423FCF'
            botao10.style.backgroundColor = 'white'
        break;
        case 2:
            botao1.style.color = '#423FCF'
            botao1.style.backgroundColor = 'white'
            botao2.style.color = 'white'
            botao2.style.backgroundColor = '#65CCF9'
            botao3.style.color = '#423FCF'
            botao3.style.backgroundColor = 'white'
            botao4.style.color = '#423FCF'
            botao4.style.backgroundColor = 'white'
            botao5.style.color = '#423FCF'
            botao5.style.backgroundColor = 'white'
            botao6.style.color = '#423FCF'
            botao6.style.backgroundColor = 'white'
            botao7.style.color = '#423FCF'
            botao7.style.backgroundColor = 'white'
            botao8.style.color = '#423FCF'
            botao8.style.backgroundColor = 'white'
            botao9.style.color = '#423FCF'
            botao9.style.backgroundColor = 'white'
            botao10.style.color = '#423FCF'
            botao10.style.backgroundColor = 'white'
        break;
        case 3:
            botao1.style.color = '#423FCF'
            botao1.style.backgroundColor = 'white'
            botao2.style.color = '#423FCF'
            botao2.style.backgroundColor = 'white'
            botao3.style.color = 'white'
            botao3.style.backgroundColor = '#65CCF9'
            botao4.style.color = '#423FCF'
            botao4.style.backgroundColor = 'white'
            botao5.style.color = '#423FCF'
            botao5.style.backgroundColor = 'white'
            botao6.style.color = '#423FCF'
            botao6.style.backgroundColor = 'white'
            botao7.style.color = '#423FCF'
            botao7.style.backgroundColor = 'white'
            botao8.style.color = '#423FCF'
            botao8.style.backgroundColor = 'white'
            botao9.style.color = '#423FCF'
            botao9.style.backgroundColor = 'white'
            botao10.style.color = '#423FCF'
            botao10.style.backgroundColor = 'white'
        break;
        case 4:
            botao1.style.color = '#423FCF'
            botao1.style.backgroundColor = 'white'
            botao2.style.color = '#423FCF'
            botao2.style.backgroundColor = 'white'
            botao3.style.color = '#423FCF'
            botao3.style.backgroundColor = 'white'
            botao4.style.color = 'white'
            botao4.style.backgroundColor = '#65CCF9'
            botao5.style.color = '#423FCF'
            botao5.style.backgroundColor = 'white'
            botao6.style.color = '#423FCF'
            botao6.style.backgroundColor = 'white'
            botao7.style.color = '#423FCF'
            botao7.style.backgroundColor = 'white'
            botao8.style.color = '#423FCF'
            botao8.style.backgroundColor = 'white'
            botao9.style.color = '#423FCF'
            botao9.style.backgroundColor = 'white'
            botao10.style.color = '#423FCF'
            botao10.style.backgroundColor = 'white'
        break;
        case 5:
            botao1.style.color = '#423FCF'
            botao1.style.backgroundColor = 'white'
            botao2.style.color = '#423FCF'
            botao2.style.backgroundColor = 'white'
            botao3.style.color = '#423FCF'
            botao3.style.backgroundColor = 'white'
            botao4.style.color = '#423FCF'
            botao4.style.backgroundColor = 'white'
            botao5.style.color = 'white'
            botao5.style.backgroundColor = '#65CCF9'
            botao6.style.color = '#423FCF'
            botao6.style.backgroundColor = 'white'
            botao7.style.color = '#423FCF'
            botao7.style.backgroundColor = 'white'
            botao8.style.color = '#423FCF'
            botao8.style.backgroundColor = 'white'
            botao9.style.color = '#423FCF'
            botao9.style.backgroundColor = 'white'
            botao10.style.color = '#423FCF'
            botao10.style.backgroundColor = 'white'
        break;
        case 6:
            botao1.style.color = '#423FCF'
            botao1.style.backgroundColor = 'white'
            botao2.style.color = '#423FCF'
            botao2.style.backgroundColor = 'white'
            botao3.style.color = '#423FCF'
            botao3.style.backgroundColor = 'white'
            botao4.style.color = '#423FCF'
            botao4.style.backgroundColor = 'white'
            botao5.style.color = '#423FCF'
            botao5.style.backgroundColor = 'white'
            botao6.style.color = 'white'
            botao6.style.backgroundColor = '#65CCF9'
            botao7.style.color = '#423FCF'
            botao7.style.backgroundColor = 'white'
            botao8.style.color = '#423FCF'
            botao8.style.backgroundColor = 'white'
            botao9.style.color = '#423FCF'
            botao9.style.backgroundColor = 'white'
            botao10.style.color = '#423FCF'
            botao10.style.backgroundColor = 'white'
        break;
        case 7:
            botao1.style.color = '#423FCF'
            botao1.style.backgroundColor = 'white'
            botao2.style.color = '#423FCF'
            botao2.style.backgroundColor = 'white'
            botao3.style.color = '#423FCF'
            botao3.style.backgroundColor = 'white'
            botao4.style.color = '#423FCF'
            botao4.style.backgroundColor = 'white'
            botao5.style.color = '#423FCF'
            botao5.style.backgroundColor = 'white'
            botao6.style.color = '#423FCF'
            botao6.style.backgroundColor = 'white'
            botao7.style.color = 'white'
            botao7.style.backgroundColor = '#65CCF9'
            botao8.style.color = '#423FCF'
            botao8.style.backgroundColor = 'white'
            botao9.style.color = '#423FCF'
            botao9.style.backgroundColor = 'white'
            botao10.style.color = '#423FCF'
            botao10.style.backgroundColor = 'white'
        break;
        case 8:
            botao1.style.color = '#423FCF'
            botao1.style.backgroundColor = 'white'
            botao2.style.color = '#423FCF'
            botao2.style.backgroundColor = 'white'
            botao3.style.color = '#423FCF'
            botao3.style.backgroundColor = 'white'
            botao4.style.color = '#423FCF'
            botao4.style.backgroundColor = 'white'
            botao5.style.color = '#423FCF'
            botao5.style.backgroundColor = 'white'
            botao6.style.color = '#423FCF'
            botao6.style.backgroundColor = 'white'
            botao7.style.color = '#423FCF'
            botao7.style.backgroundColor = 'white'
            botao8.style.color = 'white'
            botao8.style.backgroundColor = '#65CCF9'
            botao9.style.color = '#423FCF'
            botao9.style.backgroundColor = 'white'
            botao10.style.color = '#423FCF'
            botao10.style.backgroundColor = 'white'
        break;
        case 9:
            botao1.style.color = '#423FCF'
            botao1.style.backgroundColor = 'white'
            botao2.style.color = '#423FCF'
            botao2.style.backgroundColor = 'white'
            botao3.style.color = '#423FCF'
            botao3.style.backgroundColor = 'white'
            botao4.style.color = '#423FCF'
            botao4.style.backgroundColor = 'white'
            botao5.style.color = '#423FCF'
            botao5.style.backgroundColor = 'white'
            botao6.style.color = '#423FCF'
            botao6.style.backgroundColor = 'white'
            botao7.style.color = '#423FCF'
            botao7.style.backgroundColor = 'white'
            botao8.style.color = '#423FCF'
            botao8.style.backgroundColor = 'white'
            botao9.style.color = 'white'
            botao9.style.backgroundColor = '#65CCF9'
            botao10.style.color = '#423FCF'
            botao10.style.backgroundColor = 'white'
        break;
        case 0:
            botao1.style.color = '#423FCF'
            botao1.style.backgroundColor = 'white'
            botao2.style.color = '#423FCF'
            botao2.style.backgroundColor = 'white'
            botao3.style.color = '#423FCF'
            botao3.style.backgroundColor = 'white'
            botao4.style.color = '#423FCF'
            botao4.style.backgroundColor = 'white'
            botao5.style.color = '#423FCF'
            botao5.style.backgroundColor = 'white'
            botao6.style.color = '#423FCF'
            botao6.style.backgroundColor = 'white'
            botao7.style.color = '#423FCF'
            botao7.style.backgroundColor = 'white'
            botao8.style.color = '#423FCF'
            botao8.style.backgroundColor = 'white'
            botao9.style.color = '#423FCF'
            botao9.style.backgroundColor = 'white'
            botao10.style.color = 'white'
            botao10.style.backgroundColor = '#65CCF9'
        break;
        
    }
}

function coresLCD(){
    switch(indiceAtualLCD){
        case 1:
            LCD1.style.color = 'white'
            LCD1.style.backgroundColor = '#65CCF9'
            LCD2.style.color = '#423FCF'
            LCD2.style.backgroundColor = 'white'
            LCD3.style.color = '#423FCF'
            LCD3.style.backgroundColor = 'white'
        break;
        case 2:
            LCD1.style.color = '#423FCF'
            LCD1.style.backgroundColor = 'white'
            LCD2.style.color = 'white'
            LCD2.style.backgroundColor = '#65CCF9'
            LCD3.style.color = '#423FCF'
            LCD3.style.backgroundColor = 'white'
        break;
        case 3:
            LCD1.style.color = '#423FCF'
            LCD1.style.backgroundColor = 'white'
            LCD2.style.color = '#423FCF'
            LCD2.style.backgroundColor = 'white'
            LCD3.style.color = 'white'
            LCD3.style.backgroundColor = '#65CCF9'
        break;
    }
}

