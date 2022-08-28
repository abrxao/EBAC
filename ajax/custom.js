const url_cep = "https://viacep.com.br/ws/";
const input = document.querySelector("#cep");
const result = document.querySelector(".cep__result");

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
                    result.innerHTML += "<p> "+key + " = " +data[key]+"</p><br>";
                });
            }
        });
    }
});

const url_reqes="https://reqres.in/api/users?delay=3";
const perfis= document.querySelector('#perfil');
var cards='';

fetch(url_reqes)
.then((res) => res.json())
.then((data)=>{
    perfis.innerHTML="";
    perfis.classList.add("perfil");
    data.data.map((perfil)=>{
        
        if(perfil.id==1){
            perfis.innerHTML += `<div class="perfil__destack"id="${perfil.id}">
            <div class="perfil__disable">
            </div><div class="perfil__window">
            </div><div class= "perfil__info">
            <h3>${perfil.first_name} ${perfil.last_name}</h3>
            <img src="${perfil.avatar}"></img>
            <p>E-mail: '${perfil.email}'</p>
            </div>
            </div>`; 
        }else{
            perfis.innerHTML += `<div class="perfil__card" id="${perfil.id}">
            <div class="perfil__window"></div>
            <div class= "perfil__info">
            <h3>${perfil.first_name} ${perfil.last_name}</h3>
            <img src="${perfil.avatar}"></img>
            <p>E-mail: '${perfil.email}'</p>
            </div>
            </div>`; 
        }
        
    });
    
    var cardAux = '';
    cards =document.querySelectorAll('.perfil__card');
    cards.forEach(card=>{
        card.addEventListener('click', e =>{
            cards.forEach(c=>{c.classList.add('noClick')})

            var destack = document.querySelector('.perfil__destack');
            var wdwCard = card.querySelector('.perfil__window');
            var wdwDestack = destack.querySelector('.perfil__window');
            cardAux = destack.querySelector('.perfil__info').innerHTML;
            
            wdwDestack.setAttribute('style','animation: .8s switchEnd ease-in-out');
            wdwCard.setAttribute('style','animation: .8s switchRot ease-in-out');            
            
            setTimeout(()=>{
                dbcAux= card.querySelector('.perfil__info').innerHTML;
                destack.querySelector('.perfil__info').innerHTML=card.querySelector('.perfil__info').innerHTML;
                card.querySelector('.perfil__info').innerHTML=cardAux;
            },400)
            setTimeout(()=>{
                wdwCard.setAttribute('style','animation:none')
                wdwDestack.setAttribute('style',"animation:none");
                cards.forEach(c=>{c.classList.remove('noClick')})
            },800)
            
        });
    })
})
