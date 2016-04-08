$(document).ready(function(){
	$(".preview").addClass("trans");
var locations
	$.getJSON("http://api.vgee.cn/mylocation",function(json){
		var loca=json.data;
		locations=loca.location;
		
	})

	var d=new Date();
	
	var vMon=d.getMonth()+1;
	var vDay=d.getDate();
	var h= d.getHours(); 
	var m= d.getMinutes(); 
	
	if (m<10) {
		m='0'+m;
	};
	
	$('.sen').click(function(){
		$('.preview').addClass("hide");
		$('.edit').removeClass("hide");
		$('.sen').addClass("hide");
	});

	$('.send').click(function(){
		$.ajax({
			type: "POST",
			url:  "/models/message",
			contentType: "application/Json",
			data: JSON.stringify({ 
				message : $("#message").val(),
				name: "ly",
				vMon: vMon,
				vDay: vDay,
				h: h,
				m: m,
				city: locations.city
			 }),
			success: function(data,textAtatus){
			console.log(data.Message);
		}});

		return false;
	});
});