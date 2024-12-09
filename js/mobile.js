// Add this in your existing script.js or in a <script> block at the bottom of index.html
document.addEventListener("DOMContentLoaded", function () {
    if (document.title === "Gallery - Mustache Enthusiast") {
        const bodyElement = document.querySelector("#body");
        const welcomeMessage = document.createElement("h2");
        welcomeMessage.textContent = "Welcome to the Mustache Enthusiast Gallery!";
        welcomeMessage.style.color = "#4CAF50";
        bodyElement.prepend(welcomeMessage);
    }
});


window.onload = function(){

	var getNavi = document.getElementById('navigation');

	var mobile = document.createElement("span");
	mobile.setAttribute("id","mobile-navigation");
	getNavi.parentNode.insertBefore(mobile,getNavi);

	document.getElementById('mobile-navigation').onclick = function(){
		var a = getNavi.getAttribute('style');
		if(a){
			getNavi.removeAttribute('style');
			document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile-menu.png)';
		} else {
			getNavi.style.display='block';
			document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile-close.png)';
		}
	};
	var getElm = getNavi.getElementsByTagName("LI");
	for(var i=0;i<getElm.length;i++){
		if(getElm[i].children.length>1){
			var smenu = document.createElement("span");
			smenu.setAttribute("class","mobile-submenu");
			smenu.setAttribute("OnClick","submenu("+i+")");
			getElm[i].appendChild(smenu);
		};
	};
	submenu = function (i){
		var sub = getElm[i].children[1];
		var b = sub.getAttribute('style');
		if(b){
			sub.removeAttribute('style');
			getElm[i].lastChild.style.backgroundImage='url(images/mobile-expand.png)';
			getElm[i].lastChild.style.backgroundColor='rgba(11, 163, 156, 0.7)';
		} else {
			sub.style.display='block';
			getElm[i].lastChild.style.backgroundImage='url(images/mobile-collapse.png)';
			getElm[i].lastChild.style.backgroundColor='rgba(0,0,0,0.8)';
		}
	};
};
