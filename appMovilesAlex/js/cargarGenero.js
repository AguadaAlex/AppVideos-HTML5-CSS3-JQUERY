$(document).ready(function(){
    var busquedasStorage=JSON.parse(localStorage.getItem("Mbusquedas"));
    console.log(busquedasStorage);
    $.each(busquedasStorage,function(index,item){
        console.log(item);
        // $("#ultimaB").append(`<li><a href="busqueda.html?busco=${item}>${item}</a></li>`);
        $("#ultimaB").append(`<li id="${item}"><a class="dropdown-item" href="#">${item}</a></li>`);
        });
    url ='http://www.json-generator.com/api/json/get/bOBAluZvFK?indent=2';
        $.get(url,function(datos)
        {
            console.log(datos);
          
            $.each(datos,function(index,obj){
                // $("#pepe").append(`<li><a href="porGenero.html?geneId=${obj.id}">${obj.name}</a></li>`);
                $("#generoP").append(`<li  id="${obj.id}"><a class="dropdown-item" href="#">${obj.name}</a></li>`);
                    
                    
                    
                    
                   
                });

           
        });
        

     });