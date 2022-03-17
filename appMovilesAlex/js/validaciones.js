
//Expresión para validar un correo electrónico
//función click
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

var expr2 = /^[a-zA-Z]+$/;;
function valeval(){
    var nombre = $("#Nombre").val();
    var apellido = $("#Apellido").val();
    var fecha = $("#fechaDeNacimiento").val();
    var rb=$("input[type='radio']:checked").val();
    var sel=$("#Valoracion option:selected").val();
    var correo = $("#Email").val();
    var comentario=$("#Comentario").val();
var modal = document.getElementById("myModal");
console.log(rb);
$(".modal-body").html(`
<li>NOMBRE: ${nombre}</li>
<li>APELLIDO: ${apellido}</li>
<li>FECHA DE NACIMIENTO: ${fecha}</li>
<li>SEXO: ${rb}</li>
<li>VALORACION: ${sel}</li>
<li>MAIL: ${correo}</li>
</ul>  `);
 $("#myModal").css("display", "block");


$(".close").on("click",function(){
    $("#myModal").css("display", "none");
});

$(window).on("click",function(event){
    if(event.target == modal){
        $("#myModal").css("display","none");
    }

});


// When the user clicks anywhere outside of the modal, close it

   
    }
// SE VALIDA FORMULARIO-------------------------------------------------------
$(document).ready(function(){
    
    console.log('holaprp');
    $("#bEnviar").on("click",function(event){


        event.preventDefault();
        
        //Guardar en variables el valor que tengan las cajas de texto
        //Por medio de los id's
        //Y tener mejor manipulación de dichos valores

        var nombre = $("#Nombre").val();
        var apellido = $("#Apellido").val();
        var fecha = $("#fechaDeNacimiento").val();
        var rb=$("input[type='radio']:checked");
        var sel=$("#Valoracion option:selected");
        var correo = $("#Email").val();
        var comentario=$("#Comentario").val();
       

        // --- Condicionales anidados ----
        //Si nombre está vacío
        //Muestra el mensaje
        //Con false sale de los if's y espera a que sea pulsado de nuevo el botón de enviar
      
        if(nombre == ""|| !expr2.test(nombre)){
            $("#mensaje1").fadeIn("slow");
            return false;
        }
        //en otro caso, el mensaje no se muestra
        else{
            $("#mensaje1").fadeOut();

            
            if(apellido == ""|| !expr2.test(apellido)){
                $("#mensaje2").fadeIn("slow");
                return false;
            }
            //en otro caso, el mensaje no se muestra
            else{
                console.log('hola');
                $("#mensaje2").fadeOut();
                if(fecha == ""){
                    $("#mensaje3").fadeIn("slow");
                    return false;
                }
                //en otro caso, el mensaje no se muestra
                else{
                    console.log('hola');
                    $("#mensaje3").fadeOut();
                    if(rb.length==0){
                        $("#mensaje4").fadeIn("slow");
                        return false;
                    }
                    else{
                         $("#mensaje4").fadeOut();
                        if(sel.val()==""){
                            $("#mensaje5").fadeIn("slow");
                            return false;
                        }
                        else{
                            $("#mensaje5").fadeOut();
                            if(correo==""|| !expr.test(correo)){
                                $("#mensaje6").fadeIn("slow");
                                return false;
                            }
                           
                        }
                        }
                    }
                    }
                }
       
            
            valeval();
                

            });
        });

// LIMPIAR FORMULARIO------------------------------------------------------
$(document).ready(function(){          

    $("#limpiar").on("click",function(event) {
        $("#Formulario")[0].reset();
    })
});

// CANCELAR FORMULARIO--------------------------------------------------------
$(document).ready(function(){
$("#cancelar").on("click",function(){
    
var modal = document.getElementById("myModal");

$(".modal-body").html(`
<button id="lud">DESEO VOLVER A PAGINA ANTERIOR</button>
<button id="alann">NO CANCELAR</button> `);
 $("#myModal").css("display", "block");


$(".close").on("click",function(){
    $("#myModal").css("display", "none");
});

$(window).on("click",function(event){
    if(event.target == modal){
        $("#myModal").css("display","none");
    }
    $("#alann").on("click",function(){
        $("#myModal").css("display", "none");
    });
    
$("#lud").on("click",function(){
    window.history.go(-1);
window.history.back();
})

});
    

});

});