function entrar () {

    var email = document.getElementById("login");
    var senha = document.getElementById("password");
    


     if (email.value == "") {
      alert("Informe o E-mail");


      email.focus();

      return;
     }
     if (senha.value == "") {
      alert("Informe a senha");

      password.focus();

      return;
     }
    
     alert("Parabens voce esta logado haha!");
     
     window.location.assign("home_page.html");
    

}