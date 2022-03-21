const firebaseConfig = {
      apiKey: "AIzaSyDz7U-YjW4b6me2OcV2O4BsyqHwiGiTpcM",
      authDomain: "kwitter-d6942.firebaseapp.com",
      databaseURL: "https://kwitter-d6942-default-rtdb.firebaseio.com",
      projectId: "kwitter-d6942",
      storageBucket: "kwitter-d6942.appspot.com",
      messagingSenderId: "837806032183",
      appId: "1:837806032183:web:96f6c25c3a7f4f90d746b2"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-" + Room_names);
      row = "<div class='room_name' id="+Room_names +"onlick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}