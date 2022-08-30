const swt = document.getElementById('swt');
const html = document.querySelector('html');

swt.addEventListener('change',()=>{
    html.classList.toggle('light-mode');
})



const url_cep = "https://viacep.com.br/ws/";
const cep = document.querySelector("#cep");
const rua = document.querySelector("#rua");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#city");
const email = document.querySelector("#email");
const form = document.querySelector("#forms");
const inputs = form.querySelectorAll("input");

function validaCep(cep){    
    cep = cep.replaceAll(/[^0-9]/g,'');
    if(!cep.match(/^[0-9]/ig) || cep.length!='8'){
        return false;
    }else{
        return true;
    }
}

function validaEmail(email){
    if(email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi)){
        email.parentNode.querySelector('span').classList.remove('invalid');
        email.parentNode.querySelector('span').classList.add('valid');
    }else{
        email.parentNode.querySelector('span').classList.remove('valid');
        email.parentNode.querySelector('span').classList.add('invalid');
    }
}

function validaCampos(form){
    inputs.forEach((camp)=>{
        if(camp.parentNode.querySelector('span').classList!=""){
            if(camp.value.length>3 && camp.value != ""){
                camp.parentNode.querySelector('span').classList.remove('invalid');
                camp.parentNode.querySelector('span').classList.add('valid');            
            }
            else if (camp.getAttribute('type')!= "email" && camp.parentNode.querySelector('span').classList.value != "verify valid"){
                camp.parentNode.querySelector('span').classList.add('invalid');
                camp.parentNode.querySelector('span').classList.remove('valid');
                window.location.href = "#alert";
                formValid = false;
            }
            else if (camp.getAttribute('id')!= "cep" || camp.parentNode.querySelector('span').classList.value == "verify invalid" && validaCep(camp.value)==false){            
                camp.parentNode.querySelector('span').classList.value = "verify invalid";
                window.location.href = "#alert";
                formValid = false;
            }
            else{
                window.location.href = "#alert";
                camp.parentNode.querySelector('span').classList.add('invalid');
                camp.parentNode.querySelector('span').classList.remove('valid');
                formValid = false;
            }
        }
        
    });
}

email.addEventListener("focusout", ()=>{
    validaEmail(email)
});

cep.addEventListener("focusout", ()=>{
    if(cep.value.length == 0){
        cep.parentNode.querySelector('span').classList.value = '';
        rua.value = "";  
        rua.parentNode.querySelector('span').classList.value = ('verify');                                              
        city.value = "";
        city.parentNode.querySelector('span').classList.value = ('verify');
        bairro.value = "";
        bairro.parentNode.querySelector('span').classList.value = ('verify');
    }else if(cep.value.length<9){
        cep.parentNode.querySelector('span').classList.value = 'verify invalid';
    }
});

cep.addEventListener("keypress" ,(e) =>{
    
    if(cep.value.length==5 && e.key!="-" && e.key!="Backspace"){
        cep.value +='-';
    }
    cep.value = cep.value.replace(/[^0-9|-]/g,'')
    
    setTimeout(()=>{
        if( cep.value.length==9 && validaCep(cep.value)==true){
            fetch(url_cep + cep.value+"/json")
            .then((res) => res.json())
            .then((data)=>{
                if(data.erro=='true' || data.logradouro==undefined){
                    cep.parentNode.querySelector('span').classList.value = ('verify invalid');
                    rua.value = "";  
                    rua.parentNode.querySelector('span').classList.value = ('verify');                                              
                    city.value = "";
                    city.parentNode.querySelector('span').classList.value = ('verify');
                    bairro.value = "";
                    bairro.parentNode.querySelector('span').classList.value = ('verify');
                }
                else{
                    console.log(data.logradouro);
                    rua.value = data.logradouro;  
                    rua.parentNode.querySelector('span').classList.value = ('verify valid');                                              
                    city.value = data.localidade;
                    city.parentNode.querySelector('span').classList.value = ('verify valid');
                    bairro.value = data.bairro;
                    bairro.parentNode.querySelector('span').classList.value = ('verify valid');
                    cep.parentNode.querySelector('span').classList.value = ('verify valid');
                }
            });
        }        
    },0)
    
    
    
});

var alerta = document.querySelector('#alert');
window.location.href = "#";

form.addEventListener("submit",e=>{ 
    formValid = true;
    var a = validaCampos(form);
    console.log(formValid);
    if (formValid==true){
        form.submit();
    }
    
    e.preventDefault();
    setTimeout(()=>{
        window.location.href = "#";
    },3000)
});
