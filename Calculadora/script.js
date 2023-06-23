var add = 0
function numerosInteiros(numero){
    add = String(add + numero)
    document.getElementById('result').innerHTML = add
}

function mais(){
    document.getElementById('result').innterHTML = String(add, '+')
}