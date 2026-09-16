function loadBookings() {

    const bookings =
        JSON.parse(
            localStorage.getItem(
                "bookings"
            )
        ) || [];


    const container =
        document.getElementById(
            "bookingsContainer"
        );


    if (bookings.length === 0) {

        container.innerHTML = `

            <div class="empty-bookings">

                <h2>
                    No bookings yet
                </h2>

                <p>
                    Your confirmed bookings will appear here.
                </p>

                <a href="index.html"
                   class="primary-button">

                    Find a stay

                </a>

            </div>

        `;

        return;
    }


    container.innerHTML = "";


    bookings.forEach(
        (booking, index) => {

            container.innerHTML += `

                <div class="booking-item">

                    <div>

                        <h2>
                            ${booking.hotelName}
                        </h2>

                        <p>
                            📍 ${booking.hotelLocation}
                        </p>

                        <p>
                            🛏 ${booking.roomName}
                        </p>

                        <p>
                            📅 ${booking.checkin}
                            →
                            ${booking.checkout}
                        </p>

                    </div>


                    <div class="booking-item-right">

                        <strong>
                            ₹${booking.price.toLocaleString()}
                        </strong>

                        <span class="confirmed">
                            ${booking.status}
                        </span>

                        <p>
                            Booking ID:
                            ${booking.bookingId}
                        </p>


                        <button
                            onclick="cancelBooking(${index})"
                            class="cancel-button">

                            Cancel booking

                        </button>

                    </div>

                </div>

            `;

        }
    );

}



function cancelBooking(index) {

    const confirmed =
        confirm(
            "Are you sure you want to cancel this booking?"
        );


    if (!confirmed) return;


    let bookings =
        JSON.parse(
            localStorage.getItem(
                "bookings"
            )
        ) || [];


    bookings[index].status =
        "Cancelled";


    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );


    loadBookings();

}


loadBookings();