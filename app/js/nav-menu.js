const $menu = document.getElementById("menu");
const $nav = document.getElementById("ham-nav");


function onClickMenu(){
	$menu.classList.toggle("change");
	$nav.classList.toggle("change");
}