$(document).ready(function(){
  $(".ba").mouseover(function(){
    var src = $(this).find("img").attr("src").match(/[^\.]+/) + "_blue.jpg";
    $(this).find("img").attr("src", src);
  });
  $(".ba").mouseout(function(){
    var src = $(this).find("img").attr("src").replace("_blue.jpg", ".jpg");
    $(this).find("img").attr("src", src);
  });
});
