const optionEl = document.querySelectorAll('.option')
const textBoxEl = document.querySelector('.textBox') //input
const dropdownEl = document.querySelector('.dropdown')
const selectEl = document.querySelector('.select')
const optionsEl = document.querySelector('.options')
const isInStock = document.querySelectorAll('.is-in-stock')
const infoEls = document.querySelector('.info')
const sizeEl = document.querySelectorAll('.size')

selectEl.onclick = () => {
    dropdownEl.classList.toggle("active")
}

optionEl.forEach((el) => {
    el.addEventListener("click", () => {
        textBoxEl.value = el.firstElementChild.firstElementChild.textContent;
        dropdownEl.classList.remove("active");
        optionEl.forEach((el) => {
            el.classList.remove("selected");
        });
        el.classList.add("selected")
    })
})

