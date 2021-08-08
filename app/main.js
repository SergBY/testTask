"use strict";

window.onload = function () {
	const btn = document.getElementById('scroll');
	const position = document.getElementById('check');

	function handleButtonClick() {
		position.scrollIntoView({
			behavior: "smooth"
		});
	}
	btn.addEventListener('click', handleButtonClick);

	

	const burger = document.querySelector('.burger');
  const menuBurger = document.querySelector('.menu-burger');
	const menuList = document.querySelector('.menu__list');

	burger.onclick = function () {
		menuList.classList.toggle('active');
		menuBurger.classList.toggle('menu-on');
	};
};
