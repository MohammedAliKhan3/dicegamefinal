var p = Math.random();
p = Math.floor(p*6);

if(p == 1)
{
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(p==2)
{
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if(p==3)
{
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
else if(p==4)
{
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
else if(p==5)
{
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}
else if(p==6)
{
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}

var z = Math.random();
z = Math.floor(z*6);

if(z == 1)
{
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if(z==2)
{
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
else if(z==3)
{
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
else if(z==4)
{
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
else if(z==5)
{
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
else if(z==6)
{
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}

if ( p == z)
{
    document.querySelector("h1").innerHTML="DRAW";
}
else if (p > z)
{
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else
{
    document.querySelector("h1").innerHTML="Player 2 wins";
}