/**
 * Created by lx on 2017/8/31.
 */

function returnTop(obj,distance) {
     document.onscroll=function () {
        if((document.body.scrollTop||document.documentElement.scrollTop)>distance){
            obj.style.display='block'
        }else{
            obj.style.display='none'
        }
    }
    oIput.addEventListener('click',function () {
        document.body.scrollTop=
            document.documentElement.scrollTop=0
    })
}
