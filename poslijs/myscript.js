var extarray;



$(document).ready(function(){
    extarray=document.getElementsByName("extra");

    var druh;
    var cena;   
   $('#auta').click(function(){
   cena=parseInt (this.value);
   druh=$('#auta option:selected').text();
   $('#cena').text(cena);
   $('#auto-prehlad').text(druh);
   
   });


   var priplatok=0;
var color;
$('.barva').click(function(){
priplatok=parseFloat(this.getAttribute("value"));
color=this.getAttribute("data-type");
$('#cena').text(cena+(cena*priplatok));
$('#auto-farba').text(color);

});

var pridatIng;
var zaDoplnky;
$('.extra').click(function(){
pridatIng="";
zaDoplnky=0;
for(let index=0;index<extarray.length;index++)
{
    if(extarray[index].checked){
        pridatIng+=extarray[index].getAttribute("data-value")+ "<br>";
        zaDoplnky+= parseInt(extarray[index].getAttribute("data-price"));
    }
}
$('#pohodlie').html(pridatIng);
$('#cena').text(cena+(cena*priplatok)+zaDoplnky);

});

// samostatny checkbox
var tuni;
$('#tuning').click(function(){
    if($("#tuning").is(':checked')){
        tuni=parseFloat(cena*0.20);
        $('#tuning-auta').text("ano");
         $('#cena').text(cena+(cena*priplatok)+zaDoplnky+tuni);

   } 
   else{
    tuni=parseFloat(cena*0);
    $('#tuning-auta').text("nie");
    $('#cena').text(cena+(cena*priplatok)+zaDoplnky+tuni);

}
 

});

var overeni;
$('#utrata').change(function(){
overeni=parseInt(this.value);
});

var rozdiel;
$('#over').click(function(){
rozdiel=parseInt(cena-overeni);
if(cena>overeni){
  $('#oznam').text("nevojde!!!");
  $('#oznam').css({'font-size':'40px','color':'red'});
}
else{
  $('#oznam').text("vojde");
}
});

$(document).on('keypress',':text,textarea', function () {
    if (this.value.match(/[^a-zA-Z0-9 ]/g)) {
      this.value = this.value.replace(/[^a-zA-Z0-9 ]/g, '');
      $('#oznamenie').text("nemožno vkladať špecialne znaky!!!")
    }
  });
  









});
