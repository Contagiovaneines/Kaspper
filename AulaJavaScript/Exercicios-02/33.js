/*
Exercício 33 - Transformar o algoritmo abaixo em código JavaScript

Seja o seguinte algoritmo:

início 
	ler x 
	ler y 
	z = (x*y) + 5 
	se z <= 0 então 
		resposta  ‘A’ 
	senão 
		se z <= 100 então 
			resposta  ‘B’ 
		senão 
			resposta  ‘C’ 
		fim_se 
	fim_se 
	escrever z, resposta 
fim

Faça um teste de mesa e complete o quadro a seguir para os seguintes valores: 

        Variáveis
---------------------------
X 	  Y 	Z 	  Resposta
---------------------------
3     2     
150   3     
7    -1     
-2    5    	
50    3     
----------------------------
*/

// Função para calcular e exibir o resultado com base em x e y
function calcularResposta(x, y) {
    // Calcula z
    let z = (x * y) + 5;

    // Determina a resposta com base no valor de z
    let resposta;
    if (z <= 0) {
        resposta = 'A';
    } else if (z <= 100) {
        resposta = 'B';
    } else {
        resposta = 'C';
    }

    // Exibe z e a resposta
    console.log(`Para x = ${x} e y = ${y}, z = ${z} e resposta = ${resposta}`);
}

calcularResposta(3, 2);   
calcularResposta(150, 3); 
calcularResposta(7, -1);  
calcularResposta(-2, 5);  
calcularResposta(50, 3);  