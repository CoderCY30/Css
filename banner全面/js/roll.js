var getBox=document.getElementById('roll');//显示图片的div
var img=document.getElementById('rollimg');//第一组图片的ul
var img1=document.getElementById('rollimg1');//第二组图片的ul
var but1=document.getElementById('prev');//左侧按钮
var but2=document.getElementById('next');//右侧按钮
img1.innerHTML=img.innerHTML;
getBox.scrollLeft=0;
//var scrollTime=2000,quickScroll=1,scrollGap=3000;
var scrollTime=0,quickScroll=25,scrollGap=0;
var count=0;
var auto=setTimeout(scrollAuto,scrollTime);//图片自动滚动变量
/*图片自动滚动函数*/
function scrollAuto(){
	if(getBox.scrollLeft>=img1.offsetWidth){
		getBox.scrollLeft=0;
	}else{
		getBox.scrollLeft++;	
	}
	count=getBox.scrollLeft%231;
	if(count==0&&getBox.scrollLeft>0){
		auto=setTimeout(scrollAuto,scrollGap);	
	}else{
		auto=setTimeout(scrollAuto,quickScroll)	
	}
}
/*图片向左滚动函数*/
function scrollLeft(){
	if(getBox.scrollLeft>=img1.offsetWidth){
		getBox.scrollLeft=0;
	}else{
		getBox.scrollLeft++;	
	}
	count=getBox.scrollLeft%231;
 	turnLeft=setTimeout(scrollLeft,quickScroll);
	if(count==0){
		clearTimeout(turnLeft);
	}
}
/*图片向右滚动函数*/
function scrollRight(){
	if(getBox.scrollLeft<=0){
		getBox.scrollLeft=img.scrollWidth;
	}else{
		getBox.scrollLeft--;	
	}
	count=getBox.scrollLeft%231;
	turnRight=setTimeout(scrollRight,quickScroll);
	if(count==0){
		clearTimeout(turnRight);
	}
	
}
/*自动滚动停止函数*/
function stopAuto(){
	clearTimeout(auto);
}
/*自动滚动开始函数*/
function beginAuto(){
	auto=setTimeout(scrollAuto,scrollTime);	
}
/*单击左移按钮滚动开始函数*/
function clickLeft(){
	turnLeft=setTimeout(scrollLeft,quickScroll);
	if(getBox.scrollLeft>=img.offsetWidth){
		getBox.scrollLeft=0;
	}
}
/*单击右移按钮滚动开始函数*/
function clickRight(){
	turnRight=setTimeout(scrollRight,quickScroll);
	if(getBox.scrollLeft<=0){
		getBox.scrollLeft=img.offsetWidth;
	}
}
but1.onclick=clickLeft;
but2.onclick=clickRight;
getBox.onmouseover=stopAuto;
getBox.onmouseout=beginAuto;
but1.onmouseover=stopAuto;
but1.onmouseout=beginAuto;
but2.onmouseover=stopAuto;
but2.onmouseout=beginAuto;
