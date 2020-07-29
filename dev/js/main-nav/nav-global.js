var canYouSeeTheMenu = false;
var navHeight = $("#main-nav").outerHeight();
gsap.set("#main-nav",{y: -navHeight})
var mainNavTimeline = gsap.timeline({paused:true})
mainNavTimeline.to("#main-nav",{duration:0.25, y:0})
console.log($("#main-nav").outerHeight() + " is the outer height of the #main-nav");
function hideShowMainNav(){
    if(canYouSeeTheMenu === false){
        console.log("show me the menu!");
        canYouSeeTheMenu = true;
        animateBurger();
        mainNavTimeline.play();
    }else{
        console.log("hide the menu!");
        canYouSeeTheMenu = false;
        animateBurger();
        mainNavTimeline.reverse();
    }
}
var menuBackground = document.querySelector('#main-nav');
window.onclick = function(event){
    if(event.target == menuBackground){
        hideShowMainNav();
    }
}