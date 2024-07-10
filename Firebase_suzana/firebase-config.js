const firebaseConfig = {
  apiKey: "AIzaSyDwnttmoWawc0jiDviBitAIApCpaHDX2tE",
  authDomain: "sickcunt55.firebaseapp.com",
  projectId: "sickcunt55",
  storageBucket: "sickcunt55.appspot.com",
  messagingSenderId: "766883397685",
  appId: "1:766883397685:web:d2810bab95ffc8a941f17c",
  measurementId: "G-J4XG7L0VMC"
};

// Inicializa o Firebase com as configurações fornecidas
firebase.initializeApp(firebaseConfig);

// Inicializa as variáveis auth e database para facilitar o acesso aos serviços do Firebase
const auth = firebase.auth();
const database = firebase.database();

// validar emaile senha 
function validarEmail(email) {
  const expRegEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expRegEmail.test(email);
}

function validarSenha(password) {
  return password.length >= 6 && password.length <= 10 &&
         /[a-zA-Z]/.test(password) &&
         /\d/.test(password);
}

// Evento lister para o botão de cadastro
document.getElementById('signup-btn').addEventListener('click', function() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  try {
    if (!validarEmail(email)) {
      alert('Email inválido.');
      return;
    }

    if (!validarSenha(password)) {
      alert('A senha deve ter entre 6 e 10 caracteres, incluindo pelo menos uma letra e um número.');
      return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert('Usuário cadastrado com sucesso!');
      })
      .catch((error) => {
        alert('Erro ao cadastrar usuário: ' + error.message);
      });
  } catch (error) {
    alert('Erro ao cadastrar usuário: ' + error.message);
  }
});

// Event listener para o botão de login
document.getElementById('login-btn').addEventListener('click', function() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  try {
    if (!validarEmail(email)) {
      alert('Email inválido.');
      return;
    }

    if (!validarSenha(password)) {
      alert('A senha deve ter entre 6 e 10 caracteres, incluindo pelo menos uma letra e um número.');
      return;
    }

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        window.location.href = 'jogo.html';
      })
      .catch((error) => {
        alert('Erro ao logar: ' + error.message);
      });
  } catch (error) {
    alert('Erro ao logar: ' + error.message);
  }
});
