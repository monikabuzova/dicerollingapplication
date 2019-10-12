var DiceNumber = Math.floor((Math.random()*6)+1);
var RandomImage= "dice"+ DiceNumber + ".PNG";

var ImageSource="images/" + RandomImage;
var image= document.querySelectorAll("img")[0];
image.setAttribute("src", ImageSource);

var DiceNumber2=  Math.floor((Math.random()*6)+1);
var RandomImage2= "dice"+ DiceNumber2 + ".PNG";
var ImageSource2="images/" + RandomImage2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", ImageSource2);


if (DiceNumber>DiceNumber2)
{
document.querySelector("h3").innerHTML=("Player 1 ");

}

else if (DiceNumber2>DiceNumber){
  document.querySelector("h3").innerHTML=("Player 2 ");
}
else{
  document.querySelector("h3").innerHTML=("Its a Draw");

}
