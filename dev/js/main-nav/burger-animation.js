var burgerAnimationTimeLine = gsap.timeline({paused:true});
var burgerAnimateSpeed = 0.25;

gsap.set(".lines",{transformOrigin:"center"});

burgerAnimationTimeLine.to("#top-line",{duration:burgerAnimateSpeed, rotation:45}, "burgerToX")
                        .to("#bottom-line",{duration:burgerAnimateSpeed, rotation:-45}, "burgerToX")
                        .to("#middle-line",{duration:burgerAnimateSpeed, alpha:0}, "burgerToX")
                        .to("#right-arrow",{duration:burgerAnimateSpeed, alpha:0, rotation:0}, "burgerToX")
                        .to("#left-arrow",{duration:burgerAnimateSpeed, alpha:0, rotation:0}, "burgerToX");


function animateBurger(){
    if(canYouSeeTheMenu === true){
        burgerAnimationTimeLine.play();
    }else{
        burgerAnimationTimeLine.reverse();
    }
}
