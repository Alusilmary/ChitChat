
function addUser() {

  user_name = document.getElementById("user_name").value;
  //Obtem o nome do usuário da caixa de entrada e o armazena dentro de uma variável.

  localStorage.setItem("user_name", user_name);
  //Armazena o valor da variável user_name no armazenamento local com a chave user_name
  
    window.location = "chitchat_room.html";
  //Redireciona os usuários para kwitter_room.html  
}

