<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<title>Insert title here</title>
	</head>
	<body>
	
		<div id="container">
			<p>My view has been loaded</p>
			<p><?php echo $Myvalue;?></p>
			<p><?php echo $Myvalue2;?></p>
			
			<p><?php  foreach ($records as $row):?>
				<h1><?php echo $row->title; ?></h1>
			<?php endforeach;?></p>
		</div>
	
	</body>
</html>