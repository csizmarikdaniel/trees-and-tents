//var szamok = ["20111","11021"]; //sor van elobb
function $(id){
    return document.getElementById(id);
}
function init(){
    $("tabla").addEventListener("click",ellenorzes,false);
}
function ellenorzes(){
    let kesz = true;
    for(var i = 0; i<2; i++){
        for(var j = 0; j<szelesseg; j++){
            if(szamok[i].charAt(j) != satrak[i][j]){
                kesz = false;
                break;
            }
        }
    }
    if(kesz){
        $("tabla").innerHTML = "<h1>Siker</h1>"
    }
}
window.addEventListener("load",init,false);