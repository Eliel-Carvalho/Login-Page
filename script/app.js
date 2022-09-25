
 function handleCredentialResponse(response) {}
 window.onload = function () {
   google.accounts.id.initialize({
     client_id: "578226446005-qdn9eopajfh8qh0cqtri8ja012dpfi6r.apps.googleusercontent.com",
     callback: handleCredentialResponse
   });
   google.accounts.id.renderButton(
     document.getElementById("buttonDiv"),{ theme: "outline", size: "large"} 
   );
   google.accounts.id.prompt(); 
 }

let email = document.getElementById('email')
let password = document.getElementById('password')
let small = document.getElementsByName('TextPequeno')

let submit = document.getElementById('submit')
submit.addEventListener('click', (i) => {
   i.preventDefault()

   checkInputs()
})

function checkInputs(){

   if(email.value.length == 0){
      SetErroFor(email) 
      small[0].innerText = 'O E-mail é Obrigatorio'
      small[0].classList.add('erro-small')
   
    }else if(!validateEmail (email.value)){
       SetErroFor(email)
       small[0].innerText = 'E-mail Invalido'
       small[0].classList.add('erro-small')
    }else{
       SetSuccessFor(email)
    }
   
    if(password.value.length == 0){
       SetErroFor(password)
       small[1].innerText = 'A senha é Obrigatorio'
       small[1].classList.add('erro-small')
    } else{
      SetSuccessFor(password)
    }

}

function SetErroFor(input,){
   input.classList.add('erro')
}

function SetSuccessFor(input){
   input.classList.add('success')
}

function validateEmail(email) {
   var re = /\S+@\S+\.\S+/;
   return re.test(email);
}