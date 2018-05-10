 var path = 'http://localhost:8080/mavenproject1/rest';
  

function scores() {
 
    $.ajax({
        url: path+'/service/score',
        type: 'GET',
        dataType: 'json',
        data: JSON.stringify(scores),
        Success: function(scores){
            console.log(scores);
            
         },
        Error: function(error){
            alert('Something went wrong!');
            
         }

     });    
}
