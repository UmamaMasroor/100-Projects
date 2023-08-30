function validation() {
        if (document.Formfill.user.value == "") {
                document.querySelector("#result").innerHTML = "Enter Username*"
                return false;
        }
        else if (document.Formfill.user.value.length < 6) {
                document.querySelector("#result").innerHTML = "Atleast six letters"
                return false;
        }
        else if (document.Formfill.Email.value == "") {
                document.querySelector("#result").innerHTML = "Enter your email*"
                return false;
        }
        else if (document.Formfill.Password.value == "") {
                document.querySelector("#result").innerHTML = "Enter password*"
                return false;
        }
        else if (document.Formfill.Password.value.length < 6) {
                document.querySelector("#result").innerHTML = "Password must be 6-digits*"
                return false;
        }
        else if (document.Formfill.cPassword.value == "") {
                document.querySelector("#result").innerHTML = "Enter confirm password"
                return false;
        }
        else if (document.Formfill.Password.value !== document.Formfill.cPassword.value) {
                document.querySelector("#result").innerHTML = "Password does'n matched*"
                return false;
        }
}



