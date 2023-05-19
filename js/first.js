$(document).ready(function() {
    $('#first_page').mousemove(function(a) {
        var mousex = (a.pageX * -1 / 10);
        var mousey = (a.pageY * -1 / 10);
        $('#first_page_back_img ').css('background-position', mousex + 'px ' + mousey + 'px');
    });
    $('#first_page_writing_contents').mousemove(function(a) {
        var mousex = (a.pageX * -1 / 10);
        var mousey = (a.pageY * -1 / 10);
        $('#first_page_back_img ').css('background-position', mousex + 'px ' + mousey + 'px');
    });
});