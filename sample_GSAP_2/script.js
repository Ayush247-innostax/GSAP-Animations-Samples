gsap.from("#page1 .box", {
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: 360,
})
gsap.from("#page2 .box", {
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page2 .box",
        scroller: "body"
    }
})

gsap.from("#page2 h1", {
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 10%",
        scrub: true,
    }
})

gsap.to("#page4 h1", {
    transform: "translate(-150%)",
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub:2,
        pin: true,
    }

})



