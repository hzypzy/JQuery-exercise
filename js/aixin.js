//爱心图点击效果、获取商品信息 、反馈给购物车页面
 var oFav=document.querySelectorAll('.aright');//console.log(oFav[0].style.background);
 var j=true;var l=0;
// 	for(var l=0;l<oFav.length;l++){
// 		
// 	}
for(i=0;i<oFav.length;i++){
	(function(i){
//		oFav[i].style.j=true;
		oFav[i].onclick=function(){
			if(i!=l){
				j=!j
			};
			l=i;
			console.log(i);console.log(j)
			if(j){
				oFav[i].style.background="url(img/redlove.png)no-repeat 30px 10px"
				j=!j;
			}else{
				oFav[i].style.background=""
				j=!j;
			}
		}
	})(i);
}




//ajax获取商品信息
//			var strUsername = oUsername.value
//			var strPassword = oPassword.value
//
//			var json = {
//				"username": strUsername,
//				password: strPassword,
//				status: "login"
//			}
			 //调用函数
//			loginOrRegister(json, function(obj) {
//				if (obj.code == 0) {
//					alert("登陆成功")
//					
//					// 页面跳转
//					location.href = "https://hzypzy.github.io/liangcang/index.html"
//					
//					
//					
//				} else {
//					alert(obj.message)
//				}
//			})