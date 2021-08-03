let favoritos = document.querySelectorAll('.add');
let listafavoritos = [];
let titulo = document.querySelectorAll('.titulo');
let parrafo= document.querySelectorAll('.parrafo-post');
let local = document.getElementById("local");
let obj = {}
let array = []

for(let i = 0 ; i<favoritos.length; i++) {

    boton = favoritos[i];

    boton.onclick = function(){
        alert("diste clic");
        titulo1 = titulo[i].innerHTML;
        parrafo1 = parrafo[i].innerHTML;
        obj={
            titulo:titulo1,
            parrafo:parrafo1
        }
        array.push(obj);
        console.log(obj);
        localStorage.setItem('favoritos',JSON.stringify(array));
    }

}


const obtenerFavoritos = () =>{
    let favoritos1 = localStorage.getItem('favoritos');
    if(favoritos1== null){
        array = [];
    }
    else{
        array = JSON.parse(favoritos1);
    }
    return array;
}   

const pintar = () =>{
 let lista = obtenerFavoritos();
 let html = "";  
 lista.forEach(element => {
     html += `<p>${element.titulo}</p>`
     html += `<p>${element.parrafo}</p>`
 });
 local.innerHTML = html;
}

pintar();