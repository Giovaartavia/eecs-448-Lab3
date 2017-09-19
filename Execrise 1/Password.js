function compare(){
    let goodPW = document.getElementById("originalPassword").value;
    let checkPW = document.getElementById("checkPassword").value;

    if(goodPW.length < 8 || checkPW.length < 8){
        alert("ERROR: Given Password is less than 8 characters long.");
    }
    else if(goodPW != checkPW){
        alert("ERROR: Passwords do not match.");
    }
    else{
        alert("Success!");
    }
}