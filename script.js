const vardi = ['Normunds Eglītis', 'Elizabete Koklētāja', ' Diāna Mostova', ' Edgars Kuranovs', ' Renārs Valdems'];
const balvas = ['Čipši', 'Telefons', 'Planšetdators', ' Dators', 'Dāvanu karte'];
const naudaKopa = 10000;
let uzvaretajuSkaits = 5;
let rindas=document.querySelector('.rindas');//pievieno mainīgo
rindas.innerHTML = ' ';

for (let i=0;i<uzvaretajuSkaits;i++) {

    let rand=Math.random()*vardi.length;
    rand=Math.floor(rand);  //noapalo uz leju
    let uzvaretajs=vardi[rand];// izvada konsolē
    let laimests = balvas[rand];
    //let uzvaretajs=vardi[rand];
   
    rindas.innerHTML +=`
<tr>
<td>${i+1}</td>
<td>${uzvaretajs}</td>
<td>${laimests}</td>
</tr>`
}



