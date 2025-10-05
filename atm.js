let balance = 10000;
const pinCode = "1234";

function login() {
  const enteredPin = document.getElementById("pin").value;
  if (enteredPin === pinCode) {
    document.getElementById("login").style.display = "none";
    document.getElementById("atm").style.display = "block";
  } else {
    document.getElementById("error").innerText = "Invalid PIN!";
  }
}

function deposit() {
  const amt = parseInt(document.getElementById("amount").value);
  if (amt > 0) {
    balance += amt;
    updateBalance();
  }
}

function withdraw() {
  const amt = parseInt(document.getElementById("amount").value);
  if (amt > 0 && amt <= balance) {
    balance -= amt;
    updateBalance();
  } else {
    alert("Insufficient balance!");
  }
}

function updateBalance() {
  document.getElementById("balance").innerText = "Balance: Rs." + balance;
  document.getElementById("amount").value = "";
}

function logout() {
  document.getElementById("atm").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("pin").value = "";
  document.getElementById("error").innerText = "";
}
