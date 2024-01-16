// seleção de elementos

const multiplicationForm = document.querySelector("#multiplication-form");
const multiplicationInput = document.querySelector("#multiplicator");
const numberInput = document.querySelector("#number");
const multiplicationTable = document.querySelector("#multiplication-operation")
const multiplicationTitle = document.querySelector("#multiplication-title span")


// funções


const creatable = (number, multipicatorNumber) =>{

  multiplicationTable.innerHTML = "";


  for(i =1; i <= multipicatorNumber; i++){
    const result = number * i;

    const template = `<div class="row">
        <div class="oparation">${number} x ${i} = </div>
        <div class="result">${result}</div>
    </div>`;

    const parser = new DOMParser();

    const htmelTemplate = parser.parseFromString(template, "text/html");

    const row = htmelTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);


}

multiplicationTitle.innerHTML = number;


}




// eventos

multiplicationForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const multiplicationNumber = +numberInput.value; 

    const multipicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multipicatorNumber) return;


    creatable(multiplicationNumber, multipicatorNumber);
   
})
