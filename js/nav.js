/// This file deals with the navigation on the left
function navInit(){
		let s = document.getElementById('nav-sandwhich');
		s.addEventListener('click', function(){
			let n = document.getElementById('nav-header');
				if(n.classList.contains('hide'))
					n.classList = '';
				else 
					n.classList.add('hide');
		}, false);
}
document.addEventListener('readystatechange', function(evt){
		if(document.readyState == 'complete'){
				navInit();
		}
}, false);

