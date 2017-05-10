function slide(att){
		let cons = document.getElementById("slide-con").children;

		for(let i=0, ii=cons.length; i<ii; i++){
				let c = cons[i];
				c.classList = '';
				c.classList.add('slide');
				if(c.dataset["name"] == att)
						c.classList.add('center');
				else if(c.dataset["name"] == att -1)
					c.classList.add('left');
				else if(c.dataset["name"] == att + 1)
					c.classList.add('right');
				else
					c.classList.add('hide');
		}
}

function upSlide(){
    let counter = document.getElementById("nav-counter");
    let num = document.getElementById("slide-con").children.length;
    let sl = parseInt(counter.dataset["select"]);
    if(sl +1 < num){
    	slide(sl +1);
    	counter.innerHTML = sl+1;
    	counter.dataset["select"] = sl + 1;
    }
}
function downSlide(){
    let counter = document.getElementById("nav-counter");
    let sl = parseInt(counter.dataset["select"]);
    if(sl -1 > -1){
    	slide(sl -1);
    	counter.innerHTML = sl-1;
    	counter.dataset["select"] = sl-1;
    }
}


function init(){
        let links = document.getElementsByClassName('slide-item')
        let slides = document.getElementById('slide-con').children;

		document.getElementById('nav-left').addEventListener('click', downSlide, false);
		document.getElementById('nav-right').addEventListener('click',upSlide, false);
        
        for(let i=0, ii=links.length; i<ii;i++){
          let tar = links[i];
          tar.addEventListener('click', function(e){
		    let counter = document.getElementById("nav-counter");
            let sit = e.target.dataset["slidenum"];
            slide(sit);
            counter.innerHTML = sit;
			counter.dataset["select"] = sit;
          }, false);
          links[i].textContent = slides[i].children[0].textContent.substring(0, 15) + "...";
        }

        document.addEventListener('keydown', function(e){
          if(e.key === "ArrowDown" || e.key === "ArrowLeft")
            downSlide();
          if(e.key === "ArrowUp" || e.key == "ArrowRight")
            upSlide();
        }, false);
}

document.addEventListener('readystatechange', function(evt){
		if(document.readyState == 'complete'){
				init();
		}
}, false);
