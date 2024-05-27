const numA = parseInt(prompt("Digite o primeiro número"));
const operation = prompt("Selecione a operação (+, -, *, /, !)");
let numB;

if (operation !== "!") {
  numB = parseInt(prompt("Digite o segundo número"));
}

function conta(numA, numB, operation) {
  let result = 1;

  if (operation === "+") {
    result = numA + numB;
  } else if (operation === "-") {
    result = numA - numB;
  } else if (operation === "*") {
    result = numA * numB;
  } else if (operation === "/") {
    result = numA / numB;
  } else if (operation === "!") {
    for (let i = 1; i <= numA; i++) {
      result = i * result;
    }
  }
  return result;
}

console.log(conta(numA, numB, operation));
