// BLOCO 1 - FUNDAMENTOS E VARIÁVEIS

console.log("BLOCO 1");

let pontos = 20;

pontos = pontos + 10;

console.log("Pontos:", pontos);

const MAX_PONTOS = 100;

console.log("Máximo de pontos:", MAX_PONTOS);

try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log("Erro:", erro.name);
    console.log("Uma constante não pode receber outro valor.");
}

// Tipos primitivos

let texto = "Olá, mundo!";
let numero = 25;
let ligado = true;
let indefinido;
let nulo = null;

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof ligado);
console.log(typeof indefinido);
console.log(typeof nulo);

// Template Literals e concatenação

let nome = "Pedro";
let curso = "JavaScript";

console.log(`Meu nome é ${nome} e estudo ${curso}.`);
console.log("Meu nome é " + nome + " e estudo " + curso + ".");


// BLOCO 2 - FUNÇÕES

console.log("BLOCO 2");

// Função declarada e hoisting

console.log(ehMaiorDeIdade(20));
console.log(ehMaiorDeIdade(16));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

// Função de expressão

try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log("Erro:", erro.name);
}

const ehMaiorDeIdadeExpressao = function(idade) {
    return idade >= 18;
};

console.log(ehMaiorDeIdadeExpressao(20));

// Dobro com função declarada

function dobro(n) {
    return n * 2;
}

console.log(dobro(5));

// Dobro com função de expressão

const dobroExpressao = function(n) {
    return n * 2;
};

console.log(dobroExpressao(5));

// Dobro com arrow function

const dobroArrow = n => n * 2;

console.log(dobroArrow(5));

// Parâmetro com valor padrão

function dobroPadrao(n = 1) {
    return n * 2;
}

console.log(dobroPadrao());
console.log(dobroPadrao(4));


// BLOCO 3 - CONTROLE DE FLUXO

console.log("BLOCO 3");

// Classificar nota

function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(classificarNota(8));
console.log(classificarNota(4));

// Semáforo usando switch

let corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "verde":
        console.log("Siga");
        break;
    default:
        console.log("Cor inválida");
}

// Tabuada do 5

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

// Contagem regressiva

let contagem = 5;

while (contagem >= 1) {
    console.log(contagem);
    contagem--;
}

// Pares e ímpares usando for

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " é par");
    } else {
        console.log(i + " é ímpar");
    }
}

// Pares e ímpares usando while

let numeroAtual = 1;

while (numeroAtual <= 20) {
    if (numeroAtual % 2 === 0) {
        console.log(numeroAtual + " é par");
    } else {
        console.log(numeroAtual + " é ímpar");
    }
    numeroAtual++;
}

// Dia da semana

function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido";
    }
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(3));
console.log(diaDaSemana(7));
console.log(diaDaSemana(9));
