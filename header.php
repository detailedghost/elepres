<nav id='nav-header' class='hide'>
	<ul>
		<?php
			foreach(scandir("slide") as $k => $v){
				$loc ="slide/".$v;
				if(file_exists($loc) && is_numeric($v[0]) ){
					echo "<li><a href='#' class='slide-item' data-slideNum='".$v[0]."'>Slide - ".$v[0]."</a></li>";
				}
			}
		?>
    </ul>
</nav>
	<button id='nav-sandwhich'>
		<hr />
		<hr />
		<hr />
	</button>
