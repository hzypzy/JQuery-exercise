	var aDiv=document.getElementById('big');
	var aUl=document.getElementById('big').getElementsByTagName('ul')[0];
	var aLi=document.getElementById('big').getElementsByTagName('li');//console.log(aLi[0]);
	var aNext=document.getElementById('next');
	var aPre=document.getElementById('pre');
	var aNum=document.getElementById('num').getElementsByTagName('span');//console.log(aNum[0]);
	var lilength=aLi.length;//console.log(lilength);//克隆之前的长度
	aUl.appendChild(aLi[0].cloneNode(true));//克隆Ul下的第一项Li，并且放在最后
	var liwidth=fcs(aLi[0],'width');//console.log(liwidth)
	var liwid=parseFloat(liwidth);//console.log(liwid);//665
	var count=0;
	var ulgun=0;
	var Time;
	
	//点击事件 next aUl.lock='true';
					aNext.onclick=function(){
						
						//console.log(aUl.lock);
						if(aUl.lock){
							//console.log(23);
							return;
							
						}
						count++;
						ulgun=count*liwid;
						//console.log(count);
						if(count==4){
							aUl.style.left=0+'px';
							count=1;
							ulgun=count*liwid;
						}
						numbers();
							animate(aUl,{'left':-ulgun+'px'},1000,function(){})
							
					}
					aPre.onclick=function(){
						if(aUl.lock){
							return;
						}
						count--;
						ulgun=count*liwid;
						if(count<0){
							aUl.style.left=-3000+'px';
							count=2;
							ulgun=count*liwid;
						}
						numbers();
						animate(aUl,{'left':-ulgun+'px'},1000,function(){})
					}
	//自动播放函数封装
	function Times(){
		Time=setInterval(function(){
			count++;//console.log(count);
			
			ulgun=count*liwid;
				if(count==4){
					aUl.style.left=0+'px';
					count=1;
					ulgun=count*liwid;
				}
				numbers();
				animate(aUl,{'left':-ulgun+'px'},600,function(){})
		},3000)
	} 
	
	Times();
	//轮播图小圆点样式
	var oYuan=document.getElementsByClassName('zuoyou')[0];
	var oYuan1=document.getElementsByClassName('zuoyou')[1];
	//console.log(oYuan)
	var oZ=document.getElementsByClassName('z')[0];
	var oY=document.getElementsByClassName('y')[0];
	//console.log(oZ)
	oZ.onmouseover=function(){
		oYuan.style.opacity=0.5;
	}
	oZ.onmouseout=function(){
		oYuan.style.opacity=0;
	}
	oY.onmouseover=function(){
		oYuan1.style.opacity=0.5;
	}
	oY.onmouseout=function(){
		oYuan1.style.opacity=0;
	}
	
	oYuan.onmouseover=function(){
		oYuan.style.opacity=0.5;
	}
	oYuan.onmouseout=function(){
		oYuan.style.opacity=0;
	}
	
	oYuan1.onmouseover=function(){
		oYuan1.style.opacity=0.5;
	}
	oYuan1.onmouseout=function(){
		oYuan1.style.opacity=0;
	}
	
	//div鼠标移入跟移出
	
	aDiv.onmouseover=function(){
		
		oZ.style.display='block';
		oY.style.display='block';
		clearInterval(Time);
	}
	aDiv.onmouseout=function(){
		
		oZ.style.display='none';
		oY.style.display='none';
		Times();
	}
	//number动画效果
	function numbers(){
		i=count;//console.log(count);
		if(i>=3){
		i=0;
		}
		for(var j=0;j<3;j++){
			aNum[j].className='';//console.log(j)
		}
		aNum[i].className='activecolor';
		//console.log(count);
	}
		//numbers();
	//number移入效果
   for(var i=0;i<lilength;i++){
			(function(i){
				aNum[i].onmouseover=function(){
					for(var j=0;j<lilength;j++){
						aNum[j].className='';
					}
						aNum[i].className='activecolor';
				}
			})(i);
	 }
	 //number点击效果
	 for(var i=0;i<lilength;i++){
			(function(i){
				aNum[i].onclick=function(){
					ulgun=1000;//这里有个很奇怪的问题
					clearInterval(Time);
					//console.log(i)
						animate(aUl,{'left':-ulgun*i+'px'},1000,function(){})
						
				}
			})(i);
	 }
	 //首面跳转
	 var oLogin=document.getElementById('login');
	 var oRegister=document.getElementById('register');
	 
	 oLogin.onclick=function(){
	 	location.href = "https://hzypzy.github.io/liangcang-register&login/login.html"
	 }
	function fcs(ele,property){
			if(window.getComputedStyle){
				return getComputedStyle(ele)[property];
			}else{
				return ele.currentStyle[property];
				}
	}
	
	
	//回顶部
//		var oTb=document.getElementById('topBack');console.log(oTb);
//	window.onscroll=function(){
//		var t2=document.body.scrollTop||document.documentElement.scrollTop;
//		var toumingdu=0;
//		if (t2>60) {
////			oHeader.style.position="fixed";
////			oHeader.style.top=-56+'px';
////			oHeader.style.left=0+'px'
////			oTb.style.display='block';
//			
//			var timee=setInterval(function(){
//				if(toumingdu==1){
//					clearInterval(timee);
//				}console.log(toumingdu);
//				toumingdu+=1;
//				oTb.style.opacity=toumingdu/10;console.log(toumingdu/10)
//			},1000)
//		}else{
////			oHeader.style.position="";
////			oHeader.style.top=0+'px';
////			oHeader.style.left=0+'px'
//			oTb.style.display='none';
//			
//		}
//		}
//jiahwoidadwpdsjlaiuwda窗口卷动 头部定位