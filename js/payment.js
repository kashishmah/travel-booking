const booking =
    JSON.parse(
        localStorage.getItem(
            "currentBooking"
        )
    );


if (!booking) {

    window.location.href =
        "index.html";

}



const summary =
    document.getElementById(
        "paymentSummary"
    );


summary.innerHTML = `

    <h2>Booking summary</h2>

    <h3>
        ${booking.hotelName}
    </h3>

    <p>
        ${booking.roomName}
    </p>

    <p>
        ${booking.checkin}
        →
        ${booking.checkout}
    </p>

    <hr>

    <h2>
        ₹${booking.price.toLocaleString()}
    </h2>

`;



document.getElementById(
    "paymentForm"
).addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const bookingId =
            "TE-" +
            Math.floor(
                100000 +
                Math.random() * 900000
            );


        booking.bookingId =
            bookingId;


        booking.status =
            "Confirmed";


        booking.bookedAt =
            new Date().toISOString();


        booking.paymentStatus =
            "Paid";


        let bookings =
            JSON.parse(
                localStorage.getItem(
                    "bookings"
                )
            ) || [];


        bookings.push(booking);


        localStorage.setItem(
            "bookings",
            JSON.stringify(bookings)
        );


        localStorage.setItem(
            "lastBooking",
            JSON.stringify(booking)
        );


        localStorage.removeItem(
            "currentBooking"
        );


        window.location.href =
            "confirmation.html";

    }
);