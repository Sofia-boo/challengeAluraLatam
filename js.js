function programaEncriptador(){
    var value = document.getElementById("text").value
    var nvalue = value;
  
    if(value.includes('e')){
        nvalue=nvalue.replaceAll('e',"enter")
    }
    if(value.includes('i')){
        nvalue=nvalue.replaceAll('i',"imes")
    }  if(value.includes('a')){
        nvalue=nvalue.replaceAll('a',"ai")
    }
      if(value.includes('o')){
        nvalue=nvalue.replaceAll('o',"ober")
    } if(value.includes('u')){
        nvalue=nvalue.replaceAll('u',"ufat")
        
    }
    document.getElementById("as").innerHTML=nvalue
}

function verify(){
    var value = document.getElementById("text").value
   if (value == value.toUpperCase() ) { 
        alert ('El texto no puede contener caracteres especiales, mayusculas o estar vacio'); 
    } 
    if (value == value.toLowerCase()){  
        programaEncriptador()
    }
     else{
            alert ('El texto no puede contener caracteres especiales, mayusculas o estar vacio'); 
        }
}

function programaDesencriptador(){
    var value = document.getElementById("text").value
    var nvalue = value;
    if(value.includes('ai')){
        nvalue=nvalue.replaceAll('ai',"a")
    }
    if(value.includes('enter')){
        nvalue=nvalue.replaceAll('enter',"e")
    }
    if(value.includes('imes')){
        nvalue=nvalue.replaceAll('imes',"i")
    }  if(value.includes('ober')){
        nvalue=nvalue.replaceAll('ober',"o")
    } if(value.includes('ufat')){
        nvalue=nvalue.replaceAll('ufat',"u")
        
    }
    document.getElementById("as").innerHTML=nvalue
}
function copiar(){
    var codigoACopiar = document.getElementById('as');
navigator.clipboard.writeText(codigoACopiar.innerHTML)
}
