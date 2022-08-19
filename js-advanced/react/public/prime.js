//USANDO MAP
var carros = [
    {   
        nome:"Focus",
        marca:"Ford",
        consumo:8,
        preço:28000,
        motor:2.0,
        ano:2005,
        economico:""
    },
    {   
        nome:"500",
        marca:"Fiat",
        consumo:7,
        preço:20000,
        motor:1.6,
        ano:2017,
        nivelEco:""
    },
    {   
        nome:"Palio",
        marca:"Fiat",
        consumo:15,
        preço:25000,
        motor:1.0,
        ano:1999,
        nivelEco:""
    },
    {   
        nome:"Onix",
        marca:"Chevrolet",
        consumo:11,
        preço:40000,
        motor:1.0,
        ano:2021,
        nivelEco:""
    }
]

var eco = carros.map(a=>{
    if(a.consumo>0. && a.consumo<=7){
        a.nivelEco="pouco economico";
        return a;
    }
    else if(a.consumo>7 && a.consumo<=9.7){
        a.nivelEco="economico";
        return a;
    }else{
        a.nivelEco="muito economico";
        return a;
    }
})
console.log(eco);

//USANDO FOREACH
const inputs= document.querySelectorAll('input');
const button= document.querySelector('#send');

button.addEventListener('click', ()=>{
    document.querySelector('.resultForeach').innerHTML="";
    inputs.forEach((a)=>{
            document.querySelector('.resultForeach').innerHTML += a.value.replaceAll('a','o') + "<br>";
        });
});

//USANDO REDUCE
var bankMoves = [
    {
        tipo:"salario",
        valor:1000
    },
    {
        tipo:"comida",
        valor:-25
    },
    {
        tipo:"roupa",
        valor:-200  
    },
    {
        tipo:"combustivel",
        valor:-125 
    },
    {
        tipo:"Internet",
        valor:-300
    }
];

var saldo = bankMoves.reduce((a,b)=>{
    return {valor:a.valor+b.valor};
});

console.log("Seu saldo do mês é "+saldo.valor)

//USANDO FILTER

const btn2= document.querySelector('#send2');
const resultFilter= document.querySelector('.resultFilter');

btn2.addEventListener('click', ()=>{
    resultFilter.innerHTML ="";
    var slc = document.getElementById("slc");
    carros.filter((a)=>{
        if(a.marca==slc.value){
            resultFilter.innerHTML += "<div class='result'>Marca: "+a.marca+"<br>"+"Nome: "+a.nome+"<br>"+"Ano: "+a.ano+"</div>"
        }
    }) 
});