
// LO UTILIZO PARA DESCRIPCION EN ESPAÑOL 
var descrip;
var totalResultados;
var totalPaginas;
var pag;
var busqueda;
function cargarModal(){

    $(".card").on("click",function(){
        // OBTENER ID DE PELICULA
        var elId = $(this).attr('id');
        // OBTENER SU DESCRIPCION EN ESPAÑOL
          descrip = $(this).children('p').text();
      
       console.log(elId);
       mostrarDetalles(elId);
        
    });
};

function mostrarDetalles(elId){
    
    console.log("estoy aqui");
    var modal = document.getElementById("myModal");
    // OBTENIENDO JSON DE TRAILER
    endpoint=`http://api.themoviedb.org/3/movie/${elId}/videos?api_key=e2686a810371064534c95f86b3f8ed0a`;
    $.get(endpoint,function(trail)
    {
        // OBTENIENDO JSON DE DETALLES DE UNA PELICULA
    url =`https://api.themoviedb.org/3/movie/${elId}?api_key=e2686a810371064534c95f86b3f8ed0a&language=en-US`;
        $.get(url,function(det)
        {
            console.log(det);
           
            console.log(trail);
            var año=det.release_date;
            año=año.substring(0,4);
            // SI EXISTE TRAILER LO MUESTRO CASO CONTRARIO LINK ROTO 
            if(trail.results.length!=0){
                var trailer='http://youtube.com/embed/'+trail.results[0].key;
            }
            else{
                var trailer='http://youtube.com/embed/';

                // console.log(trail.results[0].key);
            }
            $(".modal-header").html(`
            <span class="close">&times;</span>
            <h2>${det.original_title}</h2>
            `);
             $(".modal-body").html(`
             <div class="row">
                        <div class="col-2 menu">
                            <img src="https://image.tmdb.org/t/p/w185${det.poster_path}">
                        </div>
                        <div class="col-4">
                            <ul>
                            <li>
                                <p><b>Genero:</b>${det.genres[0].name}</p>

                            </li>
                            <li>
                                <p><b>Año:</b>${año}</p>
                            
                            </li>
                            <li>
                                <p><b>Idioma:</b>${det.original_language}</p>
                            
                            </li>
                           
                            <li>
                                <h3>Descripción</h3>
                            
                                <p>${descrip}</p>
                            </li>
                            </ul>
                        </div>
                        <div class="col-5">
                        <h3>TRAILER</h3>
                        <iframe src="${trailer}" class="responsive-iframe" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="col-12">
                            <iframe src="http://vidsrc.me/embed/${det.imdb_id}/" class="responsive-iframe" frameborder="0" allowfullscreen></iframe>
                        </div>

                        <div class="col-3 ">
                        
                                <form action="compartir.html">
                            <input type="hidden" name="titulo" value="${det.original_title}">
                            <input type="hidden" name="desripcion" value="${descrip}">
                            <input type="hidden" name="genero" value="${det.original_title}">
                            <input type="submit" class="botonCard" value="Compartir con un Amigo">
                            </form>
                        </div>
                </div>
             
              
    
               `);
          
     $("#myModal").css("display", "block");
    
    
    $(".close").on("click",function(){
        $("#myModal").css("display", "none");
        $('iframe').attr('src','');
    });
    
    $(window).on("click",function(event){
        if(event.target == modal){
            $("#myModal").css("display","none");
        }
    
    });
});
});
};
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
// INICIO

// CARGAR PRODUCTOS DINAMICAMENTE-------------------------------------------------------
$(document).ready(function(){
    var busco = getParameterByName('busco');
    var ultimab = getParameterByName('ultimab');
    var busquedasStorage=JSON.parse(localStorage.getItem("Mbusquedas"));
    console.log(busquedasStorage);
    // localStorage LOGICA LAS ULTIMAS BUSQUEDAS
    if(busquedasStorage===null){
        var busquedas=[];
    }
    else{
        var busquedas=busquedasStorage;
    }
    if(!busquedas.includes(busco)){
        if(busquedas.length<5){
        console.log('agrego');
            busquedas.push(busco);
        }
        else{
            console.log('borro y agrego');
            busquedas.pop();
            busquedas.unshift(busco);
        }
    }
    
    localStorage.setItem('Mbusquedas',JSON.stringify(busquedas));
    if(busco===null){
        busqueda=ultimab;
        // OBTENER PARAMETRO 
        var getId = getParameterByName('Id');

        if(getId===null){
        url =`https://api.themoviedb.org/3/search/movie?api_key=e2686a810371064534c95f86b3f8ed0a&language=es-ES&query=${busqueda}&page=1`;
        }else
        url =`https://api.themoviedb.org/3/search/movie?api_key=e2686a810371064534c95f86b3f8ed0a&language=es-ES&query=${busqueda}&page=${getId}`;
    }
    else{
        busqueda=busco;
        // OBTENER PARAMETRO 
        var getId = getParameterByName('Id');

        if(getId===null){
        url =`https://api.themoviedb.org/3/search/movie?api_key=e2686a810371064534c95f86b3f8ed0a&language=es-ES&query=${busqueda}&page=1`;
        }else
        url =`https://api.themoviedb.org/3/search/movie?api_key=e2686a810371064534c95f86b3f8ed0a&language=es-ES&query=${busqueda}&page=${getId}`;
    }
        $.get(url,function(datos){
            
            console.log(datos.total_results);
            totalResultados=datos.total_results;
            console.log(datos.total_pages);
            totalPaginas=datos.total_pages;
            pag=datos.page;
            aux=0;
            console.log(datos.results);
            $.each(datos.results,function(index,obj){
                if(obj.poster_path!=null){
                    $(".flex-container").append(`
                    <div class="card" id="${obj.id}">
                            
                            <img src="https://image.tmdb.org/t/p/w185${obj.poster_path}">
                            <p style="display:none">${obj.overview}</p>
                            </div>
                            `);}
    
                    
                    
                    
                            aux ++;
                

                    
                    
                    
                    
                   
                });

              // CARGAR MODAL--------------------------------------------------

              cargarModal();
              if(totalResultados<=10){
                $(".paginacion").html(`
                <ul class="muje">
                <li><a href="busqueda.html?busco=${busco}&Id=1" class="active">${pag}</a></li>
              </ul>
                `);
            }
            else
            {
                if(pag<totalPaginas){
                    if(pag>1){
                        if(pag+2>totalPaginas){
                            $(".paginacion").html(`
                            <ul class="muje">
                            <li><a href="busqueda.html?busco=${busco}&Id=${pag-1}">Prev</a></li>
                            <li><a href="busqueda.html?busco=${busco}&Id=${pag}" class="active">${pag}</a></li>
                            <li><a href="busqueda.html?busco=${busco}&Id=${pag+1}">${pag + 1}</a></li>
                           
                        </ul>
                        `);
                        }else
                        $(".paginacion").html(`
                        <ul class="muje">
                        <li><a href="busqueda.html?busco=${busco}&Id=${pag-1}">Prev</a></li>
                        <li><a href="busqueda.html?busco=${busco}&Id=${pag}" class="active">${pag}</a></li>
                        <li><a href="busqueda.html?busco=${busco}&Id=${pag+1}">${pag + 1}</a></li>
                        <li><a href="busqueda.html?busco=${busco}&Id=${pag+2}">${pag + 2}</a></li>
                        <li><a href="busqueda.html?busco=${busco}&Id=${pag+1}">next</a></li>
                    </ul>
                    `);
                    }
                    else{
                        
                            $(".paginacion").html(`
                        <ul class="muje">
                        <li><a href="busqueda.html?busco=${busco}&Id=${pag}" class="active">${pag}</a></li>
                        <li><a href="busqueda.html?busco=${busco}&Id=${pag+1}">${pag + 1}</a></li>
                        <li><a href="busqueda.html?busco=${busco}&Id=${pag+2}">${pag + 2}</a></li>
                        <li><a href="busqueda.html?busco=${busco}&Id=${pag+1}">next</a></li>
                    </ul>
                    `);
                    }
                }
                else if(pag=totalPaginas)
                $(".paginacion").html(`
                <ul class="muje">
                <li><a href="busqueda.html?busco=${busco}&Id=${pag-1}">Prev</a></li>
                <li><a href="busqueda.html?busco=${busco}&Id=${pag-2}" >${pag-2}</a></li>
                <li><a href="busqueda.html?busco=${busco}&Id=${pag-1}" >${pag-1}</a></li>
                <li><a href="busqueda.html?busco=${busco}&Id=${pag}" class="active">${pag}</a></li>
                
               
              </ul>
                                        `);
    
    
    
    
            }
                
            });
            
    
            $("ul li").click(function() {
            
               $(this).children('a').addClass("active").siblings().removeClass("active");
           });
         });