$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - 150;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function () {
  // 別ページの場合は以下
var urlHash = location.hash;
if (urlHash) {
  $('body,html').stop().scrollTop(0);
  setTimeout(function(){
    // ヘッダー固定の場合はヘッダーの高さを数値で入れる、固定でない場合は0
    var headerHight = 150;
    var target = $(urlHash);
    var position = target.offset().top - headerHight;
    $('body,html').stop().animate({scrollTop:position}, 500);
}, 300);
}
});