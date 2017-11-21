var capture;
var mario;
var luigi;
var terra;
var nuvola;
var x,y;
var r,z;
var mic;
var mostro;
var t,s;
var fungo;
var box;


function preload () {
  mario= loadImage("./assets/mario2.png");
 luigi= loadImage("./assets/luigi.png");
    terra= loadImage("./assets/prato.jpg");
    nuvola= loadImage("./assets/nuvola.png");
    coin= loadImage("./assets/coin.png");
    mostro= loadImage("./assets/mostro.png");
    fungo= loadImage("./assets/fungo.png");
    box= loadImage("./assets/box.png");
}

function setup() {
  createCanvas(640,480);
    capture=createCapture(VIDEO);
    capture.size(640,480);
    capture.hide();
    
    x=width;
    y= 50;
    
    r=width;
    z= 10;
    
    
      mic=new p5.AudioIn();
    mic.start(); 
}

function draw() {
var myImage=capture;
    
    image(myImage,0,0,640.480);
    filter(POSTERIZE,20);

    
        if(keyIsPressed == true) {
             image(luigi,240,0,200,170);
    } else {
        image(mario,200,0,300,170);}
    
    
        image (nuvola,x,y,100,40);
    x= x-1; 
    y= y+random(-1,1);
    if (x<0){
        x=height;
    }
    
    
        image (nuvola,r,z,60,40);
    r= r-0.5
    z=  z+random(-1,1);
    if (r<0){
        r=height;
    }
    
    image(terra,0,430,640,50);
    
 
     var vol = mic.getLevel();
    console.log(vol);
    
    image(coin,50,300, vol * 300,vol*300);
    image(coin,250,300, vol * 300,vol*300);
    image(coin,450,300, vol * 300,vol*300);
    image(coin,600,300, vol * 300,vol*300);

    
     image(mostro,frameCount, 385, 60, 60);
     image(box,mouseX, mouseY, 40, 40); 
    
     if(mouseIsPressed) {
         
         console.log(mouseButton);
         
         if(mouseButton == 'left') {
             image(fungo,mouseX,mouseY,60,60);
         }
         
         else if(mouseButton == 'right') {
             
             image(box,mouseX,mouseY,40,40);  }         
         
     }
     
  
}