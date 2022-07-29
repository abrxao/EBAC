function media(){

    var a= parseInt(document.getElementById("a").value);
    var b= parseInt(document.getElementById("b").value);
    var c= parseInt(document.getElementById("c").value);
    
    var med = (a+b+c)/3;
    
    document.getElementById("result").innerHTML = "Resultado: " + med;
    
    console.log(a+b+c);
    }