$(document).ready(function(){
    $('.collapsible').collapsible();
    $('.dropdown-trigger').dropdown()
    $('.sidenav').sidenav();
    $('.carousel').carousel({
        height:200,
        duration: 200,
        dist: 50,
        shift:0,
        padding:0,
        numVisible:5,
        fullWidth:false,
        indicators:true,
        noWrap:false
    });

    $('.slider').slider({
      height: 170,
      indicators: true
    });
    
    $('.slider-historias').slider({
      indicators: true,
      height: 300,
      duration: 500,
      interval: 8000
    });

    $('.modal').modal();
    $('select').formSelect();

    var $header = $('header');
    var $sticky = $header.before($header.clone().addClass("sticky"));

    $(window).on("scroll", function(){
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll", (scrollFromTop > 350));
    })

});


