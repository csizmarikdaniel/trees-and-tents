var fak = ["","2;4","","1;2","5"];//soronként az oszlop száma ahol fa van(1-től kezdődik mert a 0 indexen a szám van)
var szamok = ["20111","11021"]; //sor van elobb
var szelesseg = 5;
function $(id){
    return document.getElementById(id);
}
function init(){
    $("tabla").innerHTML=feltolt();
}
//a cellák id-je: tdSor_oszlop, class : fa, szam, vagy ures
function feltolt(){
    var sor = "<table>"
    //soronként megy végig
    //'i' a sor száma, 'j' az oszlop száma
    for(var i = 0; i<=szelesseg;i++){
        sor += "<tr>";
        //a vizsgált sor celláit generálja
        for(var j = 0;j<=szelesseg;j++){
            if(szamE(i,j)){
                if(i==0 && j==0){
                    sor += "<td></td>"
                }else{
                    sor += szamCella(i,j);
                }
            }else{
                if(faE(i,j)){
                    sor += fagenerator(i,j);
                }else{
                    sor += uresGenerator(i,j);
                }
            }
        }
        sor += "</tr>";
    }
    sor += "</table>";
    return sor;
}
function szamE(sor,oszlop){
    if(sor==0 || oszlop ==0){
        return true;
    }
    return false;
}
function faE(sor,oszlop){
    sor--;
    if(fak[sor]==""){
        return false;
    }else{
        var szamok = fak[sor].split(";");
        for(var i = 0;i<szamok.length;i++){
            if(szamok[i]==oszlop){
                return true;
            }
        }
        return false;
    }

}
function szamCella(sor, oszlop){
    var result = "<td class='szam' id='td"+sor+"_"+oszlop+"'>";
    if(sor == 0){
        oszlop--;
        result += ""+szamok[0].charAt(oszlop);
    }else{
        sor--;
        result += ""+szamok[1].charAt(sor);
    }
    result += "</td>";
    return result;
}
function fagenerator(sor, oszlop){
    return "<td id='td"+sor+"_"+oszlop+"' class='fa'></td>";
}
function uresGenerator(sor, oszlop){
    return "<td id='td"+sor+"_"+oszlop+"' class='ures'></td>";
}

window.addEventListener("load",init,false);