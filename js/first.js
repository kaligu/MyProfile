// $(document).ready(function() {
//     $('#first_page').mousemove(function(a) {
//         var mousex = (a.pageX * -0.005);
//         var mousey = (a.pageY * -0.005);
//         $('#first_page_back_img ').css('background-position', mousex + 'px ' + mousey + 'px');
//     });
//     $('#first_page_writing_contents').mousemove(function(a) {
//         var mousex = (a.pageX * -0.005);
//         var mousey = (a.pageY * -0.005);
//         $('#first_page_back_img ').css('background-position', mousex + 'px ' + mousey + 'px');
//     });
// });

//for the Loading Window
// $(window).on('load',function () {
//     $('#loadingContainer').fadeOut(1100);
// })
// const loadingText = document.getElementById('loadingText');
// const texts = ["Loading", "Loading.", "Loading..", "Loading...", "Loading....", "Loading....."];
// let index = 0;
//
// function changeText() {
//     loadingText.textContent = texts[index];
//     index = (index + 1) % texts.length;
// }
// setInterval(changeText, 1000);


var isMenuVisible = false;

$('.mobile-navbar > .nav-container > .toggle-button').click(function() {
    if (!isMenuVisible) {
        // Display the .navbar-menu element, rotate the image, and adjust the border size
        document.querySelector(".mobile-navbar> .menu").style.display = "block";
        document.querySelector(".mobile-navbar > .nav-container > .toggle-button > img").style.transform = "rotate(180deg)";
        document.querySelector(".mobile-navbar > .nav-container > .toggle-button").style.border = "2.2px solid var(--navbarbordercolor)";
        isMenuVisible = true;
    } else {
        // Hide the .navbar-menu element, rotate the image, and adjust the border size
        document.querySelector(".mobile-navbar > .menu").style.display = "none";
        document.querySelector(".mobile-navbar > .nav-container > .toggle-button > img").style.transform = "rotate(0deg)";
        document.querySelector(".mobile-navbar > .nav-container > .toggle-button").style.border = "1px solid var(--navbarbordercolor)";
        isMenuVisible = false;
    }
});

$(document).ready(function() {
    var texts = ["Software Developer", "Software Designer", "Content Writter"];
    var index = 0;

    setInterval(function() {
        $('.fp-con-cnt-sents > p:nth-child(4)').text(texts[index]);
        index = (index + 1) % texts.length;
    }, 2000);
});

$(document).ready(function() {
    setInterval(function() {
        $('.fp-con-cnt-avtr').toggleClass('flipped');
    }, 8000);
});



function flipCard() {
    var cardInner = document.querySelector('.sp-con-cnt-fc-img-flip-card-inner');
    cardInner.style.transform = 'rotateY(180deg)';

    // After a delay, reset the card to its initial state
    setTimeout(function() {
        cardInner.style.transform = 'rotateY(0deg)';
    }, 3500); // 3000 milliseconds = 3 seconds
}

// Automatically flip the card every 3 minutes
setInterval(flipCard, 7500); // 180000 milliseconds = 3 minutes


document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = ["Chethiya", "Kaligu"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.querySelector(".fp-con-cnt-sents > p:nth-child(2)").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
                StartTextAnimation(0);
            }, 5000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function(){
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});

