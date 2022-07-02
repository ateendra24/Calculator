function dis(val){
    document.getElementById("result").value+=val
}
function minus(){
    document.getElementById("result").value+=value*(-1)
}
function solve(){
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
function Allclr(){
    document.getElementById("result").value = ""
}
function clr(){
    document.getElementById("result").value = ""
}
