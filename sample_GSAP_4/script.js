var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var ImageDiv = document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out"
    })

})

ImageDiv.addEventListener("mouseenter",function(dets){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"black",
    })
})

ImageDiv.addEventListener("mouseleave",function(dets){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white",
    })
})