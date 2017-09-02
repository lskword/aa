# HTML5Course20170717
##20170821
```
//获取元素
document.getElementById()  //一个DOM对象
DOM对象.getElementById()  
document.getElementsByTagName() //包含多个DOM对象的数组
DOM对象.getElementsByTagName()

//创建元素
document.createElement('') //可以创建p,div,span,link,script,img

//创建事件
document.createEvent('kaiyu');

//属性
innerText, innerHTML,checked(true|false ""|"checked")，title, value, src, href, contentEditable

//DOM元素API参考，包括属性和方法 https://developer.mozilla.org/zh-CN/docs/Web/API/Element

///修改皮肤就是切换样式的href属性值
通用的属性：id, class, name, title, style
document.title //获取文档的标题

//自定义属性
对原有标签的功能进行扩展，v-for, v-if, v-show;
用来在元素上面存储数据data-id="1" username="maxwell"

//属性操作
DOM对象.属性名  //获取属性
DOM对象.属性名 = 属性值 //设置属性

//非标准的属性需要使用以下方式去获取和设置，当然也对标准属性进行操作，是比较通用的
DOM对象.getAtrribute(属性名)  //获取属性
DOM对象.setAttribute(属性名, 属性值) //设置属性
DOM对象.hasAttribute(属性名) //判断是否有某个属性

//元素操作
DOM对象.appendChild(要添加的对象)
DOM对象.insertBefore(要添加的对象，要添加到哪个对象的前面)

//节点关系
DOM对象.childNodes  数组//获取所有的子节点，包括文本节点，元素节点，注释节点
节点.nodeType //值可以 1是元素节点
DOM对象.previousSibling //上一个兄弟节点,可能是文本节点或注释节点
DOM对象.previousElementSibling //上一个兄弟元素节点
DOM对象.parentNode //父节点

//样式
DOM对象.style.样式 //样式如果是中横线，需要改成驼峰命名；这里的样式只能够得到或者设置行内样式
getComputedStyle(DOM对象) //获取DOM对象的计算后属性的对象（CSSOM）
DOM对象.className 设置class的值，如果有多个，可以用字符串拼凑

//事件, 事件可以嵌套
//绑定事件
DOM对象.on事件名 = function() {
  //这里面的this指向当前对象
}

//取消绑定事件
DOM对象.on事件名 = null;
//高版本删除事件
this.removeaddEventLitter('事件名'，函数名)
//低版本删除事件
this.detachEvent('事件名',函数名)

常用事件名：
鼠标：click(点击事件), dblclick, mouseover(鼠标移动上面),
 mouseout（鼠标移开目标位）, mousedown（鼠标按下时触发）,
 mouseup（鼠标弹起时触发）, mousemove（鼠标移动事件）,
contextmenu右击鼠标, mouseenter, mouseleave, mousewheel滚轮事件, DOMMouseScroll(Firefox),
mouseenter和mouseleave不会冒泡，mouseover, mouseout会冒泡
表单事件：submit（提交）, reset（重置）
键盘：keyup（按键弹起时）, keydown（按键按下时）, keypress, input
窗口相关：scroll（滚动）, resize（窗口改变大小时候触发）
input框：invalid（当事件出错不触发时，他触发）, focus(不冒泡), blur(不冒泡), change, input
资源加载：load, DOMContentLoaded
load事件是指当前页面结构加载完成，并且里面的所有资源都加载完成

//变量
全局变量其实就是把当前变量名放到window当中的一个属性

//函数
函数其实就是把函数名作为window当中的一个属性，他的值的是function

//调试能力：最重要，自学的时候有用，写代码的时候有用，调试的时候更有用
console.log()
console.dir()
断点调试，添加观察表达式，调用堆栈， 作用域（local, closure, global)
网络环境模拟
DOM断点
事件监听断点
Ajax断点

//概念的理解
user agent表示当前的浏览器，它代理你去上网
信号量 非常重要，一定要理解，就是页面元素的变化都根据这个信号量来决定，自己说的一个名词；实际上说白就是一个变量或者属性
业务逻辑方法  信号量和业务逻辑通常是对应的，业务逻辑会根据信号量的值作出不同的决定，到底是改变元素的颜色还是大小，还是位置等等
页面解析顺序是文本的从上到下；如果js代码写在需要获取的html元素之上的时候，会暴错，获取不到；如果需要写在上面，要添加window.onload事件
资源：只要是有链接地址的都是资源，不论里面的内容是什么；
html内容是资源， css文件，js文件，图片，音频，视频，网络字体文件，API
URL: 统一资源定位符
URL地址包括：http://www.baidu.com:80/news/index.php?username=a#fa
协议://域名或IP:端口号/路径/文件名?queryString#锚点(hash)
queryString和hash值都可以用来在页面之间传递

//页面传值：
本地存储，localStorage, sessionStorage, cookie

//技巧
state = !state //通常用来做 toggle 效果，或者开关，这个可以做多个房间开关门

class设置样式，id属性用来给js使用
```

```
http://bbs.duchengjiu.top/read.php?tid=42 
web6期时候的视频，包括git等：
链接: https://pan.baidu.com/s/1eS099sA 密码: du7w
命令行，工程化视频：链接: https://pan.baidu.com/s/1bpMuxXH 密码: ambq
//git是一个版本控制工具：针对修改(变化)的版本控制工具，历史管理，最主要的功能是备份和团队协作
下载git工具，到这个网址下载对应的版本 https://git-scm.com/downloads
//命令行操作(最主要的是心态，第一你能够意识当前学的这个东西非常有用，或者能提升效率；第二个你就会拼命的去把他学好;意味着你能够节省很多的时间，enjoy your life!) https://guoyongfeng.github.io/book/21/21/04-shell%20%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8.html
windows平台常用的命令行工具有git bash, putty, securecrt
, powershell
常用命令：
cd change directory改变目录
  cd /d/HTML5Course20170717/20170822
  cd ..
ls List 查看列表
  ls 查看当前文件夹中的文件
  ls -l 以长格式查看，包括权限，用户，大小，创建时间等
技巧：按tab键自动补全
输入任何命令都加一个 -v
输入过的命令通过上下箭可以选择
ctrl+a 直接跳到开头
ctrl+e 跳到当前行的末尾
ctrl+u 当前行内容全部删除|撤销

mkdir 文件夹名
rm -rv 文件夹名，只能删除空的目录，git bash可以删除非空的目录
rm -rfv 文件夹名 强制删除
touch a.js b.css index.html .gitignore
.开头的文件通常都是隐藏文件
.gitignore文件表示git仓库忽略提交的文件列表
. 表示当前目录
.. 表示上级目录
通常你输入的命令没有任何反应表示最好的响应
操作的时候一定要特别的小心谨慎，知道自己的命令会发生什么事；误操作有可能会把系统整崩，有可能删除数据库
通常编程中的目录和文件名最好全部是英文名，并且是小写
安装软件，有时候装到中文名的目录，也会发生问题
```

```
1.cd 目录切换

注意目录分隔符为“/”，与dos相反

# 格式：cd dirname，比如我们要进入到d盘的website目录
$ cd /d/website

# 到当前目录的上一级
$ cd ../

# 到当前目录的上上级
$ cd ../../

2.mkdir 新建文件夹

$ mkdir dirname
$ mkdir website

3.touch 创建文件

$ touch .gitignore
$ touch a.js b.html c.css

4.ls 显示文件

命令格式：ls [option] file

# 显示详细列表
$ ls -l

# ls -l的简写
$ ll

# 显示所有文件，包含隐藏文件（以. 起头的文件名）
$ ls -a

# 显示文件及所有子目录
$ ls -R
$ 显示文件（后跟*）和目录（后跟/）
$ ls -F

# 与l选项合用，显示目录名而非其内容
$ ls -d
5.pwd 显示当前路径

$ pwd
6.cat 显示文件内容

# 格式：cat filename
$ cat a.js

7.rm 删除文件或目录

命令格式： rm [-r] filename (filename 可为档名，或档名缩写符号.)

# 删除档名为 file1 之文档.
$ rm file1

# 删除档名中有五个字元，前四个字元为file 之所有文档.
$ rm file?

# 删除档名中，以 f 为字首之所有文档.
$ rm f*

# 删除目录 dir1，及其下所有文档及子目录.
$ rm -r dir1

8.cp 文档的复制

命令格式: cp [-r] source destination

# 将文档 file1 复制成 file2
$ cp file1 file2

# 将文档 file1 复制到目录 dir1 下，文件名仍为 file1.
$ cp file1 dir1

# 将目录 /tmp 下的文档 file1复制到现行目录下，文件名仍为 file1.
$ cp /tmp/file1 .

# 将目录 /tmp 下的文档 file1现行目录下，档名
为file2
$ cp /tmp/file1 file2

# (recursive copy) 复制整个目录.
$ cp -r dir1 dir2

# 复制dir1整个目录到dir2
$ cp -R dir1 dir2

9.mv 移动文件

命令格式： mv source destination

# 将文档 file1，更改档名为 file2.
$ mv file1 file2

# 将文档 file1，移到目录 dir1 下，档名仍为 file1.
$ mv file1 dir1

# 若目录 dir2 不存在，则将目录 dir1，及其所有档案和子目录，移到目录 dir2 下，新目录名称为 dir1.若目录dir2 不存在，则将dir1，及其所有文档和子目录，更改为目录 dir2.
$ mv dir1 dir2

10.grep 搜索

$ grep string filename
# 在a.js文件中查找===字符串，并且显示行号
$ grep -rn '====' a.js
```

```
vim: 链接: http://pan.baidu.com/s/1hr2W8RE 密码: qay8
vim 05-vim.html
ESC 在不同模式之间切换
进入插入模式之后不能输入各种命令
i 在当前位置前面插入
I 在当前行首插入内容
o 在当前行下面插入一行
O 在当前行上面插入一行
a 在当前位置后面插入字符
A 在当前行尾插入字符

移动：
hjkl : wasd类似
gg 文件的开头第一行
w e b 单词之间跳转
显示行号，进入末行模式 :set nu
在命令模式下输入:

:100 到100行
100G 到100行
:1,5 copy 7   拷贝1-5行，粘贴到第7行
字符选择，按v
复制 y 复制一行yy 复制10行 10yy  复制当前光标到末尾 y$ 复制当前光标到文件末尾yG
粘贴 p
```

```
命令状态：
j,k,h,l:上下左右
0： 行首
$: 行尾
i,I :插入命令，i 在当前光标处插入 I 行首插入
a,A:追加命令，a 在当前光标后追加，A 在行末追加
o,O:打开命令，o 在当前行下打开一行，O在当前行上插入一行
r,R :替换命令，r 替换当前光标处字符，R从光标处开始替换
数字s: 替换指定数量字符
x: 删除光标处字符
dd: 删除当前行
d0: 删除光标前半行
d$: 删除光标后半行
ctrl+f :后翻页
ctrl+b:前翻页
G : 文件尾
数字G: 数字所指定行
/string 查找字符串
n 继续查找
N 反向继续查找
% 查找对应括号
u 取消上次操作
ex命令状态
：0 文件首
：1,5 copy 7 块拷贝
：1，5 del 块删除
：1，5 move 7 块移动
：1，$s/string1/string2/g 全文件查找string1并替换为string2
：wq! 存盘退出
```

```
github
程序员的社交网站 没有妹子，只有代码  开源项目的集中地
注册一个github帐号，需要在邮箱中进行验证
下载git命令行工具
打开命令行工具：
git config --global user.name "你的github用户名"
git config --global user.emal "你的github邮箱"


git clone 仓库地址
git pull

git的更多学习：https://guoyongfeng.github.io/book/01/04-git%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html
在bbs.duchengjiu.top这个网站找一下git系列教程

将本地修改提交到远程仓库
git add .
git commit -m '描述'
git push origin master

```

正负性的值 http://www.cnblogs.com/snandy/p/3589517.html

IIFE

```
// 最常用的两种写法
(function(){ /* code */ }()); // 老道推荐写法
(function(){ /* code */ })(); // 当然这种也可以

// 括号和JS的一些操作符（如 = && || ,等）可以在函数表达式和函数声明上消除歧义
// 如下代码中，解析器已经知道一个是表达式了，于是也会把另一个默认为表达式
// 但是两者交换则会报错
var i = function(){ return 10; }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();

// 如果你不怕代码晦涩难读，也可以选择一元运算符
!function(){ /* code */ }();
~function(){ /* code */ }();
-function(){ /* code */ }();
+function(){ /* code */ }();

// 你也可以这样
new function(){ /* code */ }
new function(){ /* code */ }() // 带参数
```

##20170822

onload事件在window对象，还有图片对象，音视频

vim 中写代码，按大小写的aio都可以进入插入模式
按ESC，然后输入  :wq!  保存并强制退出
ZZ 也保存退出
:w 保存
:q 退出


reset.css
```
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

实体字符：
```
&nbsp; 空格
&gt;   >
&lt;   <
&copy; 版权号
&reg;  
&quot; "
&amp;  &
```

##组件化思想
```
将一个小组件的css写好之后放到一个css文件
组件对应的js放到一个js文件中
在需要使用的页面将css和js引入；写上对应的html结构就搞定了
```

##伪代码|画图
```
假的代码，能够指导你的开发思想
可以用中文加上你会写的代码，描述性的
好处：让你从没思路到有思路
如果伪代码也写不出来，在图纸上多画一画, 光去想想不出来的时候写出来画出来，慢慢思路就有了
```

#20170823
```
html,css,js代码缩进使用2个空格，不要使用tab或四个空格
html元素中的id主要给js用，不要给css用
写方法的话，尽可能让一个方法只完成一件事情
后面写构造函数（类）的时候，一个类只描述一个对象

可以使用正则的常用方法有
字符串的 `replace（替换的新值，替换的旧值）`,
search, match, split（根据某个字符进行分割，根据第几个开始分割<这个数字可有可无>）
正则对象的 exec `test`
所有语言都有正则,是通用的技能

正则表达式的创建
字面量的方式：/正则/修饰符
对象的方式：  new RegExp('正则字符串', '修饰符');

- 字符类型
  . 除了回车换行之外的任意字符
  \d [0-9]
  \D [^0-9]
  \s 空白字符
  \S 非空白字符
  \w [0-9a-zA-Z_]
  \W 非\w
  \t 制表符
  \n 换行符
- 字符集合
  [1234] 表示一个字符，匹配1，2,3,4中的任意一个
  [^1234] 表示一个字符，匹配不是1,2,3,4的任意一个

- 边界
  ^ 匹配开头
  $ 匹配结束
  \b 匹配单词边界
- 分组与反向引用
  ()
- 或者
  | 可以单独使用或者在分组内部使用；不能够在字符集中使用, 在字符集中就表示一个竖线
  a|b
  (sina|qq)  
  [sina|qq]  x错误的使用方式
- 数量词
  {2} 精确匹配前面的一个字符或一个分组2次
  {2,} 至少2次，最多不限
  {2,8} 匹配2次到8次之间
  ? 0或1次
  + 1或多次
  * 0或多次
  ```

  html hack:
  针对IE9做什么事情
  ```
   <!--[if lt IE 9]>
      <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	```
  
  CSS透明度：
  css hack
  ```
  .transparent_class {
  /* IE 8 */
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";

  /* IE 5-7 */
  filter: alpha(opacity=50);

  /* Netscape */
  -moz-opacity: 0.5;

  /* Safari 1.x */
  -khtml-opacity: 0.5;

  /* Good browsers */
  opacity: 0.5;
}
```

#20170824
<<<<<<< HEAD
```
=======

>>>>>>> 78e9c24225fa2a100059945c07d9bb8783946153
表单验证的方式：
  - 在表单的submit事件中：验证失败返回false,  表单将不会提交；全部通过返回true, 正常提交表单
  - 在form的input元素blur事件，当验证失败给当前input元素的状态设置为false, 并将整个表单的一个状态进行重新计算，当表单的状态为可用，让提交按钮可用；
  表单状态信号 = input1.状态信号 === true && input2.状态信号 === true ...
  表单状态信号 = input1.状态信号 && input2.状态信号 ...
手动提交表单：oForm.submit();  

  造轮子：把基础的东西我们要自己写出来；以后需要开发类似的功能，可以直接使用
  包括了
    - js验证库（写一堆校验的方法)
    - css库（写一堆方便使用的class样式)
    - web组件库（写一堆有界面有交互的小挂件，小组件）组件就是我们网页中经常会出现的一些小模块（包括了html,css,js)

透明度：
  opacity: .2;
  filter: alpha(opacity=20);

js设置透明度：
  var oSpan = document.getElementsByTagName('span')[0];
  var opacity = 0.1;
  oSpan.style.opacity = opacity;
  oSpan.style.filter = "alpha(opacity=" + opacity*100 + ")"
```

针对最新的浏览器：
```
offsetParent    找到离自己最近的已定位的元素为参考元素
offsetLeft      自身的border外侧到offsetParent元素的内边框
offsetTop
offsetWidth     width + padding + border
offsetHeight    height + padding + border
clientWidth     width + padding
clientHeight    height + padding
```

开启定时器
```
var timer = setInterval(函数, 间歇时间); //函数的地方不要去调用，直接给函数
//方式一
var timer = setInterval(function(){
}, 1000);
//方式二
function fun() {
}
var timer = setInterval(fun, 1000);
停止定时器
clearInterval(timer);

定时器的注意事项：在你开启定时器之前最好先关闭定时器：设表先关
```

##标准的动画
```
//配置参数
var oDiv = document.getElementById('odiv');
var time = 1000;
var interval = 20;
var frames = time / interval;
var distance = 400;
var step = distance / frames;

//信号量
var startLeft = 100;//起始位置信号量
var frame = 0; //当前帧信号量

var timer = setInterval(function(){
  frame++;
  oDiv.style.left = startLeft + step * frame + 'px';
  if (frame >= frames) {
    clearInterval(timer);
  }
}, interval);
```

```
图片的load事件，表示图片已经下载完成
offsetLeft, offsetWidth, clientWidth这些值都需要等图片下载完成之后才能获得

//当页面上所有的资源都加载完成之后再执行, 这个方法只能绑定一次，绑定多次会覆盖
window.onload = function(){

}
//这个事件是当页面内容加载完成的时候会执行，可以绑定多次，会依次执行
document.addEventListener('DOMContentLoaded', function(){

})
//jquery的写法，当DOM内容加载完成的时候执行
$(function(){
	
});
```

```
如何判断页面上所有的图片都加载完成
`通过一个加载完成的个数信号量，加载完一张就把信号量+1， 当信号量的值和图片标签的个数相等时，表示页面中的所有图片加载完成`
在图片加载完成之后就可以让无缝滚动的功能开始工作
```

通用的技术点：
```
正则
JSON

JSON编码格式必须是UTF-8, 如果是GBK或其他则需要先转换后再生成JSON

前后端的区分：
前端是指工作在浏览器上面的所有事情都是前端负责(html, css, js[动态效果，和后端打交道，获取数据])
后端是工作在服务器上的所有事情：动态编程语言（java,php,python,ruby)+数据库（mysql,mongodb,redis)
```

##20170825
```
系统的难看的各种组件，在以后的工作中基本上都需要去自己封装一个类似的，比如：
alert   警告框
confirm 确认框
prompt  输入框，可以在里面输入内容
模态框
和html,css相关的有：特殊的是checkbox, radio, select, file文件上传
和js相关：html5的验证错误提示信息要能够接收并处理; 滚动条

onload事件只能绑定一个，重复绑定会使用最后一个
页面的DOM结构加载完成的事件是：  document.addEventListener('DOMContentLoaded', function(){
    console.log(2);
  });
这个事件可以绑定多次，当HTML结构被解析完成之后就会调用当前事件
```

```
XML
<obj>
  <name>凯玉同学</name>
  <age>18</age>
</obj>
```

```
JSON
对象{}
数组[]

访问值 对象.属性名    对象[属性名变量或字符串]
```

二维数组：
```
var arr = [];
// arr[0][0] = '凯玉'; //这个是会报错
//如果需要使用二维数组，需要先把数组中的项变成一个数组

for (var i = 0; i < 3; i++) {
  arr[i] = [];
  for (var j = 0; j < 3; j++) {
    arr[i][j] = j;
  }
}
console.log(arr);
```

```
删除属性：
delete obj.property;
delete后面跟变量，不会报错，但是无法删除变量(实际上就是无法删除window中的属性)；只能够用来删除自定义对象中的属性

window对象是`宿主对象`
对象的遍历：(会遍历到原型上面的允许枚举的属性)
for (var k in obj) {
  console.log(k, obj[k]);
}
```

```
BOM对象中有定时器，navigator对象， location对象
navigator就是浏览器对象，里面最主要的一个属性是userAgent, 标识了浏览器；我们可以使用userAgent区分出IE，FF，Chrome, Safari, Opera或者手机上面的浏览器，像UC, 微信浏览器等等; 这个属性还可以被后端利用，可以让手机访问网站的时候直接跳转到手机站
alert(navigator.userAgent);

比如访问此地址： 03-navigator.html#username=kaiyu
location.hash 的值就是我们之前所学的锚点的内容#username=kaiyu
比如访问此地址：03-navigator.html?age=10
location.search 的值是 ?age=10   后面学习表单和AJAX的时候就知道这个也叫queryString, 就是GET请求时候的参数
location.href属性可以让页面跳转
location.reload() 刷新当前页面
location.assign() 相当于修改 location.href属性, 是可以通过历史记录后退到之前的页面
location.replace()  把当前页面替换成目标页面，不能通过历史记录后退到之前的页面

<meta http-equiv="refresh" content="3" />  //每3秒刷刷新当前页面
<meta http-equiv="refresh" content="3; url=http://www.baidu.com" /> //3秒之后跳转到百度页面
```

```
回调函数：通常就是调用函数的时候传递函数作为参数；在调用的函数内部会自动调用我们传递进去的函数;
可以有效的通知我们事情完成的情况，是成功了，失败了，还是在什么状态
我们可以定制当程序在不同阶段的时候执行我们自定义的函数
function a(cb) {
  cb && cb();
}
a(function(){
  console.log('回调函数里面的内容');
});
```

异步：
```
就是程序不会立即执行：比如setTimeout, setInterval, 绑定事件，ajax

call和apply都可以执行函数，并且第一个参数是改变函数内部this的指向
call在执行函数的时候，如果函数有参数，传递参数是以逗号分隔的参数列表
apply在执行有参数的函数时，第二个参数传递一个数组，数组中的值依次传递到调用函数的中

函数的默认值写法
callback = callback || function(){};

和下面的语句一样
if (!callback) {
  callback = function(){}
}

//相当于判断callback有值的时候执行
callback && callback();
和下面的语句一样
if (callback) {
  callback();
}
```

##20170828
```
var timer = setTimeout(function(){
}, 3000);
clearTimeout(timer);
```

逐帧动画：（原理是使用定时器周期性的更改雪碧图[精灵图]{sprit}的背景定位)
```
var x = 0;
var y = 0;
var n = 0;
var timer = setInterval(function(){
  n++;
  x -= 190;
  console.log(x, y);
  div.style.backgroundPosition = x + "px" + " " + y + "px";
  if(x <= -760){
      x = 0;
      y -= 190;
  }
  if(y <= -2000){
      x = 0;
      y = 0;
  }
  if (n >= 9) {
    clearInterval(timer);
  }
}, 1000)
```

函数截流一：
```
var lock = true;
oDiv.onclick = function(){
  if (!lock) return;
  lock = false;
  setTimeout(function(){
    lock = true;
  }, 3000);
  //执行具体的业务逻辑,3秒钟之后能够再次点击
}
```
函数截流二：
```
<!-- @param fn表示需要限制频率执行的方法 -->
<!-- @param delay 延迟多久之后执行 -->
<!-- @param context 是指定调用函数中的this的值是谁 可选 -->
function throttle(fn, delay, context) {
  context = context || null;
  clearTimeout(fn.timeoutId);
  fn.timeoutId = setTimeout(function(){
    fn.call(context);
  }, delay);
}
function queryData() {
  console.log('搜索：' + this.value);
}
var oInput = document.querySelector('#search');
oInput.onkeyup = function(){
  throttle(queryData, 500, this);
}
```

轮播图核心
```
var oRightBtn = document.querySelector('#rightBtn');
var oCirclesLi = document.querySelector("#circles").querySelectorAll('li');
var oMUnit = document.querySelector("#m_unit");
var oUl = oMUnit.querySelector('ul');
var oLi = oUl.querySelectorAll('li');

var imgLength = oLi.length;
var width = 780;
var animatetime = 600;
var tweenString = "BounceEaseOut";
var interval = 2000;
var index = 0; //0 1 2 3 4

//把0号li克隆，然后添加到carouseUL的最后
oUl.appendChild(oLi[0].cloneNode(true));

oRightBtn.onclick = rightBtnHandler;
function rightBtnHandler() {
  //如果本身在运动，则不做任何事
  if (oMUnit.isAnimated) return;

  index++;
  changeCircles();
  animate(oMUnit, {"left":-width*index}, animatetime, tweenString, function(){
    if (index > imgLength - 1) {
      index = 0;
      this.style.left = "0px";
    }
  });
}

//更换小圆点
function changeCircles() {
  //n是信号量的副本
  var n = index;
  if (n === imgLength) {
    n = 0;
  }

  for (var i = 0; i < oCirclesLi.length; i++) {
    oCirclesLi[i].className = "";
  }
  oCirclesLi[n].className = "current";
}
```

###间歇模型
```
var oUl = document.querySelector('ul');
var oLi = document.querySelectorAll('li');
var length = oLi.length;

oUl.appendChild(oLi[0].cloneNode(true));
var index = 0;
function move() {
  index++;
  animate(oUl, {"top": -40*index}, 800, function(){
    if (index > length -1) {
      index = 0;
      this.style.top = "0px";
    }
  });
}
//调用动画函数的间隔时间，要远大于动画运行时间
//这时就给人感觉是一个间歇的过程
setInterval(move, 1800);
```

##20170829
```
函数中的函数想要使用绑定事件的对象；需要先在外层声明一个变量保存this
var self = this;
```

```
oLis[i].onmouseenter = function(){
  var self = this;
  //得到当前的子元素dropbox
  var mydropbox = (function(){
    for (var i = 0; i < self.childNodes.length; i++) {
      if (self.childNodes[i].className === 'dropbox') {
        return self.childNodes[i];
      }
    }
  })();
}
```

```
变量作用域要么是全局的，要么是函数中局部的
ES6中有块级作用域:
for (let i = 0; i < 10; i++) {
	console.log(i);
}
console.log(i);

ES6的模板字面量,支持换行，单引号，双引号，变量: ${变量的名称}  ${对象.属性} 
`<span>${i}</span>`
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
```

```
特定的DOM元素移动（原因是一个页面上，特定的DOM对象只有一个，所以说你把他添加到其他位置，那之前的就会消失）
```

```
DOM0级事件只能够监听冒泡阶段
<span onclick="fun"></span>
oSpan.onclick = function(){
	
}
事件移除
var oDiv = document.querySelector('div');
oDiv.onclick = function(){
  console.log(1);
  this.onclick = null;
}
```

###DOM2级事件(非IE低版本)
```
oSpan.addEventListener('click', function(){
}, false); //true表示捕获阶段，false表示冒泡阶段
如何移除事件
var oSpan = document.querySelector('span');
function cli() {
  console.log(2);
  this.removeEventListener('click', cli);
}
oSpan.addEventListener('click', cli);
```

###低版本IE的事件删除
```
var oDiv = document.querySelector('div');
function fn(){
  alert(1);
  oDiv.detachEvent('onclick', fn);
}
oDiv.attachEvent('onclick', fn);
低版本IE中事件中的this是指window对象
oBox1.attachEvent('onclick', function(){
  change.call(oBox1);
});
```

```
DOM0级事件不能重复绑定，因为只是给一个属性赋值
DOM2级事件的addEventListener重复绑定事件会按照先后顺序执行
低版本IE事件能够重复绑定，执行顺序是倒序

对于点击目标对象来说，给他添加的事件监听，是否捕获对当前对象无效，都只是绑定事件而已，按照先后顺序执行

添加事件的轮子
function addEvent(obj, eventtype, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(eventtype, fn, false);
  } else if(obj.attachEvent){
    obj.attachEvent("on" + eventtype, function(){
      fn.call(obj);
    });
  } else {
    obj["on" + eventtype] = fn;
  }
}
```

```
修改函数中this的指向可以使用call, apply, bind
fun.call(this指向的对象, 参数1， 参数2...)
fun.apply(this指向的对象，[参数1，参数2...])
fun.bind(this指向的对象)  返回的一个新的函数，新的函数内部的this值为当前指定的
```

##20170830
```
基础数据类型都是值传递(包括数字，字符串，布尔值，undefined)
对象都是引用传递, 传递的是对象的内存地址，这个地址能够访问到真实的对象(数组，对象，函数，日期对象，数学对象)
```

自定义事件一：
```
var elem = document.querySelector('div');
//创建一个基于Event类型的事件
var eve = document.createEvent('Event');
//给事件定义一个名字
// initEvent(自定义事件名称，是否冒泡,true能冒泡，是否能被取消,false不能取消)
eve.initEvent('build', true, true);
//添加build事件
//e.target 表示当前的元素
elem.addEventListener('build', function (e) {
  console.log(this);
  console.log(e.target);
}, false);

var oSpan = document.querySelector('span');
oSpan.onclick = function() {
  elem.dispatchEvent(eve);
}
```

自定义事件二：
```
//创建一个自定义事件,事件名称为kaiyu
var eve = new Event('kaiyu');
var elem = document.querySelector('div');
var oSpan = document.querySelector('span');
elem.addEventListener('kaiyu', function () {
  console.log(this.innerText);
});
oSpan.onclick = function(){
  elem.dispatchEvent(eve);
}
```
自定义事件的调用，我们又称为分发，dispatch

```
//浏览器会向所有的事件方法中传递一个实际的事件对象，在方法中写一个 event接收
oDom.onclick = function(event) {
  event = event || window.event;
  event.type //通用的事件类型
  var target = event.target || event.srcElement; //事件目标,在冒泡中，依然是触发事件的那个元素

  event.currentTarget //在冒泡中，当前的对象
}

阻止事件传播（包括捕获和冒泡阶段）及兼容处理：
if (event.stopPropagation) {
  event.stopPropagation();
} else {
  event.cancelBubble = true;
}

阻止默认行为：
if (event.preventDefault) {
  event.preventDefault();
} else {
  event.returnValue = false;
}
```

模拟元素点击：
```
oDom.click(); //点击oDom
oDom.focus(); //获得焦点
oForm.submit(); //提交表单
oForm.reset(); //重置表单，让表单元素里面的值恢复默认值

验证错误会触发 invalid事件，这个时候可以自定义错误的显示方式， 
比如放到一个span元素中，而不是系统默认的弹出样式

获取当前input框的验证信息（html5的input类型)
oDom.validationMessage

设置自定义的错误信息：
oDom.validationMessage = '自定义值';
```

###鼠标移动事件相关的：
```
event.clientX, event.clientY
event.screenX, event.screenY
event.offsetX, event.offsetY 之前不兼容，或者现在用的时候无法使用，比如两个元素的时候会冒泡

键盘事件，得到输入的键码：
event.keyCode
event.key
```

事件委托：
```
oUl.onclick = function(event) {
  event = event || window.event;
  var t = event.target || event.srcElement;
  // console.dir(t);
  if (t.nodeName === 'LI') {
    t.parentNode.removeChild(t);
  }
}
```

contentEditable设置为 true,当前元素可以编辑

##20170831
```
keyCode对照表 http://www.cnblogs.com/shyy/archive/2012/04/09/2453029.html

HTML5表单里面的input可以支持正则验证
pattern属性里面写正则字符串，不带/
required表示当前值为必填
```

在一个普通的input元素，外面不包括form表单时，如何回车搜索或跳转：
```
document.addEventListener('DOMContentLoaded', function(){
  var oInput = document.querySelector('#search');
  oInput.addEventListener('keyup', function(event) {
    event = event || window.event;
    console.log(event.keyCode);//找到回车键的CODE的值
    if (event.keyCode === 13) {
    //判断输入的值是否是回车键
      location.href = "https://www.baidu.com/s?wd="+this.value;
	  //提交表单
	  //oForm.submit();
    }
  });
});
```

在表单中，回车切换到下一项实现一：批量绑定事件：
```
document.addEventListener('DOMContentLoaded', function(){
  var oInput = document.querySelectorAll('input');

  for (var i = 0; i < oInput.length; i++) {
    (function(i){
      oInput[i].addEventListener('keydown', function(event){
        event = event || window.event;
        //当前元素不是提交按钮，并且按回车
        if (this.type != "submit" && event.keyCode === 13) {
          event.preventDefault();//默认行为会提交表单
          oInput[i+1].focus();//让下一个元素获得焦点
        }
      });
    })(i);
  }
})
```


获取元素在页面中的净位置
```
function getAllTop(obj) {
  //累加器，累加器的初始为自己现在的offsetTop值
  var allTop = obj.offsetTop;
  //当前正在计算高度的元素
  var currentObj = obj;
  while (currentObj = currentObj.offsetParent) {
    allTop += currentObj.offsetTop;
  }
  return allTop;
}
```
(funciton getAlldistance(obj,distance){
    var alldistance=obj.offsetTop;
    var currentObj=obj;
    while(currentObj=currentObj.offsetParent){
        alldistance+=currentObj.(offset+'distance');
    }
    return alldistance;
})(函数没有封装好，还要完善)

页面卷动值：
```
//滚动时上方隐藏的距离兼容问题解决
var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
给body上方隐藏距离赋值，当等于0的时候，让返回顶部
document.body.scrollTop = document.documentElement.scrollTop = 0;
```

得到窗口的宽度和高度

```
//获得当前body的当前WIDTH+PADDING的值兼容问题
var windowwidth = document.body.clientWidth || document.documentElement.clientWidth;
var windowHeight = document.body.clientHeight || document.documentElement.clientHeight;
```

js实现响应式
```

通过窗口的resize事件实时得到当前窗口的宽度值，根据不同宽度切换不同的css外链样式
```

显示鼠标当前位置在所在元素的坐标
```
默认的有offsetX, offsetY, 之前不兼容
有些时候当有子元素的时候还是不可用，比如在放大镜，需要我们自己周转
var offsetXValue = event.clientY - (getAllTop(obj) - scrollTop);
```

##20170901
吸顶效果：
```
var mainNav =document.querySelector('#main-nav');
var topDis = getAllTop(mainNav);
window.onscroll = function(e) {
  var nowTop = document.documentElement.scrollTop || document.body.scrollTop;
  if(nowTop >= topDis) {
    mainNav.style.position = 'fixed';
    mainNav.style.marginTop = 0;
  }else {
    mainNav.style.position = 'relative';
    mainNav.style.marginTop = topDis + 'px';
  }
};

function getAllTop(obj) {
  var allTop = obj.offsetTop;
  while(obj = obj.offsetParent) {
    allTop += obj.offsetTop;
  }
  return allTop;
}
```


###绑定滚轮事件，得到滚动的方向值：
```
oDiv.onmousewheel = mousewheelHandler;
if (oDiv.addEventListener) {
	oDiv.addEventListener('DOMMouseScroll', mousewheelHandler, false);
}

function mousewheelHandler(event) {
	event = event || window.event;
	if (event.wheelDelta) {
		var direction = event.wheelDelta > 0 ? 1 : -1;
	} else if (event.detail) {
		var direction = event.detail > 0 ? -1 : 1;
	}
	oH2.innerText = direction;
}
```

###异常处理
```
try {
	可能会出错的代码
} catch(error) {
	console.log(error);
}
```

###JSON对象的序列化和反序列化
```
JSON.stringify(对象); 对象转换为字符串
JSON.parse(json格式的字符串); 字符串转为对象
```

##5点后的练习计划
- 20170828 练习批量绑定事件和对应模型
- 20170829 练习函数截流滚动或者延迟搜索
- 20170830 添加事件的轮子
- 20170831 写事件委托删除ul中的li子元素
- 20170901 写拖拽模型
- 20170902 getAllTop方法
