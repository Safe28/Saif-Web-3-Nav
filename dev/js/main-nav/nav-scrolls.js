gsap.registerPlugin(ScrollToPlugin);
var scrollItems =["#index-insta", "#index-contact"];
console.log(scrollItems[2]);
function scrollIndex(){
    gsap.to(window, {duration: 2, scrollTo:{ y: scrollItems[$('#main-nav ul li button').index(this)], offsetY: 60}});
}