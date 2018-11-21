//  OVERWRITE 43A CYBER MONDAY - JuanMa - 11.21.18


// W40D OVERWRITE SWAP MESSAGES
// $.fn.swap = function (elem) {
//     elem = elem.jquery ? elem : $(elem);
//     return this.each(function () {
//         $(document.createTextNode('')).insertBefore(this).before(elem.before(this)).remove();
//     });
// };
// $('.large-square-plus-one-content-block__container--large-image').swap('.large-square-plus-one-content-block__container--small-image');
// END W38D OVERWRITE SWAP MESSAGES

$(document).ready(function(){

    // CLONING TO BE REVISED
    //$('.jm-HomePage5 .jm-cloneIt, .jmrv-hp3 .jm-cloneIt').each(function(){
        //var new_data = $(this).find('*').filter('.jm-toClone').clone();
        //var new_data= $('a', this).clone(); //ommit this
        //console.log(new_data);
        //new_data.attr("id", "jm_img_anchor");
        //new_data.removeAttr("class");
        //new_data.appendTo(this);
    //});
    // END CLONING TO BE REVISED

    // W42C LIGHTBBOX MODIFICATION
    $('.page-layout div:nth-of-type(6) a').eq(2).click(function(){
    console.log("The paragraph was clicked.");
     $(this).addClass('JM_trigger_ligthBox');
     $(this).closest('div.hero-content-block').next().fadeIn(1000).addClass("jm_displayflex");
     $(".jm_dark_lightBox, .rich-text-content-block").fadeIn();
     $(".jm_dark_lightBox").click(function(){
         $('.jm_displayflex').stop().fadeOut(300);

     });
     $(".jm_X_Hero_lightBox").click(function(){
         $('.jm_displayflex').stop().fadeOut(300);

     });
    });
    // END W42C LIGHTBBOX MODIFICATION FOR

});



// SPECIAL HEADER 1
//$('.branded-card-header').after(
    //  '<section class="jm-home-page-header">'+
    //  '<p class="jm-mobile-HPheader-l1">Ship gifts in time for Christmas</p>'+
    //  '<h3><b>Last day 12/20</b> for <b>Next-Day Shipping!<span class="jm-asterisk">*</span></b></h3>'+
    //  '<p class="content-block-content__action content-block-content__action--dark-text"><a class="text jm-mobile-HPheader-cta" href="https://www.c21stores.com/pages/shipping-information">LEARN MORE</a></p>'+
    //  '<p class="jm-desktop jm-HPH-fine-print"><span class="jm-asterisk">*</span>Dates vary by location.</span></p>'+
    //'</section>'
//);


// VIDEO TO PLAY ON SCROLL

// API
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Holding All video players here
var players = {};
var playerCount = 0;

var iframes = $('.jm_video_OnScroll');

jQuery(document).ready(function($) {
    onYouTubeIframeAPIReady = function() {
        iframes.each(function( index ) {
            players[index] = new YT.Player( this, {
              events: {
                  'onReady': onPlayerReady
                }
            });
        });

    }
    function onPlayerReady(event) {
      playerCount++;
        if(playerCount == iframes.size()){
            assignWaypoints();
        }
    }
    function assignWaypoints() {
        iframes.each(function( index ) {
           $(this).waypoint(function(direction) {
                if(direction=="up"){
                    players[index].playVideo();
                } else {
                    players[index].stopVideo();
                }
            }, { offset: '-75%' });
            $(this).waypoint(function(direction) {
                if(direction=="up"){
                    players[index].stopVideo();;
                } else {
                    players[index].playVideo();
                }
            }, { offset: '75%' });

        });
    }
});


//END VIDEO TO PLAY ON SCROLL