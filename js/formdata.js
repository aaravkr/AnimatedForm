{

//    function myFunction() {
//        var x = document.getElementById("q1");
//        var z='';
//        
//       
//        z+= x.value;
//        console.log(z);
//    }

//  function myFunction1(){
//    var y = document.querySelector('.form-field2');
//    console.log(y.value);
//}

    var submit = document.getElementById('fs-submit');

    submit.addEventListener('click', function(e){
        e.preventDefault();
        
        var name = document.getElementById('q1');
        var email = document.getElementById('q2');
        var gender =  document.querySelector('input[name="q3"]:checked').value;
        
        console.log(name);
        console.log(name.value);
        
         console.log(email);
        console.log(email.value);
        
         console.log(gender);
     
        
    })

}
