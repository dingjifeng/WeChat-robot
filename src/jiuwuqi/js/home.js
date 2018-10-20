$(function () {
  setDefSize();
});

$(window).resize(function () {// 绑定到窗口的这个事件中
  setDefSize();
});

function setDefSize() {
  var defW = 100 / 1920;// 表示1920的设计图,使用100PX的默认值
  var vh = window.innerHeight;// 当前窗口的高度
  var vw = window.innerWidth;// 当前窗口的宽度
  var rem = vw * defW;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  $('html').css('font-size', rem + "px");
}
