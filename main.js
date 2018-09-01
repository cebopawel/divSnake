var xDirection = [0];
var yDirection = [0];

var xPositionArr = [1];
var yPositionArr = [1];

var points = 0;
const pCounter = document.querySelector("#pointsCounter");
const pg = document.querySelector(".playground"); 

gameTimer=70;

function getRandomNo (){
    rand = Math.floor(Math.random()*49)*10;
    return rand;
}
function gameOver (){
    PositionX = 100;
    PositionY = 100;
    location.reload();
}

document.addEventListener('keydown', function(event) {
    if ((event.code == 'KeyW') || (event.code == 'ArrowUp')){
        yDirection.push(-10);
        xDirection.push(0);
    }
    if ((event.code == 'KeyS') || (event.code == 'ArrowDown')){
        yDirection.push(10);
        xDirection.push(0);
    }
    if ((event.code == 'KeyA') || (event.code == 'ArrowLeft')){
        xDirection.push(-10);
        yDirection.push(0) ; 
    }
    if ((event.code == 'KeyD') || (event.code == 'ArrowRight')){
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
   var monsterPositionX=getRandomNo ();
   var monsterPositionY=getRandomNo ();
   monster.style.setProperty("top", monsterPositionY +"px" );
   monster.style.setProperty("left", monsterPositionX +"px" );

    var monster2 = document.createElement("div");
    monster2.classList.add("monster");
    var monster3 = document.createElement("div");
    monster3.classList.add("monster");
    var monster4 = document.createElement("div");
    monster4.classList.add("monster");
    monster4.classList.add("bad-monster");

   var monsterPositionX2=getRandomNo ();
   var monsterPositionY2=getRandomNo ();
   monster2.style.setProperty("top", monsterPositionY2 +"px" );
   monster2.style.setProperty("left", monsterPositionX2 +"px" );
   var monsterPositionX3=getRandomNo ();
   var monsterPositionY3=getRandomNo ();
   monster3.style.setProperty("top", monsterPositionY3 +"px" );
   monster3.style.setProperty("left", monsterPositionX3 +"px" );
   var monsterPositionX4=getRandomNo ();
   var monsterPositionY4=getRandomNo ();
   monster4.style.setProperty("top", monsterPositionY4 +"px" );
   monster4.style.setProperty("left", monsterPositionX4 +"px" ); 

  
    snakeHead.classList.add("snake-body");
    
    var PositionX=100;
    var PositionY=100;


    function pointsUp() {
    monsterPositionX = getRandomNo ();
    monsterPositionY = getRandomNo ();
    monster.style.setProperty("top", monsterPositionY +"px" );
    monster.style.setProperty("left", monsterPositionX +"px" );
    points = points+1;
    
    var st = document.createElement("div");
   pg.appendChild(st);
   st.classList.add("snake-tail");
     }

     
     function pointsUp2() {
        monsterPositionX2 = getRandomNo ();
        monsterPositionY2 = getRandomNo ();
        monster2.style.setProperty("top", monsterPositionY2 +"px" );
        monster2.style.setProperty("left", monsterPositionX2 +"px" );
    points = points+1;
    }
    function pointsUp3() {
        monsterPositionX3 = getRandomNo ();
        monsterPositionY3 = getRandomNo ();
        monster3.style.setProperty("top", monsterPositionY3 +"px" );
        monster3.style.setProperty("left", monsterPositionX3 +"px" );
    points = points+1;
    } 
    

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




if (PositionX == monsterPositionX && PositionY == (monsterPositionY)) 
{
   pointsUp();
}
    

if (points == 10 )
{
    pg.appendChild(monster2);
}
if (points == 20 )
{
    pg.appendChild(monster3);
}
if (points == 10 )
{
    pg.appendChild(monster4);
}

if (points > 9 && (PositionX == monsterPositionX2 && PositionY == (monsterPositionY2)))
{
    pointsUp2();
}

if (points > 19 && (PositionX == monsterPositionX3 && PositionY == (monsterPositionY3)))
{
    pointsUp3();
}

if (points > 9 && (PositionX == monsterPositionX4 && PositionY == (monsterPositionY4)))
{
    alert('GameOver! Red monster is bad!');
    gameOver();
}  
var i;
var x = document.getElementsByClassName("snake-tail");
for (i = 0; i < x.length; i++) {
    x[i].style.setProperty("top", yPositionArr[yPositionArr.length -1 -i ]  +"px" );
    x[i].style.setProperty("left", xPositionArr[xPositionArr.length -1 -i ] +"px" );
}
var mY;
var mX;

for (var m = 0; m < x.length; m++){
    mY = yPositionArr[yPositionArr.length -2 -m ]
   mX = xPositionArr[xPositionArr.length -2 -m ]
if (PositionX == mX && PositionY == mY){
    alert("GameOver! Don't eat your tail!");
gameOver();
}}




        xPositionArr.push(PositionX); 
        yPositionArr.push(PositionY);

console.log(points);
pCounter.innerHTML = points;

}

setInterval(snakeGame,gameTimer);



