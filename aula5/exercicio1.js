const valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function criaPares (numero) {
    for (let indice = 0; indice < valoresNum.length; indice ++) {
        if (numero [indice] % 2 === 0) {
            console.log(numero[indice]);
        }
    }
}

criaPares (valoresNum);