$(document).ready(function() {



    var gridSize = 50;
    var grid = gridSize*gridSize;
    var blockSize = 960/gridSize;
    var $blocks = $('.blocks');

    function drawGrid(grid){

    for (var x = 0; x < grid; x++) {
        $('.inner').append('<div class="blocks"></div>');
    }
        $('.blocks').css({'display':'inline-block','float':'left','width':blockSize+"px",
             'height':blockSize+"px",'outline':'2px solid','background':'blue'});

    $('.blocks')
        .mouseenter('div',function(){
            $(this).css('background-color','black');
            $(this).fadeTo("slow",0.3);
        })
        .mouseleave('div',function(){
            $(this).css('background-color','white');
            $(this).fadeTo("slow",0.3);
        });
    };
    $(".startButton").click(function(){
        $('.inner').empty();
        drawGrid(grid);
    })
    $(".sizeButton").click(function(){
        var userSize = prompt("what size?",gridSize.toString());
            $('.inner').empty();
        gridSize = userSize;
        blockSize = 960/userSize;
        drawGrid(userSize*userSize);


    });

});