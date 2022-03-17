
// FUNCION PARA LLAMAR A LA API DE GOOGLE MAPS
function iniciarMap(){
    var coord = {lat:-34.9228288 ,lng: -57.9562555};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 17,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
// INICIO DE SCRIPT
$(document).ready(function(){
$("#contac").on("click",function(){
    contador = 1;
    // $('nav').animate({
    //     left: '-100%'
    // });
   kk();
   
});
});

function kk(){
    // TRAILER http://api.themoviedb.org/3/movie/228165/videos?api_key=e2686a810371064534c95f86b3f8ed0a
    console.log("estoy aqui");
    var modal = document.getElementById("myModal");
        $(".modal-header").html(`
        <span class="close">&times;</span>
        <h2>CONTACTO</h2>
        `);
              $(".modal-body").html(`
              <div class="row">

              <div class="col-6 menu">
                    <h2>UBICACION</h2>
                    <div id="map"></div>
                </div>
                <div class="col-6 menu">
                            
                            <h3>DATOS</h3>
                            <br>
                            <ul>
                            <li>
                                <p><b>DESARROLLADO:</b>Agencia Mask Web</p>
                                <br>
                            </li>
                            <li>
                                <p><b>TEL:</b>(0221)1567985832</p>
                                <br>
                            </li>
                            <li>
                                <p><b>HORARIOS DE ATENCION:</b>8 a 18 HS</p>
                                <br>
                            </li>
                            <li>
                                    <div class="header">
                                    <a href="index.html"><img src="img/logo.png"></a>
                                    <h1>Mask Web</h1>
                                </div>
                            </li>
                            </ul>
                        </div>

              </div>
    
                `);
                iniciarMap();   
     $("#myModal").css("display", "block");
    
    
    $(".close").on("click",function(){
        $("#myModal").css("display", "none");
    });
    
    $(window).on("click",function(event){
        if(event.target == modal){
            $("#myModal").css("display","none");
        }
    
    });
}