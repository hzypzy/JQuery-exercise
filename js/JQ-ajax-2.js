$(function(){
	//获取商品图片
	//获取内容商品图片以及信息
	var oIg=document.getElementsByClassName('exe');
//console.log(oImg)
	var ar=[];
	var ob={};
	for(var i=0;i<oIg.length;i++){
//		console.log(oImg[i]);
		ar[i]=oIg[i].getElementsByTagName('img')[0];
//		console.log(ar[i])
		for(var Key in ob){
			Key=i;
			ob[Key]=oImg[i];
		}
	}
	var url="http://csit.top/api_goods.php";
	$.get(url,function(str) {
//		console.log(str)
		var obj=JSON.parse(str)			
			var arr=[];
			for(var k=0;k<obj.data.length;k++){
			ar[k].src=obj.data[k].goods_thumb;
			
			}
	})
	alert('商品图片获取成功')
})
