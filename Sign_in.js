function signInWithEmailAndPassword() 
{
  
    var email = $('#field2').val();
    var password = $('#field4').val();
    
   firebase.auth().signInWithEmailAndPassword(email, password)
   .then(function(firebaseUser) {
      alert('Successfully Signed In');
      console.log(firebaseUser);
   })
   
   .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
          alert('Wrong password');
    } else if (errorCode === 'auth/invalid-email') {
          alert('Invalid email');
    } else if (errorCode === 'auth/user-not-found') {
          alert('No user found');
    }
    console.log(error);
  });
  
    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  window.location = "Enter_Info_Page.html";
  }
});
}

function signInWithPopup() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log(user);
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log(error);
    });
    
      firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  window.location = "Enter_Info_Page.html";
  }
});
};
            
function FBsignInWithPopup() { 
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  console.log(user);
  }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  console.log(error);
  });   
  
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  window.location = "Enter_Info_Page.html";
  }
});
}    