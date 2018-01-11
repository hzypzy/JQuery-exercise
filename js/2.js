//导航二级菜单样式js
	// cloud zack sephiroth 为三个lil从上而下，打扰了
//	var oL=document.querySelectorAll('.lil');console.log(oL);
	var oC=document.getElementById('cloud');//console.log(oC);
	var oZk=document.getElementById('zack');//console.log(oZ);
	//↑这里oZ已经被占用了，强行改成了oZB, 打扰了
	var oS=document.getElementById('sephiroth');//console.log(oS);
	
	oC.onmouseover=function(){
		//console.log(oZ);console.log(oS);
		oZk.style.top=120+'px';
		oS.style.top=150+'px';
	}
	oC.onmouseout=function(){
		oZk.style.top=0+'px';
		oS.style.top=0+'px';
	}
	
	
	oZk.onmouseover=function(){
		oS.style.top=120+'px';
	}
	oZk.onmouseout=function(){
		oS.style.top=0+'px';
	}
	
//	oL.onmouseover=function(){
//		oS.style.top=160+'px';
//	}
//	oZ.onmouseout=function(){
//		oS.style.top=0+'px';
//	}

//吸顶功 和topback盒子
	var oHeader=document.getElementsByClassName('header')[0];//console.log(oHeader)
	var oTb=document.getElementById('topBack');
	var oPacity=0;
	
	var timme;//消失定时器
	var lala=true;
	window.onscroll=function(){
		var t=document.body.scrollTop||document.documentElement.scrollTop;
		var timee;//出现定时器
		 if (t>56) {
//		 	oPacity=0;
			oHeader.style.position="fixed";
			oHeader.style.top=-56+'px';
			oHeader.style.left=0+'px';
//			oTb.style.display='block';
//			console.log("我进来了");&&lala
//			if(t>60){console.log("我进来了");
//			lala=false;
			clearInterval(timme);
			 if(!lala){
			 		 	return;
			 		 }//函数节流
			 timee=setInterval(function(){
			 		
					oPacity+=0.01;
					oTb.style.opacity=oPacity;
					if(oPacity>=1){
						oPacity=1;
						oTb.style.opacity=1;
						clearInterval(timee);
						lala=false;
					}
//			console.log(oPacity);
//					var lala=false;
					
					
				},30)					
			}
//			console.log(oTb)
		else{
			clearInterval(timee);
//console.log('hah')
			lala=true;
			oPacity=0;
			oHeader.style.position="";
			oHeader.style.top=0+'px';
			oHeader.style.left=0+'px'
//			oTb.style.display='none';
			oTb.style.opacity=0;	console.log(oTb.style.opacity)
//			if(t==0){
//				timme=setInterval(function(){
//					oPacity-=0.01;
////					return oPacity;
//			console.log(oPacity);
//					oTb.style.opacity=oPacity;
//					if(oPacity<0){
//						clearInterval(timme);
//						oTb.style.opacity=0;
//					}
//				},30)			
//			}
					
		}
}	
//oTb.onmouseover=function(){
//	timee();	
//}
//oTb.onmouseout=function(){
//	var timme=setInterval(function(){
//					oPacity-=0.01;
////					return oPacity;
//			console.log(oPacity);
//					oTb.style.opacity=oPacity;
//					if(oPacity<0){
//						clearInterval(timee);
//						oTb.style.opacity=0;
//					}
//				},30)				
//}

