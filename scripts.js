const input = document.querySelectorAll("input");
const buttons = document.querySelectorAll("button");
const gameResult = document.querySelector(".gameResult");
const errorText = document.querySelector(".errorText");
const firstTable = document.querySelectorAll(".first");
const secondTable = document.querySelectorAll(".second");

let count = 0;
let randomArray = new Array();
let valueArray = new Array();

const randomValue = () => {
    randomArray = [];
    while (randomArray.length < 4) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomArray.indexOf(randomNumber) < 0) {
        randomArray.push(randomNumber);
      }
    }
  };
  
  const inputValue = () => {
    valueArray = [];
    input.forEach((text) => {
      valueArray.push(parseInt(text.value));
    });
  
    const blankCheck = valueArray.indexOf("") !== -1;
    const nanCheck = valueArray.includes(NaN) === true;
    const valueRangeCheck = valueArray.find((item) => {
      return item >= 10;
    });
    const duplicateNumber = new Set(valueArray);

    //verificando se tem número, se tá duplicado ou se é maior que o permitido
  if (blankCheck || nanCheck) {
    errorText.innerText = "Por favor, coloque um numero.";
  } else if (valueRangeCheck) {
    errorText.innerText = "Insira um número menor que 10.";
  } else if (duplicateNumber.size < 4) {
    errorText.innerText = "Existem números duplicados.";
  } else {
    errorText.innerText = "";
    firstTable[count].innerText = valueArray;
    vacaAndtouro();
    count += 1;
  }
  result();
};
