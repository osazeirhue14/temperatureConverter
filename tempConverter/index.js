
const temp = document.getElementById("temp");
const checkC = document.getElementById("cTof");
const checkF = document.getElementById("fToc");
const result = document.getElementById("result");
let count;

function convert(){
    if(checkC.checked){
        count=Number(temp.value);
        count=count*(9/5)+32;
        result.textContent = count.toFixed(1)+" farenheit ";

    }
    else if(checkF.checked){
        count=Number(temp.value);
        count=5/9*(count-32);
        result.textContent = count.toFixed(1)+" degrees celcius ";
       
    }
    else{
        result.textContent = "Select a unit";
    }

}


