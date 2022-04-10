// 1. Imprima na tela os números pares existentes entre 0 e 100

for(let i=0; i <= 100; i++)
    if(i % 2 == 0) {
        // console.log(i);
    }

// 2. Crie um algoritmo que receba três notas de um aluno, calcule sua média 
// e mostre as seguintes mensagens de acordo com cada situação:
// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado

function calculaMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3)/3;

    if(media >= 7) {
        return "Aprovado";
    } else if (media >= 5 && media < 7) {
        return "Recuperação";
    } else{
        return "Reprovado";
    }
}
// console.log(calculaMedia(10, 7, 6));

// 3. Crie uma variavel e atribua como valor uma operacao de média entre 5 números inteiros e positivos.
function calcularMedia (numeroint1, numeroint2, numeroint3, numeroint4, numeroint5) {
    let media = (numeroint1 + numeroint2 + numeroint3 + numeroint4 + numeroint5)/5
    return media;
}
    // console.log(calcularMedia(4,5,6,7,8));

// 4. Crie um programa que me diga como lucrar nesta situação: 
// quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?

function comoLucrar (valor, quantoQuerLucrar) {
    let valorTotal = valor / (60/100);
    let porcentagemDeLucro = (quantoQuerLucrar / 100) + 1;
    let porQuantoVender = porcentagemDeLucro * valorTotal;
    return `Para obter o lucro que você deseja, você deve vender o item por: R$${porQuantoVender},00`;
}
    // console.log(comoLucrar(300, 25));

// 5. Faça um programa que peça dois números e imprima no console a soma desses dois números.

    function soma (num1, num2) {
        let sum = num1 + num2;
        return sum;
    }
    // console.log(soma(4, 8));

// 6. Crie um programa que me diga quanto cobrar para vender um notebook usado: 
// o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?

    function quantoCobrar (custo, desconto) {
        return `Você deve cobrar esse valor: R$${custo-(custo*(desconto/100))},00`
    }
    // console.log(quantoCobrar(3000, 25));
    
// 7. Escreva um programa que receba um valor em metros e o exiba no console convertido em milímetros.

function converterEmMilimetros (metros) {
    return `${metros} metros é igual a: ${metros * 1000} milímetros.`
}
console.log(converterEmMilimetros(12));



