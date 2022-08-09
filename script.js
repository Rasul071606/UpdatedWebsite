const toTopBtn = document.querySelector("#back-to-top-btn");
document.getElementById("back-to-top-btn").style.zIndex = "1";

const bigdiv2 = document.getElementById("big_div2")
// const nightMode = document.getElementsByClassName("nightmode")

let nightModeBtn = document.getElementById("nightmode2")
let aboutMeBtn = document.getElementById("about_me_button")

let lightModeBtn = document.getElementById("lightmode")

let text = document.querySelector("h1")

let projectBtn = document.getElementById("big_div3")



nightModeBtn.onclick = function(event){
    event.preventDefault();
    bigdiv2.style.backgroundColor = "rgb(45,81,93)"
    aboutMeBtn.style.backgroundColor = "rgb(165, 81, 76)"
    document.body.style.backgroundColor = "rgb(30,30,30)"
    text.style.color = "white"
    nightModeBtn.style.backgroundColor = "rgb(30,30,30)"
    lightModeBtn.style.backgroundColor = "rgb(30,30,30)"
    
}

lightModeBtn.onclick = function(event){
    event.preventDefault();
    bigdiv2.style.backgroundColor = "#007ea7"
    aboutMeBtn.style.backgroundColor = "#eb5e55"
    document.body.style.backgroundColor = "#fefefa"
    text.style.color = "black"
    lightModeBtn.style.backgroundColor = "#fefefa"
    nightModeBtn.style.backgroundColor = "#fefefa"
}



window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if(window.pageYOffset>300){
        toTopBtn.style.display = "block"
    }
    else{
        toTopBtn.style.display = "none"
    }

    if(window.pageYOffset<230){
        nightModeBtn.style.display = "block"
        lightModeBtn.style.display = "block"
    }
    else{
        nightModeBtn.style.display = "none"
        lightModeBtn.style.display = "none"
    }
}


toTopBtn.onclick = function(event){
    event.preventDefault();
    window.scrollTo(0,0);
}


// nightMode.onclick = function(event){
//     // event.preventDefault();
//     bigdiv2.style.backgroundColor = rgb(45,81,93)
//     console.log("hello")
// }