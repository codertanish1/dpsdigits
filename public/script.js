document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin)
    gsap.from("h1 .a1", {
        y: 50, 
        opacity: 0,
        duration: 0.8,
        delay: 0.7, 
        stagger: 0.4
    })    
    gsap.from("h1 .a2", {
        y: 50, 
        opacity: 0,
        duration: 1,
        delay: 0.7, 
        stagger: 0.4
    })    
    gsap.from("h2 .a1", {
        y: 50, 
        opacity: 0,
        duration: 0.8,
        delay: 1.5, 
        stagger: 0.4
    })    
    gsap.from("h2 .a2", {
        y: 50, 
        opacity: 0,
        duration: 1,
        delay: 1.5, 
        stagger: -0.4
    })
    var menu = document.querySelector(".menu")
    var close = document.querySelector(".cross")
    document.addEventListener(
        "mousemove", function (e) {
            gsap.to(".cursor", {x:e.x, y:e.y, duration:0.1, ease: "elastic.inOut"})
            
        }
    )    
    var navtl = gsap.timeline()
    navtl.to(".navbar", {
        right: 0, 
        duration: 0.8
    })
    navtl.from(".navbar li", {
        x:200,
        opacity: 0, 
        duration: 0.8,
        stagger: 0.4
    })
    navtl.pause()

    menu.addEventListener(
        "click", function () {
            navtl.play()            
        }
    )
    close.addEventListener(
        "click", function () {
            navtl.reverse()            
        }
    )

    gsap.from(".wrap2 h1", {
        opacity:0,
        y: 50
    })
    gsap.from(".wrap3 h1", {
        opacity:0,
        y: 50,
        scrollTrigger:{
            scroller: "body",
            trigger: ".wrap3",
            scrub: true
        }
    })
    gsap.from(".wrap4 h1", {
        opacity:0,
        y: 50,
        scrollTrigger:{
            scroller: "body",
            trigger: ".wrap4",
            scrub: true
        }
    })
    gsap.from(".wrap5 h1", {
        opacity:0,
        y: 50,
        scrollTrigger:{
            scroller: "body",
            trigger: ".wrap5",
            scrub: true
        }
    })
      
    let slides = document.querySelector(".slides");  
    let slideIndex = 0;  
  
    function showSlide(index) {  
        slides.style.transform = `translateX(-${index * 100}%)`;  
    }  
  
    function nextSlide() {  
        slideIndex = (slideIndex + 1) % slides.children.length;  
        showSlide(slideIndex);  
    }  
  
    setInterval(nextSlide, 3000); // Change slide every 3 seconds  
});