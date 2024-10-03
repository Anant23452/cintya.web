console.log("hello")
// import LocomotiveScroll from 'locomotive-scroll';
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true
// });

function firstPageAnim(){
    var t1 = gsap.timeline();
    t1.from("#nav",{
        y: '-40',
        opacity:0,
        duration:1.1,
        ease:Expo.easeInOut
    })
    t1.to(".boundingelem",{
        y: 0,
        opaacity:0,
        duration:2,
        ease:Expo.easeInOut,
        delay:-1,
        stagger:.2
    })
    gsap.from("#herofooter",{
        y: 40,
        opaacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
        delay:-2,
        stagger:.2
    })

}
//Jab mouse ho raha ho ham log skew kar paye or maximum skew or minimum skew defind kar paye ,jab mousemove ho to chaptha ki value badhe or jab mouse chalna band ho jaye chapta karna band kar do 
function circleChaptaKaro(){
    //defind the scale value
    var xscale =1;
    var yscale =2;

    var xprev =0;
    var yprev =0;

    window.addEventListener("mousemove",function(dets){
        xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2,dets.clientY - yprev);
    
        xprev =dets.clientX;
        yprev =dets.clientY;
        

        circleMouseFollow(xscale,yscale);

    

    });
}
circleChaptaKaro();
function circleMouseFollow(){
    window.addEventListener("mousemove",function(dets){
       document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) `;
    })
}
circleMouseFollow();
firstPageAnim();
// jab mouse move ho to ye pata karo ki mouse kaha par HTMLDetailsElement,jiska maktlab hai mouse ki x or y positon ko pata karo ,ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise mouse tez chahiye waise rotation bhi tez ho jaye
document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diff = 0;

    elem.addEventListener("mousemove",function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diff = dets.clientX-rotate;
        rotate =dets.clientX;
     
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            left:dets.clientX,
            top:diff,
            rotate:gsap.utils.clamp(-20,20,diff)

        })
    })
    elem.addEventListener("mouseleave",function(dets){
        
     
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
          

        })
    })
})