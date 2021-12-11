
noseX=0;
noseY=0;


function preload(){

clown_nose = loadImage("https://i.postimg.cc/RZQSrVfM/mustache.jpg");

}

function setup(){

canvas = createCanvas(300 ,300);
canvas.center();

video = createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet = ml5.poseNet(video,modelloaded);
posenet.on('pose' ,gotposes);

}

function draw(){

image(video,0,0,300,300);
image(clown_nose,noseX,noseY,30,30)
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);

}

function snap(){

save('myfilter.png')

}

function modelloaded(){

console.log("poseNet is initialize")


}

function gotposes(result){

if(result.length > 0){

console.log(result);
noseX =  result[0].pose.nose.x;
noseY =  result[0].pose.nose.y-10;
console.log("nose x = " + noseX);
console.log("nose y = " + noseY);

}


}