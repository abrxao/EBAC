const checks = document.getElementsByName('service');
const forms = document.getElementById('forms');
const checkboxes = document.getElementById('checkboxes');


console.log(checks)

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
      console.log('aaaaaaaaaa');
    }
  }
});