// Función que aplica el estilo a la opción seleccionada en el menú, quita previamente seleccionado

function seleccionar (link){
    var opciones = document.querySelectorAll("#links a");
    opciones[0].className="";
    opciones[1].className="";
    opciones[2].className="";
    opciones[3].className="";
    opciones[4].className="";
    opciones[5].className="";
    opciones[6].className="";
    link.className = "seleccionado";

    //hace desaparecer el menu en responsive una vez seleccionado

    var x = document.getElementById("nav");
    x.className = "";
}


// Función que muestra el menu responsive

function responsiveMenu(){
    var x= document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//Animación scrolling 

window.onscroll = function(){
    efectoHabilidades()
};

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById ("html").classList.add("barra-progreso1");
        document.getElementById ("js").classList.add("barra-progreso2");
        document.getElementById ("php").classList.add("barra-progreso3");
        document.getElementById ("python").classList.add("barra-progreso4");
    }
}