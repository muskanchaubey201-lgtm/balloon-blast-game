
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Balloon Blast 🎈</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="game-container">

        <!-- Header -->
        <div class="header">

            <div class="logo">
                🎈 Balloon Blast
            </div>

            <div class="stats">

                <div class="stat">
                    <span>🏆</span>
                    <div>
                        <small>Score</small>
                        <b id="score">0</b>
                    </div>
                </div>

                <div class="stat">
                    <span>⏱️</span>
                    <div>
                        <small>Time</small>
                        <b id="time">30</b>
                    </div>
                </div>

                <div class="stat">
                    <span>❤️</span>
                    <div>
                        <small>Lives</small>
                        <b id="lives">3</b>
                    </div>
                </div>

            </div>

        </div>


        <!-- Game -->
        <div id="gameArea">

            <!-- Clouds -->
            <div class="cloud cloud1"></div>
            <div class="cloud cloud2"></div>
            <div class="cloud cloud3"></div>

            <!-- Start Screen -->
            <div id="startScreen">

                <div class="start-box">

                    <div class="big-balloon">🎈</div>

                    <h1>Balloon Blast</h1>

                    <p>
                        🎯 Shoot as many balloons as you can!
                    </p>

                    <button id="startButton" onclick="startGame()">
                        ▶ START GAME
                    </button>

                </div>

            </div>

        </div>

        <p class="instruction">
            🎯 Click the balloons to pop them!
        </p>

    </div>

    <script src="game.js"></script>

</body>

</html>
