function fnOpenProfile(){$(".wdw").removeClass("open"),$(".wdw-profile").addClass("open"),$("nav.main").removeClass("nav-small")}function fnOpenLogin(){$(".wdw").removeClass("open"),$(".wdw-login").addClass("open"),$("nav.main").removeClass("nav-small"),$(".wdw-login .image-half-width").addClass("animated slideInLeft")}function fnOpenRegister(){$(".wdw").removeClass("open"),$(".wdw-register").addClass("open"),$("nav.main").removeClass("nav-small")}function fnOpenResults(){$(".wdw").removeClass("open"),$(".wdw-loading").addClass("open"),setTimeout(function(){$(".wdw-loading").removeClass("open")},1500),$(".wdw-results").addClass("open"),$("nav.main").removeClass("nav-small")}function fnOpenBooking(){$(".wdw").removeClass("open"),$(".wdw-booking").addClass("open"),$("nav.main").removeClass("nav-small")}function fnOpenConfirmation(){$(".wdw").removeClass("open"),$(".wdw-confirmation").addClass("open"),$("nav.main").removeClass("nav-small")}function fnCheckInputEmpty(){$(".floating-label").each(function(){var n=$(this).val().length>0;n||is_chrome&&(n=$(":-webkit-autofill",this).length>0),n&&$(this).siblings("label").addClass("active")})}function fnMenuEffectScroll(n){$(n).scrollTop()>windowHeight/10?$("nav.main").addClass("nav-small"):$("nav.main").removeClass("nav-small")}function createEvent(n,e,o,a,t){var i="<div class='card card-1 single-event'>        <div class='event-image'>            <img src='dist/images/"+n+"'>        </div>        <div class='event-text'>        <p class='event-date'>"+e+"</p>        <p class='event-place'>"+o+"</p>        <p class='event-title'>"+a+"</p>        <p class='event-description'>"+t+"</p>        </div>    </div>";$(i).hide().appendTo("#event-container").fadeIn(250),eventNumber++}function eventLoader(){function n(){return createEvent("img1.jpg","23.04.2017","Rebaek Sopark 5","DormNerd","Become a dorm nerd, learn how to cope with your issues and party like a crazy person")}for(var e=1;e<=3;e++)setTimeout(n,500*e)}var populated=!1;$(document).on("click",".btn-wdw",function(){$(".wdw").removeClass("open");var n=this.id;$("."+n).addClass("open"),$("."+n+" .image-half-width").addClass("animated slideInLeft"),populated||"wdw-home"==n&&(eventLoader(),populated=!0)}),$(document).on("click",".btn-wdw-profile",function(){fnOpenProfile()}),$(document).on("click",".btn-wdw-login",function(){fnOpenLogin()}),$(document).on("click",".btn-wdw-register",function(){fnOpenRegister()}),$(document).on("click",".btn-wdw-results",function(){fnOpenResults()}),$(document).on("click",".btn-wdw-booking",function(){console.log("open booking"),fnOpenBooking()}),$(document).on("click",".btw-wdw-confirmation",function(){fnOpenConfirmation()}),$(document).on("click",".btn-close",function(){for(var n=this.parentNode.classList,e=0;e<n.length;e++)if(n[e].match("^wdw-")){var o=n[e];n[e].match("^wdw-example-")&&$(".wdw-template").addClass("open")}$("."+o).removeClass("open")}),$(document).on("click",".floating-label",function(){$(this).siblings("label").addClass("active")});var is_chrome=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;fnCheckInputEmpty(),setInterval(fnCheckInputEmpty,1e3),$("input.floating-label").blur(function(){$(this).val()?$(this).siblings("label").addClass("active"):$(this).siblings("label").removeClass("active")});var windowHeight=$(window).height();$(document).on("scroll",function(){fnMenuEffectScroll(this)}).on("resize",function(){windowHeight=$(this).height()}),$(".wdw").on("scroll",function(){fnMenuEffectScroll(this)}),$(document).on("click","a",function(n){var e=$(this).attr("data-smooth-scroll");this.blur(),void 0!==e&&!1!==e&&(n.preventDefault(),$(".wdw.open").animate({scrollTop:$($.attr(this,"href")).offset().top-100},500),console.log("animating window"))}),$(document).on("click",".btn-home",function(){$(".wdw").removeClass("open"),$(".wdw-flight").addClass("open"),$("nav.main").removeClass("nav-small")}),$(document).on("click",".btn-menu",function(){$(".menu").css("display","flex")}),$(document).on("click",".menu-item",function(){$(".menu").hide()}),$(document).on("click",".btn-close-menu",function(){$(".menu").hide()});var eventNumber=1;
//# sourceMappingURL=main.js.map
