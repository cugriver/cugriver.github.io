/**
 * Created by Mr Sun on 2016/3/6.
 */
var curIndex=0;
var arrimg=new Array("./image/1.jpg", "./image/2.jpg", "./image/3.jpg");
function  turnImage(){
    var img = document.getElementById("img");
    if(curIndex == arrimg.length-1) curIndex=0;
    else curIndex +=1;
    img.src=arrimg[curIndex];
}
setInterval(turnImage, 2000);