var inc=(function(){
    var count=0;
    return function(){ return count++;}
})();
//funcion recursiva.

function suma (a,b, callback)
{
    var resultado = parseInt(a)+parseInt(b);
  
    callback(resultado);
    
}
window.onload = function()
{


var btnSumar = document.getElementById("btnSumar");
btnSumar.addEventListener("click",function () {
    var txta = document.getElementById("txta").value;
    var txtb = document.getElementById("txtb").value;
    
   suma(txta,txtb,function(res){
       alert ("La suma es :"+res);
   });
})
 
}
var Auto= function(nafta)
{
    var _nafta =nafta;

    this.setnafta = function(value){
        _nafta += value;
    }
    this.getnafta = function(){
        return _nafta;
    }
}

var auto1 = new Auto(100);
auto1.setnafta(50);
alert(auto1.getnafta());

auto2 = {
    nafta:100,
    puertas: 5,
    patenta: "aaa111"
}
auto2.nuevapropiedad = 10;

auto2 = {
    nafta:200;
}
auto2 = {};
auto2.nafta= 200;
/*document.getElementsByTagName();//trae todos los valores de lo que se determine
document.getElementsByClassName();*/
