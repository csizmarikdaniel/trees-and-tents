var ures = [128, 128, 128]; //grey
var gyep = [124, 252, 0]; //lawngreen
var sator = [255, 0, 0]; //red
const satrak = [[0,0,0,0,0],[0,0,0,0,0]];
function $(id) {
    return document.getElementById(id);
}
function init() {
    $("tabla").addEventListener("click", atszinez, false);
}
function atszinez(eventObject) {
    let hatterSzin = window.getComputedStyle(eventObject.target, null).getPropertyValue('background-color');
    let azonRaw = eventObject.target.id;
    let azon = getAzon(azonRaw);
    let szinek = getSzinek(hatterSzin);
    if (isUres(szinek)) {
        eventObject.target.style.backgroundColor = "lawngreen";
    } else {
        if (isGyep(szinek)) {
            eventObject.target.style.backgroundColor = "red";
            satorBe(azon);
            console.table(satrak);
            console.log(szamok);
        } else {
            if(isSator(szinek)){
                eventObject.target.style.backgroundColor = "grey";
                satorKi(azon);
                console.table(satrak);
                
            }
        }
    }
    szamokatSzinez(azon);
}
function getRed(hatter) {
    return hatter.substring(4, hatter.indexOf(','));
}
function getSzinek(hatter) {
    let levagott = hatter.substring(hatter.indexOf("(") + 1, hatter.indexOf(")"));
    let szinek = levagott.split(',');
    for (var i = 0; i < szinek.length; i++) {
        szinek[i] = szinek[i].trim();
    }
    return szinek;
}
function isUres(szinek) {
    for (var i = 0; i < ures.length; i++) {
        if (ures[i] != szinek[i]) {
            return false;
        }
    }
    return true;
}
function isGyep(szinek) {
    for (var i = 0; i < gyep.length; i++) {
        if (gyep[i] != szinek[i]) {
            return false;
        }
    }
    return true;
}

function isSator(szinek){
    for (var i = 0; i < sator.length; i++) {
        if (sator[i] != szinek[i]) {
            return false;
        }
    }
    return true;
}

function getAzon(azon) {
    var sor = azon.substring(2, azon.indexOf("_"));
    var oszlop = azon.substring(azon.indexOf("_") + 1);
    return [sor, oszlop];
}
function satorBe(azon) {
    satrak[0][azon[1]-1]++;
    satrak[1][azon[0]-1]++;
}
function satorKi(azon) {
    satrak[0][azon[1]-1]--;
    satrak[1][azon[0]-1]--;
}

function szamokatSzinez(azon){
    if(szamok[0].charAt(azon[1]-1) == satrak[0][azon[1]-1]){
        $("td0_"+azon[1]).style.color = "red";
    }else{
        $("td0_"+azon[1]).style.color = "black";
    }

    if(szamok[1].charAt(azon[0]-1) == satrak[1][azon[0]-1]){
        $("td"+azon[0]+"_0").style.color = "red";
    }else{
        $("td"+azon[0]+"_0").style.color = "black";
    }
}
window.addEventListener('load', init, false);