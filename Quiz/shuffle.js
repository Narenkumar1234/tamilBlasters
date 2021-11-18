var crtOption1,crtOption2,crtOption3,crtOption4,crtOption5;
document.getElementById("quiz-section").style.textShadow="0 0 8px #000";
document.getElementById("quiz-section").style.color="transparent";

var arrQuiz =[
["Which crop is sown on the largest area in India?","Rice","Wheat","Sugarcane","Maize","1"],
["Entomology is the science that studies","Behaviour of human beings","Insects","The origin and history of technical and scientific terms","The formation of rocks","2"],
["Grand Central Terminal, Park Avenue, New York is the world's","highest railway station","longest railway station","largest railway station","None of the above","3"],
["Galileo was an astronomer who","developed the telescope","discovered four satellites of Jupiter","discovered that the movement of pendulum produces a regular time measurement","All the above","2"],
["Corey Anderson who has hit the fastest ODI century in 36 balls is from","England","Australia","West Indies","New Zealand","4"]
]

var randomNumber;
var arrRandom=[];
var count=0;
function getRandom(){
count++;
do{
  randomNumber=Math.floor(Math.random()*5);
}while(arrRandom.indexOf(randomNumber)!=-1);
arrRandom.push(randomNumber);
return randomNumber;
}
for(var i=0;i<5;i++){
getRandom();
}
var result1,result2,result3,result4,result5;
var submit=0;
if(count==arrQuiz.length){

  var isRunning = false,
  hours=0,
  seconds=1,
  minutes=0,
  startTime,
  elapsedTime=0,
  getInterval,
  currentTime;

  function format(val){
    if(val<10){
    return "0"+String(val );
  }
  else {
    return val;
    }
  }
  document.querySelector("#start_stop").onclick=function(){
    document.getElementById("quiz-section").style.textShadow="";
    document.getElementById("quiz-section").style.color="";
  var flag=0;
  if(!isRunning){
    isRunning=true;
    if(elapsedTime==0)
    startTime=new Date().getTime();
    getInterval= window.setInterval(function()
    {
      if(!submit){
       currentTime=new Date().getTime();
        elapsedTime=currentTime-startTime;
        if(elapsedTime>990 ){
        seconds++;
        currentTime=new Date().getTime();
        startTime=new Date().getTime();
    }
        if(seconds==60){
          seconds=0;
          minutes++;
        }
          if(minutes==60){
            minutes=0;
            hours++;
          }
            if(hours==60){
              hours=0;
            }
            if(flag==0)
            if(minutes==1){
              flag=1;
              alert("Time's up");
            }

        document.querySelector("#stopwatch").innerHTML=format(hours)+":"+format(minutes)+":"+format(seconds);
      }
    },1)
  }

  else {
    window.clearInterval(getInterval);
    isRunning=false;
  }
  }


    result1=arrQuiz[arrRandom[0]][5];
    crtOption1="option1"+result1;
    document.getElementById(crtOption1).value=1;
    document.getElementById("quiz-1").innerText=arrQuiz[arrRandom[0]][0];
    for(var i=1;i<5;i++){
      var option="option1-"+i;
      document.getElementById(option).innerText=arrQuiz[arrRandom[0]][i];
    }

    result2=arrQuiz[arrRandom[1]][5];
    crtOption2="option2"+result2;
    document.getElementById(crtOption2).value=1;
    document.getElementById("quiz-2").innerText=arrQuiz[arrRandom[1]][0];
    for(var i=1;i<5;i++){
      var option="option2-"+i;
      document.getElementById(option).innerText=arrQuiz[arrRandom[1]][i];
    }

    result3=arrQuiz[arrRandom[2]][5];
    crtOption3="option3"+result3;
    document.getElementById(crtOption3).value=1;
    document.getElementById("quiz-3").innerText=arrQuiz[arrRandom[2]][0];
    for(var i=1;i<5;i++){
      var option="option3-"+i;
      document.getElementById(option).innerText=arrQuiz[arrRandom[2]][i];
    }

    result4=arrQuiz[arrRandom[3]][5];
    crtOption4="option4"+result4;
    document.getElementById(crtOption4).value=1;

    document.getElementById("quiz-4").innerText=arrQuiz[arrRandom[3]][0];
    for(var i=1;i<5;i++){
      var option="option4-"+i;
      document.getElementById(option).innerText=arrQuiz[arrRandom[3]][i];
    }

    result5=arrQuiz[arrRandom[4]][5];
    crtOption5="option5"+result5;
    document.getElementById(crtOption5).value=1;
    document.getElementById("quiz-5").innerText=arrQuiz[arrRandom[4]][0];
    for(var i=1;i<5;i++){
      var option="option5-"+i;
      document.getElementById(option).innerText=arrQuiz[arrRandom[4]][i];
    }
    function validate(){
      submit=1;
      var score=0;
        if(document.getElementById(crtOption1).checked){
          score++;
        }if(document.getElementById(crtOption2).checked){
          score++;
        }if(document.getElementById(crtOption3).checked){
          score++;
        }if(document.getElementById(crtOption4).checked){
          score++;
        }if(document.getElementById(crtOption5).checked){
          score++;
        }
        // for(var i=0;i<arrQuiz.size();i++)
        // document.getElementById("crtAns").innerHTML=arrQuiz[i][arrQuiz[i][5]];

      document.getElementById("score").innerText="Your Score is: "+score;
      document.getElementById("proceedButton").style["visibility"]="visible";
      document.getElementById("viewScore").style["visibility"]="visible";

         localStorage.setItem("Score",score);
      return false;

    }
}
