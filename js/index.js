window.onload = function (){

    var hours = 00;
    var minutes  = 00;
    var seconds = 00;
    var appendHours = document.getElementById("hours")
    var appendMiniutes = document.getElementById("minutes");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

     buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 1);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    seconds = "00";
  	minutes = "00";
    hours ="00";
    appendSeconds.innerHTML = seconds;
  	appendMiniutes.innerHTML = minutes;
    appendHours.innerHTML = hours;
  }
  
   
  
  function startTimer () {
    seconds++; 
    
    if(seconds <= 9){
      appendSeconds.innerHTML = "0" + seconds;
    }
    
    if (seconds > 6){
      appendSeconds.innerHTML = seconds;
      
    } 
    
    if (seconds > 60) {
      console.log("minutes");
      minutes++;
      appendMiniutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
    
    if (minutes > 9){
      appendMiniutes.innerHTML = minutes;
    }

    if (minutes > 60) {
        console.log("hours");
        hours++;
        appendHours.innerHTML = "0" + hours;
        minutes = 0;
        appendMiniutes.innerHTML = "0" + 0;
      }
      
      if (hours > 24){
        appendSeconds.innerHTML = hours;
      }
  
  }
  

}

s