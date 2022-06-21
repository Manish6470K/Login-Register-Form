<?php
include 'connect.php';
$meta = $_POST['meta']; 
if(isset($meta) && $meta=="register"){
    $Fname = $_POST['Fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    

    //upload.php
    $test = explode('.', $_FILES["image"]["name"]);
    $ext = end($test);
    $name = rand(100, 99999) . '.' . $ext;
    $location = '../upload/' . $name;
    move_uploaded_file($_FILES["image"]["tmp_name"], $location);


    $query = "INSERT INTO register(fname, lname, email, pass, image) VALUES('$Fname','$lname','$email','$pass','$name')";
    $res = mysqli_query($con, $query);
    if($res){
        echo "11";
    }
    else{
        echo "00";
    }
}
?>