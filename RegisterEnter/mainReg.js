
const registerForm = document.querySelector(".formContent");
const nameInput = document.querySelector(".inputName");
const regEmailInput = document.querySelector(".inputEmail");
const regPassInput = document.querySelector(".inputPassword");
const confirmInput = document.querySelector(".inputConfirmPassword");
const agreeCheckbox = document.querySelector(".checkReg");
const registerBtn = document.querySelector(".registerClient");

const loginForm  = document.querySelector(".Enter");
const loginEmailIn= document.querySelector(".Enter .inputEmail");
const loginPassIn = document.querySelector(".Enter .inputPassword");
const loginBtn  = document.querySelector(".customerEnter");


function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function getClients() {
  return readJSON("clients", []);
}

function saveClients(list) {
  localStorage.setItem("clients", JSON.stringify(list));
}

registerBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = regEmailInput.value.trim();
  const password = regPassInput.value.trim();
  const confirm = confirmInput.value.trim();

  if (!agreeCheckbox.checked) {
    alert("Согласитесь с пользовательским соглашением");
    return;
  }
  if (!name || !email || !password) {
    alert("Заполните все поля");
    return;
  }
  if (password !== confirm) {
    alert("Пароли не совпадают");
    return;
  }

  const clients = getClients();
  const exists = clients.some(function (c) {
    return c.email.toLowerCase() === email.toLowerCase();
  });
  if (exists) {
    alert("Такой e-mail уже зарегистрирован");
    return;
  }

  clients.push({ name: name, email: email, password: password });
  saveClients(clients);

  alert("Вы зарегистрировались!");
  registerForm.reset();
  registerForm.classList.toggle("formNone");
  loginForm.classList.toggle("active");
});

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const email = loginEmailIn.value.trim();
  const password = loginPassIn.value.trim();

  const clients = getClients();
  const user = clients.find(function (c) {
    return c.email === email && c.password === password;
  });

  if (!user) {
    alert("Неверный e-mail или пароль");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify({
    name: user.name,
    email: user.email
  }));

  location.href = "../indexMainPage.html";
});