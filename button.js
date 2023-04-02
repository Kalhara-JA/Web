const state = "false";

function loggingState(button){
    if(button.value == "true"){
        location.href = "login.html";
    }
    else{
        document.getElementById("#stateButton").innerHTML = `<span>Logout<span>`;
        document.getElementById("#stateButton").value = "true";
        state="true";
    }
}
