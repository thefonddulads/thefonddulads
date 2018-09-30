var click=false;

$(window).ready(function(){
    if($(window).width()<700){
   $("#nav-body-toggle").click(function(){
       $("#navbar-body").slideToggle('fast')
   })
  }
  $(".logoimage").click(function() {
    click=true;
  });
  $(window).resize(function(){
      if(click){
          window.location='login.html';
      }
  });
});
