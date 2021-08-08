'use strict';
var app = angular.module("testTask", []);

app.controller('productsCtrl', ['$scope', function ($scope) {
	
	$scope.data = {
		"items": [
		{
			"type" : "Child",
			"img" : "item1",
			"price" : "3.20",
			"name" : "T-SHIRT",
			"options": ["Size", "S", "M", "L", "XL"]
		}
		,{
			"type" : "Child",
			"img" : "item2",
			"price" : "13.30",
			"name" : "Pants FORCLAZ",
			"options": ["Size", "M", "XL"]
		}
		,{
			"type" : "Men",
			"img" : "item1",
			"price" : "5.00",
			"name" : "T-SHIRT",
			"options": ["Size", "XL"]
		}
		,{
			"type" : "Women",
			"img" : "item2",
			"price" : "3.21",
			"name" : "T-SHIRT",
			"options":  ["Size", "S", "M", "L", "XL"]
		}
		,{
			"type" : "Women",
			"img" : "item3",
			"price" : "31",
			"name" : "backpack",
			"options": ["color", "red", "blue", "black"]
		}
		, {
			"type" : "Other",
			"img" : "item3",
			"price" : "0",
			"name" : "car",
			"options": ["color", "red", "blue", "black"]
		}
  	]
	};

	$scope.showCategory = {
			"men" : true,
			"women" : true,
			"child": false
	};
	
	$scope.changeFilter  = function (obj) {
		return !$scope.showCategory[obj];
	};

	$scope.resetFilter  = function () {
		for (var i in $scope.showCategory) {		
			$scope.showCategory[i] = false; 
		}
	};

	$scope.dropdown = function (i) {
		const selectSingle = document.querySelectorAll('.select');
		const selectSingle_title = selectSingle[i].querySelector('.select__title');
		const selectSingle_labels = selectSingle[i].querySelectorAll('.select__label');

		function handleClick() {
			if (selectSingle[i].getAttribute('data-state') === 'active') {
				selectSingle[i].setAttribute('data-state', '');
			} else {
				selectSingle[i].setAttribute('data-state', 'active');
			}
			for (let j = 0; j < selectSingle.length; j++) {
				if (j !== i) {
					selectSingle[j].setAttribute('data-state', '');
				}
			}
		}
		handleClick();

		for (let k = 0; k < selectSingle_labels.length; k++) {
			selectSingle_labels[k].addEventListener('click', (evt) => {
				selectSingle_title.textContent = evt.target.textContent;
				selectSingle[i].setAttribute('data-state', '');
			});
		}
	};
}]);


app.controller('menuCtrl', ['$scope', function ($scope) {
	
	$scope.data = {
		"footerMenu" : [
			{
				"name": "Credits",
				"link": "https://softswiss.com/",
				"title": "credits"
			},
			{
				"name": "Privacy",
				"link": "https://softswiss.com/",
				"title": "privacy"
			},
			{
				"name": "About",
				"link": "https://www.softswiss.com/about-us/",
				"title": "about us"
			},
			{
				"name": "Contact",
				"link": "https://www.softswiss.com/contact-us/",
				"title": "contact us"
			}
		]};

}]);


app.filter('myfilter', function () {
	return function (items, val) {
		let filtered = [];

		angular.forEach(items, function (item) {
			if (val.men == false && val.women == false && val.child == false) {
				filtered.push(item);
			} else if (val.men == true && item.type == 'Men') {
				filtered.push(item);
			} else if (val.women == true && item.type == 'Women') {
				filtered.push(item);
			} else if (val.child == true && item.type == 'Child') {
				filtered.push(item);
			}
		});

		return filtered;
	};
});
