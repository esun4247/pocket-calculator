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

function num(x){
  checkReplace();
  box = box + x;
  value = value + x;
  comma();
  document.getElementById("output").innerHTML = box;
}

function num0(){
  checkReplace();
  if(box == "0" || box == "-"){
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
    for(let j = 0; j <= 1; j++){
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
  if(numCount > 5){
    presCount = 5;
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
  let num1 = value;
  box = 0;
  value = 0;
  
  
}

function ac(){
  box = "";
  value = "";
  ignoreMinus = 0;
  document.getElementById("output").innerHTML = "0";
}
