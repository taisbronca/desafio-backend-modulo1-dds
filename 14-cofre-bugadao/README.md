# Exercício 07 - Contador de Palavras

Um novo cofre foi desenvolvido com a mais moderna tecnologia em segurança e criptografia. Na porta o cofre contém um teclado com todas as letras do alfabeto em que a pessoa pode digitar a senha predefinida para abrir a porta.

Durante alguns testes de rotina foi descoberto um bug uma funcionalidade na hora de validar a senha: O cofre ignora letras erradas durante a digitação da senha, desde que todas as letras da senha tenham sido digitadas na ordem correta.

Por exemplo, se a senha for “cubos” e for digitado “cuggbyos”, o cofre irá abrir.

<b>Input Format</b>

A entrada consistirá em duas linhas, na primeira linha estará a senha correta, de até S caracteres. Na segunda linha estará a palavra digitada pela pessoa, de até N caracteres.

<b>Constraints</b>

S ≤ 10^3 N ≤ 10^5

<b>Output Format</b>

Imprima “SIM” caso o cofre abra. Caso contrário, imprimir “NAO”.

<b>Sample Input 0</b>

cubos

cuggbyos

<b>Sample Output 0</b>

SIM

<b>Sample Input 1</b>

cubos

ewvelrabsocaeln

<b>Sample Output 1</b>

NAO