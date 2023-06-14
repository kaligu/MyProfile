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



