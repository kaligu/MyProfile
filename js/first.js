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
$(window).on('load',function () {
    $('#loadingContainer').fadeOut(1000);

    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/6311aa7f54f06e12d8924ec1/1gbug40vk';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();

})

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
        $('.fp-sen_3 > p:nth-child(1)').text(texts[index]);
        index = (index + 1) % texts.length;
    }, 2000);
});

$(document).ready(function() {
    setInterval(function() {
        $('.fp-avatar').toggleClass('flipped');
    }, 8000);
});



function flipCard() {
    var cardInner = document.querySelector('.secp-flip-card-inner');
    cardInner.style.transform = 'rotateY(180deg)';

    // After a delay, reset the card to its initial state
    setTimeout(function() {
        cardInner.style.transform = 'rotateY(0deg)';
    }, 3500); // 3000 milliseconds = 3 seconds
}

// Automatically flip the card every 3 minutes
setInterval(flipCard, 7500); // 180000 milliseconds = 3 minutes

