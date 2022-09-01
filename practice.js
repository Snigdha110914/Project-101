var firebaseConfig = {
    apiKey: "AIzaSyDky9mBPUIIGtEwtxNWK6rs7qdjv70ps-Y",
    authDomain: "social-website-fb509.firebaseapp.com",
    databaseURL: "https://social-website-fb509-default-rtdb.firebaseio.com",
    projectId: "social-website-fb509",
    storageBucket: "social-website-fb509.appspot.com",
    messagingSenderId: "741189040152",
    appId: "1:741189040152:web:b7e23e72bd8dd5a535eb6d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
       purpose : "adding user"
    })

  }