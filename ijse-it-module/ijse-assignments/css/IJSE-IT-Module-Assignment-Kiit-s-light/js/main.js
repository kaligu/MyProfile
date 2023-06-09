let islightclose = new Boolean(true);
var audio = document.getElementById("audio");

document.getElementById("start-button").onclick = function() {
    islightclose=false;
    startlightpanel()
};
document.getElementById("stop-button").onclick = function() {
    audio.pause();
    islightclose=true;

};

function stoplightpanel() {
    document.getElementById("LED1").style.backgroundColor="#ffffff";
    document.getElementById("LED2").style.backgroundColor="#ffffff";
    document.getElementById("LED3").style.backgroundColor="#ffffff";
    document.getElementById("LED4").style.backgroundColor="#ffffff";
    document.getElementById("LED5").style.backgroundColor="#ffffff";
}

async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}
async function startlightpanel() {

    while(islightclose===false){
        for (j = 1; j <= 12; j++) {
            audio.play();
            await sleep(100);
            if(j===1){
                document.getElementById("LED1").style.backgroundColor="#f9f9f9";
                document.getElementById("LED2").style.backgroundColor="#ffffff";
                document.getElementById("LED3").style.backgroundColor="#ffffff";
                document.getElementById("LED4").style.backgroundColor="#ffffff";
                document.getElementById("LED5").style.backgroundColor="#ffffff";
            }
            if(j===2){
                document.getElementById("LED1").style.backgroundColor="#ff0202";
                document.getElementById("LED2").style.backgroundColor="#b00000";
                document.getElementById("LED3").style.backgroundColor="#ffffff";
                document.getElementById("LED4").style.backgroundColor="#ffffff";
                document.getElementById("LED5").style.backgroundColor="#ffffff";
            }
            if(j===3){
                document.getElementById("LED1").style.backgroundColor="#f6aaaa";
                document.getElementById("LED2").style.backgroundColor="#ff0000";
                document.getElementById("LED3").style.backgroundColor="#f6aaaa";
                document.getElementById("LED4").style.backgroundColor="#fdd7d7";
                document.getElementById("LED5").style.backgroundColor="#ffffff";
            }
            if(j===4){
                document.getElementById("LED1").style.backgroundColor="#fdd7d7";
                document.getElementById("LED2").style.backgroundColor="#f6aaaa";
                document.getElementById("LED3").style.backgroundColor="#ff0000";
                document.getElementById("LED4").style.backgroundColor="#ff9898";
                document.getElementById("LED5").style.backgroundColor="#fdd7d7";
            }
            if(j===5){
                document.getElementById("LED1").style.backgroundColor="#ffffff";
                document.getElementById("LED2").style.backgroundColor="#fdd7d7";
                document.getElementById("LED3").style.backgroundColor="#f6aaaa";
                document.getElementById("LED4").style.backgroundColor="#ff0000";
                document.getElementById("LED5").style.backgroundColor="#f6aaaa";
            }
            if(j===6){
                document.getElementById("LED1").style.backgroundColor="#ffffff";
                document.getElementById("LED2").style.backgroundColor="#ffffff";
                document.getElementById("LED3").style.backgroundColor="#fdd7d7";
                document.getElementById("LED4").style.backgroundColor="#f6aaaa";
                document.getElementById("LED5").style.backgroundColor="#ff0000";
            }
            if(j===7){
                document.getElementById("LED5").style.backgroundColor="#ff0202";
                document.getElementById("LED4").style.backgroundColor="#ffffff";
                document.getElementById("LED3").style.backgroundColor="#ffffff";
                document.getElementById("LED2").style.backgroundColor="#ffffff";
                document.getElementById("LED1").style.backgroundColor="#ffffff";
            }
            if(j===8){
                document.getElementById("LED5").style.backgroundColor="#ff0202";
                document.getElementById("LED4").style.backgroundColor="#f6aaaa";
                document.getElementById("LED3").style.backgroundColor="#fdd7d7";
                document.getElementById("LED2").style.backgroundColor="#ffffff";
                document.getElementById("LED1").style.backgroundColor="#ffffff";
            }
            if(j===9){
                document.getElementById("LED5").style.backgroundColor="#f6aaaa";
                document.getElementById("LED4").style.backgroundColor="#ff0000";
                document.getElementById("LED3").style.backgroundColor="#f6aaaa";
                document.getElementById("LED2").style.backgroundColor="#fdd7d7";
                document.getElementById("LED1").style.backgroundColor="#ffffff";
            }
            if(j===10){
                document.getElementById("LED5").style.backgroundColor="#fdd7d7";
                document.getElementById("LED4").style.backgroundColor="#f6aaaa";
                document.getElementById("LED3").style.backgroundColor="#ff0000";
                document.getElementById("LED2").style.backgroundColor="#ff9898";
                document.getElementById("LED1").style.backgroundColor="#fdd7d7";
            }
            if(j===11){
                document.getElementById("LED5").style.backgroundColor="#ffffff";
                document.getElementById("LED4").style.backgroundColor="#fdd7d7";
                document.getElementById("LED3").style.backgroundColor="#f6aaaa";
                document.getElementById("LED2").style.backgroundColor="#ff0000";
                document.getElementById("LED1").style.backgroundColor="#f6aaaa";
            }
            if(j===12){
                document.getElementById("LED5").style.backgroundColor="#ffffff";
                document.getElementById("LED4").style.backgroundColor="#ffffff";
                document.getElementById("LED3").style.backgroundColor="#fdd7d7";
                document.getElementById("LED2").style.backgroundColor="#f6aaaa";
                document.getElementById("LED1").style.backgroundColor="#ff0000";
            }
        }
    }


}
