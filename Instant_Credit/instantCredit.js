$(document).ready(function(){

  $(".jm-doon-doon").click(function() {
    showDetails(this);
    $(this).find("p").slideToggle();
  });

  function showDetails(ToArrow){
    $(ToArrow).find("#jm-more-details img").stop().toggleClass("ArrowRotates");
  }

});


$(window).scroll(function() {
   var hT = $('.jm-message3-mob').offset().top,
       hH = $('.jm-message3-mob').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);

// THIS WILL HAPPEN
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 380;
    var scroll_pos_test2 = 850;
  // set to whatever you want it to be

    if((y_scroll_pos > scroll_pos_test) && (y_scroll_pos < scroll_pos_test2)) {
    console.log("din din din!");
    $('.jm-message3-mob .jm-doon-doon:first-of-type()').stop().find("p").slideDown();
    $('.jm-message3-mob .jm-doon-doon:first-of-type()').find("#jm-more-details img").stop().addClass("ArrowRotates");
    }
    else if(y_scroll_pos > scroll_pos_test2) {
    console.log("don don don!");

  // effect - No3
  var secondAnimation = function(){
    $('.jm-table-header:eq(0)').delay(1000).animate({opacity:1},'slow');
    $('.jm-table-header:eq(1)').delay(1500).animate({opacity:1},'slow');
    $('.jm-table-header:eq(2)').delay(2000).animate({opacity:1},'slow');
    $('.jm-table-header:eq(3)').delay(2000).animate({opacity:1},'slow');
  };secondAnimation();

    }
  else
  {
    console.log("MMMrrrr!");
    $('.jm-message3-mob .jm-doon-doon').stop().find("p").slideUp();
    $('.jm-message3-mob .jm-doon-doon').find("#jm-more-details img").stop().removeClass("ArrowRotates");

  }

});


function jmElite(){
  $('.jm-message5-mob th:nth-child(4)').toggle("slow");
//    $(".jm-table-header-3").toggle(function(){
//     $(this).animate({height:40},200);
//   },function(){
//     $(this).animate({height:10},200);
//   });

}
function jmPremier(){
  $('.jm-message5-mob th:nth-child(3)').toggle("slow");
}
function jmRed(){
  $('.jm-message5-mob th:nth-child(2)').toggle("slow");
}
