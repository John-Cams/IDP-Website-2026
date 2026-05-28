const letter = document.getElementById("test");

let isHeld = false;
let holdTimer = null;
let startX, startY;

const HOLD = 50; //ms
const SWIPE = 30; //px

letter.addEventListener('pointerdown', (e) => {
    startX = e.clientX;
    startY = e.clientY;

    holdTimer = setTimeout(() => {
        isHeld = true;
        letter.style.color = "red";
    }, HOLD)
})

letter.addEventListener('pointermove', (e) => {
    if (!isHeld) return;

    const currentX = e.clientX;
    const currentY = e.clientY;

    const diffX = currentX - startX;
    const diffY = currentY - startY;

    // Determine swipe direction
    if (Math.abs(diffX) > SWIPE) {
        if (diffX > 0) console.log('Swiped Right after holding!');
        else console.log('Swiped Left after holding!');
        
        resetHoldState(); // Prevent triggering multiple swipes in one motion
    } 
    else if (Math.abs(diffY) > SWIPE) {
        if (diffY > 0) console.log('Swiped Down after holding!');
        else console.log('Swiped Up after holding!');
        
        resetHoldState();
    }
});

letter.addEventListener('pointerup', resetHoldState);
letter.addEventListener('pointerleave', resetHoldState);

function resetHoldState() {
    clearTimeout(holdTimer);
    isHeld = false;
    letter.style.color = "black";
}