const optionEl = document.querySelectorAll('.option')
const textBoxEl = document.querySelector('.textBox')
const dropdownEl = document.querySelector('.dropdown')
const selectEl = document.querySelector('.select')
const optionsEl = document.querySelector('.options')
const infoEls = document.querySelectorAll('.info')
const btnEl = document.querySelector('.btn')

// let isAvailable

selectEl.onclick = () => {
    dropdownEl.classList.toggle("active")
}

optionEl.forEach((el) => {
    el.addEventListener("click", () => {
        textBoxEl.value = el.firstElementChild.firstElementChild.textContent;
        dropdownEl.classList.remove("active")
        optionEl.forEach((el) => {
            el.classList.remove("selected")
        });
        el.classList.add("selected")
    })
})

// infoEls.forEach((item) => {
//     if(!isAvailable) {
//         item.classList.remove("is-in-stock")
//         item.textContent = ''
//         item.classList.add("not-in-stock")
//         item.textContent = "Notify Me"
//     } else {
//         item.classList.add("is-in-stock")
//         item.textContent = "In Stock"
//     }
// })

btnEl.addEventListener('click', () => console.log("clicked"))

