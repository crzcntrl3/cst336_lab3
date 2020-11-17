$(document).ready(function(){
    /*global $*/
    /*global fetch*/
    var usernameAvailable = false;
        
    //Displaying City from API after typing a zip code
    $("#zip").on("change",async function(){
        //alert($("#zip").val());
        let zipCode = $("#zip").val();
        let url = `https://itcdland.csumb.edu/~milara/ajax/cityInfoByZip.php?zip=${zipCode}`;
        let response = await fetch(url);
        let data = await response.json();
        //console.log(data)
        $("#city").html(data.city);
        $("#latitude").html(data.latitude);
        $("#longitude").html(data.longitude);
                
    });//zip
        
    $("#state").on("change", async function(){
        //alert($("#state").val()); 
        let state = $("#state").val();
        let url = `https://itcdland.csumb.edu/~milara/ajax/countyList.php?state=${state}`;
        let response = await fetch(url);
        let data = await response.json();
        //consol.log(data)
        $("#county").html("<option> Select one  </option>");
        for(let i = 0; i < data.length; i++){
            $("#county").append(`<option> ${data[i].county} </option>`);
        }
                
    });//state
        
    $("#username").on("change",async function(){
        //alert($("#username").val());
        let username = $("#username").val();
        let url = `https://cst336.herokuapp.com/projects/api/usernamesAPI.php?username=${username}`;
        let response = await fetch(url);
        let data = await response.json();
            
        if(data.available){
            $("#usernameError").html("Userame available!");
            $("#usernameError").css("color","green");
            usernameAvailable = true;
        } else {
            $("usernameError").html("Username not available!");
            $("#usernameError").css("color","red");
            usernameAvailable = false;
        }
        
    });//username
        
    $("#signupForm").on("submit", function(e) {
        //alert("Submitting form...");
        if(!isFormValid()){
            e.preventDefault();
        }
            
    });
        
    function isFormValid(){
        var isValid = true;
        if(!usernameAvailable) {
            isValid = false;
        }
            
        if ($("#username").val().length == 0){
            isValid = false;
            $("#usernameError").html("Username is required");
        }
            
        if ($("$password").val() != $("#passwordAgain").val()){
            $("#passwordAgainError").html("Password Mismatch!");
            isValid = false;
        }
            
        if ($("#password").val().length < 6){
            $("#passwordLengthError").html("Minimum of 6 characters for password! Try again!");
            $("#passwordLengthError").css("color","red");
            isValid = false;
        }
        return isValid;
    }
    
});