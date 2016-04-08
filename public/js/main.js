$(document).ready(function(){
	$(".preview").addClass("trans");

	$.getJSON("http://api.vgee.cn/mylocation",function(json){
		var loca=json.data;
		var locations=loca.location;
		$(".loca").after('<p>'+locations.city+'</p>');
	})

	var d=new Date();
	
	var vMon=d.getMonth()+1;
	var vDay=d.getDate();
	var h= d.getHours(); 
	var m= d.getMinutes(); 
	
	if (m<10) {
		m='0'+m;
	};
	$(".time").after('<p>'+vMon+'/'+vDay+'&nbsp&nbsp'+h+':'+m+'</p>');


	$('.send').click(function(){
		$.ajax({
			type: "POST",
			url:  "/models/message",
			contentType: "application/Json",
			data: JSON.stringify({ 
				message : $("#message").val(),
				name: "ly"
			 }),
			success: function(data,textAtatus){
			console.log(data.Message);
		}});

		return false;
	});
});