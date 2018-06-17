<?php
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,"https://data.cityofnewyork.us/resource/5scm-b38n.json");
	$result = curl_exec($ch);
	curl_close($ch);
	
	echo json_encode(json_decode($result));
	
?>