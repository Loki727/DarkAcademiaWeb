var menu = document.getElementById("bar");
var navv = document.getElementById("navbtn");

navv.style.right = '-300px';
menu.onclick = function(){

	if(navv.style.right == '-300px'){
		navv.style.right = '0';
	}else{
		navv.style.right = '-300px';
	}
}