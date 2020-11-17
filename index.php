<!DOCTYPE html>
<html>
    <head>
        <title> Sign Up Page </title>
        <link href="css/styles.css" rel="stylesheet" type="text/css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="js/main.js" type="text/javascript"></script>
    </head>
    <body>
        <h1> Sign Up </h1>
        
        <form id="signupForm" action="welcome.html">
            First Name: <input type="text" name="fName"><br>
            Last Name:  <input type="text" name="lName"><br>
            Gender:     <input type="radio" name="gender" value="m"> Male<br>
                        <input type="radio" name="gender" value="f"> Female<br>
        
            Zip Code:   <input type="text" id="zip" name="zip"><br>
            City:       <span id="city"></span><br>
            Latitude:   <span id="latitude"></span><br>
            Longitude:  <span id="longitude"></span><br><br>
        
            State:
            <select id="state" name="state">
                <option> Select One </option>
                <option value="ca"> California </option>
                <option value="ny"> New York   </option>
                <option value="tx"> Texas      </option>
            </select><br>
        
            Select a County:  <select id="county"></select><br>
        
            Desired Username: <input type="text" id="username" name="username"><br>
                              <span id="usernameError"></span><br>
            Password:         <input type="password" id="password" name="password"><br>
            Password Again:   <input type="password" id="passwordAgain">
                              <span id="passwordAgainError"></span> <br /><br>
                              <span id="passwordLengthError"></span> <br /><br>
        
            <input type="submit" value="Sign up!">
            
        </form>
        
        <footer>
            <hr>
            CST336 Internet Programming. 2020&copy; Cruz <br />
            <strong>Disclaimer:</strong> The information in this webpage is fictitious.<br />
            It is used for academic purposes only.
            <br><br>
            <figure>
                <img src="img/CSUMB_Logo_Black.png" alt="CSUMB Logo" class="footer-logo" />
            </figure>
        </footer>
    </body>

</html>