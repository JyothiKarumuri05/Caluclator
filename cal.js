let display = document.getElementById("txtDisplay");
let isCaluclated =false;

function isOperator(val)
{
  return(val ==='+' || val==="-" ||   val==="*" || val==="/" ||  val==="%");
}

function numberPress(num)
{
    if(isCaluclated && !isOperator(num))
    {
        display.value=num;
        isCaluclated=false;
    }
    else{
        display.value+=num;
        isCaluclated=false;
    }
}

function caluclate()
{
    try{
    let result=eval(display.value);
    display.value=result;
    }
    catch(e)
    {
        display.value="ERROR";
    }
    isCaluclated=true;
}

function save(type) {
    if (type === "") {
      localStorage.setItem("dValue", display.value);
    } else if (type === "+") {
      let x = Number(localStorage.getItem("dValue") ?? 0);
      let y = Number(display.value);
      localStorage.setItem("dValue", x + y);
    } else if (type === "-") {
      let x = Number(localStorage.getItem("dValue") ?? 0);
      let y = Number(display.value);
      localStorage.setItem("dValue", x - y);
    }
  }
  function restore() {
    display.value = localStorage.getItem("dValue") ?? "";
    isCalculated = true;
  }
  function clearMemory() {
    localStorage.removeItem("dValue");
    isCalculated = false;
  }
  
  function backspace() {
    display.value = display.value.slice(0, -1);
  }