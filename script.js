let position2 = document.querySelector('.position2')
let svg1 = document.querySelector(".svgmain1")
let svg2 = document.querySelector(".svgmain2")
let svg3 = document.querySelector(".svgmain3")
let svg4 = document.querySelector(".svgmain4")
let svgother1 = document.querySelector(".svgother1")
let svgother2 = document.querySelector(".svgother2")
position2.addEventListener("click", ()=>{
svg1.style.display = "block"
svg2.style.display = "block"
svg3.style.display = "block"
svg4.style.display = "block"
svgother1.style.display = "block"
svgother2.style.display = "block"
position2.style.boxShadow = "1px 1px 10px 10px green"
})