let emailId = document.querySelector('#emailId'); 
function validation(email){
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailFormat)){
        alert("valid Email")
    }else{
        document.querySelector('.btn-error').style.display = 'block';
        document.querySelector('.validation').style.display = 'block';
    }
}

document.querySelector('.btn-arrow').onclick = function(){
    validation(emailId);
}
