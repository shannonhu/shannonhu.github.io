$(document).ready(function() {
  // alert("Underneath the downpour");
  $("#man").draggable();
  $("#umbrella").draggable();
  $("#text1").fadeIn(2000);
  $("#text1").hover(function(){
    $("#img1").show();
    $("#man").fadeIn(1250);
    $("rainsound").playAudio();
  })
  $("#man").hover(function() {
    $("#text2").fadeIn(2000);
    $("#umbrella").fadeIn(2000);
  })
  $("#text2").hover(function() {
    $("#text3").fadeIn(2000);
    $("#text4").fadeIn(2000);
  })
  $("#text3").hover(function() {
    $("#text4").append("<br>RAIN");
  })
  $("#text4").hover(function() {
    $("#text4").css("color","blue");
  })
  $("#umbrella").click(function() {
    $("#img1").hide();
    $("#rainsound").pause();
  })

})
