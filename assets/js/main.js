// Create an HTML page with two buttons that argue with each other. When one button is clicked,
// the text "I'm right" should be placed next to it.
// When the other button is clicked, the text is replaced with, "No, I'm right!"
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
button1.onclick = function changetext() {
    button1.innerHTML = "I am right!!";
    button2.innerHTML = "No! I am right!!";
};

button2.onclick = function changeanothertext() {
    button2.innerHTML = "I am right!!";
    button1.innerHTML = "No! I am right!!!";
};

// Create an HTML page with a large element on the page that says "Don't hover over me" inside of it.
// When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"
function alertthemsg() {
    alert("DO YOU EVEN ENGLISH BRO?")
};

// Create an HTML page with javascript that listens for a keypress.
// When the user presses that key, the text of the H1 should show the value of the key they have pressed.
// Example: If the user presses "J", the text inside the H1 should be "J".
//
//
$('#h1text').click(function (e) {
  $("#h1TextChange").text("");
});

$('#h1text').keypress(function (e) {
  $("#h1TextChange").append(e["key"]);
});


// Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
// checks that the password is 12345678
// checks that the username contains at least one number
// if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1.


var correctPassword = "12345678";
var button = document.getElementById("submit");
var userInputPassword = document.getElementById("password").value;

button.onclick = function checkCredentials() {
    var userInputPassword = document.getElementById("password").value;
    var userName = document.getElementById("username").value;
    if (userInputPassword == correctPassword && /\d/.test(userName)) {
        document.getElementById("success").innerHTML = '<div class="alert alert-success" role="alert">YOU SHALL PASS</div>';
    } else {
        document.getElementById("alert").innerHTML = "<img src='https://media.giphy.com/media/njYrp176NQsHS/giphy.gif'></img>";
    }

};
