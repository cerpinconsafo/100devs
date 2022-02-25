/*

UPDATING THIS TO RUN DIFFERENTLY, BUT COMMITTING THE FIRST ITERATION OF THE PROJECT FOLDER.

//on page load, only show MOOD buttons/list
//on click, will dynamically populate 'vidArea' in HTML with embedded YOUTUBE code
    //depending on the button (mood) clicked, a different URL variable from the moodArray can be inserted into the embed code (I THINK)
*/
//
//
//
//button variables

const phonkBut = document.querySelector('#phonkBut')
// const chillBut = document.querySelector('#chillBut')
// const zoneBut = document.querySelector('#zoneBut')
// const gameBut = document.querySelector('#gameBut')
//
//
//
//event listeners
phonkBut.addEventListener('click', phonkVids);
// chillBut.addEventListener('click', chillVids);
// zoneBut.addEventListener('click', zoneVids);
// gameBut.addEventListener('click', gameVids);
//
//
//
// functions

function add() {
    
    document.getElementById("#addVideoHere").innerHTML += `<iframe id="vid" width="853" height="505"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`; 
    
    
};

function phonkVids() {
    let url = "https://www.youtube.com/watch?v=Ax4Y5n4f5K8";
    add();   
    document.getElementById("#vid").src=url; 
};

// function chillVids() {
   
// };

// function zoneVids() {
   
// };

// function gameVids() {
   
// };