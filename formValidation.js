/*
Gerson Antunes
*/

/*
PSEUDOCODE
 PROGRAM form
    INPUT firstName, lastName, postcode, email, cardNumber, ccv, expiryMonth, expiryYear
    onsubmit = return validateForm()
 END

FUNCTION validateForm()    
    now = get current date/time
    currentMonth = get month from now + 1 
    currentYear = get year from now
    GET month FROM expiryMonth input
    GET year FROM expiryYear input 

    IF (firstName == "") THEN
        OUTPUT error in first name
        FOCUS firstName
        RETURN false
    ENDIF

    IF (lastName == "") THEN
        OUTPUT error in last name
        FOCUS lastName
        RETURN false
    ENDIF

    IF (isNaN(postcode)) THEN
        OUTPUT error in postcode
        FOCUS postcode
        RETURN false
    ENDIF

    IF (postcode.length != 4) THEN
        OUTPUT error in postcode
        FOCUS postcode
        RETURN false
    ENDIF

    IF (email.value.indexOf("@") == -1 OR email.value.indexOf(".") == -1) THEN
        OUTPUT error in email
        FOCUS email
        RETURN false
    ENDIF

    IF (email.length < 8) THEN
        OUTPUT error in email
        FOCUS email
        RETURN false
    ENDIF

    IF (isNaN(cardNumber)) THEN
        OUTPUT error in card number
        FOCUS cardNumber
        RETURN false
    ENDIF

    IF (cardNumber.length != 16) THEN
        OUTPUT error in card number
        FOCUS cardNumber
        RETURN false
    ENDIF

    IF (isNaN(ccv)) THEN
        OUTPUT error in ccv
        FOCUS ccv
        RETURN false
    ENDIF

    IF (ccv.length != 3) THEN
        OUTPUT error in ccv
        FOCUS ccv
        RETURN false
    ENDIF   

    IF (expiryMonth == "") THEN
        OUTPUT "Select expiry month"
        FOCUS expiryMonth
        RETURN false
    ENDIF

    IF (expiryYear == "") THEN
        OUTPUT "Select expiry year"
        FOCUS expiryYear
        RETURN false
    ENDIF 

    IF (expiryYear < currentYear OR
       (expiryYear == currentYear AND expiryMonth < currentMonth) THEN
        OUTPUT "Card is expired"
        FOCUS expiryYear
        RETURN false
    ENDIF

    OUTPUT "Thank you for your submission!"
    RETURN true

END FUNCTION
*/

function validateForm()
{
    // Get input fields
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var postcode = document.getElementById("postcode");
    var email = document.getElementById("email");
    var cardNumber = document.getElementById("cardNumber");
    var cvv = document.getElementById("cvv");    
    var expiryMonth = document.getElementById("expiryMonth");
    var expiryYear = document.getElementById("expiryYear");

    // Get error display elements
    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var postcodeError = document.getElementById("postcodeError");
    var emailError = document.getElementById("emailError");
    var cardNumberError = document.getElementById("cardNumberError");
    var cvvError = document.getElementById("cvvError");
    var expiryMonthError = document.getElementById("expiryMonthError");
    var expiryYearError = document.getElementById("expiryYearError");

    // Get current date to validate expiry
    const now = new Date();
    const currentMonth = now.getMonth()+1;
    const currentYear = now.getFullYear();
    const expMonth = parseInt(expiryMonth.value);
    const expYear = parseInt(expiryYear.value);

    // First name must not be empty
    if (firstName.value == "")
    {
        firstNameError.style.color = "red"
        firstNameError.innerHTML = "Please enter your first name."
        firstName.focus();
        return false;
    }
    firstNameError.innerHTML = "";

    // Last name must not be empty
    if (lastName.value == "")
    {
        lastNameError.style.color = "red"
        lastNameError.innerHTML = "Please enter your last name."
        lastName.focus();
        return false;
    }
    lastNameError.innerHTML = "";

    // Postcode must be a number and exactly 4 digits
    if (isNaN(postcode.value))
    {
        postcodeError.style.color = "red"
        postcodeError.innerHTML = "Postcode must be numbers only.";
        postcode.focus();
        return false;
    }
    if (postcode.value.length != 4)
    {
        postcodeError.style.color = "red"
        postcodeError.innerHTML = "Postcode must be 4 digits.";
        postcode.focus();
        return false;
    }
    postcodeError.innerHTML = "";
    
    // Email must contain "@" and "." and be at least 8 characters long
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1)        
    {
        emailError.style.color = "red"
        emailError.innerHTML = "Invalid email. Please include '@' and '.'";
        email.focus();
        return false;
    }
    if (email.value.length < 8)
    {
        emailError.style.color = "red"
        emailError.innerHTML = "Email must be at least 8 characters.";
        email.focus();
        return false;
    }
    emailError.innerHTML = ""; 


    /*
    Credit card validation:
    - Card number must be numeric (checked using isNaN) and exactly 16 digits long.
    - CCV must be numeric (checked using isNaN) and exactly 3 digits.
    - Expiry month and year must be selected. 
    - Expiry date must not be in the past.
    - If incorrect, an error message shows and the form won't submit until fixed.
    */

    // Card number must be 16-digit numeric
    if (isNaN(cardNumber.value))
    {
        cardNumberError.style.color = "red"
        cardNumberError.innerHTML = "Card number must be numbers only.";
        cardNumber.focus();
        return false;
    }  
    if (cardNumber.value.length != 16)
    {
        cardNumberError.style.color = "red"
        cardNumberError.innerHTML = "Card number must have 16 digits."
        cardNumber.focus();
        return false;
    }    
    cardNumberError.innerHTML = "";

    // CCV must be 3-digit numeric
    if (isNaN(cvv.value))
    {
        cvvError.style.color = "red"
        cvvError.innerHTML = "CVV must be numbers only."
        return false;
    }    
    if (cvv.value.length != 3)
    {
        cvvError.style.color = "red"
        cvvError.innerHTML = "CVV must be 3 digits."
        cvv.focus();
        return false;
    }
    cvvError.innerHTML = "";    
    
    // Expiry month must be selected
    if (expiryMonth.value == "")
    {
        expiryMonthError.style.color = "red"
        expiryMonthError.textContent = "Select expiry month";
        expiryMonth.focus();
        return false;
    }
    expiryMonthError.textContent = "";

    // Expiry year must be selected
    if (expiryYear.value == "")
    {
        expiryYearError.style.color = "red"
        expiryYearError.textContent = "Select expiry year";
        expiryYear.focus();
        return false;
    }   
    expiryYearError.textContent = "";
    
    // Expiry date must not be in the past
    if (expYear < currentYear || (expYear == currentYear && expMonth < currentMonth)) 
    {
        expiryYearError.style.color = "red"
        expiryYearError.textContent = "Card is expired";
        expiryYear.focus();
        return false;
    }  
    expiryYearError.textContent = "";
  
    // If all validation passed, show confirmation alert
    alert("Thank you for your submission!");
    return true;
}

// Change background when input field is focused
function changeBgd(textField)
{
    textField.style.background = "lightyellow";
}

// Reset background when field is not focused
function resetBgd(textField)
{
    textField.style.background = "lightgrey";
}

// Prompt user to choose website and open selected site in a new window
function openWebsitePrompt() {
    var choice = "";

    // Keep prompting the user until they enter a valid choice: "1", "2", or "3"
    // The loop checks again if the choice is valid
    // If not valid, the prompt will show again, forcing user to enter a valid option
    while (choice !== "1" && choice !== "2" && choice !== "3") {
        choice = prompt("Choose a website to visit:\n1: Amazon\n2: JB Hi-Fi\n3: Officeworks");
    }

    // Once a valid choice is entered, assign the corresponding URL based on the choice
    var url = "";

    switch (choice) {
        case "1":
            url = "https://www.amazon.com.au";
            break;
        case "2":
            url = "https://www.jbhifi.com.au";
            break;
        case "3":
            url = "https://www.officeworks.com.au";
            break;
    }

    // Open the selected URL in a new window sized 800x800 pixels
    window.open(url, "_blank", "width=800,height=800");
}

// Open help webpage in a new window sized 500x500 pixels
function redirect() {

    window.open("../html/helpWebpagePart3.html", "_blank", "width=500,height=500, resizable =0");
    
}