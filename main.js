var xDirection = [0];
var yDirection = [0];

var xPositionArr = [1];
var yPositionArr = [1];

var points = 0;
const pCounter = document.querySelector("#pointsCounter");
const pg = document.querySelector(".playground"); 

gameTimer=70;

function gameOver (){
    points = 0;
    PositionX=10;
    PositionY=10;
    yDirection.push(0);
    xDirection.push(0);
    location.reload();
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyW') {
        yDirection.push(-10);
        xDirection.push(0);
    }
    if (event.code == 'KeyS') {
        yDirection.push(10);
        xDirection.push(0);
    }
    if (event.code == 'KeyA') {
        xDirection.push(-10);
        yDirection.push(0) ; 
    }
    if (event.code == 'KeyD') {
        xDirection.push(10); 
        yDirection.push(0);
    }
    if (event.code == 'Space') {
        gameOver();
    }
  });

  

  var pgXposition = document.getElementById('element').offsetLeft;
  var pgYposition = document.getElementById('element').offsetTop;
  var pgHeight = document.getElementById('element').offsetHeight;
  var pgWidth = document.getElementById('element').offsetWidth;

   var snakeHead = document.createElement("div");
   pg.appendChild(snakeHead);
   var monster = document.createElement("div");
   monster.classList.add("monster");
   pg.appendChild(monster);
   var monsterPositionX=Math.floor(Math.random()*49)*10;
   var monsterPositionY=Math.floor(Math.random()*49)*10;
   monster.style.setProperty("top", monsterPositionY +"px" );
   monster.style.setProperty("left", monsterPositionX +"px" );

  /* var monster2 = document.createElement("div");
    monster2.classList.add("monster");
    var monster3 = document.createElement("div");
    monster3.classList.add("monster");
    var monster4 = document.createElement("div");
    monster4.classList.add("monster");
    monster4.classList.add("bad-monster");

   // MORE MONSTERS 
   var monsterPositionX2=Math.floor(Math.random()*49)*10;
   var monsterPositionY2=Math.floor(Math.random()*49)*10;
   monster2.style.setProperty("top", monsterPositionY2 +"px" );
   monster2.style.setProperty("left", monsterPositionX2 +"px" );
   var monsterPositionX3=Math.floor(Math.random()*49)*10;
   var monsterPositionY3=Math.floor(Math.random()*49)*10;
   monster3.style.setProperty("top", monsterPositionY3 +"px" );
   monster3.style.setProperty("left", monsterPositionX3 +"px" );
   var monsterPositionX4=Math.floor(Math.random()*49)*10;
   var monsterPositionY4=Math.floor(Math.random()*49)*10;
   monster4.style.setProperty("top", monsterPositionY4 +"px" );
   monster4.style.setProperty("left", monsterPositionX4 +"px" ); */

  
    snakeHead.classList.add("snake-body");
    
    var PositionX=0;
    var PositionY=0;


    function pointsUp() {
    monsterPositionX = Math.floor(Math.random()*49)*10;
    monsterPositionY = Math.floor(Math.random()*49)*10;
    monster.style.setProperty("top", monsterPositionY +"px" );
    monster.style.setProperty("left", monsterPositionX +"px" );
    points = points+1;
    
    var st = document.createElement("div");
   pg.appendChild(st);
   st.classList.add("snake-tail");
     }

     /*
     function pointsUp2() {
        monsterPositionX2 = Math.floor(Math.random()*49)*10;
        monsterPositionY2 = Math.floor(Math.random()*49)*10;
        monster2.style.setProperty("top", monsterPositionY2 +"px" );
        monster2.style.setProperty("left", monsterPositionX2 +"px" );
    points = points+1;
    }
    function pointsUp3() {
        monsterPositionX3 = Math.floor(Math.random()*49)*10;
        monsterPositionY3 = Math.floor(Math.random()*49)*10;
        monster3.style.setProperty("top", monsterPositionY3 +"px" );
        monster3.style.setProperty("left", monsterPositionX3 +"px" );
    points = points+1;
    } */
    

 function snakeGame(){
  
PositionX = PositionX + xDirection[xDirection.length -1];
PositionY = PositionY + yDirection[yDirection.length -1];
snakeHead.style.setProperty("top", PositionY +"px" );
snakeHead.style.setProperty("left", PositionX +"px" );
        
        
        
        
        

if (PositionX == -10 || PositionX == pgHeight)
{
    alert('GameOver!');
    gameOver();
}
if (PositionY == -10 || PositionY == pgWidth)
{
    alert('GameOver!');
    gameOver(); 
}




if (PositionX == monsterPositionX && PositionY == (monsterPositionY)+10) 
{
   pointsUp();
   
}
var i;
        var x = document.getElementsByClassName("snake-tail");
        for (i = 0; i < x.length; i++) {
            x[i].style.setProperty("top", yPositionArr[yPositionArr.length -1 -i ] - 3 - (i*10) - i -20 +"px" );
            x[i].style.setProperty("left", xPositionArr[xPositionArr.length -1 -i ] +"px" );
        }
/*
if (points == 10 )
{
    pg.appendChild(monster2);
}
if (points == 20 )
{
    pg.appendChild(monster3);
}
if (points == 30 )
{
    pg.appendChild(monster4);
}

if (points > 9 && (PositionX == monsterPositionX2 && PositionY == (monsterPositionY2)+20))
{
    pointsUp2();
}

if (points > 19 && (PositionX == monsterPositionX3 && PositionY == (monsterPositionY3)+30))
{
    pointsUp3();
}

if (points > 29 && (PositionX == monsterPositionX4 && PositionY == (monsterPositionY4)+40))
{
    gameOver();
}  */


        xPositionArr.push(PositionX); 
        yPositionArr.push(PositionY);

console.log(points);
pCounter.innerHTML = points;

}

setInterval(snakeGame,gameTimer);