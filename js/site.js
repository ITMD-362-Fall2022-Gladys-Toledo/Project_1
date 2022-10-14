function checkForm() {
    var firstName = document.forms["mailingListForm"]["first_name"].value
    var lastName = document.forms["mailingListForm"]["last_name"].value
    var email = document.forms["mailingListForm"]["email_data"].value
    if ((!firstName) || (!lastName) || (!email)) {
        alert("Please complete all the necessary fields!");
        return false;
    }
    else {
        alert("You have successfully registered for our mailing list!")
    }
}