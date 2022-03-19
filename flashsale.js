

//
flashSaleClock(2 , 0)

// format time: hours/minute
function flashSaleClock(a,b){ 
      
    var timeInput = (a*60 +b)*60    
    
    
    const time = setInterval(() => {  
        if (timeInput >= 0){ 
            var hoursInt = Math.floor(timeInput/60/60) 
            var hours = timeInput/60/60 - hoursInt
    
            var minutesInt = Math.floor(hours*60)
            var minutes =  hours*60 - Math.floor(hours*60)
    
            var secondsInt = (minutes*60).toFixed(0)
    
            timeInput--
            // console.log([hoursInt, minutesInt, secondsInt])
            renderFlashSale(hoursInt,minutesInt,secondsInt)
        
        } 
        else {
            clearInterval(time)
        }
    }, 1000);   

} 

function renderFlashSale(a, b, c) {  
    var FlashSaleContainer = document.querySelector('.main__container-flashsale-header-clock') 
    
    var Hour = ('0' + a).slice(-2)
    var Minute = ('0' + b).slice(-2)
    var Second = ('0' + c).slice(-2)
    FlashSaleContainer.innerHTML = `${Hour} : ${Minute} : ${Second}`
    
}

 