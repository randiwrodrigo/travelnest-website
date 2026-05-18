window.addEventListener("DOMContentLoaded", () => {

    /*==================================================================== Home Page =========================================================================*/ 

    const heroImage = document.getElementById("hero-image");
    const ExpDestinationBtns = document.querySelectorAll(".ExpDestinationBtn");
    const BdgPlanerBtn = document.getElementById("BdgPlanerBtn");
    const hamburger = document.querySelectorAll(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const emailinput = document.getElementById("emailinput");
    const emailSub = document.getElementById("emailSub");


    const images = [
        "destination-images/image1.jpg",
        "destination-images/image2.jpg",
        "destination-images/image3.jpg",
        "destination-images/image4.jpg",
        "destination-images/image5.jpg",
        "destination-images/image6.jpg",
        "destination-images/image7.jpg",
        "destination-images/image8.jpg",
        "destination-images/image9.jpg",
        "destination-images/image10.jpg",
        "destination-images/image11.jpg",
        "destination-images/image12.jpg",
        "destination-images/image13.jpg",
        "destination-images/image14.jpg",
        "destination-images/image15.jpg",
    ];

    let currentImage = 0;

    if (heroImage) {

        setInterval(() => {

            currentImage++;

            if (currentImage >= images.length) {
                currentImage = 0;
            }

            heroImage.src = images[currentImage];

        }, 7000);
    };


    // Setup Explore Buttons 
    if(ExpDestinationBtns){
        ExpDestinationBtns.forEach((button) => { 
            button.addEventListener("click", () => {
                window.location.href = "destination.html";
            });
        });
    }
   

    // Setup Plan Your Budget button
    if(BdgPlanerBtn){
        BdgPlanerBtn.addEventListener("click", ()=>{
            window.location.href = "budget-planner.html";
        });
    }

    // Setup Hamburger menue
    hamburger.forEach((button) => {

        button.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    });


    // Setup email subscribe
    if (emailSub) {

        emailSub.addEventListener("click", () => {
            const email = emailinput.value;

            let emails =
                JSON.parse(localStorage.getItem("emails")) || [];

            emails.push(email);

            localStorage.setItem(
                "emails",
                JSON.stringify(emails)
            );

            alert("Subscribed!");

        });

    }

    // Change Destination of the day 
    const dailyDestinationTitle = document.getElementById("daily-destination-title");
    const dailyDestinationImage = document.getElementById("daily-destination-image");
    const dailyDestinationDescription = document.getElementById("daily-destination-description");
    const dailyDestinationCountry = document.getElementById("dily-destination-country");
    const dailyDestinationBestTime = document.getElementById("dily-destination-bestTime");
    const dailyDestinationDailyBudget = document.getElementById("daily-destination-dailyBudget");
    const dailyDestinationTravelVibes = document.getElementById("daily-destination-travelVibes");

        if (
        dailyDestinationTitle &&
        dailyDestinationImage &&
        dailyDestinationDescription &&
        dailyDestinationCountry &&
        dailyDestinationBestTime &&
        dailyDestinationDailyBudget &&
        dailyDestinationTravelVibes
    ) {

        const today = new Date().getDate();

        const todayDestination = destinations[today % destinations.length];

        dailyDestinationTitle.innerHTML =
            `${todayDestination.destinationName},
            ${todayDestination.country}`;

        dailyDestinationImage.src =todayDestination.destinationImage;

        dailyDestinationDescription.innerText = todayDestination.destinationDescription;

        dailyDestinationCountry.innerText = todayDestination.country;

        dailyDestinationBestTime.innerText = todayDestination.bestTimeToVisit;

        dailyDestinationDailyBudget.innerText = todayDestination.dailyBudget;

        dailyDestinationTravelVibes.innerText = todayDestination.travelVibes;

    }

    /*==================================================================== Destination Page =========================================================================*/ 

    const destinationGrid = document.getElementById("destination-grid-div");
    const destinationSearchInput = document.getElementById("searchInput");
    const continentFilter = document.getElementById("continent-filter");
    const PopupCloseButton = document.getElementById("close-button");

    // Rendering Function
    if (destinationGrid && destinationSearchInput && continentFilter){

            function renderDestinations(destinationArray) {

            destinationGrid.innerHTML = "";

            destinationArray.forEach((destination) => {

                destinationGrid.innerHTML += `

                    <div class="explore-card">

                        <img src="${destination.destinationImage}" alt="">

                        <div class="explore-card-info">

                            <div class="explore-card-header">

                                <h3>${destination.destinationName}</h3>

                                <div>
                                    <h3>${destination.rating}</h3>

                                    <img src="icon/explore-card/star-icon.svg">
                                </div>

                            </div>

                            <div class="explore-location">

                                <img src="icon/explore-card/location-icon.svg">

                                <p>${destination.country}</p>

                            </div>

                        </div>
                    </div>

                    <div class="popup-window">
                            <span class="close-button">&times;</span>
                            <div class="window-grid">
                                <div>
                                    <img src="${destination.destinationImage}" alt="">
                                </div>
                                <div class="popup-content">
                                    <h2>${destination.destinationName}</h2>
                                        <div class="popup-content-paragraph">
                                            <p>
                                                ${destination.destinationDescription}
                                            </p>
                                        </div>
                                    <div>
                                        <div class="popular-attractions">
                                            <h3>Popular Attractions</h3>
                                            <ul>
                                                <li>${destination.popularAttractions[0]}</li>
                                                <li>${destination.popularAttractions[1]}</li>
                                                <li>${destination.popularAttractions[2]}</li>
                                            </ul>
                                        </div>
                                        <div>
                                        <div class="cost-table-container">
                                            <h3>Travel Cost (Per Day)</h3>
                                            <table class="travel-table">
                                                <thead>
                                                    <tr>
                                                        <th>Budget Type</th>
                                                        <th>Estimated Cost</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Low</td>
                                                        <td>$${destination.budgetType.low[0]} - $${destination.budgetType.low[1]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Moderate</td>
                                                        <td>$${destination.budgetType.moderate[0]} - $${destination.budgetType.moderate[1]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Luxury</td>
                                                        <td>$${destination.budgetType.luxury[0]} - $${destination.budgetType.luxury[0]}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                `;
            });
        }

        renderDestinations(destinations);
        setupPopup();

        //Filter the destinations using user input and the selecteor
        function filterDestinations() {

            const searchValue = destinationSearchInput.value.toLowerCase();
            const selectedContinent = continentFilter.value;
            const filteredDestinations =
                destinations.filter((destination) => {

                    const matchesSearch =
                        destination.destinationName
                            .toLowerCase()
                            .includes(searchValue);

                    const matchesContinent =
                        selectedContinent === "" ||
                        destination.continent === selectedContinent;

                    return matchesSearch &&
                        matchesContinent;
                });

            renderDestinations(filteredDestinations);
            setupPopup();
        }

        destinationSearchInput.addEventListener("input",filterDestinations);
        continentFilter.addEventListener("change",filterDestinations);
    }

    // Pop up window open and closing function
    function setupPopup() {

        const exploreCards = document.querySelectorAll(".explore-card");

        exploreCards.forEach((card) => {

            card.addEventListener("click", () => {

                const popup =
                    card.nextElementSibling;

                popup.classList.add("active");

            });

        });

        const closeButtons = document.querySelectorAll(".close-button");

        closeButtons.forEach((button) => {

            button.addEventListener("click", (event) => {

                event.stopPropagation();

                const popup =
                    button.closest(".popup-window");

                popup.classList.remove("active");
            });
        });
    }

/*================================================================== Budget Planner Page =========================================================================*/ 
    
    const plannerDestinationInput = document.getElementById("planner-destination");
    const plannerNumberOfDaysInput = document.getElementById("planner-numberOfDays");
    const plannerDailyBudgetInput = document.getElementById("planner-dailyBudget");
    const plannerCalculateBtn = document.getElementById("planner-calculate-btn");
    const plannnerEstimatedBudget = document.getElementById("plannner-estimatedBudget");
    const budgetStatusElement = document.getElementById("budgetStatus");
    const plannnerProgressBar = document.getElementById("plannner-progress-bar");


    if( plannerDestinationInput &&
        plannerNumberOfDaysInput &&
        plannerDailyBudgetInput &&
        plannerCalculateBtn &&
        plannnerEstimatedBudget &&
        budgetStatusElement &&
        plannnerProgressBar
    ){

        let currentDestination = null;

        // Calculate the Budget According to place,days and the daily budget
        function calculateBudget() {

            const enteredPlace = plannerDestinationInput.value.toLowerCase();
            const rNumberOfDays = Number(plannerNumberOfDaysInput.value);
            const dailyBudget = Number(plannerDailyBudgetInput.value);

            const totalbudget = rNumberOfDays * dailyBudget;

            plannnerEstimatedBudget.innerText = `$${totalbudget}`;

            const selectedDestination =
                destinations.find((destination) => {

                    return destination.destinationName
                        .toLowerCase() === enteredPlace;

                });

            if (!selectedDestination) {

                alert("Destination not found!");

                return;

            }

            // Change the progress bar and change the color
            const lowRange = selectedDestination.budgetType.low;
            const moderateRange = selectedDestination.budgetType.moderate;
            const luxuryMin = selectedDestination.budgetType.luxury[0];

            let budgetStatus = "";
            let progressWidth = 0;
            let barColor = ""

            if (dailyBudget < lowRange[0]) {

                budgetStatus = "Low Budget";
                progressWidth = (dailyBudget / lowRange[0]) * 10;
                plannnerProgressBar.style.backgroundColor = "red"

            }

            else if (dailyBudget >= lowRange[0] && dailyBudget <= lowRange[1]) {

                budgetStatus = "Low Budget";
                progressWidth = 10 + ((dailyBudget - lowRange[0]) / (lowRange[1] - lowRange[0])) * 23;
                plannnerProgressBar.style.backgroundColor = "yellow"

            }

            else if (dailyBudget >= moderateRange[0] && dailyBudget <= moderateRange[1]) {

                budgetStatus = "Moderate Budget";
                progressWidth = 33 + ((dailyBudget - moderateRange[0]) /(moderateRange[1] - moderateRange[0])) * 33
                plannnerProgressBar.style.backgroundColor = "green"
                


            }

            else if (dailyBudget >= luxuryMin) {

                budgetStatus = "Luxury Budget";
                const luxuryMax = luxuryMin * 2;

                progressWidth = 66 + ((dailyBudget - luxuryMin) / (luxuryMax - luxuryMin)) * 34;
                plannnerProgressBar.style.backgroundColor = "blue"

            }

            if (progressWidth > 100) {

                progressWidth = 100;

            }

            budgetStatusElement.innerText = budgetStatus;
            plannnerProgressBar.style.width = `${progressWidth}%`;

        }

        plannerCalculateBtn.addEventListener("click", (event) => {

            event.preventDefault();

            calculateBudget();

        });

    }




});

