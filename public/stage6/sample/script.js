'use strict';
// ボタンはサービスです。
// 自由に使ってください。
var element2 = document.querySelector('.js-training-playground');
var color = 'limegreen';
var temp = 'red';
element2.style.backgroundColor = color;
element2.addEventListener('click', function(){
	color = temp;
	temp = element2.style.backgroundColor;
	element2.style.backgroundColor = color;
});


var element = document.querySelector('.js-training-button');
// var element = document.querySelector('.button button-caution button-3d button-pill button-giant js-training-button');
// 	// var element = document.getElementById('firebrick');
// element.style.backgrounColor = 'black';
// // element.style.webkitTransform = 'rotate(10deg)';

var angle = 0;
element.addEventListener('click', function() {
	angle += 10;
	element.textContent = element.textContent + '!';
	element.style.webkitTransform = 'rotate(' + angle + 'deg)';
  });

// $('.button button-caution button-3d button-pill button-giant js-training-button').on('click', function(event){
// $('.js-training-button').on('click', function(event){
// 	var $target = $(event.target);
// 	$target.text('1');
//     $target.css('transform','rotate(10deg)');
// });
