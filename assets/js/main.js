document.addEventListener("DOMContentLoaded", (event) => {
	var lastScrollTop;
	navbar = document.getElementById('primary-nav');
	window.addEventListener('scroll',function(){
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if(scrollTop > lastScrollTop){
	navbar.style.top='-80px';
	}
	else{
	navbar.style.top='0';
	}
	lastScrollTop = scrollTop;
	});
});
