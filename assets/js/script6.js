let container = document.getElementById("container");



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
     titulo = element.titulo
     html += `<div class="card-body">`
     html += `<h5 class="card-title">${element.titulo}</h5>`
     html += `<p class="card-text">${element.parrafo}</p>`
     html += `<a href="#" class="btn btn-danger" onclick="('${titulo}')">Eliminar tip :(</a>`
     html += `</div>`
 });
 container.innerHTML = html;
}

pintar();