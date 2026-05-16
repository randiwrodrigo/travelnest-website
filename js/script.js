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

        }, 3000);
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

        const todayDestination =
            destinations[today % destinations.length];

        dailyDestinationTitle.innerHTML =
            `${todayDestination.destinationName},
            ${todayDestination.country}`;

        dailyDestinationImage.src =
            todayDestination.destinationImage;

        dailyDestinationDescription.innerText =
            todayDestination.destinationDescription;

        dailyDestinationCountry.innerText =
            todayDestination.country;

        dailyDestinationBestTime.innerText =
            todayDestination.bestTimeToVisit;

        dailyDestinationDailyBudget.innerText =
            todayDestination.dailyBudget;

        dailyDestinationTravelVibes.innerText =
            todayDestination.travelVibes;

    }




    /*==================================================================== Destination Page =========================================================================*/ 

    // Rendering Function

    const destinationGrid = document.getElementById("destination-grid-div");
    const destinationSearchInput = document.getElementById("searchInput");

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

            `;

        });

    }

    renderDestinations(destinations);

    destinationSearchInput.addEventListener("input", () => {

        const value = destinationSearchInput.value.toLowerCase();
        const filteredDestinations = destinations.filter((destination) => {

                return destination.destinationName
                    .toLowerCase()
                    .includes(value);

            });

        renderDestinations(filteredDestinations);

    });

});
