const firebaseConfig = {
      apiKey: "AIzaSyDfOr5Wb2vDaQQl7-nqtO8vGqGuVKUPjXU",
      authDomain: "kwitter-160d4.firebaseapp.com",
      databaseURL: "https://kwitter-160d4-default-rtdb.firebaseio.com",
      projectId: "kwitter-160d4",
      storageBucket: "kwitter-160d4.appspot.com",
      messagingSenderId: "223085519079",
      appId: "1:223085519079:web:5d094463da4039b40fc242"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML= "Welcome -"+ user_name+"!";

      
function addroom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name-"+ Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'> #"+Room_names+" </div><hr>";
      document.getElementById("output").innerHTML+= row;
      });});}
getData();


function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}