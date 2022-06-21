// Feedback Form Submit Code 
$('#Submit').click(function(){
    var Fname = $('#fname').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var pass = $('#pass').val();
    var image = $('#image').val();
    var meta = "register";
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(Fname==""){
        $('#errorName').html("Please fill this field");
    } 
    if(lname==""){
        $('#errorlName').html("Please fill this field");
    } 
    if(email==""){
        $('#errorEmail').html("Please fill this field");
    } 
    if(email!=""){
        if(!email.match(filter)){
            $('#errorEmail').html("Please provide a valid email address");
        }
    }
    if(pass==""){
        $('#errorPass').html("Please fill this field");
    } 
    if(image==""){
        $('#errorImage').html("Please choose an image");
    } 
    

    if(Fname!="" && lname!="" && email!="" && email.match(filter) && pass!="" && image!=""){
        var name = document.getElementById("image").files[0].name;
        var form_data = new FormData();
        var ext = name.split('.').pop().toLowerCase();
        if(jQuery.inArray(ext, ['gif','png','jpg','jpeg']) == -1) 
        {
            alert("Invalid Image File");
        }
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("image").files[0]);
        form_data.append("image", document.getElementById('image').files[0]);
        form_data.append('Fname',Fname);
        form_data.append('lname',lname);
        form_data.append('email',email);
        form_data.append('pass',pass);
        form_data.append('meta',meta);
        $.ajax({
            type:'POST',
            url:'php/register.php',
            contentType: false,
            cache: false,
            processData: false,
            data: form_data,
            success: function(result){
                console.log(result);
                emptyAfterSubmitFeedback();
                if(result=='11'){
                    $('#message').html("<h1 class='text-success text-center'>Registration Done</h1>")
                    $('#exampleModal').modal('show');
                }
                if(result=='00'){
                    $('#message').html("<h1 class='text-danger text-center'>Registration Fail</h1>")
                    $('#exampleModal').modal('show');
                }
            }
        });
    }
});


$('#fname').keyup(function(){
    $('#errorName').html("");
}); 

$('#lname').keyup(function(){
    $('#errorlName').html("");
}); 
$('#email').keyup(function(){
    $('#errorEmail').html("");
}); 
$('#pass').keyup(function(){
    $('#errorPass').html("");
}); 

function emptyAfterSubmitFeedback(){
    $('#fname').val("");
    $('#lname').val("");
    $('#email').val("");
    $('#pass').val("");
    $('#image').val("");
}


$('#login').click(function(){
    var uname = $('#username').val();
    var pass = $('#password').val();
    // var meta = "login";
    if(uname==""){
        $('#unameError').html("Please fill this field");       
    }
    if(pass==""){
        $('#PassError').html("Please fill this field");       
    }
    if(uname!="" && pass!=""){
        $.ajax({
            type:'POST',
            url:'php/login.php',
            data: {uname:uname, pass:pass},
            success: function(result){
                console.log(result);
                if(result=='Done'){
                    window.location.href = "admin.php";
                }
                if(result=='Fail'){
                    $('#message').html("<h6 class='text-danger text-center'>Wrong Username or Password</h6>")
                    $('#exampleModal').modal('show');
                }
            }
        });     
    } 
    
});