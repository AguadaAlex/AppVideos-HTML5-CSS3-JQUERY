
var cuerpo;
$( document ).ready(function() {


const result = new URLSearchParams(window.location.search);

cuerpo = document.getElementById("autocompletado");


cuerpo.setAttribute("value","Titulo : "+ result.get("titulo")+" "+result.get("desripcion"));
document.getElementById("resultado").innerHTML=cuerpo.value;
});

function compartir(){

	var body = $("input[id=bdy]").val();
	
	body=encodeURI(body.trim());
	$("input[id=bdy]").val( body);
	
    var mailpara = 'mailto:'+ document.getElementById("destinatario").value;
 	var compartir = document.getElementById('compartir');
 	
    compartir.action=mailpara ;
}
