let header = document.querySelector("header")
let h2 = document.querySelector("h2")
let part1 = document.querySelector(".part__1")

let modeSombre = function(){
    part1.classList.toggle("invert__1")
    h2.classList.toggle("invert__1")
    part1.classList.toggle("invert__0")
    h2.classList.toggle("invert__0")
}

header.addEventListener('click', modeSombre)