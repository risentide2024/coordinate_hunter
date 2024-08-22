            //-----DOM Event listeners 1-(Client Side)---------------------------------------------------
            document.addEventListener("DOMContentLoaded", (event) => {
                var difficultyButton = document.getElementById("difficulty-button");
                var dropdownMenu = document.getElementById("dropdown-menu");

                difficultyButton.addEventListener("click", () => {
                    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
                });

                // Add click event listener for each option
                var options = dropdownMenu.querySelectorAll("a");
                options.forEach((option) => {
                    option.addEventListener("click", (event) => {
                        event.preventDefault();
                        var selectedOption = option.getAttribute("data-option");
                        difficulty(selectedOption);
                        dropdownMenu.style.display = "none";
                    });
                });

                // Close the dropdown if clicked outside
                window.addEventListener("click", (e) => {
                    if (!difficultyButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
                        dropdownMenu.style.display = "none";
                    }
                });
            });
