$(document).ready(function(){
    $(".question").click(function(){
  
  
  var idNum = $(this).attr("id");
  
  
  if($(".answer."+idNum).is(":visible"))
  {
  
  
  
  
  
   $("#"+idNum+" img").attr("src","./assets/images/icon-plus.svg")
  
  
   
  
   $(".answer").slideUp("fast");
   
   return ;
  }
     
  
   else
  {
   
  if($(".answer").is(":visible"))
        {
        
          $(".answer").slideUp("fast");
         
        }
  }
  $("."+idNum).slideDown("fast");
  
     
  
  
     
  $(".question img").attr("src","./assets/images/icon-plus.svg");
  $("#"+idNum+" img").attr("src","./assets/images/icon-minus.svg")
                            
    });
  });