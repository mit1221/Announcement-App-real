function loggedIn() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid; 
        console.log(name);
        document.getElementById('results').innerHTML = name;
    } else {
      console.log("No User");
    }
  });
}

function writeUserData() {
  data.set({
          where: $('#location').val(),
    });
    
  if(document.getElementById('Checkbox').checked) {
      navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
      data.set({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
   }
  }
    window.location = "indexv2.html";
}