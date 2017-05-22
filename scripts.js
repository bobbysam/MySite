 $(".middle-mid").hide();
  $(".middle-mid-1").hide();
   $(".middle-right").hide();
$(".btn1").click(function(){

    $(".middle-left").show();

});

$(".btn2").click(function(){
     $(".middle-mid").show();
     $(".middle-left").hide();
  $(".middle-mid-1").hide();
   $(".middle-right").hide();

   

});
$(".btn3").click(function(){
    $(".middle-mid-1").show();
    $(".middle-mid").hide();
  $(".middle-left").hide();
   $(".middle-right").hide();


   

});
$(".btn4").click(function(){
      $(".middle-right").show();
      $(".middle-mid").hide();
  $(".middle-mid-1").hide();
   $(".middle-left").hide();

   

});