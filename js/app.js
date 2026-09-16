function performSearch() {

    const destination =
        document.getElementById("destination").value;

    const checkin =
        document.getElementById("checkin").value;

    const checkout =
        document.getElementById("checkout").value;

    const guests =
        document.getElementById("guests").value;


    const searchData = {
        destination,
        checkin,
        checkout,
        guests
    };


    localStorage.setItem(
        "searchData",
        JSON.stringify(searchData)
    );


    window.location.href =
        "search.html";
}



function destinationSearch(destination) {

    localStorage.setItem(
        "searchData",
        JSON.stringify({
            destination: destination,
            checkin: "",
            checkout: "",
            guests: 2
        })
    );


    window.location.href =
        "search.html";
}



function displayHomeHotels() {

    const container =
        document.getElementById("homeHotels");

    if (!container) return;


    container.innerHTML = "";


    hotels.slice(0, 6).forEach(hotel => {

        container.innerHTML += `

            <div class="hotel-card">

                <img src="${hotel.images[0]}">

                <div class="hotel-card-body">

                    <h3>${hotel.name}</h3>

                    <p class="location">
                        <i class="fa-solid fa-location-dot"></i>
                        ${hotel.location}
                    </p>

                    <div>

                        <span class="rating">
                            ${hotel.rating}
                        </span>

                        <span>
                            ${hotel.reviews} reviews
                        </span>

                    </div>

                    <div class="hotel-bottom">

                        <strong>
                            ₹${hotel.price.toLocaleString()}
                        </strong>

                        <button
                            onclick="openHotel(${hotel.id})">
                            View details
                        </button>

                    </div>

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



document.addEventListener(
    "DOMContentLoaded",
    displayHomeHotels
);