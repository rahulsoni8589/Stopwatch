let minutes = 0;
let seconds = 0;
let interval;

const timerElement = document.querySelector(".timer");
const startElement = document.querySelector("#startBtn");
const stopElement = document.querySelector("#stopBtn");
const resetElement = document.querySelector("#resetBtn");

timerElement.textContent = `${"0" + minutes} : ${"0" + seconds}`


startElement.addEventListener("click", startwatch)

resetElement.addEventListener("click", resetwatch)

stopElement.addEventListener("click", stopwatch)


function startwatch(){
  interval = setInterval(()=>{
    seconds++
    if (seconds === 60){
      minutes++;
      seconds = 0;
      }
    
    seconds = seconds<10? "0"+seconds:seconds;
    timerElement.innerHTML = `${minutes} : ${seconds}`
    }, 1000)
    startElement.disabled = true 
}

function resetwatch(){
  minutes = 0;
  seconds = 0;
  clearInterval(interval);
  timerElement.textContent = `${"0" + minutes} : ${"0" + seconds}`;
  startElement.disabled = false
}
   
function stopwatch(){
  clearInterval(interval);
  startElement.disabled = false
  
}
