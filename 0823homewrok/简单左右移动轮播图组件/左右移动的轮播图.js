/**
 * Created by lx on 2017/8/25.
 */
var oRolling = document.getElementById('rolling');
var oMUnit = document.getElementById('m_unit');
var oListUl = document.getElementsByTagName('ul')[0];
var listlength = oListUl.getElementsByTagName('li').length;

oListUl.innerHTML += oListUl.innerHTML;

var nowLeft = -317*listlength;
var timer;
mov();
oRolling.onmouseover=function () {
    clearInterval(timer);
}
oRolling.onmouseout=function () {
    mov();
}
function mov() {
    clearInterval(timer);
    timer=setInterval(function () {
        nowLeft += 2;
        oMUnit.style.left=nowLeft+'px';
        if(nowLeft>=0){
            nowLeft=-317*listlength
        }
    },20)
}
