document.getElementById("output").innerHTML = "0";
var box = "";
var value = "";

function comma(){
  if(box.length > 11) box = box.substring(0, 11);
  let h = box.split("");
  let h1 = [];
  let h2 = [];
  let u = 0;
  let dec = 0;

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
  }
}

function num1(){
  box = box + "1";
  value = value + "1";
  comma();
  if(box.length > 11) box = box.substring(0, 11);
  document.getElementById("output").innerHTML = box;
}

function num2(){
  box = box + "2";
  value = value + "2";
  comma();
  if(box.length > 11) box = box.substring(0, 11);
  document.getElementById("output").innerHTML = box;
}

function num3(){
  box = box + "3";
  value = value + "3";
  comma();
  if(box.length > 11) box = box.substring(0, 11);
  document.getElementById("output").innerHTML = box;
}

function num4(){
  box = box + "4";
  value = value + "4";
  comma();
  if(box.length > 11) box = box.substring(0, 11);
  document.getElementById("output").innerHTML = box;
}

function num5(){
  box = box + "5";
  value = value + "5";
  comma();
  if(box.length > 11) box = box.substring(0, 11);
  document.getElementById("output").innerHTML = box;
}

function num6(){
  box = box + "6";
  value = value + "6";
  comma();
  if(box.length > 11) box = box.substring(0, 11);
  document.getElementById("output").innerHTML = box;
}

function num7(){
  box = box + "7";
  value = value + "7";
  comma();
  if(box.length > 11) box = box.substring(0, 11);
  document.getElementById("output").innerHTML = box;
}

function num8(){
  box = box + "8";
  value = value + "8";
  comma();
  if(box.length > 11) box = box.substring(0, 11);
  document.getElementById("output").innerHTML = box;
}

function num9(){
  box = box + "9";
  value = value + "9";
  comma();
  if(box.length > 11) box = box.substring(0, 11);
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
  if(box.length > 11) box = box.substring(0, 11);
  document.getElementById("output").innerHTML = box;
}

function dec(){
  box = box + ".";
  value = value + ".";
  comma();
  if(box.length > 11) box = box.substring(0, 11);
  document.getElementById("output").innerHTML = box;
}

function ac(){
  box = "";
  value = "";
  document.getElementById("output").innerHTML = box;
}
