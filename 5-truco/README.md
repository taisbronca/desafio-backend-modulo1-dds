# Exercício 05 - Truco

O jogo de truco é muito popular pelo Brasil. Numa de suas versões, ele é jogado apenas com as cartas Q J K A 2 3. Elas tem essa ordem de "força" nesse jogo, sendo 3 a mais valiosa e Q a menos valiosa. Contudo, a cada partida é virada uma carta com a face pra cima na mesa. Esta carta serve para indicar que a próxima carta é a manilha, ou seja, a carta mais poderosa para essa partida. Fizemos uma tabela resumo para explicar essa mecânica:

<table border="2">
    <tr>
        <td>Carta pra Cima</td>
        <td>Manilha</td>
    </tr>
    <tr>
        <td>Q</td>
        <td>J</td>
    </tr>
    <tr>
        <td>J</td>
        <td>K</td>
    </tr>
    <tr>
        <td>K</td>
        <td>A</td>
    </tr>
    <tr>
        <td>A</td>
        <td>2</td>
    </tr>
    <tr>
        <td>2</td>
        <td>3</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Q</td>
    </tr>
</table>

Supondo que a carta virada pra cima dessa rodada seja um ás (A), a manilha será 2, isso significa que 2 é a carta mais forte dessa rodada.

Faça um programa que diga qual é a manilha, dada uma carta virada para cima.

<b>Input Format</b>

A entrada é um string armazenado na variável cartaParaCima que indica qual carta ficou virada para cima. Será sempre uma das opções: Q, J, K, A, 2, 3.

<b>Output Format</b>

Imprima na tela qual é a manilha desta partida. Sua resposta deve ser sempre uma das opções: Q, J, K, A, 2, 3.

<b>Sample Input 0</b>

Q

<b>Sample Output 0</b>

J