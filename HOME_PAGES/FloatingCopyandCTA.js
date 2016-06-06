$(document).ready(function () {
    $('.jmMenu').hide();
    $('.jmToggle').click(function () {
        $(this).next().slideToggle(500);
    });

});


$(document).ready(function(){

// SCREEN RESOLUTIONS > 1280 - DESKTOP
if ( $(window).width() > 1280) {     

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


// 800 < SCREEN RESOLUTIONS < 1280 - MOBILE LANDSCAPE AND TABLET
if ( $(window).width() > 800 && $(window).width() <= 1280  ){  

 var posParallax2 = $('.JMparallax2').position().top -200;
 var posParallax3 = $('.JMparallax3').position().top -200;
 var posParallax4 = $('.JMparallax4').position().top -150;
 var posParallax5 = $('.JMparallax5').position().top -150;
 var posParallax6 = $('.JMparallax6').position().top -150;
 var posParallax7 = $('.JMparallax7').position().top -150;    
 var posParallax8 = $('.JMparallax8').position().top -150;     
 
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

// SCREEN RESOLUTIONS < 800 - MOBILE PORTRAIT
if ($(window).width() <= 800) {  

  $('.jm-container1').addClass('jm_Opacity1');
  $('.jm-container2').delay(3000).addClass('jm_Opacity1');

  $(document).scroll(function(){
    if($(this).scrollTop()>=$('.JMparallax2').position().top){
        $('.jm-container3').addClass('jm_Opacity1');  
      }
      if($(this).scrollTop()>=$('.JMparallax3').position().top){
        $('.jm-container4').addClass('jm_Opacity1');  
      }
      if($(this).scrollTop()>=$('.JMparallax4').position().top){
        $('.jm-container5').addClass('jm_Opacity1');  
      }
      if($(this).scrollTop()>=$('.JMparallax5').position().top){
        $('.jm-container6').addClass('jm_Opacity1');  
      }
      if($(this).scrollTop()>=$('.JMparallax6').position().top){
        $('.jm-container7').addClass('jm_Opacity1');  
      }
      if($(this).scrollTop()>=$('.JMparallax7').position().top){
        $('.jm-container8').addClass('jm_Opacity1');  
      }            
  });      
}

});
