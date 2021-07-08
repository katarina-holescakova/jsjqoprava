console.log("idee");
var druh;
    var cena;  
function autoroleta(){
       var e = document.getElementById("auta");
        cena = parseInt(e.options[e.selectedIndex].value);
        druh = e.options[e.selectedIndex].text;
          
           document.getElementById("auto-prehlad").innerHTML=druh;
           document.getElementById("cena").innerText=cena;
       }
    
       var color;
       var priplatok=0;
       var ele=document.getElementsByName('barva');
         
           function radiobut() {
               for(i = 0; i < ele.length; i++) {
                   if(ele[i].checked){
           color=ele[i].getAttribute("data-type");
           priplatok=parseFloat(ele[i].value);
                   }
               }
               document.getElementById("auto-farba").innerHTML=color;
               document.getElementById("cena").innerHTML=(cena+(cena*priplatok));
           }






           var pridatIng;
var zaDoplnky;
var extarray;
extarray=document.getElementsByName("extra");
function extravyber(){
    pridatIng="";
zaDoplnky=0;
    for(let index=0;index<extarray.length;index++)
    {
        if(extarray[index].checked){
            pridatIng+=extarray[index].getAttribute("data-value")+ " //";
            zaDoplnky+= parseInt(extarray[index].getAttribute("data-price"));
        }
    }
    document.getElementById('pohodlie').innerHTML=pridatIng;
    document.getElementById('cena').innerText=(cena+(cena*priplatok)+zaDoplnky);
}
var tuni;

function tun(){
    if(document.getElementById("tuning").checked){
       tuni =parseFloat(0.2*cena);
        document.getElementById('cena').innerText=(cena+(cena*priplatok)+zaDoplnky+tuni);
        document.getElementById('tuning-auta').innerText=("ano");
    }
    else{
        tuni=parseInt(0);
        document.getElementById('cena').innerText=(cena+(cena*priplatok)+zaDoplnky+tuni);
        document.getElementById('tuning-auta').innerText=("ne");

    }
    }







var overeni;
var rozdiel;
function overenie (){

    overeni=parseInt(document.getElementById('utrata').value);
    rozdiel= parseInt(cena-overeni);
    if (cena>overeni){
        document.getElementById('overenie').innerText="nevojdee";
        document.getElementById('overenie').style.color="red";

    }
    else{
        document.getElementById('overenie').innerText="vojde";

    }
}




function jentextcisla()
{
  with (event)
  {
    c1=(keyCode>32 && keyCode<48);
    c2=(keyCode>57 && keyCode<65);
    c3=(keyCode>90 && keyCode<97);
    c4=(keyCode>122 && keyCode<127);
    if (c1 || c2 || c3 || c4){ returnValue=false;
    document.getElementById('oznam').innerText=("nemožno vkladať špecialne znaky!!!");
    }
  }

}




