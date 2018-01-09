/*variables needed*/

var num_square = 3;
var buttons = document.querySelectorAll(".mode");
var game = document.querySelector(".game");
var colors = [];
var picked_color;
var squares = document.querySelectorAll(".square");
var targetcolor = document.querySelector("#targetcolor");
var change_color = document.querySelector("#change-color");
var ccolor = document.querySelector("#ccolor");


init()

function init()
{
get_num_squares();
game_logic()
set_square(num_square);
}

function get_num_squares()
{
    
     for(var i=0;i<buttons.length;i++)
     {
        buttons[i].addEventListener("click",function(){
           if(this.id =="easy") num_square = 3;
           if(this.id =="med") num_square = 6;
           if(this.id == "hard") num_square = 9
           console.log(num_square); 
           set_square(num_square)
        });
     }
    
}

function pick_color()
{
    return colors[Math.floor(Math.random()*colors.length)];
}

function generate_Randomcolors(n)
{
    var temp = [];

    for (var i=0;i<n;i++) temp.push(randomcolorgen());

    return temp;
}

function randomcolorgen()
{
  var red = Math.floor((Math.random()*255)+0);
  var blue = Math.floor((Math.random()*255)+0);
  var green = Math.floor((Math.random()*255)+0);


  //console.log("rgb("+red+", "+blue+", "+green+")")

  return "rgb("+red+", "+blue+", "+green+")";
}


function set_square(n)
{
    colors = generate_Randomcolors(n);
    picked_color = pick_color();
    targetcolor.textContent = picked_color;


    // for(var i=0;i<n;i++)
    // {
    //    var node = document.createElement("div");
    //    node.setAttribute("class","square")
    //    game.appendChild(node);
       
      
    //   //console.log(node);
    // }


   for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

    console.log(game);
    //console.log(node);
}

function changecolor(color)
{
  for(var i=0;i<squares.length;i++)
  {
    squares[i].style.backgroundColor = color;
  }
}

function game_logic()
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].addEventListener("click",function(){
           var clickedcolor = this.style.background;
           if(clickedcolor == picked_color)
           {
             change_color.style.backgroundColor = picked_color;
             ccolor.style.color = "#ecf0f1";
             changecolor(picked_color);
           }
           else
           {
              alert("incorrect")
           }
        });
    }
}