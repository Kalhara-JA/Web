function validateUserId(userId) {
    if (userId.length == 0) {
        document.getElementById("#1").style.borderBottom = "red 3px solid";
        document.getElementById("userId").focus();
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        const text = document.getElementById("#1label");
        text.insertAdjacentHTML("beforeend", '<span id="#error" class="error-alert">    *User Id is required</span>');
        return false;
    } else if (userId.length < 5) {
        document.getElementById("#1").style.borderBottom = "red 3px solid";
        document.getElementById("userId").focus();
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        const text = document.getElementById("#1label");
        text.insertAdjacentHTML("beforeend", '<span id="#error" class="error-alert">    *User Id must be at least 5 characters</span>');
        return false;
    } else if (userId.length > 12) {
        document.getElementById("#1").style.borderBottom = "red 3px solid";
        document.getElementById("userId").focus();
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        const text = document.getElementById("#1label");
        text.insertAdjacentHTML("beforeend", '<span id="#error" class="error-alert">    *User Id must be at most 12 characters</span>');
        return false;
    } else {
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        document.getElementById("#1").style.borderBottom = "#1f286a 3px solid";
        return true;
    }
}

function validatePassword(password) {
    if (password.length == 0) {
        document.getElementById("#2").style.borderBottom = "red 3px solid";
        document.getElementById("password").focus();
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        const text = document.getElementById("#2label");
        text.insertAdjacentHTML("beforeend", '<span id="#error" class="error-alert">    *Password is required</span>');
        return false;
    } else if (password.length < 7) {
        document.getElementById("#2").style.borderBottom = "red 3px solid";
        document.getElementById("password").focus();
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        const text = document.getElementById("#2label");
        text.insertAdjacentHTML("beforeend", '<span id="#error" class="error-alert">    *Password must be at least 7 characters</span>');
        return false;
    } else if (password.length > 12) {
        document.getElementById("#2").style.borderBottom = "red 3px solid";
        document.getElementById("password").focus();
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        const text = document.getElementById("#2label");
        text.insertAdjacentHTML("beforeend", '<span id="#error" class="error-alert">    *Password must be at most 12 characters</span>');
        return false;
    } else {
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        document.getElementById("#2").style.borderBottom = "#1f286a 3px solid";
        return true;
    }
}

function validateName(name) {
    var nameRegex = /^[A-Za-z]+$/;
    if (nameRegex.test(name)) {
        document.getElementById("#3").style.borderBottom = "#1f286a 3px solid";
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        document.getElementById("address").focus();
        return true;
    } else {
        document.getElementById("#3").style.borderBottom = "red 3px solid";
        document.getElementById("name").focus();
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        const text = document.getElementById("#3label");
        text.insertAdjacentHTML("beforeend", '<span id="#error" class="error-alert">    *Name must contain only letters</span>');
        return false;
    }
}

function validateCountry(country) {
    if (country == "Default") {
        document.getElementById("#5").style.borderBottom = "red 3px solid";
        document.getElementById("country").focus();
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        const text = document.getElementById("#5label");
        text.insertAdjacentHTML("beforeend", '<span id="#error" class="error-alert">    *Country is required</span>');
        return false;
    } else {
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        document.getElementById("#5").style.borderBottom = "#1f286a 3px solid";
        return true;
    }
}

function validateEmail(email) {
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (emailRegex.test(email)) {
        document.getElementById("#7").style.borderBottom = "#1f286a 3px solid";
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        return true;
    } else {
        document.getElementById("#7").style.borderBottom = "red 3px solid";
        document.getElementById("email").focus();
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        const text = document.getElementById("#7label");
        text.insertAdjacentHTML("beforeend", '<span id="#error" class="error-alert">    *Email must be in a valid format</span>');
        return false;
    }
}

function validateSex(sex) {
    x = 0;
    if (sex[0].checked) {
        x++;
    }
    if (sex[1].checked) {
        x++;
    }
    if (x == 0) {
        document.getElementById("#8").style.borderBottom = "red 3px solid";
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        const text = document.getElementById("#8label");
        text.insertAdjacentHTML("beforeend", '<span id="#error" class="error-alert">    *Please select gender</span>');
        return false;
    } else {
        document.getElementById("#8").style.borderBottom = "#1f286a 3px solid";
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        return true;
    }
}
function validateLanguage(language) {
    x = 0
    if (language[0].checked) {
        x++;
    }
    if (language[1].checked) {
        x++;
    }
    if (x == 0) {
        document.getElementById("#9").style.borderBottom = "red 3px solid";
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        const text = document.getElementById("#9label");
        text.insertAdjacentHTML("beforeend", '<span id="#error" class="error-alert"> <br>   *Please select language</span>');
        return false;
    } else {
        document.getElementById("#9").style.borderBottom = "#1f286a 3px solid";
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        return true;
    }
}

function validateForm(form) {
    var userId = form.userId.value;
    var password = form.password.value;
    var name = form.name.value;
    var country = form.country.value;
    var email = form.email.value;
    var sex = form.sex;
    var language = form.language;

    if (validateUserId(userId) == true) {
        if (validatePassword(password) == true) {
            if (validateName(name) == true) {
                if (validateCountry(country) == true) {
                    if (validateEmail(email) == true) {
                        if (validateSex(sex) == true) {
                            if (validateLanguage(language) == true) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
