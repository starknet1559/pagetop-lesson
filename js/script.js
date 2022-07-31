$(function(){
  $('#back a').on('click',function(event){
  // #back内のaタグがクリックされたときの処理
  //$('#id名 要素名')と指定すると、id内の子要素に対してのみ指定
    $('body,html').animate({
  //body要素またはhtml要素」の意味
      scrollTop:0
  //スクロール位置を取得できるメソッド、今回は0なので最上部
    },800);
    event.preventDefault();
  //aタグの機能を無効にするメソッド
  });
});