// Animation 1
// function breakTheText() {


//     var h1 = document.querySelector("h1");
//     var h1Text = h1.textContent;

//     // split on the basis of gap 
//     // var splittedText = h1Text.split(" ")

//     // split on the basis of nothing
//     var splittedText = h1Text.split("")

//     var clutter = ""

//     splittedText.forEach(function (elem,idx) {
//         clutter += `<span>${elem}</span>`
//     })

//     h1.innerHTML = clutter;
// }

// breakTheText();

// gsap.from("h1 span", {
//     y:70,
//     duration:0.8,
//     opacity:0,
//     delay:0.5,
//     stagger:-0.15,
// })

// Animation 2 
function breakTheText() {


    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;

    // split on the basis of gap 
    // var splittedText = h1Text.split(" ")

    // split on the basis of nothing
    var splittedText = h1Text.split("")

    var halfValue = splittedText.length / 2

    var clutter = ""

    splittedText.forEach(function (elem, idx) {

        if (idx < halfValue) {
            clutter += `<span class="a">${elem}</span>`
        } else {
            clutter += `<span class="b">${elem}</span>`

        }
    })

    h1.innerHTML = clutter;

}

breakTheText()

gsap.from(".a", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15,
    opacity:0
})
gsap.from(".b",{
    y: 50,
    duration: 0.6,
    delay: 0.5,
    stagger:-0.15,
    opacity:0
})