
$(document).ready(function() {
  
  $('#forms').submit(function(e) {
    for(let i=0; i<3; i++) {
      if($('.modal__body__forms__checkboxes input').is(':checked')){
        $('.modal__body__forms__checkboxes__alert').hide();
        
      }else{
        $('.modal__body__forms__checkboxes__alert').show();
        e.preventDefault();
      }
    }
    });

  });