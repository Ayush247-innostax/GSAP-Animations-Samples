// intial to final pos
gsap.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "yellow",
    borderRadius: "50%",
    scale: 0.5,
})

// final to intial pos
gsap.from("#box2", {
    x: 1000,
    // y: 500,
    duration: 2,
    delay: 1,
})

// targeting h1 element 
// gsap.from("h1", {
//     opacity: 0,
//     duration: 2,
//     y: 30,
//     delay: 1,
//     stagger: 0.5,
// })


// targeting box element 
gsap.to("#box", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "yellow",
    borderRadius: "50%",
    repeat: -1, /* to repeat infinite times in one direction */
    yoyo: true, /* to comeback*/
})


// targeting box3,4,5 element to do one after other
// 1) Traditional Method
gsap.to("#box3", {
    x: 1000,
    duration: 2,
    delay: 1,
})
gsap.to("#box4", {
    x: 1000,
    duration: 2,
    backgroundColor: "yellow",
    delay: 3 /* total of (duration + delay) of box3*/,
})
gsap.to("#box5", {
    x: 1000,
    duration: 2,
    scale: 0.5,
    borderRadius: "50%",
    delay: 5 /* total of (duration + delay) of box4*/,
})

// 2) Use of TIME LINE

var nav = gsap.timeline();

nav.from("h2", {
    y: -20,
    duration: 2,
    delay: 0.4,
    opacity: 0,
})
nav.from("li", {
    y: -20,
    duration: 2,
    stagger: 0.3,
    opacity: 0,
})

nav.from(".Welcome", {
    y: 20,
    duration: 2,
    opacity: 0,
    delay: 0.2,
    scale: 0.5,

})
