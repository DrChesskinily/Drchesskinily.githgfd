	// .bots, .sections{
	// 	display:none;
	// }
	// .menu, .menu-1, .menu-2, .menu-3, .menu-4{
	// 	display:initial;
	// }
	// .menu:hover .menu-1{
	// 	top:70px;
	// }
	// .menu:hover .menu-2{
	// 	top:130px;
	// }
	// .menu:hover .menu-3{
	// 	top:190px;
	// }

let button = document.querySelector(".menu4")
let menu = document.querySelector(".menu")
let menu1 =document.querySelector(".menu-1")
let menu2=document.querySelector(".menu-2")
let menu3=document.querySelector(".menu-3")
let menu5=document.querySelector(".menu-5")


console.log(menu1)

function displayMenu(){
	if (menu1.id == "active"){
		menu1.style.top="1px"
		menu2.style.top="1px"
		menu3.style.top="1px"
		menu5.style.top="1px"
		menu1.id=""
	}
	else{
		menu1.id ="active"
		menu1.style.top="70px"
		menu2.style.top="130px"
		menu3.style.top="190px"
		menu5.style.top="250px"
		
	}
}