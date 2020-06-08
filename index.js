firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

function login() {
  var userName = document.getElementById("email").value;
  var password = document.getElementById("pass").value;

  window.alert(userName + " " + password);
}
