let milisecondsOne =document.querySelector("#milisecondsOne");
let milisecondsTwo =document.querySelector("#milisecondsTwo");
let secondsOne =document.querySelector("#secondsOne");
let secondsTwo =document.querySelector("#secondsTwo");
let minutesOne =document.querySelector("#minutesOne");
let minutesTwo =document.querySelector("#minutesTwo");

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let displaySection = document.querySelector("#displaySection");
start.addEventListener("click", startTimer)
// stop.addEventListener("click", stopTimer)


let milisecondOneItem = 0;
let milisecondTwoItem= 0;
let secondsOneItem = 0;
let minutesOneItem =0;
let secondsTwoItem =0;
let strat =0;
let minutesTwoItem =0

 function startTimer(){
    // setInterval(() => {
    //     return counter++
    // }, 1000);
    setInterval(() => {
        milisecondOneItem++
        milisecondsOne.innerHTML = milisecondOneItem;
        if(milisecondOneItem ==9){
            milisecondOneItem = -1
            milisecondTwoItem++
            milisecondsTwo.innerHTML =milisecondTwoItem;
            // milisecondOneItem =0
          
        }
   
        if(milisecondTwoItem == 9){
            milisecondTwoItem = -1
            secondsOneItem++
            secondsOne.innerHTML =secondsOneItem
        }

        if(secondsTwoItem ==5 && secondsOneItem ==9){
            setTimeout(() => {
                secondsTwoItem =-1
            secondsOneItem= -1
                minutesOneItem++
            minutesOne.innerHTML = minutesOneItem
            },1000);
    
        }
       
        if(secondsOneItem ==9){
            secondsOneItem = -1
            setTimeout(() => {
                if(secondsTwoItem< 5){
                    secondsTwoItem++
                secondsTwo.innerHTML =secondsTwoItem
                }
                else if (secondsTwoItem==5){
                    secondsTwoItem =0
                    secondsTwo.innerHTML =secondsTwoItem
                }
            }, 1100);

        if(minutesOneItem ==9){
       setTimeout(() => {
        minutesTwoItem++
        minutesTwo.innerHTML =minutesTwoItem
        minutesOneItem = 0
       }, 1100);
    }
}
        
    

        // if(secondsTwoItem ==5 && secondsOneItem ==9){
        //     minutesOneItem++
        //     secondsTwoItem =0
        //     secondsOneItem= 0
        //     minutesOne.innerHTML = minutesOneItem
    
        // }
        // if(secondsOneItem > 9){

        // }
        // displaySection.innerHTML =0
    }, 11);

    }
