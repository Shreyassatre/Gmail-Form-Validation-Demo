const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// const fnameValue2 = document.getElementById('fname').value;

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


function sendData(sRate, count){
	if(sRate === count){
		swal("welcome "+fname.value, "Registration Successfull", "success");
			
		setTimeout(function(){ location.href = "gmail.html"; }, 4000);
	}
}

function successMsg(){
    let formCon = document.getElementsByClassName('form_control');
    var count = formCon.length - 1;
    for(var i=0 ; i<formCon.length; i++){
       if(formCon[i].className === 'form_control success'){
       var sRate = 0 + i;
       sendData(sRate, count);
       }else{
           return false;
       }
   }
}

function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();


	var user = ["satreshreyas","shreyassatre"];


	if(fnameValue === '') {
		setErrorFor(fname, 'Enter fisrt name');
	}
	else if(!isName(fnameValue)){
		setErrorFor(fname, 'Invalid First name');
	} 
	else {
		setSuccessFor(fname);
	}

	if(lnameValue === '') {
		setErrorFor(lname, 'Enter last name');
	}
	else if(!isName(lnameValue)){
		setErrorFor(lname, 'Invalid Last name');
	}  
	else {
		setSuccessFor(lname);
	}
	
	
	if(usernameValue === '') {
		setErrorFor(username, 'Choose a Gmail address');
	} 
	else if (!isUsernameLen(usernameValue)) {
		setErrorFor(username, 'Sorry, username must be between 6 and 30 characters long.');
	} 
	else if (!isUsername(usernameValue)) {
		setErrorFor(username, 'Sorry, only letters (a-z), numbers (0-9), and periods (.) are allowed.');
	} 
	else {
		setSuccessFor(username);
	}
		
	for(var i = 0; i<user.length; i++)
	{
		if(usernameValue === user[i]){
			setErrorFor(username, 'That usrename is alrady taken. Try another. ');
		}
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Enter Password');
	} 
	else if (!isPass(passwordValue)) {
		setErrorFor(password, 'Use 8 or more Characters.');
	}
	else if (!isStrongestPass(passwordValue)) {
		setErrorFor(password, 'Use at least 1 number & 1 symbol.');
	}  
	else {
		setSuccessFor(password);
	}
	

	if(!isPass(passwordValue)) {
		document.getElementById("password2").value = "";
		return false;
	}
	else if(!isStrongestPass(passwordValue)) {
		document.getElementById("password2").value = "";
		return false;
	}
	else if(password2Value === ''){
		setErrorFor(password2, 'Confirm your password');
	} 
	else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
    }
    
    successMsg();
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form_control error ex-mr';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form_control success ex-mr';
}

function isName(name){
	return /^[a-zA-Z]{2,10}$/.test(name);
}

function isUsername(username){
	return /^[A-Za-z0-9._]{6,30}$/.test(username);
}

function isUsernameLen(username){
	return /^[\w@#$%^&*._]{6,30}$/.test(username);
}

function isPass(pass){
	return /^[\w!@#$%^&*]{8,}$/.test(pass);
}

function isStrongestPass(pass){
	return /^(?=.*[0-9])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(pass);
}
