"use strict";
function ChangeBgColor(obj, ColorName){
    obj.style.backgroundColor = ColorName;
}
function meni(x){
    let proizvodi=['Sa sampinjonima','Kapricoza','Meksikana','Sa morskim plodovima','Sa ananasom','Sa maslinama'];
    let cena1=['90/450','100/500','80/400','120/600','70/350','150/750'];
    let cena2=['60','70','60','70','50'];
    let pica=['Cola','Pepsi','Sprite','Sveps','Miranda'];
    let stvari="";
    let cenovnik=document.getElementById('divajder');
    if(x==1){
        stvari+=`<table> <caption>Meni</caption> 
        <tr><td>Pizza sa:</td><td>Cena parceta/porodicne</td></tr>`;
        for (let i = 0; i<cena1.length; i++) {
            stvari +=`<tr><td>${proizvodi[i]}</td>
            <td>${cena1[i]}</td></tr>`;       
        }
        stvari+='</table>';
        cenovnik.innerHTML=stvari;
    } else if(x==2){
        stvari+=`<table><caption>Pica</caption> 
        <tr><td>Sokovi:</td><td>Cena</td></tr>`;
        for (let i = 0; i<cena2.length; i++) {
            stvari +=`<tr><td>${pica[i]}</td>
            <td>${cena2[i]}</td></tr>`;           
        } 
        stvari+='</table>';
        cenovnik.innerHTML=stvari;
    }
}
function posalji(){
    let prozivodcic=document.obrazac.porudzbina.value;
    let imence=document.obrazac.ime.value;
    let adresica=document.obrazac.adresa.value;
    alert ("Gospodine/Gospođo "+imence+"e vaša porudžbina: "+prozivodcic+ " je poslata na adresu: "+adresica+". Hvala na porudzbini!")
    return;
}
function tekst(){
let izmena=document.getElementById("test123");
izmena.style.fontWeight="bold";
izmena.style.fontSize="50px"
return;
}
