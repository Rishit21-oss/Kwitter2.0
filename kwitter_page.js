const firebaseConfig = {
      apiKey: "AIzaSyChBfT-BYJvU1OkE35utVoWGTKyhuN-Qx0",
      authDomain: "kwitter-new-8fe8c.firebaseapp.com",
      databaseURL: "https://kwitter-new-8fe8c-default-rtdb.firebaseio.com",
      projectId: "kwitter-new-8fe8c",
      storageBucket: "kwitter-new-8fe8c.appspot.com",
      messagingSenderId: "192798263165",
      appId: "1:192798263165:web:ae5cdbedeac9956916ae14"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name= localStorage.getItem("user_name");
     room_name= localStorage.getItem("room_name");

     function send(){
           msg= document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
                 name: user_name,
                 message: msg,
                 like:0
           });

           document.getElementById("msg").value="";
     }




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(message_data);
      name= message_data['name'];
      message= message_data['message'];
      like= message_data['like'];
      row= "<h4>"+name+"<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>"+message+"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updatelike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
      document.getElementById("output").innerHTML += row;  

//End code
      } });  }); }
getData();

function updatelike(message_id){

      button_id= message_id;
      likes=document.getElementById(button_id).value;
      likes_in_number= Number(likes)+1;
      console.log(likes_in_number);

      firebase.database().ref(room_name).child(message_id).update({
            like: likes_in_number
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}