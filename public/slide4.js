            //---Slope---------------------------------------------------------------------
            // Function to calculate and display the slope for artillery-(Client Side)
            function calculateAndDisplayArtillerySlope() {
                // Get coordinates of artillery
                var artilleryX = document.getElementById("artilleryXInput").value;
                var artilleryY = document.getElementById("artilleryYInput").value;

                // Ensure inputs are not empty
                if (artilleryX === "" || artilleryY === "") {
                    updateAllDisplays("artilleryM", "");
                    updateAllDisplays("artilleryD", "");
                    return;
                }

                var artilleryXNum = parseInt(artilleryX);
                var artilleryYNum = parseInt(artilleryY);

                // Get coordinates of black vessel
                var blackVesselX = parseFloat(xCoord) || 0;
                var blackVesselY = parseFloat(yCoord) || 0;

                // Calculate differences
                var deltaX = blackVesselX - artilleryXNum;
                var deltaY = blackVesselY - artilleryYNum;

                // Calculate slope
                let slope;
                if (deltaX === 0) {
                    slope = "Infinity";
                } else {
                    slope = (deltaY / deltaX).toFixed(2);
                }

                // Calculate distance
                var distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)).toFixed(2);

                // Display results
                updateAllDisplays("artilleryM", slope);
                updateAllDisplays("artilleryD", distance);
            }
