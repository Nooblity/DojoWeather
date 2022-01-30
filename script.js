function disappear(id){
    document.querySelector(id).remove();
}


function C2F(e){
    return Math.round(9/5*e+32);
    console.log(e)
}
function F2C(e){
    return Math.round((e-32)/9*5);
}

function change(e){
    for(var i=1;i<9;i++){
        var span = document.querySelector("#temp"+i);
        var temp = span.innerText;
        if(e.value =="F"){
            span.innerText = C2F(temp);
        } else {
            span.innerText = F2C(temp);
        }
    }
}