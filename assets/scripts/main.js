/********************************************************************************

 TABLE OF CONTENTS

 WINDOW
 Open window
 Close window
 FLOATING LABEL
 SCROLL FUNCTIONS
 ONCLICK

 ********************************************************************************/


/********************************************************************************

 WINDOW

 ********************************************************************************/


/********************************************************************************
 Global Vars
 ********************************************************************************/

var populated = false;


/********************************************************************************
 Open window
 ********************************************************************************/
$(document).on('click', '.btn-wdw', function(){

    //set all windows to close
    $('.wdw').removeClass('open');


    //open the target window
    var wdwClassToOpen = this.id; //get the id
    console.log(wdwClassToOpen);
    var wdwSelector = $('.'+wdwClassToOpen);
    //open matching window
    wdwSelector.addClass('open');

    //if there is a halfwidth image, animate it
    $('.'+wdwClassToOpen + ' .image-half-width').addClass('animated slideInLeft');
    if (!populated){
        if ( wdwClassToOpen == "wdw-home"){
                eventLoader();  
                populated = true;
        }
    }
});


/********************************************************************************
 Open profile
 ********************************************************************************/

$(document).on('click', '.btn-wdw-profile', function(){
    fnOpenProfile();
});

function fnOpenProfile() {
    $('.wdw').removeClass('open');
    $('.wdw-profile').addClass('open');
    $('nav.main').removeClass("nav-small");
}

/********************************************************************************
 Open login
 ********************************************************************************/

$(document).on('click', '.btn-wdw-login', function(){
    fnOpenLogin();
});

function fnOpenLogin() {
    $('.wdw').removeClass('open');
    $('.wdw-login').addClass('open');
    $('nav.main').removeClass("nav-small");
    $('.wdw-login .image-half-width').addClass('animated slideInLeft');
}

/********************************************************************************
 Open register
 ********************************************************************************/

$(document).on('click', '.btn-wdw-register', function(){
    fnOpenRegister();
});

function fnOpenRegister() {
    $('.wdw').removeClass('open');
    $('.wdw-register').addClass('open');
    $('nav.main').removeClass("nav-small");
}

/********************************************************************************
 Open results
 ********************************************************************************/
$(document).on('click', '.btn-wdw-results', function(){
    fnOpenResults();
});

function fnOpenResults() {
    $('.wdw').removeClass('open');
    $('.wdw-loading').addClass('open');
    setTimeout(function(){
        $('.wdw-loading').removeClass('open');
    },1500);
    $('.wdw-results').addClass('open');
    $('nav.main').removeClass("nav-small");
}

/********************************************************************************
 Open booking
 ********************************************************************************/
$(document).on('click', '.btn-wdw-booking', function(){
    console.log("open booking");
    fnOpenBooking();
});

function fnOpenBooking() {
    $('.wdw').removeClass('open');
    $('.wdw-booking').addClass('open');
    $('nav.main').removeClass("nav-small");
}

/********************************************************************************
 Open confirmation
 ********************************************************************************/
$(document).on('click', '.btw-wdw-confirmation', function(){
    fnOpenConfirmation();

});

function fnOpenConfirmation() {
    $('.wdw').removeClass('open');
    $('.wdw-confirmation').addClass('open');
    $('nav.main').removeClass("nav-small");
}

/********************************************************************************
 Close window
 ********************************************************************************/

$(document).on('click', '.btn-close', function(){
    //get the parent class which is not wdw
    var wdwClassList = this.parentNode.classList;

    for(var i = 0; i < wdwClassList.length; i++){
        if (wdwClassList[i].match("^wdw-")) { // class begins with wdw-
            var wdwClassToClose = wdwClassList[i]; //save this class


            if (wdwClassList[i].match("^wdw-example-")) {
                $('.wdw-template').addClass('open');
            }

        }
    }

    //close wdw with matching class
    $('.'+wdwClassToClose).removeClass('open');
});

/********************************************************************************

 FLOATING LABEL

 ********************************************************************************/
//add active class to label on focus of input
$(document).on('click', '.floating-label', function(){
    $( this ).siblings( "label" ).addClass('active');
});

/* FORM LABELS FLOAT WHEN INPUT != EMPTY */
//check once immediately, then setInterval
var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

function fnCheckInputEmpty() {
    var sAllLabels = $(".floating-label");
    //loop through every element with class .floating-label
    sAllLabels.each(function() {
        var hasValue = $(this).val().length > 0;//Normal
        if(!hasValue){
            if(is_chrome)
            {
                hasValue = $(":-webkit-autofill", this).length > 0;//Chrome
            }

        }
        if (hasValue) {
            $(this).siblings( "label" ).addClass('active');
        }
    });
}

fnCheckInputEmpty();
setInterval(fnCheckInputEmpty, 1000);

$('input.floating-label').blur(function()
{
    if( !$(this).val() ) {
        $(this).siblings( "label" ).removeClass('active');
    }else{
        $(this).siblings( "label" ).addClass('active');
    }
});

/********************************************************************************

 SCROLL FUNCTIONS

 ********************************************************************************/

var windowHeight = $(window).height();   // Get the window height.

$(document).on("scroll", function () { // Do this on scroll in .wdw
    fnMenuEffectScroll(this);

}).on("resize", function(){ // If the user resizes the window
    windowHeight = $(this).height(); // you'll need the new height value
});

$('.wdw').on("scroll", function () { // Do this on scroll in .wdw
    fnMenuEffectScroll(this);
});


function fnMenuEffectScroll(that) {
    if ($(that).scrollTop() > (windowHeight/10) ) {
        $('nav.main').addClass("nav-small");
    } else {
        $('nav.main').removeClass("nav-small");
    }
}


/********************************************************************************
 Smooth scrolling
 ********************************************************************************/

$(document).on('click', 'a', function(event){
    var attr = $(this).attr('data-smooth-scroll');
    this.blur();

// For some browsers, `attr` is undefined; for others,
// `attr` is false.  Check for both.
    if (typeof attr !== typeof undefined && attr !== false) {
        event.preventDefault();

        $('.wdw.open').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top-100
        }, 500);
        console.log("animating window");

    }
});



/********************************************************************************

 ON CLICK

 ********************************************************************************/

$(document).on('click', '.btn-home', function(){
    //close all windows
    $('.wdw').removeClass('open');
    $('.wdw-home').addClass('open');
    $('nav.main').removeClass("nav-small");
});

$(document).on('click', '.btn-menu', function(){
    $('.menu').css('display','flex');
});

$(document).on('click', '.menu-item', function(){
    $('.menu').hide();
});
$(document).on('click', '.btn-close-menu', function(){
    $('.menu').hide();
});

//fold out always closed by default
var menuClose = true;

$(document).on('mouseenter', '.menu-fold-out-list', function(){
    $('.menu-list').show();
});
$(document).on('mouseover', '.menu-list', function(){
    $('.menu-list').show();
    menuClose=false;
});

$(document).on('mouseleave', '.menu-fold-out-list', function(){
  setTimeout(function(){
      if(menuClose===true){
         $('.menu-list').fadeOut();
      }
  },200);

});
$(document).on('mouseleave', '.menu-list', function(){
    menuClose=true;
});


$(document).on('click', '#btn-events', function(){
    if(!populated){
                eventLoader();  
                populated = true;
    }
});


//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               Buddha bless the code
//



/********************************************************************************

 Populate Events

 ********************************************************************************/

var eventNumber = 1;

function createEvent(image, date, place, title, description){
    var build="<div class='card card-1 single-event'>\
        <div class='event-image'>\
            <img src='dist/images/"+image+"'>\
        </div>\
        <div class='event-text'>\
        <p class='event-date'>"+date+"</p>\
        <p class='event-place'>"+place+"</p>\
        <p class='event-title'>"+title+"</p>\
        <p class='event-description'>"+description+"</p>\
        </div>\
    </div>";
$(build).hide().appendTo("#event-container").fadeIn(250);
eventNumber++;
}




function eventLoader(){

    var displaySpeed = 500;

    function basicEvent(){
        
    if(eventNumber==1){
        return createEvent("img1.jpg", "23.04.2017", "Rebaek Sopark 5", 
        "DormNerd", "Become a dorm nerd, learn how to cope with your issues and party like a crazy person");
    }
    else if(eventNumber==2){
        return createEvent("img4.jpg", "15.05.2017", "Esromgade 15",
         "React on Web", "Monthly meetup in the cosiest district of Copenhagen. ReactJS.");
    }
    else if(eventNumber==3){
        return createEvent("img5.jpg", "31.05.2017", "Rainmaking Loft",
         "UX today", "Users bring you revenue, so why not follow those laws to enhance your website ?  ");
    }
    else if(eventNumber==4){
        return createEvent("img6.jpg", "27.07.2017", "NorrebroGade",
         "Flat Design", "The future is today, with a lot of help from this fantastic style.");
    }
    else if(eventNumber==5){
        return createEvent("img7.jpg", "05.08.2017", "Peter Bangs Vej 5",
         "HomeBrew", "Tutorials can make the difference ! Learn everything from home with our app.");
    }
    else if(eventNumber==6){
        return createEvent("img8.jpg", "22.08.2017", "Lygten 37",
         "Life after 12", "The story of a student who passedd all the exams with 12s.");
    }
};


    for(var i=1;i<=6;i++){
        setTimeout(basicEvent,displaySpeed*i);
    }
}
