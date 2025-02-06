document.addEventListener("DOMContentLoaded", function () {
    runProgram();
});

let selected;
let selectedID;
let color;
let active;
let steder;
let pos;
async function runProgram() {
   
    // Load json
    const json = await fetch("poi.json");
    steder = await json.json();

    console.log(steder);

    // 1. Load svg map
    //------------------------------------------------------------------------------------	
let mySvg = await fetch("københavn-path.svg");
let cph = await mySvg.text();
// vis kort

document.querySelector("#map").innerHTML = cph;

    // 3. Skift farve ved klik, og vis tekst
    //-----------------------------------------------------------------------
    document.querySelector("#poi").addEventListener("click",(e) =>{clicked(e)})

};

    //function clicked
    //--------------------------------------------------------------------
function clicked(obj){
    // fjern css animation, så den kan animere ind
    document.querySelector("#infotekst").classList.remove("vis"); 
    document.querySelector("#rute1").classList.remove("animer-rute");
    document.querySelector("#rute2").classList.remove("animer-rute");

    // a. find det klikkede element
    //----------------------------------------------
    selected = obj.target;
    // find elementets position
    pos = selected.getBoundingClientRect();
    console.log(selected);
document.querySelector("#infotekst").style.top = (pos.bottom)+"px";
document.querySelector("#infotekst").style.left = (pos.right)+"px";
document.querySelector("#infotekst").style.display = "block";
document.querySelector("#rute1").style.display = "block";
document.querySelector("#rute2").style.display = "block";   
    // b. find det klikkede elementets ID
    //---------------------------------------------
selectedID = selected.getAttribute("id");
//console.log(selectedID);
    
    // c. find  det klikkede elements fillfarve
    //---------------------------------------------
color = selected.getAttribute("fill");
//console.log(color);

    // d. vis infobokse
    //--------------------------------------------
steder.forEach(sted => {
    if (sted.poi == selectedID ){
        //console.log(sted.tekst);
        document.querySelector("#infotekst h2").textContent = sted.tekst; 
        // tilføj class med css animation
        document.querySelector("#infotekst").classList.add("vis"); 
        if(sted.poi == "KEA"){
        document.querySelector("#rute1").classList.add("animer-rute");
        }
         if(sted.poi == "Holmen"){
        document.querySelector("#rute2").classList.add("animer-rute");
        }
      }
    console.log("top", pos.top);
});
  

    // 4. hvis der tidligere har været klikket skal det forige element skifte farve til original
    //------------------------------------------------------------------------------------
if(active != undefined){
    active.setAttribute("fill", color)
     
}
  
    //gør det klikkede til det aktive
    //-------------------------------------------------------------------------
active = selected;

    //skift farve på det valgte
    //-------------------------------------------------------------------------
    if (color == "#ed0c0c"){
        selected.setAttribute("fill", "#123456");
       
    }

    //reset farve og skjul tekst hvis valgt elementet allerede er aktivt
    //--------------------------------------------------------------------------
    else{
        selected.setAttribute("fill","#ed0c0c");
         document.querySelector("#infotekst").style.display = "none";
         document.querySelector("#rute1").style.display = "none";
         document.querySelector("#rute2").style.display = "none";
         
    }

};


