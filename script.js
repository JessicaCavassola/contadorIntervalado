
function contar (){
    
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')


if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = ("Impossivel contar")
       
    
} else {
    res.innerHTML = "contando: <br> "
    
    let i = Number (inicio.value)
    let f = Number (fim.value)
    let p = Number (passo.value)
   
    if  (p <= 0){
        window.alert("Passo invalido. leiderando Passo 1")
        p = 1
    }
    if (i < f){
        /*CONTAGEM CRESCENTE*/
        
        for (let c = i; c <= f; c += p) { 
        res.innerHTML += ` ${c} \u{1F449}`
    }   
    } else {
        /*CONTAGEM DECRESCENTE*/
        for (let c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
    }
    }    
    res.innerHTML += `\u{2B55}`
}
}
