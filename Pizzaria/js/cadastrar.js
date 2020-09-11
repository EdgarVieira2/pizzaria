function validar() {

    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var telefone = document.getElementById("telefone");
    var cep = document.getElementById("cep");
    var endereco = document.getElementById("endereco");


    if (nome.value == "") {
      alert("Nome não informado");


      nome.focus();

      return;
    }
    if (sobrenome.value == "") {
      alert("Sobrenome não informado");
      sobrenome.focus();
      return;
    }
    if (email.value == "") {
      alert("E-mail não informado");
      email.focus();
      return;
    }
    if (senha.value == "") {
      alert("Senha não informada");
      senha.focus();
      return;
    }
    if (telefone.value == "") {
      alert("Telefone não informado");
      telefone.focus();
      return;
    }
    if (cep.value == "") {
      alert("CEP não informado");
      cep.focus();
      return;
    }
    if (endereco.value == "") {
      alert("Endereço não informado");
      endereco.focus();
      return;
    }
    alert("Formulário enviado!");
    window.location.href = "home_page.html"

}