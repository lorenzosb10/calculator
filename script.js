let result = 1;

let numA = parseInt(prompt("Digite o primeiro número"));
let operation = prompt("Selecione a operação (+, -, *, /, !)");
let numB;

if (operation === "!") {
  for (let i = 1; i <= numA; i++) {
    result = i * result;
  }
} else {
  numB = parseInt(prompt("Digite o segundo número"));

  if (operation === "+") {
    result = numA + numB;
  } else if (operation === "-") {
    result = numA - numB;
  } else if (operation === "*") {
    result = numA * numB;
  } else if (operation === "/") {
    result = numA / numB;
  } else if (operation === "!") {
  }
}

console.log(result);
