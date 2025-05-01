function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach(function (elem) {

    //create two spans
    var parent = document.createElement("span");
    var child = document.createElement("span");


    //parent and child both set their respective classes
    parent.classList.add("parent");
    child.classList.add("child");

    //span parent gets child and child gets elem details

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    //elem replaces its value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);

});
}

function valueSetters(){
    gsap.set("#nav a", { y:"-100%", opacity: 0});
    gsap.set("#home span .child", {y:"100%"})
    gsap.set("#home .row img", { opacity : 0})

    document.querySelectorAll("#Visual>g").forEach(function (e) {
        var character = e.childNodes[1].childNodes[1];

        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })
}

function loaderAnimation(){
    

    var tl = gsap.timeline();
    tl
    .from("#loader .child span", {
        x: 100,
        duration: 1.3,
        stagger: 0.174,   
        ease: Power3.easeInOut
    })

    .to("#loader .parent .child", {
        y: "-100%",
        duration: 1,   
        ease: Circ.easeInOut
    })

    .to("#green", {
        height: "100%",
        top: 0,
        duration: 0.9,   
        delay: -0.5,
        ease: Power3.easeInOut
    })


    .to("#loader",{
        height:0,
        duration: 0.5,
        ease: Circ.easeInOut,
    })

    
    .to("#green", {
        height: 0,
        delay: -0.5,
        duration: 0.687,   
        ease: Power3.easeInOut,
        onComplete: function(){
            animateHomepage();
            
        }
    })

    


}

function animateSvg(){
    

    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
        strokeDashoffset: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay:0.3
    })
}

function animateHomepage(){
    

    var tl = gsap.timeline();

    tl
    .to("#nav a", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: Expo.easeInOut,
    })
    .to("#home .parent .child", {
        y: 0,
        stagger: 0.088,
        duration: 1.3,
        delay: -0.9,
        ease: Expo.easeInOut,
    })
    .to("#home .row img", {
        opacity: 1,
        duration: 0.8,
        delay: -0.8,
        ease: Expo.easeInOut,
        onComplete: function(){
            animateSvg();
        }
    })
}

revealToSpan();

valueSetters();

loaderAnimation();

