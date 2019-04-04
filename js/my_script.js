$(document).ready(function() {
    $('h2').css('text-decoration', 'underline');
    $('ul').css("border", "solid 1px #ccc");
});

$(document).ready(function() {
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
});

$(document).ready(function() {
    $("th").click(function(){
    $("tr").children().removeClass("selection")
    $(this).siblings().addClass("selection");

  });
});