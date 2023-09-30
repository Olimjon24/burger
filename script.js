let navBtn = document.querySelector('.burger')
let navList = document.querySelector('.list')

navBtn.addEventListener('click', btn)
function btn() {
    this.classList.toggle('burger__active')
    if (navBtn.classList.contains('burger__active')) {
        navList.classList.add('active')
    } else if (!navBtn.classList.contains('burger__active')) {
        navList.classList.remove('active')
    }
}

