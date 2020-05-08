
// * Reset  * //
let gameReset = document.querySelector("#reset-button")
let resetCount = document.querySelector("#num-resets")

// * Team one  * //
let teamOneShoot = document.querySelector("#teamone-shoot-button")
let teamOneShots = document.querySelector("#teamone-numshots")
let teamOneGoals = document.querySelector("#teamone-numgoals")

// * Team two  * //
let teamTwoShoot = document.querySelector("#teamtwo-shoot-button")
let teamTwoShots = document.querySelector("#teamtwo-numshots")
let teamTwoGoals = document.querySelector("#teamtwo-numgoals")

// * Audio * //
const SoundAudio = "assets/audio/goal-shout.mp3"


gameReset.addEventListener("click", function () {
    let newResetCount = Number(resetCount.innerHTML) + 1;
    resetCount.innerHTML = newResetCount;
    if (teamOneGoals.innerHTML > teamTwoGoals.innerHTML){
        alert("Team 1 Won Congratulation!");}
    if (teamTwoGoals.innerHTML>teamOneGoals.innerHTML){
        alert("Team 2 Won Congratulation!");
    }
    teamOneShots.innerHTML = 0;
    teamOneGoals.innerHTML = 0;
    teamTwoShots.innerHTML = 0;
    teamTwoGoals.innerHTML = 0;
   
    


})

teamOneShoot.addEventListener("click", function () {
    let newTeamOneShots = Number(teamOneShots.innerHTML) + 1;
    let x = Math.floor(Math.random() * 10);
    if (x % 2 == 0) {
        x = Number(teamOneGoals.innerHTML) + 1; playAudio(SoundAudio);
        teamOneGoals.innerHTML = x
         
    }
    teamOneShots.innerHTML = newTeamOneShots;

    
})

teamTwoShoot.addEventListener("click", function () {
    let newTeamTwoShots = Number(teamTwoShots.innerHTML) + 1;
    let x = Math.floor(Math.random() * 10);
    if (x % 2 == 1) {
        x = Number(teamTwoGoals.innerHTML) + 1; playAudio(SoundAudio);
        teamTwoGoals.innerHTML = x
    }
   
    teamTwoShots.innerHTML = newTeamTwoShots;

    
})


function playAudio(url) {
    new Audio(url).play();
}

