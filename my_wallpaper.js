//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 300;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(130, 27, 38); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
 let PetalSizeOne = 45
 let PetalSizeFirstLayer = 50
 let PetalSizeSecondLayer = 25
 let CentreOfFlowerSize = 50
 let SmallerCrossLength = 80
 //size perameters

  stroke(149, 203, 245) //blue
  fill(149, 203, 245) //blue
  ellipse(114,182,PetalSizeOne,PetalSizeOne)
  ellipse(114,114,PetalSizeOne,PetalSizeOne)
  ellipse(182,114,PetalSizeOne,PetalSizeOne)
  ellipse(182,182,PetalSizeOne,PetalSizeOne)
  //background petals
  
  stroke (141, 134, 227)//muted blue
  strokeWeight(1,1,1,1)
  fill(141,134,227) //muted blue
  ellipse(114,150,PetalSizeFirstLayer+40,PetalSizeFirstLayer) //petal one
  ellipse(150,114,PetalSizeFirstLayer,PetalSizeFirstLayer+40) //petal two
  ellipse(182,150,PetalSizeFirstLayer+40,PetalSizeFirstLayer) //petal three
  ellipse(150,182,PetalSizeFirstLayer,PetalSizeFirstLayer+40) //petal four
  //first layer of petals
  
  stroke(109, 100, 217) //indigo
  strokeWeight(1,1,1,1)
  fill(109,100,217) //indigo
  ellipse(175,150,PetalSizeSecondLayer+25,PetalSizeSecondLayer) //petal one
  ellipse(150,125,PetalSizeSecondLayer,PetalSizeSecondLayer+25) //petal two
  ellipse(125,150,PetalSizeSecondLayer+25,PetalSizeSecondLayer) //petal three
  ellipse(150,175,PetalSizeSecondLayer,PetalSizeSecondLayer+25) //petal four
  //second layer of petals
  
  stroke(232, 115, 72) //pale orange
  fill(232, 115, 72)
  ellipse(150,150,CentreOfFlowerSize,CentreOfFlowerSize)
  //centre of flower
  
  stroke(201, 66, 16) //dark orange/brown
  strokeWeight(10,10,10,10)
  line(110,110,110+SmallerCrossLength,110+SmallerCrossLength)
  //cross like design (part one)
  stroke(201, 66, 16) //dark orange/brown
  strokeWeight(10,10,10,10)
  line(110,110+SmallerCrossLength,110+SmallerCrossLength,110)
  //cross like design (part two)
  stroke(201, 66, 16) //dark orange/brown
  strokeWeight(10,10,10,10)
  line(75,150,225,150)
  //cross like design (part three)
  stroke(201, 66, 16) //dark orange/brown 
  strokeWeight(10,10,10)
  line(150,75,150,225)
  //cross like design (part four)
  
  stroke(201,66,16) //dark orange/brown
  strokeWeight(7,7,7)
  ellipse(150,75,8,8) //speck one
  ellipse(75,150,8,8) //speck two
  ellipse(150,225,8,8) //speck three
  ellipse(75,150,8,8) //speck four
  ellipse(225,150,8,8) //speck five
  //little pollen specks
  
  fill(201, 66, 16) //dark orange/brown
  stroke(201, 66, 16) //dark orange/brown
  ellipse(110,110,7,7) //speck one
  ellipse(110,190,7,7) //speck two
  ellipse(190,190,7,7) //speck three
  ellipse(190,110,7,7) //speck four
  //smaller pollen specks
  
  strokeWeight(15,10,8) //line weight
  fill(109,100,217)
  stroke(109,100,217)
  line(140,30,160,50) //line one
  line(160,30,140,50) //line two
  line(150,25,150,55) //line three
  line(135,40,165,40) //line four
  //smaller flower
  
  strokeWeight(15,10,8) //line weight
  fill(109,100,217)
  stroke(109,100,217)
  line(140,250,160,270) //line one
  line(160,250,140,270) //line two
  line(150,245,150,275) //line three
  line(135,260,165,260) //line four
  //smaller flower two
  
  fill(232,115,72) //pale orange 
  stroke(232,115,72) //pale orange
  ellipse(150,40,2,2) //speck one
  //centre of smaller flower
  
  fill(232,115,72) //pale orange
  stroke(232,115,72) //pale orange
  ellipse(150,260,2,2) //speck two
  //inner centre of smaller flower

  fill(201,66,16) //dark orange/brown
  stroke(201,66,16) //dark orange/brown
  strokeWeight(9,10,10) //stroke weight
  ellipse(150,40,0.1,0.1) //smaller centre ellipse
  ellipse(150,260,0.1,0.1) //smaller centre ellipse two
  //smaller centre of flowers 

  strokeWeight(0,0,0)
  arc(0,0,150,150,0,90) //corner design one
  arc(300,0,150,150,90,180) //corner design two
  arc(300,0,150,150,180,270) //corner design three
  arc(300,300,150,150,270,360) //corner design four
  //corner sphere designs
  
  fill(232,115,72) //pale orange
  stroke(232,115,72) //pale orange
  arc(0,150,50,30,270,90) //side design one
  arc(300,150,50,30,90,30) //side deign two
  //middle side design

  strokeWeight(10,8,8)
  line(0,0,0,40)
  line(0,0,40,0)
  line(0,260,0,300)
  line(260,0,300,0)
  //corner cross designs

}
