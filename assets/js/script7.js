function borrartarea(titulo){
    alert("Se ha eliminado el tip =/");
    let tips = JSON.parse(localStorage.getItem('favoritos'));
    console.log(tips)
    for(let i = 0 ; i<tips.length;i++){
        if(tips[i].titulo == titulo){
            tips.splice(i,1);
        }
    }
    localStorage.setItem('favoritos',JSON.stringify(tips));
}