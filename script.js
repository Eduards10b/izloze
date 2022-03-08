const vardi=['Normunds Eglītis', 'Elizabete Koklētāja',' Diāna Mostova',' Edgars Kuranovs',' Renārs Valdems'];
const balvas=['Čipši', 'Telefons', 'Planšetdators',' Dators', 'Dāvanu karte'];
const naudaKopa=3500;
let uzvaretajuSkaits=5;

for(let i=0;i<uzvaretajuSkaits;i++){

let rand=Math.random()*vardi.length;
rand=Math.floor(rand);  //noapalo uz leju
let uzvaretajs = vardi[rand];// izvada konsolē
console.log(vardi[rand]);
}




