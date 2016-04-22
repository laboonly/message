	function getCookie(c_name)
	{
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=");
			if (c_start != -1) {
				c_start = c_start + c_name.length+1;
				c_end = document.cookie.indexOf(";", c_start);
				if (c_end == -1) {
					c_end = document.cookie.length;
					return unescape(document.cookie.substring(c_start,c_end));
				}; 
			};
		};
	}

	function setCookie(c_name,value)
	{
		document.cookie = c_name + "=" + escape(value);
	}


$(document).ready(function(){

	

	$(".preview").addClass("trans");

	//获取位置信息
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
		username = getCookie('username');
		if (!username) {
			username = prompt('你叫什么', "");
			if (!username) {
				username = prompt('我读书少比别骗我！', "");
			}
			if (username.length >= 10) {
				username = prompt('请输入小于十个字名字', "");
			};
			setCookie('username',username);
		};


		var subv=$("#message").val();
		if (subv == '') {
			return false;		}
		else
		{
			$.ajax({
			type: "POST",
			url:  "/models/message",
			contentType: "application/Json",
			data: JSON.stringify({ 
				message : $("#message").val(),
				name: username,
				vMon: vMon,
				vDay: vDay,
				h: h,
				m: m,
				city: locations.city
			 }),
			success: function(data,textAtatus){
			console.log(data.Message);
		}});
			location.reload();
			//$('.preview').removeClass("hide");
			//$('.edit').addClass("hide");
			//$('.sen').removeClass("hide");
		};
		return false;
	});



});


