$(document).ready(function () {
    $('.jmMenu').hide();
    $('.jmToggle').click(function () {
        $(this).next().slideToggle(500);
    });

});


$(document).ready(function(){

(function($) {

    'use strict';

    $.fn.laxicon = function(options) {

        // declare default options
        var settings = $.extend({
            speed: 0.05,
            bgImgPath: 'https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDIvMDgvMTMvMzkvMDQvMTA2LzAxaW1nMi5qcGciXV0/01img2.jpg?sha=6736a998c614f59c',
            bgXPos: 'center',
            bgSize: 'cover',
            bgRepeat: 'no-repeat',
            gradOverlay: 'none'
        }, options);

        return this.each( function() {
            // set "this" to a variable
            var $element = $(this);
            // initialize some empty variables
            var xPos,
                windowHeight,
                winScrollTop,
                elemOffsetTop,
                elemHeight,
                bgImage;

            // set xPos variable to default background x position setting
            xPos = settings.bgXPos;

            if ($(window).width() >= 769) {

                $(window).on('load resize scroll', function() {

                    // constantly set variables for math
                    windowHeight = $(window).height();
                    winScrollTop = $(window).scrollTop();
                    elemOffsetTop = $element.offset().top;
                    elemHeight = $element.outerHeight();

                    // if above or below viewport, stop
                    if (elemOffsetTop + elemHeight <= winScrollTop || elemOffsetTop >= winScrollTop + windowHeight) {
                        return;
                    }

                    // if gradient overlay
                    if (settings.gradOverlay === 'shade') {
                        bgImage = 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(' + settings.bgImgPath + ')';
                    } else if (settings.gradOverlay === 'tint') {
                        bgImage = 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.6) 100%), url(' + settings.bgImgPath + ')';
                    } else {
                        bgImage = 'url(' + settings.bgImgPath + ')';
                    }

                    // constantly set css
                    $element.css({
                        backgroundPosition: xPos + ' ' + (Math.round((elemOffsetTop - winScrollTop) * settings.speed)) + 'px',
                        backgroundSize: settings.bgSize,
                        backgroundRepeat: settings.bgRepeat,
                        backgroundImage: bgImage,
//                         backgroundAttachment: 'fixed'
                    });

                });

            } else {

                $(window).on('load resize scroll', function() {

                   // constantly set variables for math
                    windowHeight = $(window).height();
                    winScrollTop = $(window).scrollTop();
                    elemOffsetTop = $element.offset().top;
                    elemHeight = $element.outerHeight();

                    // if above or below viewport, stop
                    if (elemOffsetTop + elemHeight <= winScrollTop || elemOffsetTop >= winScrollTop + windowHeight) {
                        return;
                    }

                    // if gradient overlay
                    if (settings.gradOverlay === 'shade') {
                        bgImage = 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(' + settings.bgImgPath + ')';
                    } else if (settings.gradOverlay === 'tint') {
                        bgImage = 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.6) 100%), url(' + settings.bgImgPath + ')';
                    } else {
                        bgImage = 'url(' + settings.bgImgPath + ')';
                    }

                    // constantly set css
                    $element.css({
                        backgroundPosition: xPos + ' top',
                        backgroundSize: 'auto 100%',
                        backgroundRepeat: settings.bgRepeat,
                        backgroundImage: bgImage,
                        // for now :(
                        backgroundAttachment: 'scroll',
                    });

                });

            }

        }); // end plugin loop

    }; // end plugin function

}(jQuery));

if ($(window).width() >= 740) {
$('.parallax').laxicon();
}




if ( $(window).width() > 1280) {     


// MOVING CTA MOVING CTA MOVING CTA MOVING CTA MOVING CTA
$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
};

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  var pos = scrollTop / this.speed;
  this.el.css('transform', 'translate3D(0,' + -pos + 'px, 0)');

};

$(function(){
  $('[data-scroll-speed]').moveIt();
});

}


// LANDSCAOE ANIMATION
if ( $(window).width() > 800 && $(window).width() <= 1280  ){  

 var posParallax2 = $('.parallax2').position().top -200;
 var posParallax3 = $('.parallax3').position().top -200;
 var posParallax4 = $('.parallax4').position().top -150;
 var posParallax5 = $('.parallax5').position().top -150;
 var posParallax6 = $('.parallax6').position().top -150;
 var posParallax7 = $('.parallax7').position().top -150;    
 var posParallax8 = $('.parallax8').position().top -150;     
 
  $('.jm-container1').addClass('jm_Opacity1');
  $(document).scroll(function(){
    if($(this).scrollTop()>= posParallax2){
      $('.jm-container2').addClass('jm_Opacity1');	
    }
    if($(this).scrollTop()>= posParallax3){
      $('.jm-container3').addClass('jm_Opacity1');	
    }
    if($(this).scrollTop()>= posParallax4){
      $('.jm-container4').addClass('jm_Opacity1');	
    }
    if($(this).scrollTop()>= posParallax5){
      $('.jm-container5').addClass('jm_Opacity1');
    }
    if($(this).scrollTop()>= posParallax6){
      $('.jm-container6').addClass('jm_Opacity1');
    }
    if($(this).scrollTop()>= posParallax7){
      $('.jm-container7').addClass('jm_Opacity1');
    }
    if($(this).scrollTop()>= posParallax8){
      $('.jm-container8').addClass('jm_Opacity1');
    }

  });


}

// PORTTRAIT ANIMATION
// if ( ($(window).width() >= 533 && $(window).width() <= 800) || (($(window).width() <= 440)) ) {  
if ($(window).width() <= 800) {  

$('.jm-container1').addClass('jm_Opacity1');
$('.jm-container2').delay(3000).addClass('jm_Opacity1');

  $(document).scroll(function(){
    if($(this).scrollTop()>=$('.parallax2').position().top){
      $('.jm-container3').addClass('jm_Opacity1');	
    }
    if($(this).scrollTop()>=$('.parallax3').position().top){
      $('.jm-container4').addClass('jm_Opacity1');	
    }
    if($(this).scrollTop()>=$('.parallax4').position().top){
      $('.jm-container5').addClass('jm_Opacity1');	
    }
    if($(this).scrollTop()>=$('.parallax5').position().top){
      $('.jm-container6').addClass('jm_Opacity1');	
    }
    if($(this).scrollTop()>=$('.parallax6').position().top){
      $('.jm-container7').addClass('jm_Opacity1');	
    }
    if($(this).scrollTop()>=$('.parallax7').position().top){
      $('.jm-container8').addClass('jm_Opacity1');	
    }            
  });      
}

});
