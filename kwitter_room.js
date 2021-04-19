

  var firebaseConfig = {
    apiKey: "AIzaSyB0oW4gegFYU7RFDYohdeyz16yaq-dLRio",
    authDomain: "kwitter-2-16cb8.firebaseapp.com",
    databaseURL: "https://kwitter-2-16cb8-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-16cb8",
    storageBucket: "kwitter-2-16cb8.appspot.com",
    messagingSenderId: "489513227165",
    appId: "1:489513227165:web:790b61f096e6c79eedd574"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    
      User_name = localStorage.getItem("user_name")
      document.getElementById("user_name").innerHTML = "Welcome " + User_name + "!";

    function addRoom() {
      Room_name = document.getElementById("room_name").value;
      console.log(Room_name)
      firebase.database().ref("/").child(Room_name).update({
        purpose : "Adding Room Name"
        
      });
      localStorage.setItem("room_name", Room_name)
     
    }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names)
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      });});}
getData();
function redirectToRoomName(name) {
  localStorage.setItem("room_name", name)
  window.location = "kwitter_page.html"
}
function logOut() {
    localStorage.removeItem("room_name")
    localStorage.removeItem("user_name")
    window.location = "index.html"
}

