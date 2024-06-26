const form = document.querySelector("#form");
const numBtns = document.querySelectorAll("#btn-num");
const formInput = document.querySelector("#form-input");
const btnFuncs = document.querySelectorAll("#btn-func");
const btnReset = document.querySelector("#btn-reset");
const btnOpp = document.querySelector("#btn-opp");
const btnPerc = document.querySelector("#btn-perc");
const exitBtns = document.querySelectorAll("#exit-btns");
const wrapper = document.querySelector(".wrapper");
const open = document.querySelector("#calculator-opener");

let toCalc = "";

numBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        formInput.value += e.target.textContent;
        toCalc += e.target.textContent;
        console.log(toCalc);
    })
});


btnFuncs.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(e.target.textContent === "X"){
            toCalc += "*";
            formInput.value = "";
            console.log(toCalc);
        }
        else if (e.target.textContent === "/"){
            toCalc += "/";
            formInput.value = "";
            console.log(toCalc);
        }
        else if (e.target.textContent === "+"){
            toCalc += "+";
            formInput.value = "";
            console.log(toCalc);
        }
        else if (e.target.textContent === "-"){
            toCalc += "-";
            formInput.value = "";
            console.log(toCalc);
        }
        else if (e.target.textContent === "="){
            formInput.value = eval(toCalc);
            console.log(eval(toCalc));
            toCalc = "";
        }
        else if(e.target.textContent === "+/-"){
            formInput.value = formInput.value * -1;
            toCalc = formInput.value;
            console.log(toCalc);
        }
        else if(e.target.textContent === "%"){
            formInput.value = formInput.value / 100;
            toCalc = formInput.value;
            console.log(toCalc);
        }
        else if(e.target.textContent === ","){
            formInput.value += ",";
            toCalc += ".";
            console.log(toCalc);
        }
        
    })
})



btnReset.addEventListener("click", () => {
    formInput.value = "";
    toCalc = "";
})


exitBtns.forEach((btn) => {
    btn.addEventListener("click", () => {

        if(btn.classList.contains("red")){
            wrapper.style.display = "none";
            toCalc = "";
            formInput.value = "";
        }
        else if(btn.classList.contains("yellow")){
            wrapper.style.display = "none";
        }
        else if(btn.classList.contains("green")){
            alert("This function is under developement. Sorry!");
        }
    })
})


open.addEventListener("dblclick", () => {
    wrapper.style.display = "block";
})
