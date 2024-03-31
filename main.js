/**********************************************************************************************************
 * This is the general script file of my portfolio
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *********************************************************************************************************/




// DEFINITION

const documentBody = document.body;
const preload = document.querySelector('#preloader');
const navBar = document.querySelector(".navBar");


function moveDocBody()
{
    documentBody.classList.remove("bodystop");
}

function stopDocBody()
{
    documentBody.classList.add("bodystop");
}