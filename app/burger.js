"use strict";

window.onload = function () {

  var burger = document.querySelector('.burger');
	var menuList = document.querySelector('.menu__list');

	burger.onclick = function () {
		menuList.classList.toggle('active');
		burger.classList.toggle('menu-on');
	};
};