const  display = document.querySelector(".display"),
buttons = document.querySelectorAll("button"),
operation = ["%","/","-","+","=","*","."]

let output =""


function calculate(btnValue){
    if(btnValue ==="=" && output !==""){
        output=eval(output.replace("%","/100"))
    }else if(btnValue === "AC"){
        output=""
    }else if(btnValue === "DEL"){
        output = output.toString().slice(0,-1)
    }else{
        if(output ==="" && operation.includes(btnValue))
        return;
        output+= btnValue;
    }
    display.value = output
}

buttons.forEach((button)=>{
    button.addEventListener("click", e =>calculate(e.target.dataset.value))

})