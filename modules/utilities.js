export const formatNumber = number => {
  let numStr = String(Math.floor(number));
  for (let i = numStr.length - 3; i > 0; i -= 3) {//Se hace un loop inverso, donde las comas se agregan de atrás hacia delante cada 3 dígitos
    numStr = numStr.slice(0, i) + ',' + numStr.slice(i); //en cada ciclo se cambia el valor de numStr con el método .slice(). El valor devuelto es igual a numStr con una "," entre el primer index y el valor de i, más el resto de numStr. Es decir en cada ciclo se mira así:
    // Primer ciclo:
    // i = 7 (numStr.length = 10. i = numStr.length -3).
    // numStr = "1234542,597"
    // i = 4 (7 - 3).
    // Segundo ciclo:
    // i = 4
    // numStr = "1234,542,597"
    // i = 1 (4 - 3).
    // Terccer ciclo:
    // i = 1
    // numStr = "1,234,542,597"
    // i = -2 (1 - 3).
    // TERMINA EL BUCLE
  }
  return numStr;
}

const result = formatNumber(1234542597); // result = "1,234,567.89"
console.log(result);