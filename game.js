const score = document.querySelector(".score")
const manat = document.querySelector(".manat")
const button = document.querySelector("button")
const moneys = [1, 5, 10, 20, 50, 100]
let value = 0
let upgrade = 0
manat.innerHTML = ` 
<img src="./1.jpg" alt="">
`
manat.addEventListener("click", () => {
    value = value + moneys[upgrade];
    score.innerHTML = `
    Income : ${value}
    `
})

button.addEventListener("click", () => {
    upgrade = upgrade + 1;
    manat.innerHTML = ` 
    <img src="./${moneys[upgrade]}.jpg" alt="">
    `

})