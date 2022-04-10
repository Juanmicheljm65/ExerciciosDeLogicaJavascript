// 1. Crie uma variável chamada nomeCompleto e atribua a ela o seu nome,
// após isso, imprima o valor no console utilizando a função
// console.log(nomeCompleto)

let nomeCompleto = "Juan Michel Aguiar Miguel"
//console.log(nomeCompleto);

// 2. Você irá criar duas variáveis chamadas numeroA e numeroB atribuindo
// valores numéricos para ambas. Após isso crie uma terceira variável
// chamada resultado atribuindo a multiplicação das duas variáveis
// anteriores e imprima o valor do resultado no console

let numeroA = 7
let numeroB = 12
let resultado = (numeroA * numeroB)
//console.log(resultado);

// 3. Você deverá criar uma função chamada saudacao que ao executá-la
// deverá imprimir no console a seguinte mensagem: “Oi eu sou o Goku!”

function saudacao (nome) {
    return "Oi eu sou o " + nome;
}
// console.log(saudacao("Goku!"));

// 4. Crie uma função chamada multiplica que recebe dois parâmetros
// numéricos. Ela deverá exibir a multiplicação desses dois parâmetros no
// console

function multiplica (numero1, numero2) {
    return numero1 * numero2;
}
// console.log(multiplica(2, 6));

// 5. Crie uma função chamada podeDirigir que receba como parâmetro da
// idade em formato número, e exiba no console “Você pode dirigir” caso o
// valor seja maior ou igual a 18. Caso contrário irá exibir “Você não pode
// dirigir”

function podeDirigir(idade) {
    if(idade >= 18) {
        return "Você pode dirigir";
    } else {
        return "Você não pode dirigir";
    }
}
// console.log(podeDirigir(17));

// 6. Você deve criar um loop usando o for, que exibe no console a sequência
// de números do 0 ao 20.

    for(let i = 0; i <= 20; i++) {
        // console.log(i);
    }

// 7. Você deve criar um loop usando o for, que exibe no console apenas os
// números ímpares da sequência de números do 0 ao 20.
    
    for(let i = 0; i<=20; i++){
        if(i % 2 != 0) {
            // console.log(i);
        }
    }

// 8. Crie uma função chamada tabuada que irá receber um número inteiro
// como parâmetro e exibir no console a tabuada desse número 1 ao 10.

function tabuada(numero) {
    for(let i=1; i<=10; i++){
        console.log(numero*i);
    }
}
// console.log(tabuada(15));


// 9. Crie uma função chamada converterEmHoras que receba um número em
// minutos como parâmetro e irá exibir a quantidade em horas.

function converterEmHoras(number) {
    return (number / 60) + " horas"
}
// console.log(converterEmHoras(600));


    
    





