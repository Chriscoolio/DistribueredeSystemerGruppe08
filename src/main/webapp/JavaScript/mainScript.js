 var path = 'http://localhost:8080/mavenproject1/rest';
  

function setframe(url) {
	document.all.frame.src=url;
}

//    
//function changePass(){
//    //insert path for objects
//    var changePass={
//    "student":studentID,
//    "oldPass":
//    "newPass": }
//;
//    
//    $.ajax({
//        url: path+'/changePass',
//        type = 'POST',
//        contentType: 'application/json',
//        data: JSON.stringify(changePass),
//        Success: function(response){
//        var send = response.Valid;
//        if (send === true){
//            alert('Passwrod change success');
//            location.href = 'loginPage.html'
//            }
//            // Login false
//            else {
//                     alert('Wrong student ID or Password');
//                     return false;
//            }
//    },
//    Error: function(){
//        alert("Error");
//    }
//}    
//            );
//    
//}
//
//function sendGameInfo(){
//    var Info={
//   "player":,
//   "word":,
//   "attempt":,
//   "time":,
//   "date":
//    };
//   $.ajax({
//        url: path+'/sendInfo',
//        type = 'POST',
//        contentType: 'application/json',
//        data: JSON.stringify(Info),
//        Success: function(response){
//        var send = response.Valid;
//        if (send === true){
//            alert('Score saved');
//            location.href = 'loginPage.html'
//            }
//            // connection error
//            else {
//                     alert('Database connection Error, try again!');
//                     return false;
//            }
//    },
//    Error: function(){
//        alert("Server connection Error, try again!");
//    }
//}    
//            );
//    
//    }
//
//function sendAttempt(){
//    var Guess=(
//            "letter":);
//   $.ajax({
//        url: path+'/sendInfo',
//        type = 'POST',
//        contentType: 'application/json',
//        data: JSON.stringify(Guess),
//        Success: function(response){
//        var send = response.Valid;
//        if (send === true){
//            alert(correct);
//            location.href = 'loginPage.html'
//            }
//            // connection error
//            else {
//                     alert('Wrong Guess!');
//                     return false;
//            }
//    },
//    Error: function(){
//        alert("Server connection Error, try again!");
//    }
//}    
//            );    
//    
//}

