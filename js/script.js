window.addEventListener("DOMContentLoaded", () => {


    
    /*==================================================================== Home Page =========================================================================*/ 

    const heroImage = document.getElementById("hero-image");
    const ExpDestinationBtns = document.querySelectorAll(".ExpDestinationBtn");
    const BdgPlanerBtn = document.getElementById("BdgPlanerBtn");
    const hamburger = document.querySelectorAll(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navLinksColor = document.querySelectorAll(".nav-links a");
    const emailinput = document.getElementById("emailinput");
    const emailSub = document.getElementById("emailSub");


    if (navLinksColor.length > 0) {

        let currentPage =
            window.location.pathname.split("/").pop();

        if (currentPage === "") {

            currentPage = "index.html";

        }

        navLinksColor.forEach((link) => {

            const linkPage =
                link.getAttribute("href");

            if (currentPage === linkPage) {

                link.classList.add("active");

            }

        });

    }


    const images = [
        "destination-images/image1.webp",
        "destination-images/image2.webp",
        "destination-images/image3.webp",
        "destination-images/image4.webp",
        "destination-images/image5.webp",
        "destination-images/image6.webp",
        "destination-images/image7.webp",
        "destination-images/image8.webp",
        "destination-images/image9.webp",
        "destination-images/image10.webp",
        "destination-images/image11.webp",
        "destination-images/image12.webp",
        "destination-images/image13.webp",
        "destination-images/image14.webp",
        "destination-images/image15.webp",
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

            localStorage.setItem("emails",JSON.stringify(emails));

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

            if (destinationArray.length === 0) {

                destinationGrid.innerHTML = `
                    <div class="no-results">
                        <h2>🔍 No matching destinations found</h2>
                        <p>
                            Try a different destination name or continent.
                        </p>
                    </div>
                `;

                return;
            }

            destinationArray.forEach((destination) => {

                destinationGrid.innerHTML += `

                    <div class="explore-card">

                        <img src="${destination.destinationImage}" loading="lazy" alt="destination image of this card" loading="lazy">

                        <div class="explore-card-info">

                            <div class="explore-card-header">

                                <h2>${destination.destinationName}</h2>

                                <div>
                                    <h3>${destination.rating}</h3>

                                    <img src="icon/explore-card/star-icon.svg" alt="rating star icon" loading="lazy">
                                </div>

                            </div>

                            <div class="explore-location">

                                <img src="icon/explore-card/location-icon.svg" alt="location icon image that represent location" loading="lazy">

                                <p>${destination.country}</p>

                            </div>

                        </div>
                    </div>
                    <div class="popup-backdrop">
                        <div class="popup-window">
                                <span class="close-button">&times;</span>
                                <div class="window-grid">
                                    <div>
                                        <img src="${destination.destinationImage}" alt="pop window detination image" loading="lazy">
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
                const backdrop = card.nextElementSibling; // now targets backdrop
                backdrop.classList.add("active");
            });
        });

        const closeButtons = document.querySelectorAll(".close-button");

        closeButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                event.stopPropagation();
                button.closest(".popup-backdrop").classList.remove("active");
            });
        });

        // ✅ Click outside — on the dark backdrop — closes popup
        const backdrops = document.querySelectorAll(".popup-backdrop");

        backdrops.forEach((backdrop) => {
            backdrop.addEventListener("click", (event) => {
                if (event.target === backdrop) {   // clicked the dark area, not the box
                    backdrop.classList.remove("active");
                }
            });
        });
    }

/*================================================================== Budget Planner Page =========================================================================*/ 
    
    const plannerDestinationInput = document.getElementById("destination");
    const plannerNumberOfDaysInput = document.getElementById("numberOfDays");
    const plannerDailyBudgetInput = document.getElementById("totalBudget");
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
        const saveToPlansBtn = document.getElementById("save-to-plans-btn");

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

            currentDestination = {
            destinationName: selectedDestination.destinationName,
            country: selectedDestination.country,
            image: selectedDestination.destinationImage,
            totalBudget: totalbudget,
            budgetStatus: budgetStatus,
            days: rNumberOfDays
            };

        }

        plannerCalculateBtn.addEventListener("click", (event) => {

            event.preventDefault();

            let hasError = false;

            // Error elements
            const destinationError =
                document.getElementById("destinationError");

            const numberOfDaysError =
                document.getElementById("numberOfDaysError");

            const totalBudgetError =
                document.getElementById("totalBudgetError");

            // Reset
            destinationError.textContent = "";
            numberOfDaysError.textContent = "";
            totalBudgetError.textContent = "";

            plannerDestinationInput.classList.remove("input-error");
            plannerNumberOfDaysInput.classList.remove("input-error");
            plannerDailyBudgetInput.classList.remove("input-error");

            // Destination validation
            if (plannerDestinationInput.value.trim() === "") {

                destinationError.textContent =
                    "Please enter a destination";

                plannerDestinationInput.classList.add("input-error");

                hasError = true;
            }

            // Number of days validation
            if (
                plannerNumberOfDaysInput.value === "" ||
                Number(plannerNumberOfDaysInput.value) <= 0
            ) {

                numberOfDaysError.textContent =
                    "Please enter number of days";

                plannerNumberOfDaysInput.classList.add("input-error");

                hasError = true;
            }

            // Budget validation
            if (
                plannerDailyBudgetInput.value === "" ||
                Number(plannerDailyBudgetInput.value) <= 0
            ) {

                totalBudgetError.textContent =
                    "Please enter a daily budget";

                plannerDailyBudgetInput.classList.add("input-error");

                hasError = true;
            }

            if (hasError) return;

            calculateBudget();
        });

        saveToPlansBtn.addEventListener("click", () => {

            if (!currentDestination) {
                alert("Calculate a budget first!");
                return;
            }

            let savedPlans =
                JSON.parse(localStorage.getItem("savedPlans")) || [];

            const exists = savedPlans.some(
                plan => plan.destinationName === currentDestination.destinationName
            );

            if (!exists) {
                savedPlans.push(currentDestination);

                localStorage.setItem(
                    "savedPlans",
                    JSON.stringify(savedPlans)
                );

                renderWishlist();

                alert("Destination saved!");
            }
            else {
                alert("Already saved!");
            }
        });



    }

    const wishlistContainer = document.getElementById("wishlist-container");

    if (wishlistContainer) {

        function renderWishlist() {

            const savedPlans =
                JSON.parse(localStorage.getItem("savedPlans")) || [];

            wishlistContainer.innerHTML = "";

            if (savedPlans.length === 0) {

                wishlistContainer.innerHTML = `
                    <div class="no-results-2">
                        <h2>📭 No saved plans yet</h2>
                        <p>
                            Save destinations from the Budget Planner
                            to see them here.
                        </p>
                    </div>
                `;
                return;
            }

            savedPlans.forEach((plan, index) => {

                wishlistContainer.innerHTML += `

                    <div class="wishlist-card">

                        <img src="${plan.image}" alt="destination image" loading="lazy">

                        <div class="wishlist-info">
                            <h3>
                                ${plan.destinationName},
                                ${plan.country}
                            </h3>

                            <p>
                                Days: ${plan.days}
                            </p>

                            <p>
                                Budget: $${plan.totalBudget}
                            </p>

                            <p>
                                ${plan.budgetStatus}
                            </p>

                            <button
                                class="remove-plan button"
                                data-index="${index}">
                                Remove
                            </button>
                        </div>

                    </div>
                `;
            });

            document.querySelectorAll(".remove-plan")
                .forEach(button => {

                    button.addEventListener("click", () => {

                        const index =
                            button.dataset.index;

                        savedPlans.splice(index, 1);

                        localStorage.setItem(
                            "savedPlans",
                            JSON.stringify(savedPlans)
                        );

                        renderWishlist();
                    });
                });
        }

        renderWishlist();
    }
    


/*================================================================== Trip Generator Page =========================================================================*/ 

    const tripTypeinput = document.getElementById("tripType");
    const tripBudgetInput = document.getElementById("budget");
    const tripDurationInput = document.getElementById("duration");
    const generateSubmitBtn = document.getElementById("generate-submit-btn");
    const supriseDestinationImage = document.getElementById("suprise-destination-image");
    const surprisedDestinationName = document.getElementById("surprisedDestination-name");
    const tripTypeDisplay = document.getElementById("tripTypeDisplay");
    const budgetDisplay = document.getElementById("budgetDisplay");
    const durationDisplay = document.getElementById("durationDisplay");
    const bestTimeToTravel = document.getElementById("bestTimeToTravel");
    const weather = document.getElementById("weather");
    const language = document.getElementById("language");
    const currency = document.getElementById("currency");
    const wishlistBtn = document.getElementById("wish-button");

    if (tripTypeinput &&
        tripBudgetInput &&
        tripDurationInput &&
        generateSubmitBtn &&
        supriseDestinationImage &&
        surprisedDestinationName &&
        tripTypeDisplay &&
        budgetDisplay &&
        durationDisplay &&
        bestTimeToTravel &&
        weather &&
        language &&
        currency
    ){

        let currentDestination = null;

        // filter and take the matching destination according to trip type, daily budget and the number of days

        function filteredSupriseDestinations() {

            const tripType = tripTypeinput.value;

            const tripBudget = tripBudgetInput.value;

            const tripDuration = Number(tripDurationInput.value);

            const selectedDestination =
                destinations.filter((destination) => {

                    const matchesTripType =

                        destination.destinationType === tripType;

                    const matchesBudget =
                
                        destination.generalBudgetType === tripBudget;

                    const matchesDuration =

                        tripDuration >= destination.estimateDays[0] &&

                        tripDuration <= destination.estimateDays[1];

                    return (

                        matchesTripType &&
                        matchesBudget &&
                        matchesDuration

                    );
            

                });

            if (selectedDestination.length === 0) {

                alert("No matching destinations found!");

                return;

            }

            currentDestination  = selectedDestination[Math.floor(Math.random() * selectedDestination.length)];


            // Chane the details of the suprise destination
            supriseDestinationImage.src = currentDestination.destinationImage;

            surprisedDestinationName.innerHTML = `${currentDestination .destinationName},${currentDestination .country}`;

            tripTypeDisplay.innerText = currentDestination .destinationType;

            budgetDisplay.innerText = currentDestination .generalBudgetType;

            durationDisplay.innerHTML = `${currentDestination .estimateDays[0]} - ${currentDestination .estimateDays[1]} Days`;

            bestTimeToTravel.innerText = currentDestination .bestTimeToVisit;

            weather.innerText = currentDestination .weather;

            language.innerText = currentDestination .language;

            currency.innerText = currentDestination .currency;

            document.querySelector(".trip-placeholder").style.display = "none";

        }


        generateSubmitBtn.addEventListener("click", (event) => {

            event.preventDefault();

            let hasError = false;

            // Error elements
            const tripTypeError = document.getElementById("tripTypeError");
            const budgetError = document.getElementById("budgetError");
            const durationError = document.getElementById("durationError");

            // Reset errors
            tripTypeError.textContent = "";
            budgetError.textContent = "";
            durationError.textContent = "";

            tripTypeinput.classList.remove("input-error");
            tripBudgetInput.classList.remove("input-error");
            tripDurationInput.classList.remove("input-error");

            // Validate Trip Type
            if (tripTypeinput.value === "") {
                tripTypeError.textContent = "Please select a trip type";
                tripTypeinput.classList.add("input-error");
                hasError = true;
            }

            // Validate Budget
            if (tripBudgetInput.value === "") {
                budgetError.textContent = "Please select a budget type";
                tripBudgetInput.classList.add("input-error");
                hasError = true;
            }

            // Validate Duration
            if (
                tripDurationInput.value === "" ||
                Number(tripDurationInput.value) <= 0
            ) {
                durationError.textContent = "Please enter number of days";
                tripDurationInput.classList.add("input-error");
                hasError = true;
            }

            // Stop if there are errors
            if (hasError) {
                return;
            }

            // Generate destination
            filteredSupriseDestinations();

        });
        // Add the current destination to the local database using wishlist key
        wishlistBtn.addEventListener("click", () => {

            if (!currentDestination) {

                alert("Generate a destination first!");

                return;

            }

            let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

            const exists = wishlist.some(
                item =>
                    item.destinationName ===
                    currentDestination.destinationName
            );

            if(!exists){

                wishlist.push(currentDestination);

                localStorage.setItem(
                    "wishlist",
                    JSON.stringify(wishlist)
                );

                renderTripWishlist();

                alert("Added to wishlist!");
            }
            else{

                alert("Already in wishlist!");

            }

        });
    }
    
    const tripWishlistContainer =
        document.getElementById("trip-wishlist-container");

    if(tripWishlistContainer){

        function renderTripWishlist(){

            const wishlist =
                JSON.parse(localStorage.getItem("wishlist")) || [];

            tripWishlistContainer.innerHTML = "";

            if(wishlist.length === 0){

                tripWishlistContainer.innerHTML = `
                    <div class="no-results-3">
                        <h2>📭 No destinations in wishlist</h2>
                        <p>
                            Generate a destination and
                            add it to your wishlist.
                        </p>
                    </div>
                `;

                return;
            }

            wishlist.forEach((destination,index)=>{

                tripWishlistContainer.innerHTML += `

                    <div class="wishlist-card">

                        <img src="${destination.destinationImage}" alt="destination image" loading="lazy">

                        <div class="wishlist-info">

                            <h3>
                                ${destination.destinationName},
                                ${destination.country}
                            </h3>

                            <p>
                                ${destination.destinationType}
                            </p>

                            <p>
                                ${destination.generalBudgetType}
                            </p>

                            <p>
                                ${destination.estimateDays[0]}
                                -
                                ${destination.estimateDays[1]}
                                Days
                            </p>

                            <button
                                class="button remove-wishlist"
                                data-index="${index}">
                                Remove
                            </button>

                        </div>

                    </div>
                `;
            });

            document
                .querySelectorAll(".remove-wishlist")
                .forEach((button)=>{

                    button.addEventListener("click",()=>{

                        const wishlist =
                            JSON.parse(localStorage.getItem("wishlist")) || [];

                        wishlist.splice(
                            button.dataset.index,
                            1
                        );

                        localStorage.setItem(
                            "wishlist",
                            JSON.stringify(wishlist)
                        );

                        renderTripWishlist();
                    });

                });

        }

        renderTripWishlist();

    }

/*================================================================== Travel Mood Page =========================================================================*/ 

    const soundButtons = document.querySelectorAll(".sound-buttons button");
    const travelMoodSoundBanner = document.getElementById("travel-mood-sound-banner");
    const MoodSoundBannerTitle = document.querySelector(".travel-mood-banner-content h3");
    const MoodSoundBannerDescription = document.querySelector(".travel-mood-banner-content p");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const volumeSlider = document.getElementById("volume-slider");
    const volumeIcon = document.getElementById("volume-icon");

    if (soundButtons,
        travelMoodSoundBanner,
        MoodSoundBannerTitle,
        MoodSoundBannerDescription,
        playPauseBtn,
        volumeSlider,
        volumeIcon
    ) {

        const moodAudio = new Audio();
        let isPlaying = false;

        const Data = {
            "🌊 Beach": ["audio/beach.mp3", "img/travel-mood-sound-banners/beach.jpg", "Beach Waves", "Feel the calm waves and let your mind unwind."],
            "🍃 Forest": ["audio/forest.mp3", "img/travel-mood-sound-banners/forest.jpg", "Forest Sound", "Escape into the tranquil atmosphere of a quiet green forest."],
            "🏙️ City": ["audio/city.mp3", "img/travel-mood-sound-banners/city.jpg", "City Sound", "Enjoy the soothing mix of distant traffic, nightlife, and urban ambience."],
            "🌧️ Rain": ["audio/rain.mp3", "img/travel-mood-sound-banners/rain.webp", "Rain Drops Sound", "Listen to soft rainfall and gentle thunder to calm your mind and relax."]
        };

        // Load a sound when a category button is clicked
        soundButtons.forEach((button) => {
            button.addEventListener("click", () => {

                soundButtons.forEach((btn) => btn.classList.remove("active"));
                button.classList.add("active");

                const dataDetails = button.innerText.trim();
                moodAudio.src = Data[dataDetails][0];
                travelMoodSoundBanner.src = Data[dataDetails][1];
                MoodSoundBannerTitle.textContent = Data[dataDetails][2];
                MoodSoundBannerDescription.textContent = Data[dataDetails][3];

                moodAudio.play();
                isPlaying = true;
                playPauseBtn.textContent = "⏸ Pause";
            });
        });

        // Play / Pause toggle
        playPauseBtn.addEventListener("click", () => {
            if (!moodAudio.src) return;

            if (isPlaying) {
                moodAudio.pause();
                isPlaying = false;
                playPauseBtn.textContent = "▶ Play";
            } else {
                moodAudio.play();
                isPlaying = true;
                playPauseBtn.textContent = "⏸ Pause";
            }
        });

        // Volume slider
        volumeSlider.addEventListener("input", () => {
            moodAudio.volume = volumeSlider.value;

            // Update icon based on volume level
            if (volumeSlider.value == 0) {
                volumeIcon.textContent = "🔇";
            } else if (volumeSlider.value < 0.5) {
                volumeIcon.textContent = "🔉";
            } else {
                volumeIcon.textContent = "🔊";
            }
        });

        // Click volume icon to mute/unmute
        volumeIcon.addEventListener("click", () => {
            if (moodAudio.volume > 0) {
                moodAudio.volume = 0;
                volumeSlider.value = 0;
                volumeIcon.textContent = "🔇";
            } else {
                moodAudio.volume = 1;
                volumeSlider.value = 1;
                volumeIcon.textContent = "🔊";
            }
        });
    }

    // CHECK IF DESTINATION PAGE ELEMENTS EXIST
    const destinationList = document.getElementById("destination-list");
    const filterButtons = document.querySelectorAll(".destination-filter button");

    if (destinationList && filterButtons.length > 0) {

        let savedDestinations = JSON.parse(localStorage.getItem("travelDestinations")) || [];

        let currentFilter = "All";

        // RENDER DESTINATIONS
        function renderTravelMoodDestinations() {

            destinationList.innerHTML = "";

            destinations.forEach((destination) => {

                // FIND SAVED DESTINATION
                const saved =
                    savedDestinations.find((item) => {

                        return item.name === destination.destinationName;

                    });

                // FILTER LOGIC
                if (currentFilter === "Visited" && (!saved || saved.status !== "Visited")) 
                {
                    return;
                }

                if (currentFilter === "Planned" && (!saved || saved.status !== "Planned"))
                {
                    return;
                }

                // ACTIVE BUTTON STATES
                let visitedActive = "";
                let plannedActive = "";

                if (saved) {

                    if (saved.status === "Visited") {

                        visitedActive = "active";

                    }
                    else if (saved.status === "Planned") {

                        plannedActive = "active";

                    }

                }

                // CREATE CARD
                const card = document.createElement("div");

                card.classList.add("destination-item");

                card.innerHTML = `

                    <img src="${destination.destinationImage}" alt="destination image" loading="lazy">

                    <div>

                        <h3>
                            ${destination.destinationName},
                            ${destination.country}
                        </h3>

                        <p>
                            ${destination.travelVibes}
                        </p>

                    </div>

                    <div class="button-box">

                        <button class="visited ${visitedActive} "data-name="${destination.destinationName}">
                            📍 Visited
                        </button>

                        <button class="planned ${plannedActive}" data-name="${destination.destinationName}">
                            📅 Planned
                        </button>

                    </div>
                `;

                destinationList.appendChild(card);

            });

            setupButtons();
        }

        // BUTTON SYSTEM
        function setupButtons() {

            const visitedButtons =
                document.querySelectorAll(".visited");

            const plannedButtons =
                document.querySelectorAll(".planned");


            visitedButtons.forEach((button) => {

                button.addEventListener("click", () => {

                    const name = button.dataset.name;

                    const existing =
                        savedDestinations.find((item) => {

                            return item.name === name;

                        });


                    if (
                        existing &&
                        existing.status === "Visited"
                    ) {

                        savedDestinations =
                            savedDestinations.filter((item) => {

                                return item.name !== name;

                            });

                    }

                    // ADD VISITED
                    else {

                        savedDestinations =
                            savedDestinations.filter((item) => {

                                return item.name !== name;

                            });

                        savedDestinations.push({

                            name: name,
                            status: "Visited"

                        });

                    }

                    localStorage.setItem("travelDestinations",JSON.stringify(savedDestinations));

                    renderTravelMoodDestinations();

                });

            });

            // PLANNED BUTTONS
            plannedButtons.forEach((button) => {

                button.addEventListener("click", () => {

                    const name = button.dataset.name;

                    const existing =
                        savedDestinations.find((item) => {

                            return item.name === name;

                        });

                    // REMOVE PLANNED
                    if (existing && existing.status === "Planned") 
                        {
                            savedDestinations =
                                savedDestinations.filter((item) => {

                                    return item.name !== name;
                                });
                        }

                    // ADD PLANNED
                    else {

                        savedDestinations =
                            savedDestinations.filter((item) => {

                                return item.name !== name;

                            });

                        savedDestinations.push({

                            name: name,
                            status: "Planned"

                        });

                    }

                    localStorage.setItem("travelDestinations",JSON.stringify(savedDestinations));

                    renderTravelMoodDestinations();

                });

            });

        }

        // FILTER BUTTONS
        filterButtons.forEach((button) => {

            button.addEventListener("click", () => {

                filterButtons.forEach((btn) => {

                    btn.classList.remove("active");

                });

                button.classList.add("active");

                currentFilter =
                    button.innerText.trim();

                renderTravelMoodDestinations();

            });

        });

        // INITIAL LOAD
        renderTravelMoodDestinations();

    }


    /*================================================================== SUPPORT PAGE ==================================================================*/

    // FAQ
    const faqItems = document.querySelectorAll(".faq-item");

    if (faqItems.length > 0) {

        faqItems.forEach((item) => {

            const question =
                item.querySelector(".faq-question");

            const mark =
                item.querySelector(".faq-toggle-mark");

            question.addEventListener("click", () => {

                item.classList.toggle("active");

                if (item.classList.contains("active")) {

                    mark.innerText = "−";

                }
                else {

                    mark.innerText = "+";

                }

            });

        });

    }


    // SUPPORT FORM
    const supportForm = document.getElementById("supportForm");

    const successMessage = document.querySelector(".success-message");

    if (supportForm && successMessage) {

        supportForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const fullName =
                document.getElementById("fullName");

            const email =
                document.getElementById("emailAddress");

            const message =
                document.getElementById("message");

            const fullNameError =
                document.getElementById("fullNameError");

            const emailError =
                document.getElementById("emailError");

            const messageError =
                document.getElementById("messageError");

            let hasError = false;

            // Reset
            fullNameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";

            fullName.classList.remove("input-error");
            email.classList.remove("input-error");
            message.classList.remove("input-error");

            // Full Name
            if (fullName.value.trim() === "") {

                fullNameError.textContent =
                    "Please enter your full name";

                fullName.classList.add("input-error");

                hasError = true;
            }

            // Email
            if (email.value.trim() === "") {

                emailError.textContent =
                    "Please enter your email address";

                email.classList.add("input-error");

                hasError = true;
            }

            // Message
            if (message.value.trim() === "") {

                messageError.textContent =
                    "Please enter a message";

                message.classList.add("input-error");

                hasError = true;
            }

            if (hasError) return;

            // Save data
            const feedbackData = {
                fullName: fullName.value,
                email: email.value,
                message: message.value
            };

            let feedbacks =
                JSON.parse(localStorage.getItem("feedbacks")) || [];

            feedbacks.push(feedbackData);

            localStorage.setItem(
                "feedbacks",
                JSON.stringify(feedbacks)
            );

            successMessage.style.display = "block";
            successMessage.style.opacity = "1";

            supportForm.reset();

            setTimeout(() => {
                successMessage.style.opacity = "0";

                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 500);

            }, 3000);

            supportForm.reset();
        });

    }
});

