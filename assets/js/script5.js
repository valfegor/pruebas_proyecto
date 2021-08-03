let add1 = document.getElementById("add1");
let add2 = document.getElementById("add2");
let add3 = document.getElementById("add3");
let add4 = document.getElementById("add4");
let add5 = document.getElementById("add5");
let add6 = document.getElementById("add6");

console.log(add1)
let obj = {}
let array = [];

add1.onclick= function(){
    let p1 = document.getElementById("p1");
    let t1 = document.getElementById("t1");
    console.log(p1 , t1) 
    obj = {
        titulo:t1.textContent,
        parrafo:p1.textContent
    }

    array.push(obj);
    localStorage.setItem('favoritos',JSON.stringify((array)));

    console.log(array);

}

add2.onclick= function(){
    let p2 = document.getElementById("p2");
    let t2 = document.getElementById("t2");
    
    obj = {
        titulo:t2.textContent,
        parrafo:p2.textContent
    }

    array.push(obj);
    localStorage.setItem('favoritos',JSON.stringify((array)));

    console.log(array);

}

add3.onclick= function(){
    let p3 = document.getElementById("p3");
    let t3 = document.getElementById("t3");
    
    obj = {
        titulo:t3.textContent,
        parrafo:p3.textContent
    }

    array.push(obj);
    localStorage.setItem('favoritos',JSON.stringify((array)));

    console.log(array);

}

add4.onclick= function(){
    let p4 = document.getElementById("p4");
    let t4 = document.getElementById("t4");
    
    obj = {
        titulo:t4.textContent,
        parrafo:p4.textContent
    }

    array.push(obj);
    localStorage.setItem('favoritos',JSON.stringify((array)));

    console.log(array);

}

add5.onclick= function(){
    let p5 = document.getElementById("p5");
    let t5 = document.getElementById("t5");
    
    obj = {
        titulo:t5.textContent,
        parrafo:p5.textContent
    }

    array.push(obj);
    localStorage.setItem('favoritos',JSON.stringify((array)));

    console.log(array);
}


add6.onclick= function(){
    let p6 = document.getElementById("p6");
    let t6 = document.getElementById("t6");
    
    obj = {
        titulo:t6.textContent,
        parrafo:p6.textContent
    }

    array.push(obj);
    localStorage.setItem('favoritos',JSON.stringify((array)));

    console.log(array);
}