var page='menu';

$(document).ready(function(){
    loadPage();
});

$('.logo').click(function(){
    if(page!='menu'){
        page = 'menu';
        loadPage();
    }
});

$('.stripe-1').click(function(){
    if(page!='play'){
        page = 'play';
        loadPage();
    }
});

$('.stripe-2').click(function(){
    if(page!='highscore'){
        page = 'highscore';
        loadPage();
    }
});

$('.stripe-3').click(function(){
    if(page!='about'){
        page = 'about';
        loadPage();
    }
});

function loadPage(){
    closeAllPages();
    $('#' + page ).css('display','block');
}

function closeAllPages(){
    //menu
    $('#menu').css('display','none');
    $('#play').css('display','none');
    $('#about').css('display','none');
    $('#highscore').css('display','none');
}
