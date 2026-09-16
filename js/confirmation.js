const booking =
    JSON.parse(
        localStorage.getItem(
            "lastBooking"
        )
    );


if (!booking) {

    window.location.href =
        "index.html";

}


document.getElementById(
    "confirmationDetails"
).innerHTML = `

    <div class="confirmation-info">

        <p>
            <strong>Booking ID</strong>
            <br>
            ${booking.bookingId}
        </p>

        <p>
            <strong>Hotel</strong>
            <br>
            ${booking.hotelName}
        </p>

        <p>
            <strong>Room</strong>
            <br>
            ${booking.roomName}
        </p>

        <p>
            <strong>Location</strong>
            <br>
            ${booking.hotelLocation}
        </p>

        <p>
            <strong>Check-in</strong>
            <br>
            ${booking.checkin}
        </p>

        <p>
            <strong>Check-out</strong>
            <br>
            ${booking.checkout}
        </p>

        <p>
            <strong>Guests</strong>
            <br>
            ${booking.guests}
        </p>

        <p>
            <strong>Total</strong>
            <br>
            ₹${booking.price.toLocaleString()}
        </p>

        <p>
            <strong>Status</strong>
            <br>
            <span class="confirmed">
                Confirmed
            </span>
        </p>

    </div>

`;