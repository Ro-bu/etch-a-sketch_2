// TAKE GRID SIZE FROM TEXT INPUT AND CONVERT TO INT
// INPUT MUST BE A FLAT INT INT IN RANGE 1 UNTIL 100
// CREATE GRID WITH INT ROWS AND INT COLUMNS
// EACH GRID BOX SIZE IS 600PX(GAMEARE SOZE) / INT
// PASSING MOUSE TRHOUGH GRID BOX SETS BACKGROUND-COLOR WHICH IS RANDOMLY CHOSEN

const gameCont = document.querySelector(".gamegrid");

// START GAME ON ENTER KEY PRESS
const inputBox = document.querySelector("#gridsize");
inputBox.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        gameStart();
    }
});

// REMOVE ALL GRID BOXES FROM GAME AREA
function clearGrid(){
    document.querySelector(".gamegrid").innerHTML="";
}

// RETURN RANDOM NUMBER BETWEEN 0 AND 255
function rgbHelper(){
    return Math.floor(Math.random()*255)
}

// CREATE RANDOM RGB COLOR
function randomRGB(){
    let randomRGB = "rgb(" + rgbHelper() + "," + rgbHelper() + "," + rgbHelper() + ")";
    return randomRGB;
}

// CREATE GRID
function createGrid(a){
    const numberOfDivs = a*a;
    let divDimension = 100/a;
    divDimension = divDimension + "%";
    for(let i = 0; i<numberOfDivs; i++){
        const newDiv = document.createElement("div");
        newDiv.className = "gridCell";
        newDiv.style.width = divDimension;
        newDiv.style.height = divDimension;
        gameCont.appendChild(newDiv);
    }
}
// CHECK IF SUBMITTED VALUE IS VALID
function valueChecker(a){
    const enteredValue = parseInt(a);
    if( enteredValue < 1 || enteredValue >100 || isNaN(enteredValue)){
        return false;
    } else {
        return true;
    }
}
// ALERT WHEN THE ENTERED VALUE IS INVALID
function wrongValue(){
    gameCont.textContent = "THE ENTERED VALUE MUST BE A NUMBER BETWEEN 1 AND 100";
}
// MAIN FUNCTION ON GAME START
function gameStart(){
    const gridCount = document.querySelector("#gridsize").value
    clearGrid();
    if(valueChecker(gridCount)){
        createGrid(gridCount);
        document.querySelectorAll(".gridCell").forEach(item=>{
            item.addEventListener("mouseover", function(event){
                const randColor = randomRGB();
                event.target.style.backgroundColor = randColor;
            })
        })
    } else {
        wrongValue();
    }
    document.querySelector("#gridsize").value = "";
}
