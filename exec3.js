let l1, l2, l3, soma    

//entrdada de dados :)
alert('diga os lados do triangulo que eu irei classsificar ele como equilatero, isoceles e escaleno')
l1 = parseInt(prompt('Diga o valor do primeiro lado'))
l2 = parseInt(prompt('Diga o valor do segundo lado'))
l3 = parseInt(prompt('Diga o valor do terceiro lado'))

//processamento :)
soma = l1 + l2

//comparações e saida de dados :)
if(l3 > soma)
alert('erro a soma dos lados 1 e 2 é maior que 3, porfavor repita o codigo :) ')

if(l1 == l2 & l1 ==l3)
    alert(`seu triangulo é equilatero (3 lados iguais) ${l1} ${l2} ${l3}`)
else if(l1 == l2 || l1 == l3)
    alert(`seu triangulo é isoceles (2 lados iguais) ${l1} ${l2} ${l3}`)
else
alert(`seu triangulo é escaleno (todos os lados diferentes) ${l1} ${l2} ${l3}`)