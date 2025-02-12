/* ----------setTimeOut()--------------
const changeText = function(){
    document.querySelector('h1').innerHTML ="Best JS series"
}
const changeMe=setTimeout(changeText, 2000);

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeMe)
    console.log("Stopped");
    
})*/
//------------setInterval()-------------

// const sayDate = function(){
//     const text =new Date().getSeconds()
//     console.log(text);
//     document.querySelector('#para').innerHTML=text
    
// }

// let startId
// document.querySelector('#start').addEventListener('click', function(){
//     startId = setInterval(sayDate, 1000)
// })

// document.querySelector('#stop').addEventListener('click',
//     function(){
//         clearInterval(startId)
//     }
// )

//stopwatch code

let interval 
let seconds =0
let minutes =0
let hours =0
let isRunning =false

const start = ()=>{
    if(!isRunning){
        interval = setInterval(updateTime, 1000)
        isRunning = true
    }
}

document.querySelector('#start').addEventListener('click', start)

const stop= ()=>{
    clearInterval(interval)
    isRunning= false
}
document.querySelector('#stop').addEventListener('click', stop)

const reset = ()=>{
    clearInterval(interval)
    isRunning=false
    seconds=0
    minutes=0
    hours=0
    document.querySelector('#para').innerHTML ='00:00:00'
}

document.querySelector('#reset').addEventListener('click', reset)

const updateTime =()=>{
    seconds ++
    if(seconds === 60){
        seconds =0
        minutes++
    }
    if(minutes ===60){
        minutes =0
        hours++
    }

    const formattedTime = 
        (hours < 10 ? '0' : '') + hours + ':' + 
        (minutes < 10 ? '0' : '') + minutes + ':' + 
        (seconds < 10 ? '0' : '') + seconds;

    document.querySelector('#para').innerHTML = formattedTime;
}

