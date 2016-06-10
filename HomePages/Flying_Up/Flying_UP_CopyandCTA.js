if ($(window).width() >= 800){  

// $(window).load(function() {
//  //  INITIAL ANIMATION POSITIONS
//      $("html, body").animate({ 
//         scrollTop: $('.jm-RightHere').offset().top 
//     }, 1000);

// });

    $(".jm_Asset_hover").mouseout(jmMovingDown);
    $(".jm_Asset_hover").mouseover(jmMovingUp);


function jmMovingDown(copy) {

    var jm_All_Up = 0+"%";
    var jm_FullBleed = -2.5+"%";
    var jm_TwoOdd = -4+"%";
    var jm_FourSmall = -4+"%";
    var jm_FourBig = -2.5+"%";
    var jm_TwoEven = -3+"%";    
    
    var target = $(copy.currentTarget);
    var article = $(target.context.children[0]);
    var IdFound = article.attr('id');

    if( IdFound == "articleFullBleed") {    
        $(this).find("article").stop().animate({
            bottom: jm_FullBleed,
        }, 800, function() {
            // Animation complete.
        });
    }
    if( IdFound == "articleTwoOdd") {
        $(this).find("article").stop().animate({
            bottom: jm_TwoOdd,
        }, 800, function() {
            // Animation complete.
        });
    }
    if( IdFound == "articleFourSmall") {
        $(this).find("article").stop().animate({
            bottom: jm_FourSmall,
        }, 800, function() {
            // Animation complete.
        });
    }
    if( IdFound == "articleFourBig") {
        $(this).find("article").stop().animate({
            bottom: jm_FourBig,
        }, 800, function() {
            // Animation complete.
        });
    }
    if( IdFound == "articleTwoEven") {
        $(this).find("article").stop().animate({
            bottom: jm_TwoEven,
        }, 800, function() {
            // Animation complete.
        });
    }
    
}

function jmMovingUp(copy) {

    var jm_All_Up = 0+"%";
    var target = $(copy.currentTarget);
    var article = $(target.context.children[0]);
    var IdFound = article.attr('id');       

    if( IdFound == "articleFullBleed") {    
        $(this).find("article").stop().animate({
            bottom: jm_All_Up,
        }, 500, function() {
            // Animation complete.
        });
    }

    if( IdFound == "articleTwoOdd") {
        $(this).find("article").stop().animate({
            bottom: jm_All_Up,
        }, 500, function() {
            // Animation complete.
        });
    }
    
    if( IdFound == "articleFourSmall") {
        $(this).find("article").stop().animate({
            bottom: jm_All_Up,
        }, 500, function() {
            // Animation complete.
        });
    }

    if( IdFound == "articleFourBig") {
        $(this).find("article").stop().animate({
            bottom: jm_All_Up,
        }, 500, function() {
            // Animation complete.
        });
    }    

    if( IdFound == "articleTwoEven") {
        $(this).find("article").stop().animate({
            bottom: jm_All_Up,
        }, 500, function() {
            // Animation complete.
        });
    } 
}

}

//SMALL VIDEO FADING
    $(window).scroll(function(){
        var posFromTop = $(window).scrollTop();

        if(posFromTop > 888){
        // if more than 200px from the top do something
        $(".jm_fade").fadeOut(1000);
        } else {
        $(".jm_fade").fadeIn(1600);
        }
    });
    $("#jm-toVideo").click(function() {
        $('html, body').animate({
            scrollTop: $(".video-content-block").offset().top
        }, 2000);
    });


// VIDEO TO PLAY

var jmplayer2;

// API CALL
function onYouTubePlayerAPIReady() {
  jmplayer2 = new YT.Player('jm-W20-video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
  // bind events
  var playButton = document.getElementById("jm-toVideo");
    playButton.addEventListener("click", function() {
    jmplayer2.playVideo();
  });
    
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);