const camposNumericos = document.querySelectorAll('.numerico');

const email = document.querySelector('.email');
const inputs = document.querySelectorAll('input')
const forms = document.querySelector('form');
const msg = document.querySelector('.mensagem');
const CEP = document.getElementById('cep');
const tel = document.querySelector('#tel');
const UF = document.querySelector('.uf')

const button = document.querySelector('button');

class User{
    constructor(user='',email='',tel='',postal='',city='',uf=''){
        this.user=user,
        this.email=email,
        this.tel=tel,
        this.postal=postal,
        this.city=city,
        this.uf=uf
    }
    
}

const anwser = new User('teste');

//Regexes

const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;

const UFs= /AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO/i;

// Verifying valadition of submit

forms.addEventListener('submit', (e)=>{
    
    e.stopPropagation();
    anwser.user = inputs[0].value;
    anwser.city = inputs[4].value;
    anwser.uf = inputs[5].value.toUpperCase();
    
    inputs.forEach((elem)=>{
        
        if( elem.value =="" || elem.classList.contains('erro') ) { 
            e.preventDefault();
            msg.innerHTML = "Verifique os campos vazios ou em vermelho"
        }
    });
    
    
});

// Validations

camposNumericos.forEach((elem)=>{
    elem.addEventListener('focusout', ()=>{
        
        var cp = elem.value.replaceAll(/\D/g,"");
        
        switch(cp.length){
            case 8:
                elem.classList.remove('erro');
                anwser.postal=cp;
                msg.innerHTML = "";
            break;
            
            case 11:
                elem.classList.remove('erro');
                anwser.tel=cp;
                msg.innerHTML = "";
            break;
            
            default:
                elem.classList.add('erro');
                msg.innerHTML = "Verifique os campos em vermelho"
        }
        
    });
});

email.addEventListener('focusout', (e)=>{
    if(!email.value.match(emailValido)){
        email.classList.add('erro');
        msg.innerHTML = "Verifique os campos em vermelho";    
    }else{
        email.classList.remove('erro');
        msg.innerHTML = "";
        anwser.email=email.value;
    }
});


UF.addEventListener('focusout', (e)=>{
    if(UF.value.match(UFs)){
        UF.classList.remove('erro');
        msg.innerHTML = '';
    }else{
        UF.classList.add('erro');
        msg.innerHTML = 'Verifique os campos em vermelho';
    }
});

//User experience

tel.addEventListener('focus', ()=>{

    if(tel.value==''){
        tel.value+='(';
    }
});

tel.addEventListener('keypress', (e) => {
    
    switch(tel.value.length){
        case 0:
        tel.value='(';
        break;
        case 3:
        tel.value += ') ';
        break;
        case 10:
        tel.value +='-'
        break;
    }
});

CEP.addEventListener('keypress', (e) => {
    
    if(CEP.value.length == 5){
        CEP.value+='-';  
    }
});



