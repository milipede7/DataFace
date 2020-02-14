let canvas;
let gValue1;
let yValue1;
let rValue1;
let exCount;

let rColor;
let gColor;
let yColor;


function preload(){
  faceData = loadJSON("face_recognition.json");
}

function formdata()
  {
    let gString= document.getElementById("gValue").value;
    let yString= document.getElementById("yValue").value;
    let rString= document.getElementById("rValue").value;
    let exString= document.getElementById("exCount").value;


    gValue1=parseFloat(gString);
    yValue1=parseFloat(yString);
    rValue1=parseFloat(rString);
    // exCount=parseFloat(exString);
    // gValue1=gString;
    // yValue1=yString;
    // rValue1=rString;
    exCount=exString;

    console.log(gValue1);
    console.log(yValue1);
    console.log(rValue1);
    console.log(exCount);
    genPortrait()
  }

function setup(){
let gInput= document.getElementById("gValue")
let rInput= document.getElementById("yValue")
let yInput= document.getElementById("rValue")
let exInput= document.getElementById("exCount")
gInput.value="3.2783944606781"
rInput.value="3.07381772995"
yInput.value="1.6391278505325"
exInput.value="34"



  canvas = createCanvas(500, 500);
  canvas.style("z-index","1");
  canvas.parent('sketch-holder');
  background (0);
}

function genPortrait(){

  for (var i = 0; i < exCount; i++) {
    rColor = color(255 + rValue1, 0, 0);
    gColor = color(0, 255 + gValue1, 0);
    yColor = color(255, 255 + yValue1, 102);
    let randomColors=[rColor,gColor,yColor]

    fill(randomColors[Math.floor(Math.random()*3)])
    ellipse(Math.random()*innerWidth, Math.random()*innerHeight, Math.random()*200, Math.random()*200);
  }
  filter(BLUR, 3);
}
