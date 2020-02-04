var addBtn = document.getElementById("addPlayerBtn"),
    playBtn = document.getElementById("play"),
    names=[],
    desafio = [
        "fazer uma pose de yoga e ficar parado por 10 segundos",
        "beber usando a tampa da garrafa",
        "dançar em público",
        "pedir ao dono do bar uma dose de leite",
        "lamber a pessoa à sua direita",
        "beber de canudinho até o fim do jogo",
        "seduzir um poste ou uma arvore",
        "pedir o número de alguém fora do jogo",
        "torcer o mamilo da pessoa à sua esquerda",
        "plantar bananeira por 15 segundos",
        "beijar o pé da pessoa à sua esquerda",
        "responder quanto é 7x8, a cada segundo pensando é mais um gole que deve beber",
        "beijar a pessoa a sua frente",
        "fazer pole dance em um poste",
        "receber um tapa na bunda",
        "dar um tapa na bunda da pessoa à sua direita",
        "beijar a pessoa à sua esquerda",
        "beijar a pessoa à sua direita",
        "pedir um gole da mesa ao lado",
        "deixar que vejam sua galeria", 
        "contar uma verdade", 
        "beber uma dose", 
        "gritar \"eu tenho fimose\"", 
        "tocar as partes íntimas da pessoa à sua esquerda", 
        "dar um chupão na pessoa à sua frente", 
        "lamber a orelha da pessoa a sua direita", 
        "morder o lábio da pessoa a sua esquerda",
        "trocar de lugar com algum jogador",
        "sentar no colo da pessoa ao lado e permanecer por 5 rodadas",
        "ficar de mãos dadas com a pessoa a sua direita até o fim do jogo",
        "dar uma cambalhota",
        "pedir dinheiro para alguém na rua até conseguir algo",
        "ser o garçom da turma até o fim do jogo",
        "enviar uma mensagem para seu(sua) ex",
        "tomar um gole da bebida e fazer uma analise detalhada dela, como se fosse um especialsta em vinhos",
        "tirar uma peça de roupa de maneira sensual",
        "com os olhos vendados, tocar em alguém na roda e dizer qual parte do corpo é",
        "mandar um audio gemendo para a terceira conversa do seu whatsapp",
        "simular sua posição sexual preferida",
        "morder a pessoa ao lado",
        "dar um selinho em alguém da roda",
        "fingir um orgasmo",
        "ligar para alguém aleatório e canta feliz aniversario",
        "cheirar a axila da pessoa ao lado e dar uma nota de 0 a 10",
        "ligar para alguém aleatório e cantar o hino nacional brasileiro",
        "tirar as meias da pessoa ao lado e usar como luvas até o fim do jogo",
        "fazer uma serenata para a pessoa ao lado",
        "tirar a camiseta da pessoa ao lado usando a boca",
        "dizer se já quis pegar alguém da roda",
        "dizer algum fetiche seu",
        "dizer os nomes de todas as pessoas que você já ficou este ano",
        "dizer a cor da roupa íntima que está usando sem olhar",
        "palpitar o tamanho do pau do seu melhor amigo",
        "dar um tapa na cara de alguém",
        "receber um tapa na cara",
        "escolher 3 pessoas para dar um beijo triplo",
        "mostrar sua barriga",
        "trocar de roupa com a terceira pessoa a sua esquerda",
        "posar como um fisiculturista",
        "ligar para a terceira pessoa do seu whatsapp e dizer que está grávida(o)",
        "massagear a pessoa ao lado",
        "trocar de lugar com a pessoa a sua frente",
        "trocar de lugar com a quarta pessoa a sua direita",
        "abrir o zíper da calça da pessoa a sua direita",
        "dizer a quanto tempo você se masturbou pela última vez",
        "beber se estiver solteiro, caso não seu parceiro(a) bebe",
        "dizer com quantos anos você se masturbou pela primeira vez",
        "escolher alguém para beber",
        "escolher alguém para fazer verdade ou consequencia",
        "ficar trancado no banheiro a pessoa a sua esquerda durante 5 minutos. o que acontecer lá, fica lá",
        "ser o unico a não beber",
        "dar replay com alguém na roda, se nunca beijou ninguém todos bebem"        
    ],
    jogadorAtual = "",
    divReg = document.getElementById("playersDiv");
    ;
window.onload = () =>{document.getElementById("gamediv").style.display = "none";}



function aaddPlayer(){
    var newPlayer = document.createElement("input");
    newPlayer.type = "text";
    newPlayer.placeholder = "Nome do jogador";
    newPlayer.className = "playerName form-control mb-3";
    newPlayer.id = "playerId"
    var nameInputUL = document.getElementById("nameInputList"),
    liNode = document.createElement("li");
    liNode.appendChild(newPlayer);
    nameInputUL.appendChild(liNode);
};
function getRandom(max) {
    return Math.floor(Math.random() * max)
};
function CapitalizarPrim(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
};
function play(){
    var jojadores = document.getElementsByClassName("playerName");
    console.log(jojadores.length);    
    console.log(jojadores);
    names = [].map.call(jojadores, function( jojador ) {
        return CapitalizarPrim(jojador.value);
    }).join('|').split("|");
    console.log(names);
    gameP = document.getElementById("gamep");
    getNewPlayer();
    txtNode = document.createTextNode(jogadorAtual+" deve "+desafio[getRandom(desafio.length)]);
    gameP.appendChild(txtNode);
    console.log(txtNode);
    divReg.style.display = 'none';
    document.getElementById("gamediv").style.display = "block";
};  
function getRandChallengeDone(){
    gameP.removeChild(txtNode);
    txtNode = document.createTextNode(jogadorAtual+" deve "+desafio[getRandom(desafio.length)]);
    gameP.appendChild(txtNode);
    getNewPlayer();
};
function resetGame(){
    location.reload();
}
function getNewPlayer(){
    jogadorAtual = "";
    jogadorAtual = names[getRandom(names.length)];
}
