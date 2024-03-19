
// Variáveis de estado inicial

let xp = 0;
let saude = 0;
let dinheiro = 0;
let armaAtual =  0;
let lutando;
let saudeMonstro;
let inventario = ["bastão"];


// Elementos HTML

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const moneyText = document.querySelector('#moneyText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth');




// Arrays de armas, monstros e locais

const armas = [
    {nome: 'bastão', poder: 5},
    {nome: 'punhal', poder: 30},
    {nome: 'martelo', poder: 50},
    {nome: 'espada', poder: 100}
];


const monstros = [
    { nome: "O lodo viscoso",
     level: 2,
     saude: 15
    },

    { nome: "besta indomável",
     level: 8,
     saude: 60
    },

    { nome: "dragao",
     level: 20,
     saude: 300
    },

];


const locais = [
    {
        nome: "praca da cidade",
        "button text": ["Vá para a loja","Vá para a caverna","Enfrente o Dragao"],
        "button functions": [goStore2, goCave2 ,fightDragon2],
        text: "Você está na praça da cidade. Consegue ver uma placa dizendo \"LOJA\"."
    },

    {
        nome: "Loja",
        "button text": ["Compre 10 de saúde (10 de dinheiro)", "Compre arma (30 de ouro)", "Vá para a praça da cidade"],
        "button functions": [buyHealth2,buyWeapon2,goTown2],
        text: "Você entrou na loja"
    },

    {
        nome: "Caverna",
        "button text": ["Lute com o lodo viscoso","lute com a besta indomável","Volte para a paraca da cidade"],
        "button functions": [fightSlime2,fightBeast2,goTown2],
        text: "Você entrou na caverna. Você vê alguns monstros."
    },

    {
        nome: "Luta",
        "button text": ["Ataque", "Esquive-se","Saia da luta"],
        "button functions": [attack2,dodge2,goTown2],
        text: "Você está lutando contra um monstro"
    },

    {
        nome: "O monstro morreu!",
        "button text": ["Volte para a paraca da cidade", "Volte para a paraca da cidade","Volte para a paraca da cidade"],
        "button functions": [goTown2,goTown2,goTown2],
        text: "O monstro grita à medida que morre. Você ganha pontos de experiência e encontra dinheiro."
    },

    {
        nome: "Você perdeu!",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart2, restart2, restart2],
        text: "Você morreu!. &#x2620;"
    },

    {
        nome: "Parabéns, você ganhou!",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart2, restart2, restart2],
        text: "Você derrotou o dragão! VOCÊ GANHOU O JOGO! & #x1F389;"
    },

    {
        nome: "easter egg",
        "button text": ["2", "8", "Ir para a praça da cidade?"],
        "button functions": [pickTwo2, pickEight2, goTown2],
        text: "Você encontrou um jogo secreto. Escolha um número acima. Dez números serão escolhidos aleatoriamente entre 0 e 10. Se o número escolhido corresponder a um dos números aleatórios, você ganha!"
    },
];

//Definindo funções ao botões

button1.addEventListener('click', goStore2);
button2.addEventListener('click', goCave2);
button1.addEventListener('click', fightDragon2);

//Definindo as funções de ação do jogo

function update2(locais){
    monsterStats.style.display = 'none';
    button1.innerText = locais["button text"][0];
    button2.innerText = locais["button text"][1];
    button3.innerText = locais["button text"][2];
}


function goStore2(){
    update2(locais[1]);
}

function goCave2(){
    update2(locais[2]);
}


