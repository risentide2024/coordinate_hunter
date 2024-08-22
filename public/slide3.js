            //---Display-(Server Side)-----------------------------------------------------------------------------
            // Function to update the round display
            function updateRoundDisplay() {
                roundDisplay++;
                resurfs++;
                updateAllDisplays("roundDisplay", roundDisplay);
            }

            // Function to update the score display
            function updateScoreDisplay() {
                var blackVesselPoints = parseInt(pointsBlack);
                updateAllDisplays("scoreDisplay", blackVesselPoints);
            }

            // Function to update the pause display
            function updatePauseDisplay() {
                if (pauseDisplay > 0) {
                    pauseDisplay--;
                    updateAllDisplays("pauseDisplay", pauseDisplay);
                } else {
                    pauseDisplay = 0;
                }
            }

            // Function to update the torpedo display
            function updateTorpDisplay() {
                if (torpDisplay > 0) {
                    torpDisplay--;
                    updateAllDisplays("torpDisplay", torpDisplay);
                } else {
                    torpDisplay = 0;
                }
            }

            // Function to update the main display with Cartesian coordinates
            function updateDisplay() {
                var vessel = getFromScreen("vessel");
                var centerX = vessel.offsetLeft + vessel.offsetWidth / 2;
                var centerY = vessel.offsetTop + vessel.offsetHeight / 2;

                var cartesianCoords = screenToCartesian(centerX, centerY);
                updateAllDisplays("xCoord", Math.round(cartesianCoords.x));
                updateAllDisplays("yCoord", Math.round(cartesianCoords.y));
            }

            //---Quadrants-(Server Side)-------------------------------------------------------------------------
            // Function to apply fade-in animation to quadrant indicators
            function fadeInQuadrants() {
                var quadrants = document.querySelectorAll(".quadrant");
                quadrants.forEach((quadrant) => {
                    quadrant.style.animation = "fadeIn 2s forwards";
                });
            }

            // Function to apply fade-out animation to quadrant indicators
            function fadeOutQuadrants() {
                var quadrants = document.querySelectorAll(".quadrant");
                quadrants.forEach((quadrant) => {
                    quadrant.style.animation = "fadeOut 2s forwards";
                });
            }

            //---Convert Coordinates-(Server Side)-----------------------------------------------------------------
            // Function to convert screen coordinates to Cartesian coordinates
            function screenToCartesian(screenX, screenY) {
                // Get the viewport dimensions
                var viewportWidth = window.innerWidth;
                var viewportHeight = window.innerHeight;

                // Calculate the Cartesian coordinates
                var cartesianX = screenX - viewportWidth / 2;
                var cartesianY = viewportHeight / 2 - screenY;

                return { x: cartesianX, y: cartesianY };
            }

            // Function to convert Cartesian coordinates to screen coordinates
            function cartesianToScreen(cartesianX, cartesianY) {
                // Get the viewport dimensions
                var viewportWidth = window.innerWidth;
                var viewportHeight = window.innerHeight;

                // Calculate screen coordinates
                var screenX = viewportWidth / 2 + cartesianX;
                var screenY = viewportHeight / 2 - cartesianY;

                return { x: screenX, y: screenY };
            }

            //--Rulers (Grid Marker)-(Server Side)----------------------------------------------------------
            function generateRulers() {
                // JavaScript to create tick marks and labels for the top (x-axis) ruler
                var topRuler = document.querySelector(".top");
                var rulerWidth = window.innerWidth;

                // Create tick marks and labels for the x-axis ruler (positive and negative)
                for (let i = rulerWidth / 2; i > 0; i -= 50) {
                    var tick = document.createElement("div");
                    tick.className = "tick-top";
                    tick.style.left = i + "px";
                    topRuler.appendChild(tick);

                    var label = document.createElement("div");
                    label.className = "tick-label-top";
                    label.style.left = i - 10 + "px"; // Adjust to center with the tick

                    // Convert screen coordinates to Cartesian coordinates for x-axis
                    var cartesianCoordsX = screenToCartesian(i, 0);
                    label.textContent = `${cartesianCoordsX.x}`;

                    topRuler.appendChild(label);
                }

                for (let i = rulerWidth / 2; i < rulerWidth; i += 50) {
                    var tick = document.createElement("div");
                    tick.className = "tick-top";
                    tick.style.left = i + "px";
                    topRuler.appendChild(tick);

                    var label = document.createElement("div");
                    label.className = "tick-label-top";
                    label.style.left = i - 10 + "px"; // Adjust to center with the tick

                    // Convert screen coordinates to Cartesian coordinates for x-axis
                    var cartesianCoordsX = screenToCartesian(i, 0);
                    label.textContent = `${cartesianCoordsX.x}`;

                    topRuler.appendChild(label);
                }

                // JavaScript to create tick marks and labels for the left (y-axis) ruler
                var leftRuler = document.querySelector(".left");
                var rulerHeight = window.innerHeight;

                // Create tick marks and labels for the y-axis ruler (positive and negative)
                for (let i = rulerHeight / 2; i > 0; i -= 50) {
                    var tick = document.createElement("div");
                    tick.className = "tick-left";
                    tick.style.top = i + "px";
                    leftRuler.appendChild(tick);

                    var label = document.createElement("div");
                    label.className = "tick-label-left";
                    label.style.top = i - 6 + "px"; // Adjust to align with the tick

                    // Convert screen coordinates to Cartesian coordinates for y-axis
                    var cartesianCoordsY = screenToCartesian(0, i);
                    label.textContent = `${cartesianCoordsY.y}`;

                    leftRuler.appendChild(label);
                }

                for (let i = rulerHeight / 2; i < rulerHeight; i += 50) {
                    var tick = document.createElement("div");
                    tick.className = "tick-left";
                    tick.style.top = i + "px";
                    leftRuler.appendChild(tick);

                    var label = document.createElement("div");
                    label.className = "tick-label-left";
                    label.style.top = i - 6 + "px"; // Adjust to align with the tick

                    // Convert screen coordinates to Cartesian coordinates for y-axis
                    var cartesianCoordsY = screenToCartesian(0, i);
                    label.textContent = `${cartesianCoordsY.y}`;

                    leftRuler.appendChild(label);
                }
            }

            //---Slope---------------------------------------------------------------------
 

            // Function to calculate slope between two points-(Server Side)
            function calculateSlope(x1, y1, x2, y2) {
                if (x2 === x1) {
                    return Infinity; // Vertical line, slope is infinity
                } else {
                    return ((y2 - y1) / (x2 - x1)).toFixed(2); // Calculate slope and round to two decimal places
                }
            }

            //-(Server Side)
            function updateCoordinatesAndPointsAndSlope(blackVessel, blueVessel) {
                // Ensure the variables are defined
                let blackX = 0,
                    blackY = 0,
                    blueX = 0,
                    blueY = 0;

                // Update blue vessel coordinates and points if points are above 0
                var id = blueVessel.dataset.id;
                if (blueVessel.points > 0) {
                    blueX = Math.round(blueVessel.offsetLeft);
                    blueY = Math.round(blueVessel.offsetTop);

                    var cartesianCoords = screenToCartesian(blueX, blueY);
                    updateAllDisplays("xCoordBlue" + id, Math.round(cartesianCoords.x));
                    updateAllDisplays("yCoordBlue" + id, Math.round(cartesianCoords.y));
                } else {
                    updateAllDisplays("xCoordBlue" + id, "***");
                    updateAllDisplays("yCoordBlue" + id, "***");
                    blueVessel.style.display = "none"; // Hide the blue vessel
                }

                // Calculate slope
                var slope = calculateSlope(blackX, blackY, blueX, blueY);

                // Update slope
                updateAllDisplays("slopeBlue" + id, slope);

                // Update blue vessel points
                updateAllDisplays("pointsBlue" + id, blueVessel.points);
            }

            //------Black Vessel (Submarine)-----------------------------------------------------
            // Function to center the black vessel on the screen-(Server Side)
            function centerBlackVessel() {
                var vessel = getFromScreen("vessel");
                var viewportWidth = window.innerWidth;
                var viewportHeight = window.innerHeight;

                // Offset by half of the vessel's dimensions to center it
                var centerX = viewportWidth / 2 - vessel.offsetWidth / 2;
                var centerY = viewportHeight / 2 - vessel.offsetHeight / 2;

                // Move the vessel one pixel to the right
                centerX += 18;

                // Move the vessel one pixel to the right
                centerY += 10;

                // Set the position of the vessel
                vessel.style.left = centerX + "px";
                vessel.style.top = centerY + "px";
            }

            // Function to center the black vessel on the screen and update the display-(Server Side)
            function initializeBlackVessel() {
                // Black vessel starting points
                if (roundDisplay === 1) {
                    updateAllDisplays("pointsBlack", basePoints + 5);
                } else {
                    // Reset the black vessel points
                    var blackVesselPoints = parseInt(pointsBlack);
                    blackVesselPoints += 5; // Points from last round plus 5
                    updateAllDisplays("pointsBlack", blackVesselPoints);
                }
                centerBlackVessel();
                updateDisplay();
            }

            // Function to move the black vessel-(Server Side)
            function moveBlackVessel() {
                if (isPaused) return; // Check if paused
                var blackVesselPoints = getFromScreen("pointsBlack");
                if (parseInt(blackVesselPoints.textContent) <= 0) return; // Check points

                // Get the black vessel element
                var vessel = getFromScreen("vessel");

                // Get current coordinates
                var currentX = vessel.offsetLeft;
                var currentY = vessel.offsetTop;

                // Calculate new coordinates
                var newX = currentX + currentDirection.x;
                var newY = currentY + currentDirection.y;

                // Get viewport dimensions
                var viewportWidth = window.innerWidth;
                var viewportHeight = window.innerHeight;

                // Calculate boundary limits
                var minX = 0;
                var minY = 0;
                var maxX = viewportWidth - vessel.offsetWidth;
                var maxY = viewportHeight - vessel.offsetHeight;

                // Ensure new coordinates stay within bounds
                newX = Math.min(Math.max(newX, minX), maxX);
                newY = Math.min(Math.max(newY, minY), maxY);

                // Calculate slope
                var slope = calculateSlope(currentX, currentY, newX, newY);

                // Convert new coordinates to Cartesian coordinates
                var cartesianCoords = screenToCartesian(newX, newY);

                updateAllDisplays("xCoord", Math.round(cartesianCoords.x));
                updateAllDisplays("yCoord", Math.round(cartesianCoords.y));
                updateAllDisplays("slopeBlack", slope);

                // Move the black vessel
                vessel.style.left = newX + "px";
                vessel.style.top = newY + "px";

                // Change the direction of vessel
                if (newX < currentX) {
                    vessel.style.transform = "translate(-17px, -8px) scaleX(-1)";
                } else if (currentX < newX) {
                    vessel.style.transform = "translate(-17px, -8px) scaleX(1)";
                }
            }

            // Function to move the black vessel to the entered coordinates-(Server Side)
            function moveBlackVesselToCoordinates(targetX, targetY) {
                var blackVesselPoints = getFromScreen("pointsBlack");
                if (parseInt(blackVesselPoints.textContent) <= 0) return; // Check points

                // Ensure inputs are numbers
                if (isNaN(targetX) || isNaN(targetY)) return;

                var vessel = getFromScreen("vessel");
                var currentX = vessel.offsetLeft;
                var currentY = vessel.offsetTop;

                // Calculate the distance to move in each axis
                var dx = targetX - currentX;
                var dy = targetY - currentY;

                // Calculate the total distance to move
                var distance = Math.sqrt(dx * dx + dy * dy);

                // Calculate the number of steps needed (40 pixels per second, 100 ms interval)
                var spd = speed * 40; // Pixels per second
                var interval = 100; // Milliseconds
                var steps = Math.ceil(distance / (spd * (interval / 1000)));

                // Calculate the distance to move in each step
                var stepX = dx / steps;
                var stepY = dy / steps;

                // Clear any existing move interval if there is one
                clearInterval(moveIntervalId);

                // Move the black vessel gradually
                var stepCount = 0;
                moveIntervalId = setInterval(function () {
                    if (isPaused) return; // Check if paused

                    // Check if any movement key is pressed
                    if (currentDirection.x !== 0 || currentDirection.y !== 0) {
                        clearInterval(moveIntervalId); // Stop moving towards target coordinates
                        moveIntervalId = setInterval(moveBlackVessel, 100); // Restart the interval for moveBlackVessel
                        return;
                    }

                    // Move the vessel by the step distance
                    currentX += stepX;
                    currentY += stepY;

                    // Change the direction of vessel
                    if (targetX < currentX) {
                        vessel.style.transform = "translate(-17px, -8px) scaleX(-1)";
                    } else if (currentX < targetX) {
                        vessel.style.transform = "translate(-17px, -8px) scaleX(1)";
                    }

                    // Check if the new position is within the screen boundaries
                    var maxX = window.innerWidth - vessel.offsetWidth;
                    var maxY = window.innerHeight - vessel.offsetHeight;

                    if (currentX < 0 || currentX > maxX || currentY < 0 || currentY > maxY) {
                        clearInterval(moveIntervalId); // Stop moving if out of bounds
                        moveIntervalId = setInterval(moveBlackVessel, 100); // Restart the interval for moveBlackVessel
                        return;
                    }

                    // Move the vessel
                    vessel.style.left = currentX + "px";
                    vessel.style.top = currentY + "px";

                    // Update coordinates in display
                    updateAllDisplays("xCoord", Math.round(currentX));
                    updateAllDisplays("yCoord", Math.round(currentY));

                    // Increment step count
                    stepCount++;

                    // If reached the target coordinates, stop moving
                    if (stepCount >= steps) {
                        clearInterval(moveIntervalId);
                        moveIntervalId = setInterval(moveBlackVessel, 100); // Restart the interval for moveBlackVessel
                    }
                }, interval);

                // Calculate the slope between current and target coordinates
                var slope = calculateSlope(currentX, currentY, targetX, targetY);
                updateAllDisplays("slopeBlack", slope);

                // Update the target coordinates display
                updateAllDisplays("xCoord", Math.round(targettX));
                updateAllDisplays("yCoord", Math.round(targetY));
            }

            // Function to stop the black vessel from moving-(Server Side)
            function stopMoving() {
                clearInterval(moveIntervalId);
            }

            // Helper function to deduct points from the black vessel based on elapsed time-(Server Side)
            function deductBlackPoints(blackVesselPoints) {
                if (parseInt(blackVesselPoints.textContent) >= 5) {
                    pointsBlack = blackVesselPoints.textContent = parseInt(blackVesselPoints.textContent) - 5;
                    updateScoreDisplay();
                }
            }

            //---Blue Vessels (Ships)-----------------------------------------------------------
            //-(Server Side)
            function initializeBlueVessels() {
                //var blueVessels = document.getElementsByClassName("blue-vessel");
                var blueVessels = getFromScreen(".blue-vessel");
                for (var i = 0; i < blueVessels.length; i++) {
                    // Corrected loop condition
                    // Reset the blue vessel points
                    var pointsElement = getFromScreen("pointsBlue" + (i + 1));
                    if (pointsElement) {
                        pointsElement.textContent = basePoints + 5;
                    }
                    moveBlueVessel(blueVessels[i]);
                }
            }

            // Function to generate random positions for blue vessels and start their movement-(Server Side)
            function generateRandomPositions() {
                var centerThreshold = 200; // Threshold distance from the center

                for (let i = 1; i <= 5; i++) {
                    let blueVessel = document.createElement("div");
                    blueVessel.classList.add("blue-vessel");

                    let x, y;
                    do {
                        x = Math.floor(Math.random() * window.innerWidth);
                        y = Math.floor(Math.random() * window.innerHeight);
                    } while (Math.abs(x - window.innerWidth / 2) < centerThreshold || Math.abs(y - window.innerHeight / 2) < centerThreshold);

                    blueVessel.style.left = x + "px";
                    blueVessel.style.top = y + "px";
                    blueVessel.points = basePoints + roundDisplay * 5; // Assign points value
                    blueVessel.dataset.id = i; // Assign dataset id
                    document.body.appendChild(blueVessel);

                    // Start moving the blue vessel
                    moveBlueVessel(blueVessel);
                }
                //var blueVessels = document.getElementsByClassName("blue-vessel");
                var blueVessels = getFromScreen(".blue-vessel");
                for (var i = 0; i < blueVessels.length; i++) {
                    // Corrected loop condition
                    // Reset the blue vessel points
                    var pointsElement = getFromScreen("pointsBlue" + (i + 1));
                    if (pointsElement) {
                        pointsElement.textContent = basePoints + 5;
                    }
                }
            }

            // Function to stop all blue vessels from moving-(Server Side)
            function stopMovingBlueVessels() {
                // Clear all interval IDs
                moveIntervalIds.forEach(function (intervalId) {
                    clearInterval(intervalId);
                });

                // Clear the interval IDs array
                moveIntervalIds = [];
            }

            // Function to calculate distance between two elements-(Server Side)
            function calculateDistance(element1, element2) {
                var rect1 = element1.getBoundingClientRect();
                var rect2 = element2.getBoundingClientRect();
                var dx = rect1.left - rect2.left;
                var dy = rect1.top - rect2.top;
                return Math.sqrt(dx * dx + dy * dy);
            }

             //-(Server Side)
            function checkProximity() {
                var blueVessels = document.querySelectorAll(".blue-vessel");
                var blackVessel = getFromScreen("vessel");
                var blackVesselPoints = getFromScreen("pointsBlack");
                var redDot = getFromScreen(".red-dot"); // Get the red dot element

                // Get the initial text content of xCoord and yCoord
                var xCoordBlack = xCoord;
                var yCoordBlack = yCoord;

                if (parseInt(blackVesselPoints.textContent) <= 0) {
                    //Game Over message
                    showDialogue2();

                    // Update coordinates to "***"
                    updateAllDisplays("xCoord", "***");
                    updateAllDisplays("yCoord", "***");

                    // Hide the black vessel and red dot
                    blackVessel.style.display = "none";
                    if (redDot) {
                        redDot.style.visibility = "hidden";
                    }
                } else {
                    // Show the black vessel if it was previously hidden
                    blackVessel.style.display = "block";

                    var withinRange = false;

                    // Iterate over each blue vessel
                    blueVessels.forEach(function (blueVessel, index) {
                        var distance = calculateDistance(blackVessel, blueVessel);

                        // Select the coordinate display elements for the current blue vessel
                        var xCoordDisplay = Math.round(blueVessel.offsetLeft);
                        var yCoordDisplay = Math.round(blueVessel.offsetTop);
                        var coordinateGroup = getFromScreen("blueVessel" + (index + 1));

                        if (distance < 100) {
                            withinRange = true;
                            // Set background color to 50% transparent yellow when within range
                            blueVessel.style.backgroundColor = "rgba(255, 255, 0, 0.5)";
                            coordinateGroup.style.backgroundColor = "rgba(255, 255, 0, 0.5)"; // Update display box

                            // Add yellow-vessel class to blue vessel within range
                            blueVessel.classList.add("yellow-vessel");

                            // Call blueArtillery function passing coordinates of black vessel
                            blueArtillery(blackVessel.offsetLeft, blackVessel.offsetTop);

                            var t = updatePointTimer();
                            // Deduct points based on elapsed time
                            if (t) {
                                deductBlackPoints(blackVesselPoints);
                            }
                        } else {
                            // Set background color back to default when out of range
                            blueVessel.style.backgroundColor = "blue";
                            coordinateGroup.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; // Reset display box

                            // Remove yellow-vessel class if blue vessel is out of range
                            blueVessel.classList.remove("yellow-vessel");
                        }
                    });

                    // Set red dot visibility and position based on proximity check
                    if (withinRange && redDot) {
                        redDot.style.visibility = "visible";
                        // Generate random offsets within 10 pixels
                        var randomOffsetTop = Math.random() * 20 - 10;
                        var randomOffsetLeft = Math.random() * 20 - 10;
                        redDot.style.top = blackVessel.offsetTop + randomOffsetTop + "px";
                        redDot.style.left = blackVessel.offsetLeft + randomOffsetLeft + "px";
                    } else if (redDot) {
                        redDot.style.visibility = "hidden";
                    }
                }
            }

            // Function to move a blue vessel to a random destination-(Server Side)
            function moveBlueVessel(blueVessel) {
                // Set initial position and speed
                var startX = blueVessel.offsetLeft;
                var startY = blueVessel.offsetTop;
                var spd = speed * 10; // Pixels per second

                // Generate random target coordinates within window bounds
                var targetX = Math.random() * (window.innerWidth - blueVessel.offsetWidth);
                var targetY = Math.random() * (window.innerHeight - blueVessel.offsetHeight);

                // Random delay between 0 and 1000 milliseconds
                var delay = Math.random() * 1000;

                setTimeout(function () {
                    // Move the blue vessel every 100 milliseconds
                    var intervalId = setInterval(function () {
                        // Calculate the current position
                        var currentLeft = blueVessel.offsetLeft;
                        var currentTop = blueVessel.offsetTop;

                        // Calculate direction towards the endpoint
                        var dx = targetX - currentLeft;
                        var dy = targetY - currentTop;

                        // Calculate distance to endpoint
                        var distanceToTarget = Math.sqrt(dx * dx + dy * dy);

                        // Normalize direction to maintain constant speed
                        var moveX = ((dx / distanceToTarget) * spd) / 10;
                        var moveY = ((dy / distanceToTarget) * spd) / 10;

                        // Calculate the new position
                        var newLeft = currentLeft + moveX;
                        var newTop = currentTop + moveY;

                        // Calculate and log the slope
                        var slope = calculateSlope(currentLeft, currentTop, newLeft, newTop);

                        // Flip the vessel based on movement direction
                        if (newLeft < currentLeft) {
                            blueVessel.style.transform = "translate(0px, 0px) scaleX(-1)";
                        } else if (currentLeft < newLeft) {
                            blueVessel.style.transform = "translate(0px, 0px) scaleX(1)";
                        }

                        // Check if the vessel has reached or passed the endpoint
                        if (Math.abs(targetX - newLeft) <= Math.abs(moveX) && Math.abs(targetY - newTop) <= Math.abs(moveY)) {
                            // Set new start position and recalculate endpoint
                            startX = targetX;
                            startY = targetY;

                            // Generate new random target coordinates for the next movement
                            targetX = Math.random() * (window.innerWidth - blueVessel.offsetWidth);
                            targetY = Math.random() * (window.innerHeight - blueVessel.offsetHeight);
                        }

                        // Ensure the blue vessel stays within bounds
                        if (newLeft < 0) {
                            newLeft = 0;
                        } else if (newLeft > window.innerWidth - blueVessel.offsetWidth) {
                            newLeft = window.innerWidth - blueVessel.offsetWidth;
                        }
                        if (newTop < 0) {
                            newTop = 0;
                        } else if (newTop > window.innerHeight - blueVessel.offsetHeight) {
                            newTop = window.innerHeight - blueVessel.offsetHeight;
                        }

                        // Update the position of the blue vessel
                        blueVessel.style.left = newLeft + "px";
                        blueVessel.style.top = newTop + "px";

                        // Update coordinates and points in the display
                        var blackVessel = getFromScreen("vessel");
                        updateCoordinatesAndPointsAndSlope(blackVessel, blueVessel);
                    }, 100); // Move every 100 milliseconds

                    // Add the interval ID to the array
                    moveIntervalIds.push(intervalId);
                }, delay); // Random delay before starting the interval
            }

            //----Attack----------------------------------------------------------------------
            // Function to handle blue artillery fire at the black vessel coordinates-(Server Side)
            function blueArtillery(blackX, blackY) {
                // Get the black vessel points
                var blackVesselPoints = parseInt(pointsBlack);

                // Only proceed if black vessel points are above 0
                if (blackVesselPoints > 0) {
                    // Create a new div element for the red dot if it doesn't exist
                    var redDot = document.querySelector(".red-dot");
                    if (!redDot) {
                        redDot = document.createElement("div");
                        redDot.classList.add("red-dot");
                        document.body.appendChild(redDot);
                    }

                    // Calculate the position to center the red dot over the black vessel
                    var dotX = blackX - 10; // Adjust position to center the dot
                    var dotY = blackY - 10; // Adjust position to center the dot

                    // Set the position of the red dot
                    redDot.style.left = dotX + "px";
                    redDot.style.top = dotY + "px";
                    redDot.style.visibility = "visible"; // Ensure the red dot is visible

                    // Hide the red dot after three seconds
                    setTimeout(function () {
                        redDot.style.visibility = "hidden";
                    }, 3000);
                } else if (blackVesselPoints === 0) {
                    var redDot = document.querySelector(".red-dot");
                    if (redDot) {
                        redDot.style.visibility = "hidden";
                    }
                }
            }

            // Function to create a red dot at the specified coordinates-(Server Side)
            function createRedDot(x, y) {
                if (isPaused) {
                    return; // Check if paused
                }

                var blackVessel = getFromScreen("vessel");
                var blackVesselPoints = parseInt(pointsBlack);

                // Remove any existing red dots if the black vessel's points are zero or less
                if (blackVesselPoints <= 0) {
                    var existingRedDot = document.querySelector(".red-dot, .red-dot2");
                    if (existingRedDot) {
                        existingRedDot.remove();
                    }
                    return;
                } else {
                    var vesselX = blackVessel.offsetLeft;
                    var vesselY = blackVessel.offsetTop;

                    // Calculate the distance between the red dot and black vessel coordinates
                    var distance = Math.sqrt(Math.pow(x - vesselX, 2) + Math.pow(y - vesselY, 2));

                    // If distance is greater than 300 pixels, calculate the new coordinates
                    if (distance > 300) {
                        // Calculate the angle of the line between the two points
                        var angle = Math.atan2(y - vesselY, x - vesselX);

                        // Calculate the new coordinates 300 pixels away from the black vessel
                        var newX = vesselX + 300 * Math.cos(angle);
                        var newY = vesselY + 300 * Math.sin(angle);

                        // Update the coordinates
                        x = newX;
                        y = newY;
                    }

                    // Remove any existing red dots before creating a new one
                    var existingRedDot = document.querySelector(".red-dot, .red-dot2");
                    if (existingRedDot) {
                        existingRedDot.remove();
                    }

                    // Create a new div element for the red dot
                    var redDot = document.createElement("div");
                    redDot.classList.add("red-dot2");
                    document.body.appendChild(redDot);

                    // Set the position and visibility of the red dot
                    redDot.style.position = "absolute";
                    redDot.style.left = x + "px";
                    redDot.style.top = y + "px";
                    redDot.style.visibility = "visible"; // Ensure visibility is set to visible

                    // Check proximity to blue vessels and deduct points if within range
                    var blueVessels = document.querySelectorAll(".blue-vessel");
                    blueVessels.forEach(function (blueVessel) {
                        // Calculate distance between red dot and blue vessel
                        var dx = Math.abs(x - blueVessel.offsetLeft);
                        var dy = Math.abs(y - blueVessel.offsetTop);
                        var distance = Math.sqrt(dx * dx + dy * dy);

                        // If distance is within 10 pixels, deduct points
                        if (distance < 10) {
                            if (blueVessel.points >= 5) {
                                blueVessel.points -= 5;
                            } else {
                                blueVessel.points = 0;
                            }
                            updateAllDisplays("pointsBlue" + blueVessel.dataset.id, blueVessel.points);
                            if (blueVessel.points <= 0) {
                                blueVessel.style.display = "none";
                            }
                        }
                    });

                    // Make the red dot disappear after two seconds
                    setTimeout(function () {
                        redDot.remove(); // Changed to remove the element instead of hiding it
                    }, 2000);
                }
            }

            // Function to handle torpedo action-(Server Side)
            function handleTorpedoAction(targetX, targetY) {
                var blackVesselPoints = getFromScreen("pointsBlack");
                if (parseInt(blackVesselPoints.textContent) <= 0) return; // Check points
                if (isPaused) return; // Check if paused
                if (torpDisplay <= 0) return; // No more torpedoes

                // Ensure inputs are not empty
                if (targetX === "" || targetY === "") return;

                // Get the starting point (black vessel's current position)
                var startX = vessel.offsetLeft;
                var startY = vessel.offsetTop;

                // Calculate the distance between the starting point and the target coordinates
                var distance = Math.sqrt(Math.pow(targetX - startX, 2) + Math.pow(targetY - startY, 2));

                // Draw the solid white line from the black vessel to the target coordinates
                drawSolidWhiteLine(startX, startY, targetX, targetY, 1000); // Adjust duration as needed

                // Get all the blue vessels
                var blueVessels = document.querySelectorAll(".blue-vessel");

                // Get the black vessel
                var blackVessel = getFromScreen("vessel");

                // Calculate the angle of the line
                var angle = Math.atan2(targetY - startY, targetX - startX);

                // Iterate over each blue vessel
                var pointsDeducted = false; // Flag to ensure only first blue vessel is deducted points
                blueVessels.forEach(function (blueVessel) {
                    // Calculate distance between blue vessel and target coordinates
                    var dx = blueVessel.offsetLeft - startX;
                    var dy = blueVessel.offsetTop - startY;

                    // Calculate perpendicular distance from the blue vessel to the line
                    var distanceToLine = Math.abs(dx * Math.sin(angle) - dy * Math.cos(angle));

                    // Check if blue vessel is within 20 pixels of the line
                    if (distanceToLine <= 20) {
                        if (!pointsDeducted && distance >= 200) {
                            // Deduct points from the first blue vessel found within range and distance >= 200
                            var pointsBlue = blueVessel.points;
                            if (pointsBlue >= 5) {
                                blueVessel.points -= 5;
                            } else {
                                blueVessel.points = 0;
                            }
                            updateAllDisplays("pointsBlue" + blueVessel.dataset.id, blueVessel.points);

                            pointsDeducted = true; // Set flag to true after deducting points
                        }
                    }
                });
                // Check if all blue ships are destroyed and start a new round if true
                if (checkAllBlueShipsDestroyed()) {
                    console.log(checkAllBlueShipsDestroyed());
                    if (resurfs <= 0) {
                        startNewRound();
                    }
                } else {
                    if (resurfs > 0) {
                        if (updateResurfTimer()) {
                            // Wait 10 seconds
                            // Bring back sunken vessel
                            resurfaceBlueVessel();
                            // Decrement resurfs
                            resurfs--;
                        }
                    }
                }
            }

            // Function to draw a solid white line from start to screen edge based on angle-(Server Side)
            function drawSolidWhiteLine(startX, startY, endX, endY, duration) {
                var blackVesselPoints = getFromScreen("pointsBlack");
                if (parseInt(blackVesselPoints.textContent) <= 0) return; // Check points

                // Create a canvas element
                var canvas = document.createElement("canvas");
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                canvas.style.position = "absolute";
                canvas.style.left = "0";
                canvas.style.top = "0";
                document.body.appendChild(canvas);

                // Get the canvas context
                var ctx = canvas.getContext("2d");

                // Set line style
                ctx.strokeStyle = "white";
                ctx.lineWidth = 2; // Adjust line width as needed

                // Calculate the angle between start and end points
                var angle = Math.atan2(endY - startY, endX - startX);

                // Extend the line to the screen edge based on the angle
                var extendX, extendY;
                if (Math.abs(Math.cos(angle)) > Math.abs(Math.sin(angle))) {
                    // Extend horizontally
                    extendX = endX > startX ? window.innerWidth : 0;
                    extendY = startY + (extendX - startX) * Math.tan(angle);
                } else {
                    // Extend vertically
                    extendY = endY > startY ? window.innerHeight : 0;
                    extendX = startX + (extendY - startY) / Math.tan(angle);
                }

                // Calculate the distance to the screen edge
                var dx = extendX - startX;
                var dy = extendY - startY;
                var distance = Math.sqrt(dx * dx + dy * dy);

                // Calculate the number of steps
                var steps = Math.ceil(distance / 10); // Adjust step size as needed
                var stepX = dx / steps;
                var stepY = dy / steps;
                var currentX = startX;
                var currentY = startY;
                var stepCount = 0;

                // Draw the line gradually with faster speed
                var intervalId = setInterval(function () {
                    ctx.beginPath();
                    ctx.moveTo(currentX, currentY);
                    currentX += stepX;
                    currentY += stepY;

                    // Check if reached the end point or beyond
                    if ((dx > 0 && currentX >= extendX) || (dx < 0 && currentX <= extendX) || (dy > 0 && currentY >= extendY) || (dy < 0 && currentY <= extendY)) {
                        currentX = extendX;
                        currentY = extendY;
                    }

                    ctx.lineTo(currentX, currentY);
                    ctx.stroke();
                    stepCount++;

                    // Check if reached the screen edge
                    if (stepCount >= steps || (currentX === extendX && currentY === extendY)) {
                        clearInterval(intervalId);
                        canvas.remove(); // Remove canvas after drawing the line
                    }
                }, duration / (steps * 10)); // Decrease duration for faster speed
            }

            // Function to set the pointTimer to the current time only if three seconds have passed-(Server Side)
            function updatePointTimer() {
                var currentTime = new Date();

                if (pointTimer === null) {
                    pointTimer = currentTime;
                    return false;
                } else {
                    var elapsedSeconds = (currentTime - pointTimer) / 1000;

                    if (elapsedSeconds >= 3) {
                        pointTimer = null;
                        return true;
                    } else {
                        return false;
                    }
                }
            }

            // Function to set the resurfTimer to the current time only if ten seconds have passed-(Server Side)
            function updateResurfTimer() {
                var currentTime = new Date();

                if (resurfTimer === null) {
                    resurfTimer = currentTime;
                    return false;
                } else {
                    var elapsedSeconds = (currentTime - resurfTimer) / 1000;

                    if (elapsedSeconds >= 10) {
                        resurfTimer = null;
                        return true;
                    } else {
                        return false;
                    }
                }
            }

            // Brings sunken vessels back into play-(Server Side)
            function resurfaceBlueVessel() {
                updateAllDisplays("pauseDisplay", pauseDisplay);
                isPaused = false; // Variable to track the pause state

                // Bring back blue vessels and reset their points
                var blueVessels = document.querySelectorAll(".blue-vessel");
                blueVessels.forEach(function (blueVessel) {
                    var points = parseInt(pointsBlue[blueVessel.dataset.id]);
                    if (points === 0) {
                        blueVessel.style.display = "block"; // or "inline-block" depending on your CSS
                        blueVessel.points = basePoints + roundDisplay * 5; // Reset points
                        updateAllDisplays("pointsBlue" + blueVessel.dataset.id, blueVessel.points);

                        // Position blue vessels randomly
                        var randomX = Math.random() * (window.innerWidth - blueVessel.offsetWidth);
                        var randomY = Math.random() * (window.innerHeight - blueVessel.offsetHeight);
                        blueVessel.style.left = randomX + "px";
                        blueVessel.style.top = randomY + "px";
                    }
                });
            }

            //------Restart Functions-----------------------------------------------------
            //-(Server Side)
            function checkAllBlueShipsDestroyed() {
                var blueVessels = document.querySelectorAll(".blue-vessel");
                if (blueVessels.length > 0) {
                    return false;
                } else {
                    return true;
                }
            }

            function showDialogue() {
                const dialogue = document.querySelector(".dialogue");
                dialogue.style.visibility = "visible"; // Show the dialogue

                setTimeout(() => {
                    dialogue.style.visibility = "hidden"; // Hide the dialogue after 5 seconds
                }, 5000);
            }

            function showDialogue2() {
                const dialogue = document.querySelector(".dialogue2");
                dialogue.style.visibility = "visible"; // Show the dialogue
            }

            //-(Server Side)
            function startNewRound() {
                updateRoundDisplay();
                showDialogue();
                pointTimer = null;
                if (settingOp === 0) {
                    speed = 1;
                    pauseDisplay += 5;
                    torpDisplay += 12;
                    var resurfs = 0; // How many times can a blue vessel resurface
                }
                if (settingOp === 1) {
                    speed = 3;
                    pauseDisplay += 3;
                    torpDisplay += 10;
                    var resurfs = 3; // How many times can a blue vessel resurface
                }
                if (settingOp === 2) {
                    speed = 5;
                    pauseDisplay += 1;
                    torpDisplay += 14;
                    var resurfs = 6; // How many times can a blue vessel resurface
                }
                updateAllDisplays("torpDisplay", torpDisplay);
                updateAllDisplays("scoreDisplay", basePoints + 5);
                updateAllDisplays("pauseDisplay", pauseDisplay);
                isPaused = false; // Variable to track the pause state

                var blueVessels = document.querySelectorAll(".blue-vessel");

                var blueVessels = document.querySelectorAll(".blue-vessel");
                blueVessels.forEach(function (blueVessel) {
                    updateAllDisplays("pointsBlue", blueVessel.points);
                    // Show the blue vessel
                    blueVessel.style.display = "block";
                });

                // Initialize black vessel at the center of the screen
                initializeBlackVessel();

                updateScoreDisplay();

                // Bring back blue vessels and reset their points
                var blueVessels = document.querySelectorAll(".blue-vessel");
                blueVessels.forEach(function (blueVessel) {
                    blueVessel.style.display = "block"; // or "inline-block" depending on your CSS
                    blueVessel.points = basePoints + roundDisplay * 5; // Reset points
                    updateAllDisplays("pointsBlue", blueVessel.points);

                    // Position blue vessels randomly
                    var randomX = Math.random() * (window.innerWidth - blueVessel.offsetWidth);
                    var randomY = Math.random() * (window.innerHeight - blueVessel.offsetHeight);
                    blueVessel.style.left = randomX + "px";
                    blueVessel.style.top = randomY + "px";
                });

                // shows playing tips
                showTip();
            }


            //-(Server Side)
            function difficulty(option) {
                var o = parseInt(option);
                stopMovingBlueVessels();
                switch (o) {
                    case 0:
                        settingOp = 0;
                        speed = 1;
                        var pauseDisplay = 15;
                        var basePoints = 25;
                        var resurfs = 0; // How many times can a blue vessel resurface
                        var torpDisplay = 12;
                        break;
                    case 1:
                        settingOp = 1;
                        speed = 3;
                        var pauseDisplay = 10;
                        var basePoints = 20;
                        var resurfs = 3; // How many times can a blue vessel resurface
                        var torpDisplay = 10;
                        break;
                    case 2:
                        settingOp = 2;
                        speed = 5;
                        var pauseDisplay = 5;
                        var basePoints = 15;
                        var resurfs = 6; // How many times can a blue vessel resurface
                        var torpDisplay = 4;
                        break;
                    default:
                        // Optionally, you could set a default speed or handle the error case
                        break;
                }
                updateAllDisplays("pauseDisplay", pauseDisplay);
                updateAllDisplays("scoreDisplay", basePoints + 5);
                updateAllDisplays("torpDisplay", torpDisplay);
                initializeBlueVessels();
            }

            //-----Update All Displays----------------------------------------------------
            //-(Server Side)
            function updateAllDisplays(idName, data) {
                //-(Client Side)
                // Handle array values with detailed logging
                let arrayMatch = idName.match(/(\w+)\[(\d+)\]/);
                if (arrayMatch) {
                    let arrayName = arrayMatch[1];
                    let arrayIndex = parseInt(arrayMatch[2]);

                    // Update the appropriate array if it exists and is an array
                    if (window[arrayName] && Array.isArray(window[arrayName])) {
                        window[arrayName][arrayIndex] = data;
                    } else {
                        console.warn(`Array ${arrayName} does not exist or is not an array.`);
                    }

                    // Construct the element ID for array items
                    idName = `${arrayName}[${arrayIndex}]`;
                }

                // Get the HTML element by ID
                var element = document.getElementById(idName);

                // Check if the element exists
                if (element) {
                    // Update the HTML element's text content
                    element.textContent = data;
                } else {
                    console.warn(`Element with id "${idName}" not found.`);
                }

                // Handle single values
                if (idName === "xCoord") {
                    xCoord = data;
                } else if (idName === "yCoord") {
                    yCoord = data;
                } else if (idName === "artilleryM") {
                    artilleryM = data;
                } else if (idName === "artilleryD") {
                    artilleryD = data;
                } else if (idName === "pointsBlack") {
                    pointsBlack = data;
                } else if (idName === "pauseDisplay") {
                    pauseDisplay = data;
                    document.getElementById(idName).textContent = "Pauses: " + data;
                } else if (idName === "torpDisplay") {
                    torpsDisplay = data;
                    document.getElementById(idName).textContent = "Torpedoes: " + data;
                } else if (idName === "scoreDisplay") {
                    scoreDisplay = data;
                    document.getElementById(idName).textContent = "Score: " + data;
                } else if (idName === "roundDisplay") {
                    roundDisplay = data;
                    document.getElementById(idName).textContent = "Round: " + data;
                }
            }

            //-(Server Side)
            function getFromScreen(selector) {
                if (selector.startsWith(".")) {
                    var a = selector.slice(1);
                    var elements = document.getElementsByClassName(a);
                    if (a == "blue-vessel") {
                        return elements;
                    }
                    if (a == "red-dot") {
                        return elements.length > 0 ? elements[0] : null;
                    } // Return the first element or null if none found
                } else {
                    return document.getElementById(selector);
                }
            }

fetch('/check-passphrase')
    .then(response => response.json())
    .then(data => {
        if (data.canStart) {
            // Proceed with the game initialization or redirect
            console.log('Passphrase valid, proceed with game initialization.');
            // Add any other initialization logic here if needed
        } else {
            // Display an error or prevent the game from starting
            alert('The game cannot start. Passphrase file is missing or incorrect.');
        }
    })
    .catch(error => {
        console.error('Error checking passphrase:', error);
    });

            //-----Initializers---------------------------------------------(Server Side)
            // Call the initialization function when the window loads
            window.onload = initializeBlackVessel;

            var pointTimer = null; // Used to pause point decrement

            // Variable to store the interval IDs for moving blue vessels
            var moveIntervalIds = [];
            var moveIntervalId = null; // Declare moveIntervalId at the global scope

            // Global variables to track direction and speed
            var currentDirection = {
                x: 0,
                y: 0,
            }; // Object to track movement direction

            var settingOp = 0;

            var speed = 1; // Adjust this value to change the movement speed

            var isPaused = false; // Variable to track the pause state

            var roundDisplay = 1;
            updateAllDisplays("roundDisplay", roundDisplay);

            var pauseDisplay = 5;
            updateAllDisplays("pauseDisplay", pauseDisplay);

            var basePoints = 25;
            updateAllDisplays("scoreDisplay", basePoints + 5);

            var torpDisplay = 12;
            updateAllDisplays("torpDisplay", torpDisplay);

            var resurfs = 0; // How many times can a blue vessel resurface

            var resurfTimer = null; // Used to pause resurface decrement

            var xCoord;
            var yCoord;
            var artilleryM;
            var artilleryD;
            var xCoordBlue = [];
            var yCoordBlue = [];
            var slopeBlue = [];
            var pointsBlack;
            var pointsBlue = [];

            // Flag to track whether the vessel is currently moving
            var isMoving = false;

            // Set interval to move black vessel continuously based on currentDirection
            var moveIntervalId = setInterval(moveBlackVessel, 100);
            var moveIntervalId = setInterval(moveBlackVessel, 100);

            // Call the function after 10 seconds
            setTimeout(fadeInQuadrants, 5000);

            // Call the function after 10 seconds
            setTimeout(fadeOutQuadrants, 10000);

            var startTime = new Date();

            // Start the proximity check periodically
            setInterval(function () {
                checkProximity();
            }, 1000); // Adjust the interval as needed
