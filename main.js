
//Part 1
//Create function call 'startGame'
//to state first player starts with X when click CreateGame button


function startGame(){

  document.getElementById("startGame").innerHTML = ("X gets to start");

}

var clickStart = document.getElementById("startButton");
clickStart.addEventListener('click', function(){ startGame(); });


//Part 2
//create functions to make player's move
//to create logo X or Y on box from each player's move


var player = 1;

var clickBox = document.getElementsByClassName("box");

for (var i = 0; i < 9; i++)
{
  clickBox[i].addEventListener('click',function(){

    if(this.innerHTML === "" && player === 1){
      this.innerHTML = "X";
      document.getElementById("startGame").innerHTML = ("O's turn!");
      player = 2;
    }
    else if (this.innerHTML === "" && player === 2){
        this.innerHTML = "O";
        document.getElementById("startGame").innerHTML = ("X's turn!");
        player = 1;
    }
    else{
      alert("This box is already used.")
    }
winnerNotify();
  });
}

//create a function to notify winner
function winnerNotify(){

  var clickBox1 = document.getElementById("box1");
  var clickBox2 = document.getElementById("box2");
  var clickBox3 = document.getElementById("box3");
  var clickBox4 = document.getElementById("box4");
  var clickBox5 = document.getElementById("box5");
  var clickBox6 = document.getElementById("box6");
  var clickBox7 = document.getElementById("box7");
  var clickBox8 = document.getElementById("box8");
  var clickBox9 = document.getElementById("box9");

  if ((clickBox1.innerHTML == "X" && clickBox2.innerHTML == "X" && clickBox3.innerHTML == "X") || (clickBox4.innerHTML == "X" && clickBox5.innerHTML == "X" && clickBox6.innerHTML == "X") || (clickBox7.innerHTML == "X" && clickBox8.innerHTML == "X" && clickBox9.innerHTML == "X") || (clickBox1.innerHTML == "X" && clickBox4.innerHTML == "X" && clickBox7.innerHTML == "X") || (clickBox2.innerHTML == "X" && clickBox5.innerHTML == "X" && clickBox8.innerHTML == "X") || (clickBox3.innerHTML == "X" && clickBox6.innerHTML == "X" && clickBox9.innerHTML == "X") || (clickBox1.innerHTML == "X" && clickBox5.innerHTML == "X" && clickBox9.innerHTML == "X") || (clickBox3.innerHTML == "X" && clickBox5.innerHTML == "X" && clickBox7.innerHTML == "X"))

  {
    alert("X is the winner!");
    window.location.reload();
  }

  else if ((clickBox1.innerHTML == "O" && clickBox2.innerHTML == "O" && clickBox3.innerHTML == "O") || (clickBox4.innerHTML == "O" && clickBox5.innerHTML == "O" && clickBox6.innerHTML == "O") || (clickBox7.innerHTML == "O" && clickBox8.innerHTML == "O" && clickBox9.innerHTML == "O") || (clickBox1.innerHTML == "O" && clickBox4.innerHTML == "O" && clickBox7.innerHTML == "O") || (clickBox2.innerHTML == "O" && clickBox5.innerHTML == "O" && clickBox8.innerHTML == "O") || (clickBox3.innerHTML == "O" && clickBox6.innerHTML == "O" && clickBox9.innerHTML == "O") || (clickBox1.innerHTML == "O" && clickBox5.innerHTML == "O" && clickBox9.innerHTML == "O") || (clickBox3.innerHTML == "O" && clickBox5.innerHTML == "O" && clickBox7.innerHTML == "O"))

  {
    alert("O is the winner!");
    window.location.reload();

  }else if
    ((clickBox1.innerHTML == "O" || clickBox1.innerHTML == "X") && (clickBox2.innerHTML == "O" || clickBox2.innerHTML == "X") && (clickBox3.innerHTML == "O" || clickBox3.innerHTML == "X") && (clickBox4.innerHTML == "O" || clickBox4.innerHTML == "X") && (clickBox5.innerHTML == "O" || clickBox5.innerHTML == "X") && (clickBox6.innerHTML == "O" || clickBox6.innerHTML == "X") && (clickBox7.innerHTML == "O" || clickBox7.innerHTML == "X") && (clickBox8.innerHTML == "O" || clickBox8.innerHTML == "X") && (clickBox9.innerHTML == "O" || clickBox9.innerHTML == "X") )
    {
      alert("It'a draw!");
      window.location.reload();
    }
}
//Create function to reload page for game restart when clicking clear board

function restartGame(){
window.location.reload();
}

var clickBoard = document.getElementById("clearBoard");
clickBoard.addEventListener('click', function(){ restartGame(); });
