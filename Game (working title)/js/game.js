var choice = document.getElementById("choice");
var choicebar = document.getElementById("choicebar");
var img = document.getElementById("image");
var text = document.getElementById("text1");
var story = "img/story.jpg"; //story
var house = "img/house.jpg"; //room -1
var door1 = "img/door.jpg"; //room 0
var hallway1 = "img/hallway.jpg"; //room 1 functionname gohallway
var livingroom1 = "img/livingroom.jpg" //room 2 functionname gohallway
var kitchen1 = "img/kitchen.jpg"; //room 3 functionname kitchen2
var cellar1 = "img/cellar.jpg"; //room 4 functionname cellar2
var garden1 = "img/garden.jpg"; //room 5 functionname garden2
var maze1 = "img/maze.jpg"; //room 6 functionname maze2
var hallway2 = "img/hallway2.jpg"; //room 7 functionname hallway3
var mainbedroom1 = "img/mainbedroom.jpg"; //room 8 functionname mainbedroom2
var smallbedroom1 = "img/smallbedroom.jpg" //room 9 functionname smallbedroom2
var attic1 = "img/attic.jpg"; //room 10 functionname attic2
var redeyes = "img/redeyes.jpg" //death 1
var headinbox = "img/headinboxjpg.jpg"; //death 2
var food = "img/food.jpg";
var foodpoison1 = "img/poison.jpg"; //death 3
var keyimg1 = "img/key1.jpg";
var keyimg2 = "img/key2.jpg";
var parchment = "img/parchment.jpg"
var but1 = document.getElementById("button1")
var but2 = document.getElementById("button2");
var but3 = document.getElementById("button3");
var but4 = document.getElementById("button4");
var but5 = document.getElementById("button5")
var music1 = document.getElementById('mainmenu')
var goodend = "img/goodend.jpg";
var badend = "img/badend.jpg";
a = 0;
b = 0;
c = 0;
d = 0;
e = 0; //alert 1 var, otherwise empty



//start game
function start(){
  console.log("begin");
  img.src = house;
  text.innerHTML = "You see the 'scary' mansion in the distance";
  img.setAttribute("style", "max-height: 427px;");
  document.getElementById("button1").innerHTML = "door";
  document.getElementById("button1").setAttribute ("onclick", "godoor()");


}
function godoor(){
  console.log("room: door");
  img.src = door1;
  text.innerHTML = "you see the door to the mansion"
  img.setAttribute("style", "max-height: 427px;");
  document.getElementById("button1").innerHTML = "enter";
  document.getElementById("button1").setAttribute ("onclick", "gohallway()");
}
//floor 1
function gohallway() {
  if (e == 0) {
    alert("you here the doors slam shut. you are stuck!")
  }
  e++
  console.log("room: hallway");
  img.src = hallway1
  text.innerHTML = "you enter the hallway, to your left is the living room, to your right is the kitchen, you see a trapdoor leading to a dark cellar, and a set of stairs going upstairs."
  img.setAttribute("style", "max-height: 427px;");
  choicemenu.innerHTML = '<button id="button1" onclick="gocellar();">' + "cellar" +"</button>"  + "<br>" +'<button id="button2" onclick="gokitchen();">'+ "kitchen" +"</button>"  + "<br>" + '<button id="button3" onclick="golivingroom">' + "living room" +"</button>" + "<br>" + '<button id="button4" onclick="gohallway2">' + "go upstairs" +"</button>";
  document.getElementById("button1").innerHTML = "cellar";
  document.getElementById("button2").innerHTML = "kitchen";
  document.getElementById("button2").setAttribute ("onclick", "gokitchen()");
  document.getElementById("button3").innerHTML = "living room";
  document.getElementById("button3").setAttribute ("onclick", "golivingroom()");
  document.getElementById("button4").innerHTML = "go upstairs";
  document.getElementById("button4").setAttribute  ("onclick", "gohallway2()");
  if (d == 0) {
    choicemenu.innerHTML = '<button id="button1" onclick="gocellar();">' + "cellar" +"</button>"  + "<br>" +'<button id="button2" onclick="gokitchen();">'+ "kitchen" +"</button>"  + "<br>" + '<button id="button3" onclick="golivingroom">' + "living room" +"</button>" + "<br>" + '<button id="button4" onclick="gohallway2">' + "go upstairs" +"</button>";
    document.getElementById("button1").innerHTML = "cellar";
    document.getElementById("button2").innerHTML = "kitchen";
    document.getElementById("button2").setAttribute ("onclick", "gokitchen()");
    document.getElementById("button3").innerHTML = "living room";
    document.getElementById("button3").setAttribute ("onclick", "golivingroom()");
    document.getElementById("button4").innerHTML = "go upstairs";
    document.getElementById("button4").setAttribute  ("onclick", "gohallway2()");


  } else if (d == 1) {
    choicemenu.innerHTML = '<button id="button1" onclick="godoor2();">' + "leave" +"</button>"
    document.getElementById('button1').innerHTML = "Leave";
    document.getElementById('button1').setAttribute ("onclick", "godoor2()");

  }


}


function golivingroom() {
  console.log("room:living room");
  img.src = livingroom1
  text.innerHTML = "you enter the living room, all you see are the things you would expect of a living room, except for the added 'creepy abandoned mansion'elements "
  img.setAttribute("style", "max-height: 427px;");
  choicemenu.innerHTML = '<button id="button1" onclick="gohallway();">' + "hallway" +"</button>" + "<br>" +'<button id="button2" onclick="keynr2();">';
  document.getElementById("button1").innerHTML = "hallway";
  document.getElementById("button1").setAttribute ("onclick", "gohallway()");
  if (a == 0) {
    document.getElementById("button2").innerHTML = "key";
    document.getElementById("button2").setAttribute ("onclick", "keynr2()");
  }
  else if (a == 1) {
    choicemenu.innerHTML = '<button id="button1" onclick="gohallway();">' + "hallway" +"</button>";
    document.getElementById("button1").innerHTML = "hallway";
    document.getElementById("button1").setAttribute ("onclick", "gohallway()");
  }
  }

function keynr2() {
  console.log("key2");
  img.src = keyimg2
  text.innerHTML = "you pick up a rusty key"
  choicemenu.innerHTML = '<button id="button1" onclick="golivingroom();">' + "Living room" +"</button>"
  document.getElementById("button1").innerHTML = "Living room";
  document.getElementById("button1").setAttribute ("onclick", "golivingroom()");
  a++




}

function gokitchen() {
  console.log("room: kitchen");
  img.src = kitchen1;
  text.innerHTML = "you enter a busted-up kitchen, to your left you see a door leading to the garden, and to your right you see a refridgerator.";
  img.setAttribute("style", "max-height: 427px;");
  choicemenu.innerHTML = '<button id="button1" onclick="gogarden();">' + "garden" +"</button>"  + "<br>" +'<button id="button2" onclick="gohallway();">'+ "hallway" +"</button>"  + "<br>" + '<button id="button3" onclick="gofood">' + "food" +"</button>";
  document.getElementById("button1").innerHTML = "garden";
  document.getElementById("button1").setAttribute ("onclick", "gogarden()");
  document.getElementById("button2").innerHTML = "hallway ";
  document.getElementById("button2").setAttribute ("onclick", "gohallway()");
  document.getElementById("button3").innerHTML = "refridgerator ";
  document.getElementById("button3").setAttribute ("onclick", "gofood()");

}

function gofood() {
    console.log("food hint: don't");
    img.src = food;
    text.innerHTML = "you pick up a piece of cake"
    img.setAttribute("style", "max-height: 427px;");
    choicemenu.innerHTML = '<button id="button1" onclick="#();">' + "yes" +"</button>"  + "<br>" +'<button id="button2" onclick="gokitchen();">'+ "nope" +"</button>";
    document.getElementById("button1").innerHTML = "take a bite";
    document.getElementById("button1").setAttribute ("onclick", "gofoodpoison()");
    document.getElementById("button2").innerHTML = "put it back ";
    document.getElementById("button2").setAttribute ("onclick", "gokitchen()");
  }

function gofoodpoison(){
    console.log("death 1 (told you stupid)");
    img.src = foodpoison1;
    text.innerHTML = "you died of food poisoning. to be fair, you just ate some random piece of cake in a supposedly haunted mansion. dumbass."
    img.setAttribute("style", "max-height: 427px;");
    choicemenu.innerHTML = '<button id="button1" onclick="#();">' + "start over" +"</button>"
    document.getElementById("button1").innerHTML = "start over";
    document.getElementById("button1").setAttribute ("onclick", "reload()");

  }

function gogarden() {
  console.log("room: garden");
  img.src = garden1;
  text.innerHTML = "you walk into the garden, in the distance, you see what looks like a hedge maze"
  img.setAttribute("style", "max-height: 427px;");
  choicemenu.innerHTML = '<button id="button1" onclick="gokitchen();">' + "kitchen" +"</button>"  + "<br>" +'<button id="button2" onclick="gomaze();">'+ "maze" +"</button>";
  document.getElementById("button1").innerHTML = "kitchen";
  document.getElementById("button1").setAttribute ("onclick", "gokitchen()");
  document.getElementById("button2").innerHTML = "maze";
  document.getElementById("button2").setAttribute ("onclick", "gomaze()");
}

function gomaze() {
  console.log("room: maze");
  img.src = maze1;
  text.innerHTML = "you enter the hedge maze."
  img.setAttribute("style", "max-height: 427px;");
  choicemenu.innerHTML = '<button id="button1" onclick="gokitchen();">' + "kitchen" +  "</button>" + "<br/>" + '<button id="button2" onclick="keynr1();">' + "key" +"</button>"
  if (d == 0) {
    choicemenu.innerHTML = '<button id="button1" onclick="gokitchen();">' + "kitchen" +  "</button>" + "<br/>" + '<button id="button2" onclick="keynr1();">' + "key" +"</button>"
    document.getElementById("button1").innerHTML = "kitchen";
    document.getElementById("button1").setAttribute ("onclick", "gokitchen()");
    document.getElementById("button2").innerHTML = "key";
    document.getElementById("button2").setAttribute ("onclick", "keynr1()");

  } else if (d == 1) {
    choicemenu.innerHTML = '<button id="button1" onclick="gokitchen();">' + "kitchen" +  "</button>"
    document.getElementById("button1").innerHTML = "kitchen";
    document.getElementById("button1").setAttribute ("onclick", "gokitchen()");


  }




}
function keynr1() {
  console.log("key1");
  img.src = keyimg1
  text.innerHTML = "you pick up a VERY rusty key, does this even work anymore?"
  choicemenu.innerHTML = '<button id="button1" onclick="gomaze();">' + "maze"
  document.getElementById("button1").innerHTML = "maze";
  document.getElementById("button1").setAttribute ("onclick", "gomaze()");
  d++


}
function gocellar() {
  console.log("room cellar, you are gonna meet with a terrible fate btw lol");
  img.src = cellar1;
  text.innerHTML = "you go down into the cellar, it looks like the room is on fire for some reason, wait, what is that sound behind you?";
  choicemenu.innerHTML = '<button id="button1" onclick="goredeyes();">' + "turn around" +"</button>"
  img.setAttribute("style", "max-height: 427px;");
  document.getElementById("button1").innerHTML = "turn around";
  document.getElementById("button1").setAttribute ("onclick", "goredeyes()");

}
function goredeyes() {
  console.log("death 2");
  img.src = redeyes;
  text.innerHTML = "you met with a terrible fate, haven't you?"
  choicemenu.innerHTML = '<button id="button1" onclick="start();">' + "start over" +"</button>"
  img.setAttribute("style", "max-height: 427px;");
  img.setAttribute("style", "max-width: 800px;");
  document.getElementById("button1").innerHTML = "start over";
  document.getElementById("button1").setAttribute ("onclick", "reload()");

}
// 2nd floor
function gohallway2() {
  console.log("room: hallway 2");
  img.src = hallway2;
  text.innerHTML = "you walk up the stairs to the second floor, you can see two bedrooms. there seems to be some sort of keyhole in the wall...."
  img.setAttribute("style", "max-height: 427px;");
  choicemenu.innerHTML = '<button id="button1" onclick="gomainbedroom();">' + "master bedroom" +"</button>"  + "<br>" +'<button id="button2" onclick="gosmallbedroom();">'+ "small bedroom" +"</button>"  +"</button>"+ "<br>" + '<button id="button4" onclick="gohallway">' + "go downstairs" +"</button>";
  document.getElementById("button1").innerHTML = "master bedroom";
  document.getElementById("button1").setAttribute ("onclick", "gomainbedroom,()");
  document.getElementById("button2").innerHTML = "small bedroom";
  document.getElementById("button2").setAttribute ("onclick", "gosmallbedroom()");
  document.getElementById("button4").innerHTML = "downstairs";
  document.getElementById("button4").setAttribute ("onclick", "gohallway()");
  if (a == 0) {
    choicemenu.innerHTML = '<button id="button1" onclick="gomainbedroom();">' + "master bedroom" +"</button>"  + "<br>" +'<button id="button2" onclick="gosmallbedroom();">'+ "small bedroom" +"</button>"  +"</button>"+ "<br>" + '<button id="button4" onclick="gohallway">' + "go downstairs" +"</button>";
    document.getElementById("button1").innerHTML = "master bedroom";
    document.getElementById("button1").setAttribute ("onclick", "gomainbedroom()");
    document.getElementById("button2").innerHTML = "small bedroom";
    document.getElementById("button2").setAttribute ("onclick", "gosmallbedroom()");
    document.getElementById("button4").innerHTML = "downstairs";
    document.getElementById("button4").setAttribute ("onclick", "gohallway()");



  } else if (a == 1){
    alert("you insert the key into the wall, a ladder falls down from the ceiling, looks like this house has an attic!");
    choicemenu.innerHTML = '<button id="button1" onclick="gomainbedroom();">' + "master bedroom" +"</button>"  + "<br>" +'<button id="button2" onclick="gosmallbedroom();">'+ "small bedroom" +"</button>"  + "<br>" + '<button id="button3" onclick="goattic">' + "attic" +"</button>"+ "<br>" + '<button id="button4" onclick="gohallway">' + "go downstairs" +"</button>";
    document.getElementById("button1").innerHTML = "master bedroom";
    document.getElementById("button1").setAttribute ("onclick", "gomainbedroom()");
    document.getElementById("button2").innerHTML = "small bedroom";
    document.getElementById("button2").setAttribute ("onclick", "gosmallbedroom()");
    document.getElementById("button3").innerHTML = "attic";
    document.getElementById("button3").setAttribute ("onclick", "goattic()");
    document.getElementById("button4").innerHTML = "downstairs";
    document.getElementById("button4").setAttribute ("onclick", "gohallway()");

  }


}
function gomainbedroom() {
  console.log("room: bedroom 1");
  img.src = mainbedroom1;
  text.innerHTML = "you enter the master bedroom, apart from looking as rundown as the rest of the house, you see nothing of interest."
  img.setAttribute("style", "max-height: 427px;");
  choicemenu.innerHTML = '<button id="button1" onclick="gohallway2();">' + "hallway" +"</button>"
  document.getElementById("button1").innerHTML = "upper hallway";
  document.getElementById("button1").setAttribute ("onclick", "gohallway2()");

}
function gosmallbedroom() {
  console.log("room: bedroom 2");
  img.src = smallbedroom1;
  text.innerHTML = "you enter the small bedroom, it looks like a child's bedroom. was it just the light, or did you see something below the bed?"
  img.setAttribute("style", "max-height: 427px;");
  choicemenu.innerHTML = '<button id="button1" onclick="gohallway2();">' + "upper hallway" +"</button>" + "<br>" + '<button id="button2" onclick="goheadinbox();">' + "look at the box" +"</button>"
  document.getElementById("button1").innerHTML = "upper hallway";
  document.getElementById("button1").setAttribute ("onclick", "gohallway2()");
  document.getElementById("button1").innerHTML = "upper hallway";
  document.getElementById("button1").setAttribute ("onclick", "gohallway2()");

}
function goheadinbox() {
  console.log("death 3");
  img.src = headinbox;
  text.innerHTML = "you are spooked to death"
  choicemenu.innerHTML = '<button id="button1" onclick="start();">' + "rip" +"</button>";
  img.setAttribute("style", "max-height: 427px;");
  img.setAttribute("style", "max-width: 800px;");
  document.getElementById("button1").innerHTML = "start over";
  document.getElementById("button1").setAttribute ("onclick", "reload()");


}
//3rd floor
function goattic() {
  console.log("room: attic");
  img.src = attic1;
  a--
  text.innerHTML = "you enter the attic, it looks like shit."
  img.setAttribute("style", "max-height: 427px;");
  choicemenu.innerHTML = '<button id="button1" onclick="gohallway2();">' + "hallway" +"</button>" + "<br>" +'<button id="button2" onclick="goparchment();">'+ "pick up the piece of parchment" +"</button>"
  document.getElementById("button1").innerHTML = "upper hallway";
  document.getElementById("button1").setAttribute ("onclick", "gohallway2()");
  if (c == 0) {
    choicemenu.innerHTML = '<button id="button1" onclick="gohallway2();">' + "hallway" +"</button>" + "<br>" +'<button id="button2" onclick="goparchment();">'+ "pick up the piece of parchment" +"</button>"
    document.getElementById("button1").innerHTML = "upper hallway";
    document.getElementById("button1").setAttribute ("onclick", "gohallway2()");
    document.getElementById("button2").innerHTML = "pick up the piece of parchment";
    document.getElementById("button2").setAttribute ("onclick", "goparchment()");

  } else if (c == 1) {
    choicemenu.innerHTML = '<button id="button1" onclick="gohallway2();">' + "hallway" +"</button>"
    document.getElementById("button1").innerHTML = "upper hallway";
    document.getElementById("button1").setAttribute ("onclick", "gohallway2()");


  }

}
function goparchment() {

  console.log("parchment");
  img.src = parchment
  text.innerHTML = "story placeholder"
  img.setAttribute("style", "max-height: 427px;");
  choicemenu.innerHTML = '<button id="button1" onclick="golivingroom();">' + "living room" +"</button>"
  document.getElementById("button1").innerHTML = "attic";
  document.getElementById("button1").setAttribute ("onclick", "goattic()");
  c++


}

//endgame

function godoor2() {
  console.log("leaving the mansion");
  img.src = door1
  text.innerHTML = "you approach the doors, and prepare to leave this dumpster behind. "
  document.getElementById("button1").innerHTML = "leave the mansion";
  document.getElementById("button1").setAttribute ("onclick", "gocredits()");

}
function gocredits(){
  if (c==0) {
    img.src = badend
    console.log("bad ending");
    text.innerHTML = "you fled like like a baby, and did not get the letter. BAD END"
    choicemenu.innerHTML = '<button id="button1" onclick="reload();">' + "try again (wimp)"
      document.getElementById("button1").innerHTML = "try again (wimp)";
      document.getElementById("button1").setAttribute ("onclick", "reload()");



  } else if (c==1) {
    img.src = goodend
    console.log("good ending");
    text.innerHTML = "you found the letter, and have earned bragging rights, good job! GOOD END"
    choicemenu.innerHTML = '<button id="button1" onclick="reload();">' + "play again"
      document.getElementById("button1").innerHTML = "play again";
      document.getElementById("button1").setAttribute ("onclick", "reload()");




}
}
function reload() {
  location.reload()
}
