var box = "";
var value = "";
var ignoreMinus = 0;

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
  for(let j = box.length; j >= 0; j--){
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
    box = h.join("");
    if(neg == 1){
    box = "-" + box;
    }
  }
}

function num1(){
  box = box + "1";
  value = value + "1";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num2(){
  box = box + "2";
  value = value + "2";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num3(){
  box = box + "3";
  value = value + "3";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num4(){
  box = box + "4";
  value = value + "4";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num5(){
  box = box + "5";
  value = value + "5";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num6(){
  box = box + "6";
  value = value + "6";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num7(){
  box = box + "7";
  value = value + "7";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num8(){
  box = box + "8";
  value = value + "8";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num9(){
  box = box + "9";
  value = value + "9";
  comma();
  document.getElementById("output").innerHTML = box;
}

function num0(){
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
  console.log(value);
  value = Number(value) * .01;
  //value = value.toPrecision(5);
  value = String(value);
  console.log(value);
  box = value;
  comma();
  document.getElementById("output").innerHTML = box;
}

function ac(){
  box = "";
  value = "";
  ignoreMinus = 0;
  document.getElementById("output").innerHTML = "0";
}
