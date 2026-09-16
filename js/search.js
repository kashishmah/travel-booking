let searchData =
    JSON.parse(
        localStorage.getItem("searchData")
    ) || {
        destination: "",
        checkin: "",
        checkout: "",
        guests: 2
    };


let results = [...hotels];


function filterHotels() {

    const destination =
        searchData.destination
            .toLowerCase()
            .trim();


    if (destination) {

        results = hotels.filter(hotel =>

            hotel.city
                .toLowerCase()
                .includes(destination)

            ||

            hotel.location
                .toLowerCase()
                .includes(destination)

            ||

            hotel.name
                .toLowerCase()
                .includes(destination)

        );

    } else {

        results = [...hotels];

    }


    applyPriceFilters();
}



function applyPriceFilters() {

    const priceFilters =
        [...document.querySelectorAll(".priceFilter:checked")];

    const ratingFilters =
        [...document.querySelectorAll(".ratingFilter:checked")];


    if (priceFilters.length) {

        const maxPrice =
            Math.min(
                ...priceFilters.map(
                    checkbox =>
                        Number(checkbox.value)
                )
            );

        results =
            results.filter(
                hotel => hotel.price <= maxPrice
            );
    }


    if (ratingFilters.length) {

        const minimumRating =
            Math.max(
                ...ratingFilters.map(
                    checkbox =>
                        Number(checkbox.value)
                )
            );

        results =
            results.filter(
                hotel => hotel.rating >= minimumRating
            );
    }


    displayResults();
}



function displayResults() {

    const container =
        document.getElementById("results");


    container.innerHTML = "";


    document.getElementById("resultCount")
        .textContent =
        `${results.length} properties found`;


    results.forEach(hotel => {

        container.innerHTML += `

            <div class="result-card">

                <img src="${hotel.images[0]}">

                <div class="result-info">

                    <h2>${hotel.name}</h2>

                    <p class="location">
                        ${hotel.location}
                    </p>

                    <div>

                        <span class="rating">
                            ${hotel.rating}
                        </span>

                        ${hotel.reviews} reviews

                    </div>


                    <div class="amenities-small">

                        ${hotel.amenities
                            .slice(0, 3)
                            .map(a => `<span>${a}</span>`)
                            .join("")}

                    </div>

                </div>


                <div class="result-price">

                    <strong>
                        ₹${hotel.price.toLocaleString()}
                    </strong>

                    <small>
                        per night
                    </small>

                    <button
                        onclick="openHotel(${hotel.id})">
                        View property
                    </button>

                </div>

            </div>

        `;

    });

}



function openHotel(id) {

    localStorage.setItem(
        "selectedHotelId",
        id
    );

    window.location.href =
        "hotel-details.html";
}



document.getElementById("sortSelect")
    .addEventListener(
        "change",
        function() {

            const value = this.value;


            if (value === "price-low") {

                results.sort(
                    (a,b) => a.price - b.price
                );

            }

            else if (value === "price-high") {

                results.sort(
                    (a,b) => b.price - a.price
                );

            }

            else if (value === "rating") {

                results.sort(
                    (a,b) => b.rating - a.rating
                );

            }


            displayResults();

        }
    );


document.querySelectorAll(
    ".priceFilter, .ratingFilter"
).forEach(input => {

    input.addEventListener(
        "change",
        function() {

            filterHotels();

        }
    );

});


document.getElementById("searchTitle")
    .textContent =
    searchData.destination
        ? `Hotels in ${searchData.destination}`
        : "All hotels";


document.getElementById("searchInfo")
    .textContent =
    `${searchData.checkin || "Flexible"} → ${
        searchData.checkout || "Flexible"
    } · ${searchData.guests} guests`;


filterHotels();