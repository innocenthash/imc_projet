const mesDonnees = 
[
   {nom:"MAIGREUR",couleur:'red',interval:[0,18.5]},
   {nom:"EN BONNE SANTE",couleur:'green',interval:[18.5,25]},
   {nom:"EN SURPOIDS",couleur:'yellow',interval:[25,30]},
   {nom:"OBESITE MODERE",couleur:'orange',interval:[30,35]},
   {nom:"OBESITE SEVERE",couleur:'blue',interval:[35,40]},
   {nom:"OBESITE MORBIDE",couleur:'pink',interval:40},
   
]
const form = document.querySelector("form") ;
form.addEventListener("submit",handleForm);

function handleForm(e) {
   e.preventDefault() ;

   calculerImc();

}
const inputsValue = document.querySelectorAll("input") ;
function calculerImc() {
     const taille = inputsValue[0].value ;
     const masse = inputsValue[1].value ;
if (!taille || !masse || taille<0 || masse<0) {
    handleError() ;
    return ;
} 
  const imc = (masse/Math.pow(taille/100,2)) ;
    
  handleValide(imc) ;
  
}



const  valuej = document.querySelector(".valeur-resultat") ;
const message = document.querySelector(".alert-resultat")
function handleError (){
   valuej.textContent ="Oups..."
   message.textContent ="Veuillez remplir correctement les champs!"
}
function  handleValide(imc) {
    const interval = mesDonnees.find(donnes => 
        {if (imc>=donnes.interval[0] && imc<donnes.interval[1]) {
              return donnes ;
        }else if(typeof donnes.interval=="number" && imc>=donnes.interval){
            return donnes ;
        }
    
    }
        ) ;
        valuej.textContent = imc ;
        message.style.color = interval.couleur ;
        message.textContent = interval.nom ;

       

}

