
  function validateName() {
        var nameInput = document.querySelector("#name");
        var name = nameInput.value;
        var nameError = document.querySelector("#name-error");
        var nameErrorSvg = document.querySelector("#name-error-svg");
        var validImg = document.querySelector("#success-img");
        var errorImg = document.querySelector("#error-img");
        var valid = true;
        var regex = /^[a-zA-Z ]{2,30}$/;

        if(name == "") {
          nameError.textContent = "Rellene este campo";
          nameError.style.display = "block";
          nameErrorSvg.style.display = "block";
          nameInput.classList.add("error");
          nameInput.classList.remove("success");
          errorImg.style.display = "block";
          validImg.style.display = "none";
          valid = false;
        } else if(!regex.test(name)) {
          nameError.textContent = "No se pueden utilizar números y mínimo dos carateres";
          nameError.style.display = "block";
          nameErrorSvg.style.display = "block";
          nameInput.classList.add("error");
          nameInput.classList.remove("success");
          errorImg.style.display = "block";
          validImg.style.display = "none";
          valid = false;
        } else {
          nameError.style.display = "none";
          nameErrorSvg.style.display = "none";
          nameInput.classList.remove("error");
          errorImg.style.display = "none";
          validImg.style.display = "block";
          nameInput.classList.add("success");
          
        }

        return valid;
    }
  
  
  function validateEmail() {
        var emailInput = document.querySelector("#email");
        var email = emailInput.value;
        var emailError = document.querySelector("#email-error");
        var emailErrorSvg = document.querySelector("#email-error-svg");
        var emailSuccessImg = document.querySelector("#email-success-img");
        var emailErrorImg = document.querySelector("#email-error-img");
        var valid = true;
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email == "") {
            emailError.textContent = "Rellene este campo";
            emailError.style.display = "block";
            emailErrorSvg.style.display = "block";
            emailErrorImg.style.display = "block";
            emailSuccessImg.style.display = "none";
            emailInput.classList.add("error");
            emailInput.classList.remove("success");
            valid = false;
         } else if (!regex.test(email)) {
            emailError.textContent = "Email inválido";
            emailError.style.display = "block";
            emailErrorSvg.style.display = "block";
            emailErrorImg.style.display = "block";
            emailSuccessImg.style.display = "none";
            emailInput.classList.add("error");
            emailInput.classList.remove("success");
            valid = false;
        } else {
            emailError.style.display = "none";
            emailErrorSvg.style.display = "none";
            emailErrorImg.style.display = "none";
            emailSuccessImg.style.display = "block";
            emailInput.classList.remove("error");
            emailInput.classList.add("success");

        }

        return valid;
   }

  
  

  function validatePassword() {
        var passwordInput = document.querySelector("#password");
        var password = passwordInput.value;
        var passwordError = document.querySelector("#password-error");
        var passwordErrorSvg = document.querySelector("#password-error-svg");
        var passwordSuccessImg = document.querySelector("#password-success-img");
        var passwordErrorImg = document.querySelector("#password-error-img");
        var valid = true;

        if (password == "") {
            passwordError.textContent = "Rellene este campo";
            passwordError.style.display = "block";
            passwordErrorSvg.style.display = "block";
            passwordErrorImg.style.display = "block";
            passwordInput.classList.add("error");
            passwordInput.classList.remove("success");
            passwordSuccessImg.style.display = "none";
            valid = false;

        } else if (password.length < 8) {
            passwordError.textContent = "No debe tener más de 8 caracteres";
            passwordError.style.display = "block";
            passwordErrorSvg.style.display = "block";
            passwordErrorImg.style.display = "block";
            passwordSuccessImg.style.display = "none";
            passwordInput.classList.add("error");
            passwordInput.classList.remove("success");
            valid = false;
         } else {
            passwordError.style.display = "none";
            passwordErrorSvg.style.display = "none";
            passwordErrorImg.style.display = "none";
            passwordInput.classList.remove("error");
            passwordSuccessImg.style.display = "block";
            passwordInput.classList.add("success");
         }

         return valid;
  }
  


  function validatePasswordConfirm() {
          var passwordInput = document.querySelector("#password");
          var confirmPasswordInput = document.querySelector("#password_confirm");
          var confirmPassword = confirmPasswordInput.value;
          var confirmPasswordError = document.querySelector("#password_confirm-error");
          var confirmPasswordErrorSvg = document.querySelector("#password_confirm-error-svg");
          var confirmPasswordSuccessImg = document.querySelector("#password_confirm-success-img");
          var confirmPasswordErrorImg = document.querySelector("#password_confirm-error-img");
          var valid = true;

        if (confirmPassword == "") {
            confirmPasswordError.textContent = "Rellene este campo";
            confirmPasswordError.style.display = "block";
            confirmPasswordErrorSvg.style.display = "block";
            confirmPasswordErrorImg.style.display = "block";
            confirmPasswordInput.classList.add("error");
            confirmPasswordInput.classList.remove("success");
            confirmPasswordSuccessImg.style.display = "none";
            valid = false;
        } 
        else if(confirmPassword !== passwordInput.value) {
            confirmPasswordError.textContent = "Las contraseñas no coinciden";
            confirmPasswordError.style.display = "block";
            confirmPasswordErrorSvg.style.display = "block";
            confirmPasswordErrorImg.style.display = "block";
            confirmPasswordSuccessImg.style.display = "none";
            confirmPasswordInput.classList.add("error");
            confirmPasswordInput.classList.remove("success");
        
            valid = false;
        } else {
            confirmPasswordError.style.display = "none";
            confirmPasswordErrorSvg.style.display = "none";
            confirmPasswordInput.classList.remove("error");
            confirmPasswordSuccessImg.style.display = "block";
            confirmPasswordErrorImg.style.display = "none";
            confirmPasswordInput.classList.add("success");
        }
        return valid;
 }

 
  function handleFormSubmit(event) {
    event.preventDefault();
    
    var nameValid = validateName();
    var emailValid = validateEmail();
    var passwordValid = validatePassword();
    var confirmPasswordValid = validatePasswordConfirm();
    
    if (nameValid && emailValid && passwordValid && confirmPasswordValid) {
    alert("Inscripción correcta");
   
    }
    }

   