let header = document.querySelector("header")
let h2 = document.querySelector("h2")
let part1 = document.querySelector(".part__1")

let modeSombre = function(){
    part1.classList.toggle("invert")
    h2.classList.toggle("invert")
}

header.addEventListener('click', modeSombre)