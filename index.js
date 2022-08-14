const optionEl = document.querySelectorAll('.option')
const textBoxEl = document.querySelector('.textBox') //input
let dropdownEl = document.querySelector('.dropdown')
const selectEl = document.querySelector('.select')
const optionsEl = document.querySelector('.options')

selectEl.onclick = () => {
    dropdownEl.classList.toggle("active")
}

optionEl.forEach((el) => {
    el.addEventListener("click", () => {
        textBoxEl.value = el.innerText;
        dropdownEl.classList.remove("active");
        optionEl.forEach((el) => {
            el.classList.remove("selected");
        });
        el.classList.add("selected")
    })
})

