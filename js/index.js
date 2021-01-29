$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, 'swing', function(){
            window.location.hash = hash;
          });
        }
      });
    function myFunction(x) {
        var j = document.getElementsByClassName("dolazak-na-adresu");
        var k = document.getElementsByClassName("js");
        for(i=0; i<j.length; i++){
          if(x.matches){
              j[i].innerHTML = "Nameštaj od kože";
              k[i].setAttribute("href", "#nameštaj-od-kože");
          }
          else{
              j[i].innerHTML = "Dolazak na adresu";
              k[i].setAttribute("href", "tel:0649581826");
          }
        }
      }
      let touch_div = document.getElementsByClassName('touch_div');
      let is_touch_device = false;

      if ("ontouchstart" in document.documentElement) {  
          is_touch_device = true;
      }
      for(let i=0; i<touch_div.length; i++){
          if (is_touch_device) {
              touch_div[i].addEventListener('touchstart', function(){
              if(touch_div[i].classList.contains('touch-device-hovered')){
                  touch_div[i].classList.replace('touch-device-hovered', 'touch-device-unhovered');
              }else if(touch_div[i].classList.contains('touch-device-unhovered')){
                  touch_div[i].classList.replace('touch-device-unhovered', 'touch-device-hovered');
              }
              else{
                  touch_div[i].classList.add('touch-device-hovered');
              }
          });
          }else{
              touch_div[i].addEventListener('mouseenter', function(){
              if(touch_div[i].classList.contains('touch-device-hovered')){
                  touch_div[i].classList.replace('touch-device-hovered', 'touch-device-unhovered');
              }else if(touch_div[i].classList.contains('touch-device-unhovered')){
                  touch_div[i].classList.replace('touch-device-unhovered', 'touch-device-hovered');
              }
              else{
                  touch_div[i].classList.add('touch-device-hovered');
              }
              touch_div[i].addEventListener('mouseleave', function(){
                  touch_div[i].classList.replace('touch-device-hovered', 'touch-device-unhovered');
              })
          });
      }
  }
      var x = window.matchMedia("(max-width: 887px)");
      myFunction(x);
      x.addListener(myFunction);
})