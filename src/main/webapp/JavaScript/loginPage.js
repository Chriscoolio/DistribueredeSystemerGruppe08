 var path = 'http://localhost:8080/mavenproject1/rest';
  
  function login(){
  var person={
        "username":document.getElementById("usernameField").value,
        "password":document.getElementById("pswField").value
    };

  
    $.ajax({
        url: path+'/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(person),
        success: function(response) {
            var login = response.Valid;
            // Login true
            if (login === true){
            alert('ok');
            location.href = 'index.html';
            }
            // Login false
            else {
                     alert('close');
            }
        },
        error: function(response){
            
            alert(response.Valid);
        }
    });

    return false;
}
