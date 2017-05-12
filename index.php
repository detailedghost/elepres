<!DOCTYPE html lang='en'>
<html>
<head>
	<title>Presentation</title>
	<meta encoding='UTF-8'>
	<link type='text/css' rel='stylesheet' href='css/main.css'>
	<script type='text/javascript' src='js/nav.js'></script>
	<script type='text/javascript' src='js/slide.js'></script>
</head>
<body>
<?php
	include('header.php');
?>
<div id='slide-con'>
<?php
	$num = count(scandir("./slide")) - 2;
	for($i = 0; $i < $num; $i++){
		$loc = "./slide/".$i.".html";
		if(file_exists($loc)){
			$f = fopen($loc, "r");
			$r = fread($f, filesize($loc));
			if($i == 0)
				echo "<div data-name='".$i."' class='slide center'>".$r."</div>";
			else
				echo "<div data-name='".$i."' class='slide hide'>".$r."</div>";
		}
	}
?>
</div>
<?php
	include('footer.php');
?>
</body>
</html>
