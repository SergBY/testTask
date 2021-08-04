"use strict";

window.onload = function () {
	var btn = document.getElementById('scroll');
	var body = document.getElementById('body');

	function handleButtonClick() {
		body.scrollIntoView({
			behavior: "smooth"
		});
	}
	btn.addEventListener('click', handleButtonClick);

	var burger = document.querySelector('.burger');
	var menuList = document.querySelector('.menu__list');

	burger.onclick = function () {
		menuList.classList.toggle('active');
		burger.classList.toggle('menu-on');
	};
};
