$(document).ready(function() {
    var displaySize = 960;
    var gridSize = 100;
    var grid = gridSize*gridSize;
    var blockSize = displaySize/gridSize;



    for (var x = 0; x < grid; x++) {
        $('.inner').append('<div class="blocks"></div>');}
         $('.blocks').css({'display':'inline-block','float':'left','width':'20px','height':'20px','outline':'1px solid'});

    $('.blocks')
        .mouseenter('div',function(){
            $(this).css('background-color','black')
        })
        .mouseleave('div',function(){
            $(this).css('background-color','white')
        })
    $('.clearButton').click(function(){
        var clear = prompt("What size grid?");
        if(clear != null){
            for (var x = 0; x < grid; x++) {
                $('.inner').removeClass('.blocks');
                gridSize = clear;
            }

        }
})

});