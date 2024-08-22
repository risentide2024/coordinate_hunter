            //-----DOM Event listeners 2-(Client Side)---------------------------------------------------
            // Execute JavaScript after the DOM is fully loaded-(Client Side)
            document.addEventListener("DOMContentLoaded", function () {
                setTimeout(function () {
                    // Hide the splash screen after 4 seconds
                    document.getElementById("splash-screen").style.display = "none";
                    // You can add logic here to show the main game content
                }, 4000); // Display splash screen for 4 seconds

                // Get the initial coordinates of the black vessel
                var vessel = document.getElementById("vessel");
                var initialX = vessel.offsetLeft + 0;
                var initialY = vessel.offsetTop + 0;

                // Display the initial coordinates in Cartesian form
                updateAllDisplays("xCoord", Math.round(screenToCartesian(initialX, initialY).x));
                updateAllDisplays("xCoord", Math.round(screenToCartesian(initialX, initialY).y));

                // Add event listener for the move button
                document.getElementById("move-button").addEventListener("click", function () {
                    var xInput = document.getElementById("xCoordinateInput").value;
                    var yInput = document.getElementById("yCoordinateInput").value;

                    // Check if inputs are valid numbers
                    if (xInput !== "" && yInput !== "") {
                        var targetX = parseInt(xInput);
                        var targetY = parseInt(yInput);

                        // Convert Cartesian coordinates to screen coordinates
                        var screenCoords = cartesianToScreen(targetX, targetY);

                        // Move black vessel to the converted screen coordinates
                        moveBlackVesselToCoordinates(screenCoords.x, screenCoords.y);
                    }
                });

                // Add event listener for the stop button
                var stopButton = document.getElementById("stop-button");
                stopButton.addEventListener("click", function () {
                    // Stop the black vessel from moving
                    stopMoving();
                });

                // Add event listener for the artillery button
                var artilleryButton = document.getElementById("artillery-button");
                artilleryButton.addEventListener("click", function () {
                    // Get the inputted firing coordinates
                    var artilleryX = document.getElementById("artilleryXInput").value;
                    var artilleryY = document.getElementById("artilleryYInput").value;

                    // Ensure inputs are not empty
                    if (artilleryX === "" || artilleryY === "") return;

                    // Convert Cartesian coordinates to screen coordinates
                    var screenCoords = cartesianToScreen(parseInt(artilleryX), parseInt(artilleryY));

                    calculateAndDisplayArtillerySlope();

                    // Create the red dot at the converted screen coordinates
                    createRedDot(screenCoords.x, screenCoords.y);
                });

                // Add event listener for the torpedo button
                var torpedoButton = document.getElementById("torpedo-button");
                torpedoButton.addEventListener("click", function () {
                    // Get the inputted firing coordinates
                    var artilleryX = document.getElementById("artilleryXInput").value;
                    var artilleryY = document.getElementById("artilleryYInput").value;

                    // Ensure inputs are not empty
                    if (artilleryX === "" || artilleryY === "") return;

                    // Convert Cartesian coordinates to screen coordinates
                    var screenCoords = cartesianToScreen(parseInt(artilleryX), parseInt(artilleryY));

                    // Update the input values in the DOM (if needed)
                    document.getElementById("artilleryXInput").value = artilleryX;
                    document.getElementById("artilleryYInput").value = artilleryY;

                    calculateAndDisplayArtillerySlope();

                    // Call a function to handle torpedo action with the converted screen coordinates
                    handleTorpedoAction(screenCoords.x, screenCoords.y);

                    updateTorpDisplay(); // Update the display
                });

                // Add event listener for the pause button
                document.getElementById("pause-button").addEventListener("click", function () {
                    // Convert pauseDisplay to a string and extract the numeric part
                    let pauseDisplayString = String(pauseDisplay);
                    let pauseDisplayNumber = Number(pauseDisplayString.replace(/[^0-9]/g, ""));

                    if (isNaN(pauseDisplayNumber)) {
                        console.error("pauseDisplay is not a valid number: ", pauseDisplay);
                        return; // Exit the function if pauseDisplay is invalid
                    }

                    if (isPaused || pauseDisplayNumber > 0) {
                        // Allow pause only if it is currently paused or if pauses are greater than zero
                        isPaused = !isPaused; // Toggle pause state
                        this.style.backgroundColor = isPaused ? "red" : ""; // Change color based on state

                        if (isPaused) {
                            stopMovingBlueVessels();
                            showTip();
                            updatePauseDisplay(); // Update the display
                        } else {
                            initializeBlueVessels();
                            this.disabled = pauseDisplayNumber <= 0; // Disable the pause button if no pauses left
                        }
                    }
                });

                // Function to clear input boxes
                function clearInputBoxes() {
                    document.getElementById("xCoordinateInput").value = "";
                    document.getElementById("yCoordinateInput").value = "";
                }

                // Track currently pressed keys
                var pressedKeys = new Set();

                // Event listener for keydown to detect simultaneous key presses
                document.addEventListener("keydown", function (event) {
                    // Check if the pressed key is a movement key and no modifier key is pressed
                    if (isMovementKey(event.key) && !event.ctrlKey && !event.altKey && !event.metaKey && !event.shiftKey) {
                        // Add the pressed key to the set for direction handling
                        pressedKeys.add(event.key.toLowerCase());

                        // Update currentDirection based on pressed keys
                        updateCurrentDirection();
                    }
                });

                // Event listener for keyup to remove keys from set
                document.addEventListener("keyup", function (event) {
                    // Check if the released key is a movement key
                    if (isMovementKey(event.key)) {
                        // Remove the released key from the set
                        pressedKeys.delete(event.key.toLowerCase());

                        // Update currentDirection based on pressed keys
                        updateCurrentDirection();
                    }
                });

                // Function to check if the key is a movement key
                function isMovementKey(key) {
                    return key === "ArrowUp" || key === "ArrowDown" || key === "ArrowLeft" || key === "ArrowRight" || key === "w" || key === "a" || key === "s" || key === "d";
                }

                // Function to update currentDirection based on pressed keys
                function updateCurrentDirection() {
                    // Reset direction
                    currentDirection.x = 0;
                    currentDirection.y = 0;

                    // Check for arrow keys
                    if (pressedKeys.has("arrowup")) {
                        currentDirection.y = -1; // Move up
                    } else if (pressedKeys.has("arrowdown")) {
                        currentDirection.y = 1; // Move down
                    }

                    if (pressedKeys.has("arrowleft")) {
                        currentDirection.x = -1; // Move left
                    } else if (pressedKeys.has("arrowright")) {
                        currentDirection.x = 1; // Move right
                    }

                    // Check for WASD keys
                    if (pressedKeys.has("w")) {
                        currentDirection.y = -1; // Move up
                    } else if (pressedKeys.has("s")) {
                        currentDirection.y = 1; // Move down
                    }

                    if (pressedKeys.has("a")) {
                        currentDirection.x = -1; // Move left
                    } else if (pressedKeys.has("d")) {
                        currentDirection.x = 1; // Move right
                    }

                    // Multiply direction by speed
                    currentDirection.x *= speed;
                    currentDirection.y *= speed;

                    // Debug log for currentDirection
                }

                // Add event listener for the refresh button
                var refreshButton = document.getElementById("refresh-button");
                refreshButton.addEventListener("click", function () {
                    location.reload(); // Refresh the page
                });

                // Add event listeners for keypress actions for move, stop, artillery, and torpedo
                document.addEventListener("keydown", function (event) {
                    switch (event.key.toLowerCase()) {
                        case "m":
                            document.getElementById("move-button").click();
                            break;
                        case "h":
                            document.getElementById("stop-button").click();
                            break;
                        case "r":
                            document.getElementById("artillery-button").click();
                            break;
                        case "t":
                            document.getElementById("torpedo-button").click();
                            break;
                        case "p":
                            document.getElementById("pause-button").click();
                            break;
                        case "f":
                            document.getElementById("refresh-button").click();
                            break;
                    }
                });

                // Add event listener for the Next Round button
                document.getElementById("next-round-button").addEventListener("click", function () {
                    startNewRound();
                });

                // Generate horizontal and vertical rulers
                generateRulers();

                // Generate random positions for blue vessels
                generateRandomPositions();

                // Check proximity of blue vessels to black vessel
                setInterval(checkProximity, 100); // Check every 100 milliseconds
            });

