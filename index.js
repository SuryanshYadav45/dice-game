var randomNumber=Math.floor(Math.random()*6)+1;
var randomdice="images/dice"+randomNumber+".png";
document.getElementById("imgone").setAttribute("src",randomdice);

var randomNumbertwo=Math.floor(Math.random()*6)+1;
var randomdicetwo="images/dice"+randomNumbertwo+".png";
document.getElementById("imgtwo").setAttribute("src",randomdicetwo);
if(randomNumber>randomNumbertwo)
{
document.querySelector("h1").innerHTML="Congratulation , Player1 won.";
   
}
else if(randomNumber<randomNumbertwo)
{
document.querySelector("h1").innerHTML="Congratulation , Player2 won.";
}
else{
document.querySelector("h1").innerHTML="OOPs, its a draw.";
    
}
