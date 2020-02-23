//var form = document.getElementsByName("form");
//function handleForm(event) { event.preventDefault(); } 
//form.addEventListener('submit', handleForm);


form.addEventListener("focusout", () => validateForm());

function validateForm(){
    
	var first_name = document.forms["form"]["first_name"].value;
	var last_name = document.forms["form"]["last_name"].value;
	var email = document.forms["form"]["email"].value;
	var password = document.forms["form"]["password"].value;
    var confirm_password = document.forms["form"]["confirm_password"].value;
    var regex_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var regex_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

	if (first_name.length<1) {
        document.getElementById('error-first_name').innerHTML = "This field is required!";
    } 
    else {
        document.getElementById('error-first_name').innerHTML = "";
    }

    if (last_name.length<1) {
        document.getElementById('error-last_name').innerHTML = "This field is required!";
    }
    else {
        document.getElementById('error-last_name').innerHTML = "";
    }


    if (email.length<1) {
        document.getElementById('error-email').innerHTML = "This field is required!";
    }
    else {
        document.getElementById('error-email').innerHTML = "";
        if (!regex_email.test(email)) {
            document.getElementById('error-email').innerHTML = "Please, use valid email!";
        }
        else {
            document.getElementById('error-email').innerHTML = "";
        }
    }
    

    if (password.length<1) {
        console.log("here");
        document.getElementById('error-password').innerHTML = "This field is required!";
    } 
    else {
        document.getElementById('error-password').innerHTML = "";
        if (!regex_password.test(password)) {
            document.getElementById('error-password').innerHTML = "The password length should be between 8-32 and should contain at least one numeric digit, one uppercase and one lowercase letter";
        }
        else {
            document.getElementById('error-password').innertHTML = "";
        }
    
    }

    if (confirm_password.length<1) {
        
        document.getElementById('error-confirm_password').innerHTML = "This field is required!";
    }
    else {
        document.getElementById('error-confirm_password').innerHTML = "";
        if (password != confirm_password) {
            document.getElementById('error-confirm_password').innerHTML = "The passwords does not match";   
        }
        else {
            document.getElementById('error-confirm_password').innerHTML = "";
        }
    
    }



    if(first_name.length<1 || last_name.length<1 || email.length<1 || password.length<1 || confirm_password.length<1 || !regex_email.test(email) || !regex_password.test(password) || password != confirm_password){
       	return false;
    }            
}   