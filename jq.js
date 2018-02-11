$(window).ready(function(){
    if($(window).width()<700){
   $("#nav-body-toggle").click(function(){
       $("#navbar-body").slideToggle('fast')
   })
  }
})
