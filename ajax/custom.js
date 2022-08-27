const url_cep = "https://viacep.com.br/ws/";
const input = document.querySelector("#cep");
const result = document.querySelector(".result");


input.addEventListener("keyup", () =>{
    if(input.value.length==8){
        fetch(url_cep + input.value+"/json")
        .then((res) => res.json())
        .then((data)=>{
            if(data.erro=='true'){
                result.innerHTML="Digite um cep válido";  
            }else{
                result.innerHTML="";
                Object.keys(data).forEach(key =>{
                    result.innerHTML += key + " = " +data[key]+"<br>";
                });
            }
        });
    }
});

const url_reqes="https://reqres.in/api/users?delay=3";
const perfis= document.querySelector('#perfil');

fetch(url_reqes)
.then((res) => res.json())
.then((data)=>{
    perfis.innerHTML="";
    perfis.classList.add("perfil");
    data.data.map((perfil)=>{
        if(perfil.id==1){
            perfis.innerHTML += '<div class="perfil__destack" id="'+perfil.id+'"><div class="perfil__disable"></div><div class="perfil__window"></div><div class= "perfil__info"><h3>'+perfil.first_name+" "+perfil.last_name+'</h3><img src="'+perfil.avatar+'"></img><p>E-mail: '+perfil.email+'</p></div></div>'; 
        }else{
            perfis.innerHTML += '<div class="perfil__card" id="'+perfil.id+'"><div class="perfil__window"></div><div class= "perfil__info"><h3>'+perfil.first_name+" "+perfil.last_name+'</h3><img src="'+perfil.avatar+'"></img><p>E-mail: '+perfil.email+'</p></div></div>'; 
        }
    });
})

perfis.addEventListener('click', (e) =>{
    if(e.target.classList.value=="perfil__disable"){
    }else{
        
        var infoDest = document.querySelectorAll('.perfil__info');
        var destack = infoDest[0].innerHTML;
        var aux = destack;
        var click = e.target;
        var first = click.querySelector('.perfil__info');
        var swt = "";
        
        if(click.parentNode.parentNode.classList.value=='perfil__card'){
            swt = click.parentNode.parentNode.querySelector('.perfil__window'); 
        }else{
            swt = click.querySelector('.perfil__window'); 
        }
        
        
        var swtDest = document.querySelector('.perfil__destack').querySelector('.perfil__window');
        swtDest.setAttribute('style','animation: .8s switchEnd ease-in-out');
        swt.setAttribute('style','animation: .8s switchRot ease-in-out');
        
        if(e.target.classList.value=="perfil__card"){
            setTimeout(()=>{
                infoDest[0].innerHTML=first.innerHTML;
                first.innerHTML=aux;
                
            },400)
            setTimeout(()=>{
                swt.setAttribute('style','animation:none')
                swtDest.setAttribute('style',"animation:none");
                
            },820)   
            
            return true;     
            
        }
        else if (click.parentNode.parentNode.classList.value=="perfil__card"){
            setTimeout(()=>{
                infoDest[0].innerHTML=click.parentNode.innerHTML;
                click.parentNode.innerHTML=aux;
            },400)
            setTimeout(()=>{
                swt.setAttribute('style','animation:none')
                swtDest.setAttribute('style',"animation:none");
                
            },820) 
            return true;
        }
    }
    
});
