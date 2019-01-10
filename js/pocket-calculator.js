var box = "";
var value = "";
var ignoreMinus = 0;
var replace = 0;
var presCount = 0;


function checkReplace(){
	if(replace == 1){
  	box = "";
    value = "";
    replace = 0;
  }
}

function comma(){
  if(Number(value) >= 0){
    ignoreMinus = 0;
  }else if(Number(value) < 0){
    ignoreMinus = 1;
  }
  if(ignoreMinus == 0){
    if(box.length > 11) box = box.substring(0, 11);
  }else{
    if(box.length > 12) box = box.substring(0, 12);
  }
  let h = box.split("");
  let h1 = [];
  let h2 = [];
  let u = 0;
  let dec = 0;
  let neg = 0;

  for(let j = box.length; j > 0; j--){
    if(h[j] === ","){
      h.splice(j, 1);
    }
  }
  box = h.join("");
  for(let j = box.length; j > 0; j--){
    if(h[j-1] === "."){
      dec = 1;
    }
  }
  for(let j = 0; j <= presCount; j++){
    if(h[j] === "-"){
      h.splice(j, 1);
      neg = 1;
      box = h.join("");
    }
  }
  if(dec == 1){
    h1 = box.split(".")
    let cbox = h1[0];
    let vbox = h1[1];
    h2 = cbox.split("");
    for(let i = cbox.length; i > 3; i=i-3){
      h2.splice((-3-(4*u)), 0, ",");
      u++;
    }
    cbox = h2.join("");
    box = cbox + "." + vbox;
  }else{
    cbox = box;
    for(let i = box.length; i > 3; i=i-3){
      h.splice((-3-(4*u)), 0, ",");
      u++;
    }
    if(presCount == 1){
      for(let j = box.length; j > 0; j--){
        if(h[j] === ","){
          h.splice(j, 1);
        }
      }
    }
    box = h.join("");
    }
    if(neg == 1){
    box = "-" + box;
  }
}

function num1(){
  checkReplace();
  box = box + "1";
  value = value + "1";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num2(){
  checkReplace();
  box = box + "2";
  value = value + "2";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num3(){
  checkReplace();
  box = box + "3";
  value = value + "3";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num4(){
  checkReplace();
  box = box + "4";
  value = value + "4";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num5(){
  checkReplace();
  box = box + "5";
  value = value + "5";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num6(){
  checkReplace();
  box = box + "6";
  value = value + "6";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num7(){
  checkReplace();
  box = box + "7";
  value = value + "7";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num8(){
  checkReplace();
  box = box + "8";
  value = value + "8";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num9(){
  checkReplace();
  box = box + "9";
  value = value + "9";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num0(){
  checkReplace();
  if(box == "0"){
  box = 0;
  }else{
  box = box + "0";
  value = value + "0";
  }
  comma();
  document.getElementById("output").innerHTML = box;
}

function dec(){
  checkReplace();
  box = box + ".";
  value = value + ".";
  comma();
  document.getElementById("output").innerHTML = box;
}

function plusMinus(){
  if(Number(value) >= 0){
    box = "-" + box;
    value = "-" + value;
    document.getElementById("output").innerHTML = box;
  }else if(Number(value) < 0){
    let o = box.split("");
    for(let j = box.length; j >= 0; j--){
      if(o[j] === "-"){
        o.splice(j, 1);
      }
    }
    box = o.join("");
    let p = value.split("");
    for(let j = box.length; j >= 0; j--){
      if(p[j] === "-"){
        p.splice(j, 1);
      }
    }
    value = p.join("");
    document.getElementById("output").innerHTML = box;
  }
}

function percent(){
  let h = value.split("");
  let numCount = 0;
  let rmCom = 0;
  for(let i = 0; i < h.length; i++){
    if(h[i] !== "0" && h[i] !== "." && h[i] !== "-" && h[i] !== "e"){
      numCount++;
    }else if(h[i] === "e"){
        break;
    }
  }
  console.log(numCount);
  if(numCount > 6){
    presCount = 6;
  }else{
    presCount = numCount;
  }
  console.log(presCount);
  value = Number(value) * 0.01;
  value = value.toPrecision(presCount);
  value = String(value);
  console.log(value);
  box = value;
  comma();
  replace = 1;
  document.getElementById("output").innerHTML = box;
}

function plus(){
  console.log(eval("2+2*4"));
}

function ac(){
  box = "";
  value = "";
  ignoreMinus = 0;
  document.getElementById("output").innerHTML = "0";
}
