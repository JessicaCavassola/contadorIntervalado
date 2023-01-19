
function contar (){
    
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')


if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = ("Impossivel contar")
    
    

    
} else {
    res.innerHTML = "contando: <br> "
     /*convertendo inicio fim e passo em Number*/ 
    let i = Number (inicio.value)
    let f = Number (fim.value)
    let p = Number (passo.value)
    /*se o passo  for menor ou = a zero*/
    if  (p <= 0){
        window.alert("Passo invalido. leiderando Passo 1")
        p = 1
    }
    if (i < f){
        /*CONTAGEM CRESCENTE*/
        /*declarando c para armezenar o resultado antes de atribuir este valor a res*/
        for (let c = i; c <= f; c += p) { /*contador vai começar no INICIO e enquanto contador for <= a FIM o contador recebe ele mais o passo */
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
