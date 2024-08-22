            //------Tips-----------------------------------------------------
            // shows random playing tips-(Client Side)-(Server Side)
            function showTip() {
                let num = Math.floor(Math.random() * 32) + 1;
                document.getElementById("tip" + num).style.display = "block";
                setTimeout(function () {
                    // Hide the splash screen after 4 seconds
                    document.getElementById("tip" + num).style.display = "none";
                    // You can add logic here to show the main game content
                }, 10000); // Display splash screen for 10 seconds
            }
