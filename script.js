// const newcontainer = document.querySelector('newcontainer');
const textarea = document.querySelector("textarea");
const body = document.querySelector("body");
const butcolone = document.querySelector(".butcolone");
const changecolor = document.querySelector(".changecolor");
const header = document.querySelector("header");
const iconeseting = document.querySelector(".iconeseting");
const nav = document.querySelector("nav");
const generatenote = document.querySelector(".generatenote");
const modale = document.querySelector(".modale");
const buttonAjou = document.querySelector(".buttonAjou");
const deletee = document.querySelector("#delete");
let nbr = 0;
let i = 0;
let j = 0;
let tabcolor = ["#734b6d", "#f4e2d8", "#904e95", "#0b486b", "#cb3066"];

//!Les evenement des button
buttonAjou.addEventListener("click", function () {
  const divcolonne = document.querySelector("#colone_1");
  let generediv = document.createElement("div");
  generediv.setAttribute("class", "genediv");
  generediv.setAttribute("id", "idgeneratediv");
  let mah1 = document.createElement("h1");
  mah1.setAttribute("class", "extraireclass");
  mah1.innerText = textarea.value;
    
  divcolonne.appendChild(generediv);
  modale.classList.toggle("modale");
  modale.classList.toggle("modalevisible");
  let buttonGauche = document.createElement("button");
  let buttonDroit = document.createElement("button");
  buttonGauche.setAttribute("class", "bx bx-chevrons-left");
  buttonDroit.setAttribute("class", "bx bx-chevrons-right");
  buttonDroit.setAttribute("id", "buttonDroit");
  buttonGauche.setAttribute("id", "buttonGauche");
  generediv.appendChild(mah1);
  generediv.appendChild(buttonGauche);
  generediv.appendChild(buttonDroit);
  //!evenement des deux button


buttonDroit.addEventListener("click", function (e) {
    let adeplacer= e.target.parentElement.parentElement.parentElement.id
    // console.log(buttonDroit.parentElement.parentElement.parentElement.id)
   let convertis=parseInt(adeplacer)
   const suivant = document.getElementById(convertis+1)
   suivant.lastElementChild.appendChild(generediv)
  suivant.lastElementChild.appendChild(generediv)

    
    // let divcolonne = document.querySelector()
    // divcolonne.appendChild(generediv);
  });
  buttonGauche.addEventListener("click", function (e) {
   let adeplacer= e.target.parentElement.parentElement.parentElement.id
   let convertis=parseInt(adeplacer)
   const suivant = document.getElementById(convertis-1)
   suivant.lastElementChild.appendChild(generediv)
  suivant.lastElementChild.appendChild(generediv)

    
    // let divcolonne = document.querySelector()
    // divcolonne.appendChild(generediv);
  });

 
});

deletee.addEventListener("click", function () {
  modale.classList.toggle("modaler");
  modale.classList.toggle("modalevisible");
});
butcolone.addEventListener("click", function () {
  if (nbr < 5) {
    header.appendChild(generatecolumn());
    // generatecolumn();
  }
});
iconeseting.addEventListener("click", function () {
  nav.classList.toggle("navmenu");
  nav.classList.toggle("menutogole");
});
generatenote.addEventListener("click", function () {
  if (nbr == 0) {
    generatenote.innerHTML = "Veiller d'abord ajouter une colonne";
    generatenote.style.color = "red";
  } else {
    generatenote.innerHTML = "Note Generer";
    generatenote.style.color = "green";
    modale.classList.toggle("modalevisible");
    modale.classList.toggle("modale");
  }
  // // newcontainer.classList.toggle('newcontainertogole')
  // // newcontainer.classList.toggle('newcontainer')
});

//!Les function
function generatecolumn() {
  nbr++;

  //!Creation des balise
  let divcontainer = document.createElement("div");
  let divcolonnetitre = document.createElement("div");
  let h1 = document.createElement("h1");
  let divcolonne = document.createElement("div");
  let span = document.createElement('span');
  span.setAttribute("class", "maspan");
  let lei = document.createElement('i');
  lei.setAttribute("id", "lei")
  lei.setAttribute("class", "bx bxs-trash-alt")
  span.appendChild(lei);
//   lei.style.color="white";
//   lei.style.fontSize="2rem"

  //!atrubition des classe
  divcontainer.setAttribute("class", "container");
  divcontainer.setAttribute("id",`${nbr}`);
  divcolonnetitre.setAttribute("class", "colonnetitre");
  h1.setAttribute("class", "changecolor");
  divcolonne.setAttribute("class", "colone");
  divcolonne.setAttribute("id", "colone_" + nbr);
  //!les append
  h1.innerText = `Colonne${nbr} `;
  divcolonnetitre.appendChild(h1);
  divcolonnetitre.appendChild(span);
 
  span.addEventListener("click", function(e){
     e.target.parentElement.parentElement.parentElement.remove()
      refreche();
  })

  h1.addEventListener("click", function () {
    h1.innerText = "";
    let labelidith = document.createElement("label");
    labelidith.setAttribute("for", "edith");
    let iputedith = document.createElement("input");
    divcolonnetitre.appendChild(labelidith);
    divcolonnetitre.appendChild(iputedith);
    iputedith.setAttribute("type", "text");
    iputedith.setAttribute("id", "edith");
    iputedith.setAttribute("name", "edith");
    iputedith.setAttribute("class", "iputedith");
    h1.innerHTML = iputedith.value;
  });

  divcolonne.style.backgroundColor = tabcolor[i];
  i++;

  divcontainer.appendChild(divcolonnetitre);
  divcontainer.appendChild(divcolonne);

  return divcontainer;
}
function refreche(){
    let containerRefrech = document.querySelectorAll('.container')
    containerRefrech.forEach((element, nbr) => {
        element.firstChild.firstChild.innerHTML = "Colonne"+`${nbr+1}`;
    });
    }
   

// function generateNotes(){
//     let h3 = document.createElement('h3');
//      h3.setAttribute("class", "info");
//      h3.innerText = "Remplire les information de la nouvelle Tache";

//      let divtextarea = document.createElement('div');
//      divtextarea.setAttribute("class", "divtextarea");
//      let label = document.createElement('label');
//      label.setAttribute('for','story');
//      label.textContent="Tache";
//      label.setAttribute('class','labclass');
//      let textarea = document.createElement('textarea');
//      textarea.setAttribute('id','story');
//      textarea.setAttribute('name','story');

//     let divlabdate = document.createElement('div');
//     divlabdate.setAttribute('class', 'labdate')
//     let labeldate = document.createElement('label');
//     labeldate.setAttribute('class','labclass');
//     labeldate.setAttribute('for','date');
//     labeldate.textContent="Date";
//      let input = document.createElement('input');
//      input.setAttribute('type','date');
//      input.setAttribute('id','date');
//      input.setAttribute('name','date');
//      input.setAttribute('value','2018-07-22');
//      input.setAttribute('class','inputclass')

//      let divstarttime = document.createElement('div');
//      divstarttime.setAttribute('class','start_time');
//      let labeltime = document.createElement('label')
//      labeltime.setAttribute('for',"starttime");
//      labeltime.setAttribute('class','labclass');
//      labeltime.textContent = "Start Time"
//      let inputtime = document.createElement('input');
//      inputtime.setAttribute("type","time");
//      inputtime.setAttribute('id','starttime');
//      inputtime.setAttribute('name','startime');
//      inputtime.setAttribute('class','inputclass')

//      let divendtime = document.createElement('div');
//      divendtime.setAttribute('class','end_time')
//      let labelendtime =document.createElement('label');
//      labelendtime.setAttribute('for','andtime');
//      labelendtime.setAttribute('class','labclass');
//      labelendtime.innerText ="End Time:";
//      let inputendtime =document.createElement('input');
//      inputendtime.setAttribute('type','time');
//      inputendtime.setAttribute('id','endtime');
//      inputendtime.setAttribute('name','endtime');
//      inputendtime.setAttribute('class','inputclass')

//      let divbutton = document.createElement('div');
//      divbutton.setAttribute('class','add_button');
//      let buttonajout = document.createElement('button');
//      buttonajout.setAttribute('class','buttonAjou');

// }
