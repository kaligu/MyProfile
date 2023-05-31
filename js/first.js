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

$('.mobile-navbar > .container > .toggle-button').click(function() {
    if (!isMenuVisible) {
        // Display the .navbar-menu element, rotate the image, and adjust the border size
        document.querySelector(".mobile-navbar> .menu").style.display = "block";
        document.querySelector(".mobile-navbar > .container > .toggle-button > img").style.transform = "rotate(180deg)";
        document.querySelector(".mobile-navbar > .container > .toggle-button").style.border = "2.2px solid var(--navbarbordercolor)";
        isMenuVisible = true;
    } else {
        // Hide the .navbar-menu element, rotate the image, and adjust the border size
        document.querySelector(".mobile-navbar > .menu").style.display = "none";
        document.querySelector(".mobile-navbar > .container > .toggle-button > img").style.transform = "rotate(0deg)";
        document.querySelector(".mobile-navbar > .container > .toggle-button").style.border = "1px solid var(--navbarbordercolor)";
        isMenuVisible = false;
    }
});

