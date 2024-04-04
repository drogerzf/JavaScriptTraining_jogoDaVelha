

let agora = new Date();
let dia = String(agora.getDate()).padStart(2, '0'); // Adiciona um zero à esquerda se for necessário
let mes = String(agora.getMonth() + 1).padStart(2, '0'); // Adiciona um zero à esquerda se for necessário
let ano = String(agora.getFullYear()).slice(-2); // Pega os últimos dois dígitos do ano

console.log(`hoje é: ${dia}/${mes}/${ano}\n`);
// inicio logica jogo
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador jogadas
let player1 = 0;
let player2 = 0;

// adicionando evento de click nos boxes
for(let i = 0; i < boxes.length; i++) {

    // quando alguem clica na caixa
    boxes[i].addEventListener("click", function() {
            let el;
            if(player1 == player2) {
                    // x
                    el = x;
                }
            else {
                    // o
                    el = o;
                }
                
            // verifica se ja tem X ou O
            if(this.childNodes.length == 0) {
                
                let cloneEl = el.cloneNode(true);
                this.appendChild(cloneEl);

                //computar jogada
                if(player1 == player2) {
                        player1++;

                        if(secondPlayer == "vs-ai") {
                            //funcao jogada do computador
                            computerPlay();
                            player2++;
                        }

                    }
                else {
                        player2++; 
                    }   

                    //check quem venceu
                    checkWinMatch();

            }
    })
}

//evento para ver se é Dois Players ou IA
for(let i = 0; i < buttons.length; i++ ) {
    
    buttons[i].addEventListener("click", function() {
        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }
    setTimeout(function() {
        let container = document.querySelector("#container");
        container.classList.remove("hide");
    }, 500);

    });
}


//ve quem vai jogar
function checkEl(player1, player2) {
    if(player1==player2) {
        // x
        el = x;
    } else {
        // o
        el = o;
    }
    return el;
}

//check quem venceu
function checkWinMatch() {

    let b1 = document.getElementById("box-1");
    let b2 = document.getElementById("box-2");
    let b3 = document.getElementById("box-3");
    let b4 = document.getElementById("box-4");
    let b5 = document.getElementById("box-5");
    let b6 = document.getElementById("box-6");
    let b7 = document.getElementById("box-7");
    let b8 = document.getElementById("box-8");
    let b9 = document.getElementById("box-9");

    // check win horizontal 1-2-3
    if(b1.childNodes.length >0 && b2.childNodes.length >0 && b3.childNodes.length >0) {
        
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            // x
            console.log('x venceu');
            declareWinner("x");
        }
        else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') { 
            // o
            console.log('o venceu');
            declareWinner("o");
        }
    }

    // check win horizontal 4-5-6
    if(b4.childNodes.length >0 && b5.childNodes.length >0 && b6.childNodes.length >0) {
            
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            // x
            console.log('x venceu');
            declareWinner("x");
        }
        else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') { 
            // o
            console.log('o venceu');
            declareWinner("o");
        }
    }

    // check win horizontal 7-8-9
    if(b7.childNodes.length >0 && b8.childNodes.length >0 && b9.childNodes.length >0) {
            
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            // x
            console.log('x venceu');
            declareWinner("x");
        }
        else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') { 
            // o
            console.log('o venceu');
            declareWinner("o");
        }
    }

    // check win vertical 1-4-7
    if(b1.childNodes.length >0 && b4.childNodes.length >0 && b7.childNodes.length >0) {
            
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            // x
            console.log('x venceu');
            declareWinner("x");
        }
        else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') { 
            // o
            console.log('o venceu');
            declareWinner("o");
        }
    }

    // check win vertical 2-5-8
    if(b2.childNodes.length >0 && b5.childNodes.length >0 && b8.childNodes.length >0) {
                
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            // x
            console.log('x venceu');
            declareWinner("x");
        }
        else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') { 
            // o
            console.log('o venceu');
            declareWinner("o");
        }
    }

    // check win vertical 3-6-9
    if(b3.childNodes.length >0 && b6.childNodes.length >0 && b9.childNodes.length >0) {
            
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            // x
            console.log('x venceu');
            declareWinner("x");
        }
        else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') { 
            // o
            console.log('o venceu');
            declareWinner("o");
        }
    }

    // check win diagonal 1-5-9
    if(b1.childNodes.length >0 && b5.childNodes.length >0 && b9.childNodes.length >0) {
            
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            // x
            console.log('x venceu');
            declareWinner("x");
        }
        else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') { 
            // o
            console.log('o venceu');
            declareWinner("o");
        }
    }

    // check win diagonal 3-5-7
    if(b3.childNodes.length >0 && b5.childNodes.length >0 && b7.childNodes.length >0) {
                
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            // x
            console.log('x venceu');
            declareWinner("x");
        }
        else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') { 
            // o
            console.log('o venceu');
            declareWinner("o");
        }
    }

    //deu velha
    let counter = 0
    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] !=undefined) {
            counter ++;
        }
    }
    
    if(counter == 9 ) {
        console.log("deu velha");
        declareWinner("Deu Velha!");
    }

}

//limpa jogo, declara o vencedor e atualiza o placar 
function declareWinner(winner) {
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");
    let msg = "";

    if(winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) +1;
        msg = "Jogador 1 venceu";
    } else if(winner == "o") {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) +1;
        msg = "Jogador 2 venceu";
    } else {
        msg = "Deu velha!"
    }

    //exibe msg de conclusão
    messageText.innerHTML = msg;
    messageContainer.classList.remove('hide');

    //esconde msg
    setTimeout(function() {
        messageContainer.classList.add("hide");
    }, 3000);

    //zera jogadas
    player1 = 0;
    player2 = 0;

    //remove as marcações X e O feitas no jogo anterior para inciar próximo
    let boxesToRemove = document.querySelectorAll(".box div");

        for(let i = 0; i < boxesToRemove.length; i++) {
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
        }
    
}

//lógica para computador jogar
function computerPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);
        //só vai preencher se estiver vazio o filho
        if(boxes[i].childNodes[0] == undefined) {
            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                // setTimeout(function() {}, 300);
                break;
            }
        } 
        //check sobre quantas boxes estão preenchidas
        else {
            filled++;
        }
    }
    //recursivo, caso o computador ainda não tenha realizado o movimento
    if(counter == 0 && filled < 9) {
        computerPlay();
    }
}




console.log("quantidade de boxes", boxes.length);
console.log('echo on!');    