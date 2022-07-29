const camposObrigatorios = document.querySelectorAll('input.obrigatorio');
const campoUF = document.querySelectorAll('input.uf');
const campoCEP = document.querySelectorAll('input.cep');
const campoTele = document.querySelectorAll('input.tele');
const campoEmail = document.querySelectorAll('input.email');
const formulario = document.querySelectorAll('forms');

for( let emFoco of camposObrigatorios){
    validaCampo(emFoco);
}

for( let emFoco of campoUF){
    validaCamposUF(emFoco);
}

for( let emFoco of campoEmail){
    validaEmail(emFoco);
}

for(let emFoco of campoCEP){
    validaCep(emFoco);
}

for(let emFoco of campoTele){
    validaTele(emFoco);
}

for(let emFoco of formulario){
    validaForms(emFoco);
}


button.disabled = true;

if(campoCEP=='' && campoEmail==''&& campoTele=='' && camposObrigatorios=='' && campoUF == ''){
    botao.disabled = true;
}

if(formulario)
{    formulario.addEventListener('submit', function(evento){

        evento.preventDefault();
        evento.stopPropagation();

        if(camposObrigatorios.match(/''/)) {
            return false; 
                      
        }
        
    });}


function validaCampo(elemento){

        elemento.addEventListener('focusout', function(event) {
    
            event.preventDefault();
    
            if(this.value==""){
                document.querySelector('.mensagem').innerHTML = "Algo não esta certo?<br>Verifique as informações em vermelho<br>";
                this.classList.add('erro');
                this.parentNode.classList.add('erro');
                botao.disabled = true;            
                return false;


            } else {
                document.querySelector('.mensagem').innerHTML = "";
                this.classList.remove('erro');
                this.parentNode.classList.remove('erro');
                botao.disabled = false;
                              
            }
    
        }
        );
    }

 function validaCamposUF(elemento){

        elemento.addEventListener('focusout', function(event) {
    
            event.preventDefault();
    
            if(this.value.match(/AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO/i)){
                document.querySelector('.mensagem').innerHTML = "";
                this.classList.remove('erro');
                this.parentNode.classList.remove('erro');
                botao.disabled = false;  
                return false;

            } else {
                document.querySelector('.mensagem').innerHTML = "Algo não esta certo?<br>Verifique as informações em vermelho<br>";
                this.classList.add('erro');
                this.parentNode.classList.add('erro');
                botao.disabled = true;  
            }
    
        }
        );
    }

function validaCep(elemento){

    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        
        if(this.value.match(/\d{5}-\d{3}/)){
            document.querySelector('.mensagem').innerHTML="";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            botao.disabled = false;  
        }

        else{
            document.querySelector('.mensagem').innerHTML="Algo não esta certo?<br>Verifique as informações em vermelho<br>";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            botao.disabled = true;  
        }
    }
);
}

function validaTele(elemento){

    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        
        if(this.value.match(/\d{11}/)){
            document.querySelector('.mensagem').innerHTML="";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            botao.disabled = false;  
        }

        else{
            document.querySelector('.mensagem').innerHTML="Algo não esta certo?<br>Verifique as informações em vermelho<br>";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            botao.disabled = true;  
        }
    }
);
}

function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)){
            document.querySelector('.mensagem').innerHTML="";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            botao.disabled = false;  
        }

        else{
            document.querySelector('.mensagem').innerHTML="Algo não esta certo?<br>Verifique as informações em vermelho<br>";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            botao.disabled = true;
        }
    }
);
}

    
    

    

    
    
    
    

    
