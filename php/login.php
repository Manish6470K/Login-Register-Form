<?php
include 'connect.php';
// $meta = $_POST['meta']; 
// if(isset($meta) && $meta=="login"){
    $uname = $_POST['uname'];
    $pass = $_POST['pass'];

    $query = "SELECT * FROM register WHERE email='$uname' and pass='$pass'";
    $fire = mysqli_query($con, $query);
    $num = mysqli_num_rows($fire);
    if($num > 0){
        $data = mysqli_fetch_array($fire);
        session_start();
        $_SESSION['id']=$data['id'];
        echo "Done";
    }
    else{
        echo "Fail";
    }    
// }
?>