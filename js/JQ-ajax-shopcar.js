
//获取购物车信息
	var url="http://csit.top/api_cart.php "
	$.ajax({
		type:'post',
		url:url,
		data:{},
		headers:{
			token:'2d622a9209535b9fbe212d69b8d5bc62'
		},		
		success:function(str){
			var obj=JSON.parse(str)
			var obj=obj.data
			console.log(obj)
			alert('购物车数据获取成功')
		}
	})
