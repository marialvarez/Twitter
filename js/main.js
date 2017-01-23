	var areaTexto = document.getElementById("textArea");
	var boton = document.getElementById("btn");
	var cajaTareas = document.getElementById("listaTarea");

	function agregarTarea(){
		var tarea = document.createElement("div"); 
        tarea.className = "animated zoomInleft";
        var label = document.createElement("span");
        label.innerText = areaTexto.value;
        tarea.className = "contenedorTarea";
        
        tarea.appendChild(label);
        cajaTareas.appendChild(tarea);
		
		var check = document.createElement("input");
		check.setAttribute("type", "checkbox");
		check.classList.add("separado");
		tarea.insertBefore(check,tarea.childNodes[0]);

		check.addEventListener("click", function(){
            
			if(this.checked){
				this.parentElement.classList.add("tachado");
			}
			else
				this.parentElement.classList.remove("tachado");
		});
        
        var botonTacho = document.createElement("button");
        var tacho = document.createElement("i");  
        botonTacho.appendChild(tacho);
		botonTacho.className="glyphicon glyphicon-trash";
        botonTacho.classList.add("tacho");
		tarea.appendChild(botonTacho);   
        
		botonTacho.addEventListener("click", function(){
            $(tarea).slideUp(500);    
            //tarea.setAttribute("style","display:none");
            setTimeout(function(){ 
                cajaTareas.removeChild(tarea); 
            }, 500);
		});
        
	}

    boton.addEventListener("click", function(){
        agregarTarea();
		areaTexto.value = "";
        areaTexto.focus();
        
	    });
    

