// /* =====================================================
//    TRAVEL EASE - AUTHENTICATION
//    REGISTER + LOGIN
// ===================================================== */


// /* =====================================================
//    EMAIL VALIDATION
//    Only @gmail.com is accepted
// ===================================================== */

// // function isValidGmail(email) {

// //     email = email.trim().toLowerCase();

// //     const gmailRegex =
// //         /^[a-z0-9](?:[a-z0-9.]{4,28}[a-z0-9])?@gmail\.com$/;

// //     return gmailRegex.test(email);
// // }
// /

// // function isValidGmail(email) {

// //     email = email.trim().toLowerCase();

// //     const gmailRegex =
// //         /^[a-z0-9](?:[a-z0-9.]*)@gmail\.com$/;

// //     return gmailRegex.test(email);
// // }

// function isValidGmail(email) {

//     email = email.trim().toLowerCase();

//     const gmailRegex =
//         /^(?!.*\.\.)[a-z0-9](?:[a-z0-9.]*)[a-z0-9]@gmail\.com$/;

//     return gmailRegex.test(email);
// }

// /* =====================================================
//    PASSWORD VALIDATION

//    Requirements:
//    ✔ Minimum 8 characters
//    ✔ One uppercase letter
//    ✔ One lowercase letter
//    ✔ One number
//    ✔ One special character
// ===================================================== */

// function isStrongPassword(password) {

//     if (password.length < 8) {
//         return false;
//     }

//     const uppercase =
//         /[A-Z]/.test(password);

//     const lowercase =
//         /[a-z]/.test(password);

//     const number =
//         /[0-9]/.test(password);

//     const special =
//         /[^A-Za-z0-9]/.test(password);

//     return (
//         uppercase &&
//         lowercase &&
//         number &&
//         special
//     );
// }


// /* =====================================================
//    GET REGISTERED USERS
// ===================================================== */

// function getUsers() {

//     return JSON.parse(
//         localStorage.getItem("travelEaseUsers")
//     ) || [];
// }


// /* =====================================================
//    SAVE REGISTERED USERS
// ===================================================== */

// function saveUsers(users) {

//     localStorage.setItem(
//         "travelEaseUsers",
//         JSON.stringify(users)
//     );
// }


// /* =====================================================
//    REGISTER FORM
// ===================================================== */

// const registerForm =
//     document.getElementById("registerForm");


// if (registerForm) {

//     registerForm.addEventListener(
//         "submit",
//         function(event) {

//             event.preventDefault();


//             const name =
//                 document
//                     .getElementById("registerName")
//                     .value
//                     .trim();


//             const email =
//                 document
//                     .getElementById("registerEmail")
//                     .value
//                     .trim()
//                     .toLowerCase();


//             const password =
//                 document
//                     .getElementById("registerPassword")
//                     .value;


//             /* -----------------------------------------
//                NAME CHECK
//             ----------------------------------------- */

//             if (name.length < 2) {

//                 alert(
//                     "Please enter a valid full name."
//                 );

//                 document
//                     .getElementById("registerName")
//                     .focus();

//                 return;
//             }


//             /* -----------------------------------------
//                EMAIL CHECK
//             ----------------------------------------- */

//             if (!isValidGmail(email)) {

//                 alert(
//                     "Please enter a valid Gmail address ending with @gmail.com."
//                 );

//                 document
//                     .getElementById("registerEmail")
//                     .focus();

//                 return;
//             }


//             /* -----------------------------------------
//                PASSWORD CHECK
//             ----------------------------------------- */

//             if (!isStrongPassword(password)) {

//                 alert(
//                     "Password must be at least 8 characters and contain:\n" +
//                     "• One uppercase letter\n" +
//                     "• One lowercase letter\n" +
//                     "• One number\n" +
//                     "• One special character"
//                 );

//                 document
//                     .getElementById("registerPassword")
//                     .focus();

//                 return;
//             }


//             /* -----------------------------------------
//                GET EXISTING USERS
//             ----------------------------------------- */

//             const users = getUsers();


//             /* -----------------------------------------
//                CHECK DUPLICATE EMAIL
//             ----------------------------------------- */

//             const existingUser =
//                 users.find(
//                     function(user) {
//                         return user.email === email;
//                     }
//                 );


//             if (existingUser) {

//                 alert(
//                     "An account with this email already exists. Please login."
//                 );

//                 window.location.href =
//                     "login.html";

//                 return;
//             }


//             /* -----------------------------------------
//                CREATE NEW USER
//             ----------------------------------------- */

//             const newUser = {

//                 name: name,

//                 email: email,

//                 password: password

//             };


//             users.push(newUser);


//             saveUsers(users);


//             /* -----------------------------------------
//                REGISTRATION SUCCESS
//             ----------------------------------------- */

//             alert(
//                 "Account created successfully! Please login."
//             );


//             window.location.href =
//                 "login.html";

//         }
//     );
// }


// /* =====================================================
//    LOGIN FORM
// ===================================================== */

// /* =====================================================
//    LOGIN FORM
// ===================================================== */

// const loginForm =
//     document.getElementById("loginForm");


// if (loginForm) {

//     loginForm.addEventListener(
//         "submit",
//         function(event) {

//             event.preventDefault();


//             const email =
//                 document
//                     .getElementById("loginEmail")
//                     .value
//                     .trim()
//                     .toLowerCase();


//             const password =
//                 document
//                     .getElementById("loginPassword")
//                     .value;


//             /* -----------------------------------------
//                1. CHECK EMAIL FORMAT
//             ----------------------------------------- */

//             if (!isValidGmail(email)) {

//                 alert(
//                     "Please enter a valid Gmail address ending with @gmail.com."
//                 );

//                 document
//                     .getElementById("loginEmail")
//                     .focus();

//                 return;
//             }


//             /* -----------------------------------------
//                2. GET REGISTERED USERS
//             ----------------------------------------- */

//             const users = getUsers();


//             /* -----------------------------------------
//                3. CHECK WHETHER EMAIL IS REGISTERED
//             ----------------------------------------- */

//             const registeredUser =
//                 users.find(
//                     function(user) {
//                         return user.email === email;
//                     }
//                 );


//             /* -----------------------------------------
//                4. EMAIL NOT REGISTERED
//             ----------------------------------------- */

//             if (!registeredUser) {

//                 alert(
//                     "This email is not registered. Please register first."
//                 );

//                 document
//                     .getElementById("loginEmail")
//                     .focus();

//                 return;
//             }


//             /* -----------------------------------------
//                5. CHECK PASSWORD STRENGTH
//             ----------------------------------------- */

//             if (!isStrongPassword(password)) {

//                 alert(
//                     "Password must be at least 8 characters and contain:\n" +
//                     "• One uppercase letter\n" +
//                     "• One lowercase letter\n" +
//                     "• One number\n" +
//                     "• One special character"
//                 );

//                 document
//                     .getElementById("loginPassword")
//                     .focus();

//                 return;
//             }


//             /* -----------------------------------------
//                6. CHECK PASSWORD
//             ----------------------------------------- */

//             if (registeredUser.password !== password) {

//                 alert(
//                     "Incorrect password. Please try again."
//                 );

//                 document
//                     .getElementById("loginPassword")
//                     .focus();

//                 return;
//             }


//             /* -----------------------------------------
//                7. LOGIN SUCCESS
//             ----------------------------------------- */

//             localStorage.setItem(
//                 "loggedIn",
//                 "true"
//             );

//             localStorage.setItem(
//                 "userEmail",
//                 registeredUser.email
//             );

//             localStorage.setItem(
//                 "userName",
//                 registeredUser.name
//             );


//             alert(
//                 "Login successful! Welcome, " +
//                 registeredUser.name +
//                 "!"
//             );


//             window.location.href =
//                 "index.html";

//         }
//     );
// }



/* =====================================================
   TRAVEL EASE - AUTHENTICATION
   REGISTER + LOGIN
===================================================== */


/* =====================================================
   EMAIL VALIDATION
===================================================== */

function isValidGmail(email) {

    email = email.trim().toLowerCase();

    // Must end exactly with @gmail.com
    // Username: letters, numbers and dots
    // Minimum 2 characters before @
    // No consecutive dots
    const gmailRegex =
        /^(?!.*\.\.)[a-z0-9][a-z0-9.]*[a-z0-9]@gmail\.com$/;

    return gmailRegex.test(email);
}


/* =====================================================
   PASSWORD VALIDATION
===================================================== */

function isStrongPassword(password) {

    if (password.length < 8) {
        return false;
    }

    const hasUppercase =
        /[A-Z]/.test(password);

    const hasLowercase =
        /[a-z]/.test(password);

    const hasNumber =
        /[0-9]/.test(password);

    const hasSpecial =
        /[^A-Za-z0-9]/.test(password);

    return (
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSpecial
    );
}


/* =====================================================
   GET REGISTERED USERS
===================================================== */

function getUsers() {

    return JSON.parse(
        localStorage.getItem("travelEaseUsers")
    ) || [];
}


/* =====================================================
   SAVE REGISTERED USERS
===================================================== */

function saveUsers(users) {

    localStorage.setItem(
        "travelEaseUsers",
        JSON.stringify(users)
    );
}


/* =====================================================
   REGISTER
===================================================== */

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document
                    .getElementById("registerName")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("registerEmail")
                    .value
                    .trim()
                    .toLowerCase();

            const password =
                document
                    .getElementById("registerPassword")
                    .value;


            /* NAME */

            if (name.length < 2) {

                alert(
                    "Please enter your full name."
                );

                return;
            }


            /* EMAIL */

            if (!isValidGmail(email)) {

                alert(
                    "Please enter a valid Gmail address ending with @gmail.com."
                );

                document
                    .getElementById("registerEmail")
                    .focus();

                return;
            }


            /* PASSWORD */

            if (!isStrongPassword(password)) {

                alert(
                    "Password must be at least 8 characters and contain:\n" +
                    "• One uppercase letter\n" +
                    "• One lowercase letter\n" +
                    "• One number\n" +
                    "• One special character"
                );

                document
                    .getElementById("registerPassword")
                    .focus();

                return;
            }


            /* GET USERS */

            const users = getUsers();


            /* CHECK DUPLICATE EMAIL */

            const existingUser =
                users.find(function(user) {

                    return user.email === email;

                });


            if (existingUser) {

                alert(
                    "This email is already registered. Please login."
                );

                window.location.href =
                    "login.html";

                return;
            }


            /* CREATE USER */

            const newUser = {

                name: name,

                email: email,

                password: password

            };


            users.push(newUser);

            saveUsers(users);


            /* SUCCESS */

            alert(
                "Account created successfully! Please login."
            );


            window.location.href =
                "login.html";

        }
    );
}


/* =====================================================
   LOGIN
===================================================== */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document
                    .getElementById("loginEmail")
                    .value
                    .trim()
                    .toLowerCase();

            const password =
                document
                    .getElementById("loginPassword")
                    .value;


            /* -----------------------------------------
               STEP 1: EMAIL FORMAT
            ----------------------------------------- */

            if (!isValidGmail(email)) {

                alert(
                    "Please enter a valid Gmail address ending with @gmail.com."
                );

                return;
            }


            /* -----------------------------------------
               STEP 2: GET REGISTERED USERS
            ----------------------------------------- */

            const users = getUsers();


            /* -----------------------------------------
               STEP 3: FIND EMAIL
            ----------------------------------------- */

            const user =
                users.find(function(user) {

                    return user.email === email;

                });


            /* -----------------------------------------
               STEP 4: EMAIL NOT REGISTERED
            ----------------------------------------- */

            if (!user) {

                alert(
                    "This email is not registered. Please register first."
                );

                return;
            }


            /* -----------------------------------------
               STEP 5: PASSWORD
            ----------------------------------------- */

            if (!isStrongPassword(password)) {

                alert(
                    "Password must be at least 8 characters and contain:\n" +
                    "• One uppercase letter\n" +
                    "• One lowercase letter\n" +
                    "• One number\n" +
                    "• One special character"
                );

                return;
            }


            /* -----------------------------------------
               STEP 6: CHECK PASSWORD
            ----------------------------------------- */

            if (user.password !== password) {

                alert(
                    "Incorrect password. Please try again."
                );

                return;
            }


            /* -----------------------------------------
               STEP 7: LOGIN SUCCESS
            ----------------------------------------- */

            localStorage.setItem(
                "loggedIn",
                "true"
            );

            localStorage.setItem(
                "userEmail",
                user.email
            );

            localStorage.setItem(
                "userName",
                user.name
            );


            alert(
                "Login successful! Welcome, " +
                user.name +
                "!"
            );


            window.location.href =
                "index.html";

        }
    );
}