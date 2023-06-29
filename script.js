const hambBtn = document.querySelector('.hamb_body')
const nav = document.querySelector('.header_nav')
const item = document.querySelector('.hamb_item')

hambBtn.addEventListener('click', openMenu)

function openMenu() {
    nav.classList.toggle('active')
    document.body.classList.toggle('block')
    item.classList.toggle('open')

}