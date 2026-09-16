const hotelId =
    Number(
        localStorage.getItem("selectedHotelId")
    );


const hotel =
    hotels.find(
        h => h.id === hotelId
    );


if (!hotel) {

    window.location.href =
        "index.html";

}


document.title =
    `${hotel.name} - TravelEase`;



document.getElementById("hotelName")
    .textContent = hotel.name;


document.getElementById("breadcrumbName")
    .textContent = hotel.name;


document.getElementById("hotelRating")
    .textContent = hotel.rating;


document.getElementById("hotelReviews")
    .textContent =
    `${hotel.reviews} reviews`;


document.getElementById("hotelLocation")
    .textContent = hotel.location;


document.getElementById("hotelDescription")
    .textContent =
    hotel.description;



/* ================= GALLERY ================= */

const mainImage =
    document.getElementById(
        "mainHotelImage"
    );


mainImage.src =
    hotel.images[0];


const thumbnailContainer =
    document.getElementById(
        "thumbnailContainer"
    );


hotel.images.forEach(image => {

    const img =
        document.createElement("img");


    img.src = image;


    img.onclick = function() {

        mainImage.src = image;

    };


    thumbnailContainer.appendChild(img);

});



/* ================= AMENITIES ================= */

const amenities =
    document.getElementById(
        "amenities"
    );


hotel.amenities.forEach(item => {

    amenities.innerHTML += `

        <div class="amenity">
            ✓ ${item}
        </div>

    `;

});



/* ================= PRICE ================= */

document.getElementById(
    "startingPrice"
).textContent =
    `From ₹${hotel.price.toLocaleString()} / night`;



/* ================= ROOMS ================= */

const roomsContainer =
    document.getElementById(
        "roomsContainer"
    );


hotel.rooms.forEach((room, index) => {

    roomsContainer.innerHTML += `

        <div class="room-card">

            <img
                src="${room.image}"
                class="room-image"
            >


            <div class="room-details">

                <h3>
                    ${room.name}
                </h3>

                <p>
                    ${room.beds}
                    · ${room.guests} guests
                </p>

                <div class="room-features">

                    ✓ Free Wi-Fi<br>
                    ✓ Air conditioning<br>
                    ✓ Private bathroom<br>
                    ✓ Breakfast available

                </div>

            </div>


            <div class="room-price">

                <strong>
                    ₹${room.price.toLocaleString()}
                </strong>

                <small>
                    per night
                </small>


                <span class="${
                    room.available
                        ? "available"
                        : "unavailable"
                }">

                    ${
                        room.available
                            ? "Available"
                            : "Sold out"
                    }

                </span>


                <button
                    ${
                        !room.available
                            ? "disabled"
                            : ""
                    }
                    onclick="reserveRoom(
                        '${room.name}',
                        ${room.price}
                    )">

                    Reserve

                </button>

            </div>

        </div>

    `;

});



/* ================= MAP ================= */

document.getElementById(
    "mapAddress"
).textContent =
    hotel.location;


/*
    Demo map centered around Delhi.
    Later we can connect a real map API
    and geocode each hotel's location.
*/

document.getElementById(
    "mapFrame"
).src =
    "https://www.openstreetmap.org/export/embed.html?bbox=77.18%2C28.61%2C77.25%2C28.66&layer=mapnik";



/* ================= REVIEWS ================= */

document.getElementById(
    "reviewRating"
).textContent =
    hotel.rating;


const reviewsContainer =
    document.getElementById(
        "reviewsContainer"
    );


hotel.reviewsList.forEach(review => {

    reviewsContainer.innerHTML += `

        <article class="review-card">

            <div class="review-user">

                <div class="avatar">
                    ${review.name.charAt(0)}
                </div>

                <div>

                    <strong>
                        ${review.name}
                    </strong>

                    <small>
                        Verified guest
                    </small>

                </div>

            </div>


            <div class="review-stars">

                ${"⭐".repeat(review.rating)}

            </div>


            <p>
                ${review.text}
            </p>

        </article>

    `;

});



/* ================= RESERVE ================= */

function reserveRoom(roomName, price) {

    const searchData =
        JSON.parse(
            localStorage.getItem("searchData")
        ) || {};


    const booking = {

        hotelId: hotel.id,

        hotelName: hotel.name,

        hotelLocation: hotel.location,

        roomName,

        price,

        checkin:
            searchData.checkin || "",

        checkout:
            searchData.checkout || "",

        guests:
            searchData.guests || 2

    };


    localStorage.setItem(
        "currentBooking",
        JSON.stringify(booking)
    );


    window.location.href =
        "booking.html";

}



function scrollToRooms() {

    document.getElementById(
        "rooms"
    ).scrollIntoView({
        behavior: "smooth"
    });

}



/* ================= FAVORITE ================= */

document.getElementById(
    "favoriteButton"
).onclick = function() {

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];


    if (favorites.includes(hotel.id)) {

        favorites =
            favorites.filter(
                id => id !== hotel.id
            );

        this.textContent = "♡";

    } else {

        favorites.push(hotel.id);

        this.textContent = "♥";

    }


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

};