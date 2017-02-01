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
        
        checkeado(tarea);
        eliminar(tarea);   
	}
    
    function checkeado(_tarea){
        var check = document.createElement("input");
		check.setAttribute("type", "checkbox");
		check.classList.add("separado");
		_tarea.insertBefore(check,_tarea.childNodes[0]);

		check.addEventListener("click", function(){
            
			if(this.checked){
				this.parentElement.classList.add("tachado");
			}
			else
				this.parentElement.classList.remove("tachado");
		});  
    }

    function eliminar(_tarea){
        var botonTacho = document.createElement("button");
        var tacho = document.createElement("i");  
        botonTacho.appendChild(tacho);
		botonTacho.className="glyphicon glyphicon-trash";
        botonTacho.classList.add("tacho");
		_tarea.appendChild(botonTacho);   
        
		botonTacho.addEventListener("click", function(){
            $(_tarea).slideUp(500);    
            //tarea.setAttribute("style","display:none");
            setTimeout(function(){ 
                cajaTareas.removeChild(_tarea); 
            }, 500);
		});    
    }

    boton.addEventListener("click", function(){
        
        if (areaTexto.value == null || areaTexto.value.length == 0 || /^\s*$/.test(areaTexto.value)){
        alert ('No agregaste ninguna tarea');
        }else {
            agregarTarea();
            areaTexto.value = "";
            areaTexto.focus(); 
        }
        
    });
    

