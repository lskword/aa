function animate(elem, targetJSON, time, callback) {
  //如果浏览器里面没有这个msie这个属性就给他赋值一个
  if (window.navigator.userAgent.indexOf("MSIE") != -1) {
    /*如果浏览器有着MSIE的属性就将定义一个帧频*/
    var interval = 50;
  } else {
    var interval = 10;
  }
  /*顶一个一个空数组*/
  var semaphoreJSON = {};
  //提取出所有targetJSON对象里面的数据对应的值
  for (var k in targetJSON) {
    //利用FOR循环将每一个值都提出来
      //fetchcomputedstyle的方法是之前定义好的不管浏览器是否是高级都可以提出数值；
    semaphoreJSON[k]= parseFloat(fetchComputedStyle(elem, k));
  }
  //总时间除以帧数等于总帧数
  var frames = time / interval;
  //定义一个除本身位置还剩多少帧的信号量
  var frame = 0;
/*  定义一个空数组将提取targetJSON对象里面的数据放在里面供后期使用*/
  var stepJSON = {};
  for (var k in targetJSON) {
    //利用FOR循环将target对象里面的数据全部提出来

    stepJSON[k] = (parseFloat(targetJSON[k]) - semaphoreJSON[k]) / frames;
  }
  //定义一个计时器 给他名一个名字方便后期使用
  var timer = setInterval(function() {

    for (var k in semaphoreJSON) {
      semaphoreJSON[k] += stepJSON[k];
      if (k != 'opacity') {
        //只要赋值不是OPACITY这个属性
          //就执行给他附加新属性
        elem.style[k] = semaphoreJSON[k] + 'px';
      } else {
        //如果是OPACTIY的属性对属性进行兼容性判断进行操作
          //不同版本的浏览器的OPACITY的属性不一样所以要进行绑定修改
        elem.style[k] = semaphoreJSON[k];
        elem.style.filter = "alpha(opacity=" + (semaphoreJSON[k]*100) + ")";
      }
    }
    //每步都自己移动一下
    frame++;
    //如果移动的位置超过原来规定的时间就让定时器停止
    if (frame >= frames) {
      clearInterval(timer);
      //回调函数执行
      callback();
    }
    //这指的是过多久才执行这个定时器
  }, interval);
}
function fetchComputedStyle(obj, property) {
  //如果浏览器的版本比较低就让他转换成-字符链接
    //判断改属性是否兼容
  if (window.getComputedStyle) {
    //如果不兼容将属性转换成-字符链接使用
    property = property.replace(/[A-Z]/g, function(match){
      //返回修改过后的属性
      return '-' + match.toLowerCase();
    });
    //给上一个IF的条件作出返回值
    return window.getComputedStyle(obj)[property]; //中括号里面可以是变量
  } else {
    //反之如果如果是-符号的链接属性不可以用，就将这个-加后面的字母一起变成一个大字母
    property = property.replace(/-([a-z])/g, function(match, $1){
      return $1.toUpperCase();
    });
    // 最后返回一个值让系统可以接受的
    return obj.currentStyle[property];
  }
}
