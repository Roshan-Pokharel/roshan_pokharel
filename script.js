// selecting element   
const score1 = document.querySelector('#totalScore1');
const score2= document.getElementById('totalScore2');
const dice = document.querySelector('.dice');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');
const newGame= document.getElementById('newGame');
const currentScore1= document.getElementById('cs1');
const currentScore2= document.getElementById('cs2');
const color1=document.getElementById('div1');
const color2=document.getElementById('div2');


// starting condition
score1.textContent=Number(0);
score2.textContent=Number(0);
dice.classList.add('hidden');
let activePlayer=1;
 document.getElementById(`cs${activePlayer}`).textContent=0;
const score=[0,0,0];
let playing = true;
const interchange=function()
{
    document.getElementById(`cs${activePlayer}`).textContent=0;
    document.getElementById(`div${activePlayer}`).style.backgroundColor=' rgba(231, 102, 77, 0.66)';
    activePlayer=activePlayer===1?2:1;
    // console.log(activePlayer);
    document.getElementById(`div${activePlayer}`).style.backgroundColor='rgba(239, 134, 114, 0.66)';
}


// rolling dice functionality


roll.addEventListener('click', function()
{
    if( playing ) {
    // generating the random dice number
    const randomDiceNumber =Math.trunc( Math.random()*6)+1;
    // console.log(randomDiceNumber);
    dice.classList.remove('hidden');
    dice.src = `dice-${randomDiceNumber}.png`;
    if(randomDiceNumber!==1)
    {
    tempNumber=randomDiceNumber;
    document.getElementById(`cs${activePlayer}`).textContent= Number(document.getElementById(`cs${activePlayer}`).textContent )+ randomDiceNumber;  
      

    
    }
    else
    { 
        document.getElementById(`cs${activePlayer}`).textContent=0;
        // console.log(activePlayer);
        // color change
       interchange();
    }
}
})

 hold.addEventListener('click', function()
  {
    if(playing)
    {
     //console.log(activePlayer); 
    score[activePlayer] += Number(document.getElementById(`cs${activePlayer}`).textContent);

    document.getElementById(`totalScore${activePlayer}`).textContent=score[activePlayer];

      if(score[activePlayer]>=20)
    {
        playing=false;
        document.getElementById(`div${activePlayer}`).style.backgroundColor='rgb(176, 222, 107';
        activePlayer=activePlayer===1?2:1;
        document.getElementById(`div${activePlayer}`).style.backgroundColor='rgb(145, 134, 134';
        
        

    }
    else
    {
   
    // making currnet score zero
   interchange();
    // console.log(activePlayer);
    }
}

    
}) 

newGame.addEventListener('click', function()
{
    activePlayer=2;
    interchange();
    score1.textContent=Number(0);
score2.textContent=Number(0);
dice.classList.add('hidden');

document.getElementById('cs1').textContent='0';
    document.getElementById('cs2').textContent='0 ';
    score[1]=0;
    score[2]=0;
    playing=true; 

})