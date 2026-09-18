
let score = 0;
let time = 30;
let lives = 3;

let gameTimer;
let balloonTimer;

let gameRunning = false;


/* Start Game */

function startGame() {

    score = 0;
    time = 30;
    lives = 3;

    gameRunning = true;

    document.getElementById("score").innerText = score;
    document.getElementById("time").innerText = time;
    document.getElementById("lives").innerText = lives;

    document.getElementById("startScreen").style.display = "none";


    /* Create first balloons */

    for (let i = 0; i < 4; i++) {
        createBalloon();
    }


    /* Timer */

    gameTimer = setInterval(function () {

        time--;

        document.getElementById("time").innerText = time;

        if (time <= 0) {
            endGame();
        }

    }, 1000);


    /* New balloons */

    balloonTimer = setInterval(function () {

        if (gameRunning) {
            createBalloon();
        }

    }, 700);
}


/* Create Balloon */

function createBalloon() {

    if (!gameRunning) {
        return;
    }


    const gameArea =
        document.getElementById("gameArea");


    const balloon =
        document.createElement("div");


    balloon.classList.add("balloon");


    /* Balloon colors */

    const colors = [
        "#ff4757",
        "#ffa502",
        "#2ed573",
        "#1e90ff",
        "#a55eea",
        "#ff6b81",
        "#00cec9"
    ];


    const color =
        colors[Math.floor(Math.random() * colors.length)];


    balloon.style.background = color;

    balloon.style.color = color;


    /* Random position */

    const maxX =
        gameArea.clientWidth - 65;


    const startX =
        Math.random() * maxX;


    let y =
        gameArea.clientHeight + 20;


    balloon.style.left =
        startX + "px";


    balloon.style.top =
        y + "px";


    gameArea.appendChild(balloon);


    /* Balloon speed */

    const speed =
        1.5 + Math.random() * 2.5;


    let lastTime =
        performance.now();


    function moveBalloon(currentTime) {

        if (!gameRunning) {
            return;
        }


        const delta =
            (currentTime - lastTime) / 16.67;


        lastTime = currentTime;


        y -= speed * delta;


        balloon.style.top =
            y + "px";


        if (y < -100) {

            balloon.remove();

            /* Missed balloon */

            lives--;

            document.getElementById("lives").innerText =
                lives;


            if (lives <= 0) {
                endGame();
            }

            return;
        }


        requestAnimationFrame(moveBalloon);
    }


    requestAnimationFrame(moveBalloon);


    /* Shoot balloon */

    balloon.addEventListener("click", function (event) {

        event.stopPropagation();


        if (!gameRunning) {
            return;
        }


        /* Score */

        score += 10;

        document.getElementById("score").innerText =
            score;


        /* Shooting effect */

        createShootEffect(
            event.clientX,
            event.clientY
        );


        /* Pop animation */

        balloon.classList.add("pop");


        setTimeout(function () {

            balloon.remove();

        }, 150);

    });
}


/* Shooting effect */

function createShootEffect(x, y) {

    const effect =
        document.createElement("div");


    effect.classList.add("shoot");


    effect.style.left =
        x + "px";


    effect.style.top =
        y + "px";


    document.body.appendChild(effect);


    setTimeout(function () {

        effect.remove();

    }, 300);
}


/* End Game */

function endGame() {

    if (!gameRunning) {
        return;
    }


    gameRunning = false;


    clearInterval(gameTimer);

    clearInterval(balloonTimer);


    /* Remove balloons */

    document
        .querySelectorAll(".balloon")
        .forEach(function (balloon) {

            balloon.remove();

        });


    /* Show result */

    setTimeout(function () {

        document.getElementById("startScreen").style.display =
            "flex";


        document.querySelector(".start-box h1").innerText =
            "🎮 Game Over!";


        document.querySelector(".start-box p").innerText =
            "Your final score: " + score;


        document.getElementById("startButton").innerText =
            "🔄 PLAY AGAIN";


    }, 200);
}
