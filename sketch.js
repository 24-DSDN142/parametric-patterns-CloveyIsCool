//setup - run once when the code is first starts
function setup() {
  createCanvas(600, 600); // this sets the size of the area in which we can draw things. We call it a canvas
  textSize(22); // sets the size of the textAscent()

}
//draw - this function loops, the code within read through repeatedly while running
function draw() {
  clear(); // resets all elements on screen
  background(130, 27, 38
  ); // this makes the whole canvas the screen grey
  //strokeWeight(0,0,0,0)
  //fill('black')
 // text("x pos is " + mouseX, 50, 50); // displays text, including a P5.js variable which tracks the mouse position
 // text("y pos is " + mouseY, 50, 80);


  //ellipse(mouseX, mouseY, 20, 20); // draws a circle 20 pixels accross at location of the mouse pointer
  //line(mouseX, mouseY, pmouseX, pmouseY); // draws a line from the mouse pointer, to where the mouse pointer previously was
  stroke(149, 203, 245) //blue
  fill(149, 203, 245) //blue
  ellipse(225,375,100,100)
  ellipse(225,225,100,100)
  ellipse(375,225,100,100)
  ellipse(375,375,100,100)
  //background petals
  
  stroke (141, 134, 227)//muted blue
  strokeWeight(1,1,1,1)
  fill(141,134,227) //muted blue
  ellipse(225,300,150,80) //petal one
  ellipse(300,225,80,150) //petal two
  ellipse(375,300,150,80) //petal three
  ellipse(300,375,80,150) //petal four
  //first layer of petals
  
  stroke(109, 100, 217) //indigo
  strokeWeight(1,1,1,1)
  fill(109,100,217) //indigo
  ellipse(350,300,120,70) //petal one
  ellipse(300,245,70,120) //petal two
  ellipse(250,300,120,70) //petal three
  ellipse(300,350,70,120) //petal four
  //second layer of petals
  
  stroke(232, 115, 72) //pale orange
  fill(232, 115, 72)
  ellipse(300,300,90,90)
  //centre of flower
  
  stroke(201, 66, 16) //dark orange/brown
  strokeWeight(10,10,10,10)
  line(220,220,380,380)
  //cross like design (part one)
  stroke(201, 66, 16) //dark orange/brown
  strokeWeight(10,10,10,10)
  line(220,380,380,220)
  //cross like design (part two)
  stroke(201, 66, 16) //dark orange/brown
  strokeWeight(10,10,10,10)
  line(150,300,450,300)
  //cross like design (part three)
  stroke(201, 66, 16) //dark orange/brown 
  strokeWeight(10,10,10)
  line(300,150,300,450)
  //cross like design (part four)
  
  stroke(201,66,16) //dark orange/brown
  strokeWeight(7,7,7)
  ellipse(300,150,15,15) //speck one
  ellipse(300,300,20,20) //speck two
  ellipse(300,450,15,15) //speck three
  ellipse(150,300,15,15) //speck four
  ellipse(450,300,15,15) //speck five
  //little pollen specks
  
  fill(201, 66, 16) //dark orange/brown
  stroke(201, 66, 16) //dark orange/brown
  ellipse(220,220,12,12) //speck one
  ellipse(220,380,12,12) //speck two
  ellipse(380,380,12,12) //speck three
  ellipse(380,220,12,12) //speck four
  //smaller pollen specks
  
  strokeWeight(25,10,8) //line weight
  fill(109,100,217)
  stroke(109,100,217)
  line(275,55,325,95) //line one
  line(325,55,275,95) //line two
  line(300,43,300,107) //line three
  line(265,75,335,75) //line four
  //smaller flower
  
  strokeWeight(25,10,8) //line weight
  fill(109,100,217)
  stroke(109,100,217)
  line(275,500,325,545) //line one
  line(325,500,275,545) //line two
  line(300,490,300,555) //line three
  line(265,522,335,522) //line four
  //smaller flower two
  
  fill(232,115,72) //pale orange 
  stroke(232,115,72) //pale orange
  ellipse(300,75,5,5) //speck one
  //centre of smaller flower
  
  fill(232,115,72) //pale orange
  stroke(232,115,72) //pale orange
  ellipse(300,525,5,5) //speck two
  
  fill(201,66,16) //dark orange/brown
  stroke(201,66,16) //dark orange/brown
  strokeWeight(17,10,10) //stroke weight
  ellipse(300,75,0.2,0.2) //smaller centre ellipse
  ellipse(300,525,0.2,0.2) //smaller centre ellipse two
  //smaller centre of flowers 
  
  fill(232,115,72) //pale orange
  stroke(232,115,72) //pale orange
  ellipse(600,0,175,175)
  ellipse(600,600,175,175)
  ellipse(0,0,175,175)
  ellipse(0,600,175,175)
  //corner sphere designs
  
  fill(141,132,227) //muted blue
  stroke(141,132,227) //muted blue
  line(0,0,0,55)
  line(55,0,0,0) //cross design one
  line(600,600,600,545)
  line(545,600,600,600) //cross design two
  line(600,0,545,0)
  line(600,0,600,55) //cross design three
  line(0,600,0,545)
  line(0,600,55,600) //cross design four
  //corner cross designs
  
  fill(149,203,245) //blue
  stroke(149,203,245) //blue
  ellipse(35,35,12,12) //sphere one
  ellipse(565,35,12,12) //sphere two
  ellipse(35,565,12,12) //sphere three
  ellipse(565,565,12,12) //sphere four
  //corner specks
  
  fill(232,115,72) //pale orange
  stroke(232,115,72) //pale orange
  ellipse(0,300,80,50) //side design one
  ellipse(600,300,80,50) //side design two
  //middle side design
}

