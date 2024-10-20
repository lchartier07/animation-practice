
/*var bubble = document.getElementById("cBubble");

function pop() {

    console.log('removed from game');
}

gsap.set(`#cBubble`, { x: 50, y: 300, opacity: 1 });
let tl = gsap.timeline({
    repeat: 0, onCompleteParams: [bubble], onComplete: pop()
});

tl.to(`#cBubble`, { y: 100, duration: 3 })
tl.to(`#cBubble`, { scale: 0.2 }, "<")
tl.to(`#cBubble`, { scale: 1 }, 2.85)
tl.to(`#cBubble`, { scale: 1.2 }, 3);
*/

//friday lecture
const gameE = document.getElementById("engine");

const createBubble = function (locY, locX) {

    //Logging the coords of the bubble creation location
    console.log(`x:${locX} y:${locY}`);

    //create a unique ID value for HTML element
    let nameString = `tl${locY}${locX}`;

    //bubble creation
    const bubble = document.createElement(`div`);
    bubble.setAttribute(`class`, `bubble`);
    bubble.setAttribute(`id`, nameString);

    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let rgbValue = `#` + randomColor;

    bubble.style.backgroundColor = rgbValue;

    //add node element to the DOM (allow interaction)
    gameE.append(bubble);

    //Use Greensock
    gsap.set(`#${nameString}`, {
        x: locX,
        y: locY,
        opacity: 1
    });

    //Creating timeline
    tl = gsap.timeline({
        repeat: 0,
        paused: true
    });

    //define bubble path and animation
    tl.to(`#${nameString}`, {
        y: locY - 100,
        opacity: 0,
        duration: 4
    });

    tl.play();

    bubble.addEventListener("click", function (event) {
        console.log(`1 point`);
        tl.kill();
        event.target.remove();
        createBubble(Math.floor(Math.random() * 350) + 50, Math.floor(Math.random() * 750) + 50);
    });
}

createBubble(Math.floor(Math.random() * 350) + 50, Math.floor(Math.random() * 750) + 50);