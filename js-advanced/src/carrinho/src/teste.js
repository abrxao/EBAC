/*import {personImc, sum, IMC} from './export.js';

var pessoa = new personImc('1.80','82');

var pessoa2 = new personImc('1.80','72');

var gente = [pessoa];
gente.push()

console.log(gente);

var a = [2,1,5,4];

var people = [
    {nome:'abraao',idade:22},
    {nome:'lorena',idade:18},
    {nome:'nina',idade:30}
]

var cash = [20,35,-40,11];

function teste(ele){
    ele.map((ele)=>{
        ele.idade += 2;
        return ele;
    });
}
teste(people)

console.log(people);


cash.forEach((e)=>{
    
    if(e%2!=0){
        e+=' é impar';
    }else{
        e+=' é par';
    }
    
    console.log(e);
    
});

console.log(
    cash.reduce((a, b)=>{
        
        console.log(cash[2])
        return a+b;
    })
    )
    
    console.log(sum(a));
    console.log(IMC(pessoa));*/
    
    import  {Products}  from "./export.js";
    
    var product1 = new Products(100,1,"Calça",0);
    var product2 = new Products(50,2,"Tênis",0);
    var product3 = new Products(300,3,"Corta-Vento",0);
    var allProducts = [product1,product2,product3];
    
    
    
    const buttons = document.querySelectorAll('button');
    const add = document.querySelector('.add-products');
    const result = document.querySelector('.result');
    var x1;
    var x2;
    let total;
    var cntr = 1;
    var cntr2 = 1;
    
    var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            
            if(mutation.target.getAttribute('class')=='qtd' && cntr==1){ cntr--;
                x1 = document.querySelector('#x1');
                x1.addEventListener('click',()=>{
                    
                    if(product1.qtd<1){
                        
                    }else{
                        product1.qtd--;
                        document.querySelector('.qtd').innerHTML=product1.qtd;
                        var sum=0;
                        total = allProducts.reduce((a,b)=>{
                            sum = a +b.price*b.qtd;
                            return sum;  
                        },0);
                        
                        result.innerHTML = 'R$' + total;
                    }
                });
            }

            else if(mutation.target.getAttribute('class')=='qtd2' && cntr2==1){
                cntr2--;
                x2 = document.querySelector('#x2');
                x2.addEventListener('click',()=>{
                    
                    if(product2.qtd<1){
                        
                    }else{
                        product2.qtd--;
                        document.querySelector('.qtd2').innerHTML=product2.qtd;
                        var sum=0;
                        total = allProducts.reduce((a,b)=>{
                            sum = a +b.price*b.qtd;
                            return sum;  
                        },0);
                        
                        result.innerHTML = 'R$' + total;
                    }
                });
                
            }
            
            /*else if(mutation.target.getAttribute('class')=='qtd2' && cntr==1){ cntr--;
                x1 =document.querySelector('.exclud');
                x1.addEventListener('click',()=>{
                    
                    if(product2.qtd<1){
                        
                    }else{
                        product2.qtd--;
                        document.querySelector('.qtd').innerHTML=product2.qtd;
                        
                    }
                    
                });
            }*/
            
        });
    });
    
    mutationObserver.observe(document.documentElement, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
    });
    
    buttons.forEach((b)=>{
        b.addEventListener('click', ()=>{
            
            switch(b.getAttribute('id')){
                case "1":
                
                total+=product1.price;
                if(!add.innerHTML.match(/calça/ig)){
                    add.innerHTML += '<div class="line-pr"><p>Calça</p><div class="change-btn"><button id="x1" class ="exclud" > - </button><p class="qtd"></p><button id="1" class ="soma" > + </button></div></div>';
                }
                
                product1.qtd++;
                var qtd = document.querySelector('.qtd');
                qtd.innerHTML =" " + product1.qtd;
                
                
                break;
                
                case "2":
                total+=product2.price;
                if(!add.innerHTML.match(/tenis/ig)){
                    add.innerHTML += '<div class="line-pr"><p>Tenis  </p> <div class="change-btn"><button id="x2" class ="exclud"> - </button><p class="qtd2"></p><button id="1" class ="soma"> + </button></div></div>';
                }
                var qtd2 = document.querySelector('.qtd2');
                product2.qtd++;
                qtd2.innerHTML =" " + product2.qtd;
                break;
                
                case "3":
                total+=product3.price;
                if(!add.innerHTML.match(/Corta-vento/ig)){
                    add.innerHTML += '<div class="line-pr"><p>Corta-vento  </p> <div class="change-btn"><button id="x3" class ="exclud"> - </button><p class="qtd3"></p><button id="1" class ="soma"> + </button></div></div>';
                }
                var qtd3 = document.querySelector('.qtd3');
                product3.qtd++;
                qtd3.innerHTML =" " + product3.qtd;
                break;
            }
            var sum=0;
            total = allProducts.reduce((a,b)=>{
                sum = a +b.price*b.qtd;
                return sum;  
            },0);
            
            result.innerHTML = 'R$' + total;
            
        });
    });
    
    
    
    
    
    
    
    
    
    
    
    
    