document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin)
    gsap.from(".wrap2 .content .contents", {
        x:300,
        opacity:0,
        delay: 1,
        duration:1.5
    }) 
    gsap.fromto(".wrap2 h1",
        {
            opacity:0,
            delay:0.5
        },
        {
            opacity: 1
        }
    )
    gsap.fromto(".wrap4 h1",
        {
            opacity:0,
            delay:0.5
        },
        {
            opacity: 1
        }
    )
    
});