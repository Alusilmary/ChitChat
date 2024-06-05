
//ADICIONE SEUS LINKS DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyAUzquyqzAa8TPzqtTiRP6ToaOzQMJGEbY",
  authDomain: "kwitterbd-97d32.firebaseapp.com",
  databaseURL: "https://kwitterbd-97d32-default-rtdb.firebaseio.com",
  projectId: "kwitterbd-97d32",
  storageBucket: "kwitterbd-97d32.appspot.com",
  messagingSenderId: "531840679417",
  appId: "1:531840679417:web:7687cabcff355907c4d128"
};
//Inicialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  //obtem o nome da sala na caixa de entrada através do id e armazena na variável

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  }); //Adiciona o nome da sala no banco de dados

    localStorage.setItem("room_name", room_name);
    //Armazena o nome da sala no armazenamento local

    window.location = "chitchat_page.html";
}

function getData()
 {  
       firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();//para que serve esse trecho do código?

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chitchat_page.html";
}
//aula 103
function logout() {
localStorage.removeItem("user_name");//remove o nome do usuário de localStorage
localStorage.removeItem("room_name");//remove o nome da sala de localStorage
    window.location = "index.html";
}
