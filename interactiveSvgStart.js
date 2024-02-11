document.addEventListener("DOMContentLoaded", function () {
    runProgram();
});

async function runProgram() {
    let selected;
    let selectedID;
    let color;
   

    // 1. Load svg map
    //------------------------------------------------------------------------------------	
 const svgMap = await fetch("københavn-link.svg");
 let map = await svgMap.text();
 document.querySelector("#map").innerHTML = map;

    // 2. find infobokse og skjul dem
    //------------------------------------------------------------------------------


    // 3. Skift farve ved klik, og vis tekst
    //-----------------------------------------------------------------------
document.querySelector("#poi").addEventListener("click", clicked);

};
    //function clicked
    //--------------------------------------------------------------------
function clicked(){
    
    // a. find det klikkede element
    //----------------------------------------------
 selected = event.target;

    
    // b. find det klikkede elementets ID
    //---------------------------------------------
selectedID = selected.id;

    
    // c. find  det klikkede elements fillfarve
    //---------------------------------------------
color = selected.getAttribute("fill");
   console.log(color);
    // d. vis infobokse
    //--------------------------------------------

  

    // 4. hvis der tidligere har været klikket skal det forige element skifte farve til original
    //------------------------------------------------------------------------------------
  
    //gør det klikkede til det aktive
    //-------------------------------------------------------------------------


    //skift farve på det valgte
    //-------------------------------------------------------------------------

    //reset farve og skjul tekst hvis valgt elementet allerede er aktivt
    //--------------------------------------------------------------------------
};


