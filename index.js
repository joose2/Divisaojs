let numerador = prompt ("Fale seu numero (numerador):____")
let denominador = prompt ("Fale seu numero(denominador):____")

if (denominador && numerador == 0)

{
alert ("Não é possivel dividir por 0")
}

else

{
let numero = Number (numerador)
let divisor = Number (denominador)
let resultado = numero / divisor 

alert (`O resultado de ${numero} divido por ${divisor} é: ${resultado}`);
}