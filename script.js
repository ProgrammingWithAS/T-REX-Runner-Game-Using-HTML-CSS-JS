let player = document.getElementById("player");
let block = document.getElementById("block");

let score = 0;

let jump = ()=>{
    if(player.classList == "playerJ"){
        return
    }
    player.classList.add("playerJ");

    setTimeout(()=>{
        player.classList.remove("playerJ");
    },500);
}

let checkCollisions = setInterval(()=>{
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

    if(blockLeft <= 30 && blockLeft >= 10 && playerTop >= 130){
        block.style.animation = "none";
        alert("GAME OVER! Score :- "+ Math.floor(score/100));
        block.style.animation = "run 1s infinite linear";
        score=0;
    }
    else{
        score++;

    }

},10);