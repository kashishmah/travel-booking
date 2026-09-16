// =====================================================
// GET CURRENT BOOKING
// =====================================================

const booking =
    JSON.parse(
        localStorage.getItem("currentBooking")
    );


if (!booking) {

    window.location.href = "index.html";

}


// =====================================================
// BOOKING SUMMARY
// =====================================================

const summary =
    document.getElementById("bookingSummary");


summary.innerHTML = `

    <h2>Your booking</h2>

    <h3>
        ${booking.hotelName}
    </h3>

    <p>
        📍 ${booking.hotelLocation}
    </p>

    <hr>

    <p>
        <strong>Room</strong><br>
        ${booking.roomName}
    </p>

    <p>
        <strong>Price</strong><br>
        ₹${Number(booking.price).toLocaleString()} / night
    </p>

`;


// =====================================================
// PRE-FILL EXISTING BOOKING DATA
// =====================================================

if (booking.checkin) {

    document.getElementById("checkin").value =
        booking.checkin;

}


if (booking.checkout) {

    document.getElementById("checkout").value =
        booking.checkout;

}


if (booking.guests) {

    document.getElementById("guests").value =
        booking.guests;

}


// =====================================================
// SET MINIMUM DATE
// =====================================================

const today =
    new Date().toISOString().split("T")[0];


const checkinInput =
    document.getElementById("checkin");


const checkoutInput =
    document.getElementById("checkout");


checkinInput.min = today;


// When check-in changes,
// checkout cannot be before check-in.

checkinInput.addEventListener(
    "change",
    function() {

        checkoutInput.min =
            this.value;

        if (
            checkoutInput.value &&
            checkoutInput.value <= this.value
        ) {

            checkoutInput.value = "";

        }

    }
);


// =====================================================
// EMAIL VALIDATION
// =====================================================

function isValidEmail(email) {

    email =
        email.trim().toLowerCase();


    /*
       Gmail only.

       Examples:

       abc@gmail.com       ✅
       kashish123@gmail.com ✅

       khu@gmail.co         ❌
       khu@gmail            ❌
       khu@gmail.com.in     ❌
       khu@yahoo.com        ❌
       khu@                 ❌
    */

    const gmailRegex =
        /^[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?@gmail\.com$/;


    if (!gmailRegex.test(email)) {

        return false;

    }


    // Gmail username length
    const username =
        email.split("@")[0];


    if (
        username.length < 6 ||
        username.length > 30
    ) {

        return false;

    }


    // Cannot contain consecutive dots

    if (
        username.includes("..")
    ) {

        return false;

    }


    return true;

}


// =====================================================
// MOBILE NUMBER VALIDATION
// =====================================================

function isValidPhone(phone) {

    // Remove spaces
    phone =
        phone.replace(/\s/g, "");


    /*
       Indian mobile number:

       9876543210  ✅
       8765432109  ✅
       7654321098  ✅
       6543210987  ✅

       1234567890  ❌
       987654321   ❌
       98765432101 ❌
       abc9876543  ❌
    */

    const phoneRegex =
        /^[6-9][0-9]{9}$/;


    return phoneRegex.test(phone);

}


// =====================================================
// NAME VALIDATION
// =====================================================

function isValidName(name) {

    name =
        name.trim();


    /*
       Allows:

       Kashish       ✅
       Kashish Kumar ✅

       Kashish123    ❌
       12345         ❌
    */

    const nameRegex =
        /^[A-Za-z]+(?: [A-Za-z]+)*$/;


    return (
        name.length >= 2 &&
        nameRegex.test(name)
    );

}


// =====================================================
// BOOKING FORM SUBMIT
// =====================================================

document.getElementById(
    "bookingForm"
).addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        // =================================================
        // GET VALUES
        // =================================================

        const firstName =
            document.getElementById(
                "firstName"
            ).value.trim();


        const lastName =
            document.getElementById(
                "lastName"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const phone =
            document.getElementById(
                "phone"
            ).value.trim();


        const checkin =
            document.getElementById(
                "checkin"
            ).value;


        const checkout =
            document.getElementById(
                "checkout"
            ).value;


        const guests =
            document.getElementById(
                "guests"
            ).value;


        const requests =
            document.getElementById(
                "requests"
            ).value.trim();


        // =================================================
        // FIRST NAME VALIDATION
        // =================================================

        if (!isValidName(firstName)) {

            alert(
                "Please enter a valid first name."
            );

            document.getElementById(
                "firstName"
            ).focus();

            return;

        }


        // =================================================
        // LAST NAME VALIDATION
        // =================================================

        if (!isValidName(lastName)) {

            alert(
                "Please enter a valid last name."
            );

            document.getElementById(
                "lastName"
            ).focus();

            return;

        }


        // =================================================
        // EMAIL VALIDATION
        // =================================================

        if (!isValidEmail(email)) {

            alert(
                "Please enter a valid Gmail address ending with @gmail.com."
            );

            document.getElementById(
                "email"
            ).focus();

            return;

        }


        // =================================================
        // PHONE VALIDATION
        // =================================================

        if (!isValidPhone(phone)) {

            alert(
                "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9."
            );

            document.getElementById(
                "phone"
            ).focus();

            return;

        }


        // =================================================
        // CHECK-IN VALIDATION
        // =================================================

        if (!checkin) {

            alert(
                "Please select your check-in date."
            );

            return;

        }


        // =================================================
        // CHECK-OUT VALIDATION
        // =================================================

        if (!checkout) {

            alert(
                "Please select your check-out date."
            );

            return;

        }


        // =================================================
        // DATE ORDER VALIDATION
        // =================================================

        if (checkout <= checkin) {

            alert(
                "Check-out date must be after check-in date."
            );

            checkoutInput.focus();

            return;

        }


        // =================================================
        // GUEST VALIDATION
        // =================================================

        const guestNumber =
            Number(guests);


        if (
            isNaN(guestNumber) ||
            guestNumber < 1 ||
            guestNumber > 4
        ) {

            alert(
                "Please select a valid number of guests."
            );

            return;

        }


        // =================================================
        // SAVE VALIDATED DATA
        // =================================================

        booking.firstName =
            firstName;


        booking.lastName =
            lastName;


        booking.email =
            email;


        booking.phone =
            phone;


        booking.checkin =
            checkin;


        booking.checkout =
            checkout;


        booking.guests =
            guestNumber;


        booking.requests =
            requests;


        // =================================================
        // SAVE TO LOCAL STORAGE
        // =================================================

        localStorage.setItem(
            "currentBooking",
            JSON.stringify(booking)
        );


        // =================================================
        // GO TO PAYMENT
        // =================================================

        window.location.href =
            "payment.html";

    }
);