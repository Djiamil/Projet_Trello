const butcolone = document.querySelector(".butcolone");
const changecolor = document.querySelector(".changecolor");
const header = document.querySelector('header');
const iconeseting = document.querySelector('.iconeseting');
const nav = document.querySelector('nav');
const generatenote = document.querySelector('.generatenote')
const modale = document.querySelector('.modale')
const buttonAjou = document.querySelector('.buttonAjou');
let nbr = 0;
let i=0;

let tabcolor = ["#734b6d", "#f4e2d8", "#904e95", "#0b486b", "#cb3066"];
butcolone.addEventListener("click", function () {
    if(nbr < 5){
     
        header.appendChild(generatecolumn());
    // generatecolumn();

    }
});
iconeseting.addEventListener('click', function () {
    nav.classList.toggle('navmenu');
    nav.classList.toggle('menutogole');
}) 
generatenote.addEventListener('click', function(){
    modale.classList.toggle('modalevisible');
    modale.classList.toggle('modale');
})

function generatecolumn(){
    nbr ++;
    
    //!Creation des balise
    let divcontainer = document.createElement("div");
    let divcolonnetitre = document.createElement('div')
    let h1 = document.createElement('h1');
    let divcolonne = document.createElement('div');
    
    //!atrubition des classe
    divcontainer.setAttribute("class", "container");
    divcolonnetitre.setAttribute("class", "colonnetitre");
    h1.setAttribute("class", "changecolor");
    divcolonne.setAttribute("class", "colone");
    divcolonne.setAttribute('id','colone_'+nbr);
    //!les append 
    h1.innerText = "Colonne" + `${nbr} `;
    divcolonnetitre.appendChild(h1);
    
            
    
        divcolonne.style.backgroundColor = tabcolor[i] ;
        i++

        
        divcontainer.appendChild(divcolonnetitre);
        divcontainer.appendChild(divcolonne);

        
        return divcontainer
    }
    buttonAjou.addEventListener('click', function(){
        const divcolonne = document.querySelector('#colone_1')
        let mah1 = document.createElement('h1');
        mah1.setAttribute("class", "extraireclass");
        mah1.innerText="Tu croyais que j'alais pas venir"
        divcolonne.appendChild(mah1);
    })

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
      