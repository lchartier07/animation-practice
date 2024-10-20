const hitBubble = function (e) {
    console.log('i was clicked');
    e.target.remove();
}
const objClick = document.getElementById("cBubble");
objClick.addEventListener("click", hitBubble);

const gameE = document.getElementById('engine');

const createBubble = function (locX, locY) {

    const bubble = document.createElement('div');
    bubble.setAttribute('class', 'bubble');
    bubble.style.backgroundColor = "blue";
    bubble.style.left = `${locX}px`;
    bubble.style.top = `${locY}px`;

    bubble.addEventListener("click", hitBubble);

    bubble.addEventListener("animationend", function (e) {
        console.log('removed from game');
        e.target.remove();
    });

    gameE.appendChild(bubble);
}

createBubble(Math.floor(Math.random() * 550) + 50, Math.floor(Math.random() * 350) + 50);