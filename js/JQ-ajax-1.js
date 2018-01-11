//获取商品分类
$(function(){
		var url="http://csit.top/api_cat.php";
	var oLI=document.querySelectorAll('#fenlei');
	$.get(url,function(str) {
//		console.log(str)
		var obj=JSON.parse(str)			
		for(var i=0;i<9;i++){
//		console.log(arr)
		oLI[i].innerHTML=obj.data[i].cat_name;
//		console.log(obj.data[i].cat_name)

		}
	})
	alert('商品分类获取成功')
})
