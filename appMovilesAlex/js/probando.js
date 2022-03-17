console.log("eeeeeeeeeeeE");
const result = new URLSearchParams(window.location.search);

var a = document.getElementById("autocompletado");
 console.log(a);

a.setAttribute("value","Titulo : "+ result.get("titulo")+" "+result.get("desripcion"));
alert(a.value);
 console.log(a);

