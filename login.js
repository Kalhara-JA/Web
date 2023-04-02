function validateUserId(userId) {
    var trueusername = "username";
    if (userId == trueusername) {
        document.getElementById("#1").style.borderBottom = "#1f286a 3px solid";
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        return true;
    } else {
        document.getElementById("#1").style.borderBottom = "red 3px solid";
        document.getElementById("userId").focus();
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        const text = document.getElementById("#1label");
        text.insertAdjacentHTML("beforeend", '<span id="#error" class="error-alert">    *Enter username as ~ username ~</span>');
        return false;
    }
}

function validatePassword(password) {
    var truepassword = "password";
    if (password == truepassword) {
        document.getElementById("#2").style.borderBottom = "#1f286a 3px solid";
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        return true;
    } else {
        document.getElementById("#2").style.borderBottom = "red 3px solid";
        document.getElementById("password").focus();
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        const text = document.getElementById("#2label");
        text.insertAdjacentHTML("beforeend", '<span id="#error" class="error-alert">    *Enter password as ~ password ~</span>');
        return false;
    }
}

function validateUserType(usertype) {
    if (usertype == "Default") {
        document.getElementById("#5").style.borderBottom = "red 3px solid";
        document.getElementById("usertype").focus();
        const span = document.getElementById("#error");
        if (span) {
            span.remove();
        }
        const text = document.getElementById("#5label");
        text.insertAdjacentHTML("beforeend", '<span id="#error" class="error-alert">    *Select a User Type</span>');
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
function validateForm(form) {
    var userId = form.userId.value;
    var password = form.password.value;
    var usertype = form.usertype.value;

    if (validateUserType(usertype) == true) {
        if (validateUserId(userId) == true) {
            if (validatePassword(password) == true) {
                document.getElementById("#stateButton").innerHTML = `<span>Logout<span>`;
                return true;
            }
        }
    }
    return false;
}

function resetForm(form) {
    const span = document.getElementById("#error");
    document.getElementById("#1").style.borderBottom = "#d5e3f7 3px solid";
    document.getElementById("#2").style.borderBottom = "#d5e3f7 3px solid";
    document.getElementById("#5").style.borderBottom = "#d5e3f7 3px solid";
    if (span) {
        span.remove();
    }
}
