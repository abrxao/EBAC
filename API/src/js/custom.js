const checks = document.getElementsByName('service');
const forms = document.getElementById('forms');
const checkboxes = document.getElementById('checkboxes');

forms.addEventListener('submit', function(e){
  e.preventDefault();

  for(let i=0; i<checks.length; i++){

    if(checks[i].checked){
      checkboxes.classList.remove('show');
      forms.submit();  
      break;      
    }
    else{      
      checkboxes.classList.add('show');
    }
  }
});


const modalDesc = document.getElementById('modal-desc');
const modal = document.getElementById('modal');

modalDesc.addEventListener('click', (e)=>{
  if(e.target==modalDesc){
    window.location = "";
  }
});

modal.addEventListener('click', (e)=>{
  if(e.target==modal){
    window.location = "";
  }
});