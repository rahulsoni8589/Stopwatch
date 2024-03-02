// declaring and initializing the variable used to perform action on the stopwatch
let minutes = 0;
let seconds = 0;
let interval;

// selecting the elements using query selector
const timerElement = document.querySelector(".timer");
const startElement = document.querySelector("#startBtn");
const stopElement = document.querySelector("#stopBtn");
const resetElement = document.querySelector("#resetBtn");

timerElement.textContent = `${"0" + minutes} : ${"0" + seconds}`

// adding events to the button 
startElement.addEventListener("click", startwatch)

resetElement.addEventListener("click", resetwatch)

stopElement.addEventListener("click", stopwatch)

// callback function of start button event listener
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

// callback function of reset button event listener
function resetwatch(){
  minutes = 0;
  seconds = 0;
  clearInterval(interval);
  timerElement.textContent = `${"0" + minutes} : ${"0" + seconds}`;
  startElement.disabled = false
}
   
// callback function of stop button event listener
function stopwatch(){
  clearInterval(interval);
  startElement.disabled = false
  
}
