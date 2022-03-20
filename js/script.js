const iconMenu = document.querySelector(".menu__icon");
const menuList = document.querySelector(".menu__list");
const menuLink = document.querySelectorAll(".menu__links a");
const body = document.querySelector('body')
const btnClose = document.querySelector('.close')


iconMenu.addEventListener('click', function () {
	menuList.classList.toggle('open');
	body.classList.toggle('lock')
})

btnClose.addEventListener('click', closeMenu)

for (link of menuLink) {
	link.addEventListener('click', closeMenu)
}

function closeMenu() {
	menuList.classList.remove('open');
	body.classList.remove('lock')
}