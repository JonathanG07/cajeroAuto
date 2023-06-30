let principalArea; // permite recorrer la función showHomePage
let x; //permite recorrer el for

const account = [
  { name: "Andres", balance: 200, password: "pollo*" },
  { name: "Daniela", balance: 290, password: "R1234." },
  { name: "Isabella", balance: 70, password: "aS34." },
];

// permite ocultar  el bloque en el ingreso de datos del usuario
document.getElementById("homepage").style.display = "none";
// const balanceValue = document.getElementById("balanceValue");

const user = null;
// ingreso de datos de usuario
function login() {
  const user_ = document.getElementById("user").value;
  const pass_ = document.getElementById("password").value;
  const userNotFound = true;

  for (let x = 0; x < account.length; x++) {
    const element = account[x];
    if (user_ === element.name && pass_ === element.password) {
      console.log("datos correctos");
      console.log(element);
      showHomePage(x);
      principalArea = x;
      userNotFound = false;
      break;
    }
  }

  if (userNotFound) {
    alert("usuario o contraseña invalidos, verifique sus datos nuevamente");
  }
}

//permite aparecer el menu principal y ocultar el bloque de inicio de sesión
function showHomePage(principalArea) {
  document.getElementById("validationUser").style.display = "none";
  document.getElementById("homepage").style.display = "block";
  document.getElementById(
    "welcomeUser"
  ).innerText = `Bienvenido(a), ${account[principalArea].name}`;
  document.getElementById(
    "balanceValue"
  ).innerText = `$ ${account[principalArea].balance} UDS`;
}

// depositar y retirar

function deposit() {
  const value = depositInput.value;
  const balanceValue = Number(account[principalArea].balance) + Number(value);

  if (balanceValue <= 990) {
    account[principalArea].balance = balanceValue;
    
    console.log(account[principalArea].balance);
    console.log(balanceValue);
  } else {
    alert(
      "Su saldo no debe superar los $990, ingrese nuevamente el valor de su deposito"
    );
  }
  depositInput.value = '';
}

function widthdraw() {
  const value = withdrawInput.value;
  const balanceValue =
    Number(account[principalArea].balance) - Number(value);

  if (balanceValue > 10) {
    account[principalArea].balance = balanceValue;
    console.log(account[principalArea].balance);
  } else {
    alert(
      "Su saldo no debe ser menor a $10, ingrese nuevamente el valor de su retiro"
    );
  }

}

// depositBtn.addEventListener('click', () => {
//     const value = depositInput.value;
//     const balanceValue = Number((account[principalArea].balance).innerText) + Number(value);
//     account[principalArea].balance = balanceValue;
//     console.log(value);
// })

// function withdraw() {
//     const withdraw = document.getElementById("withdraw").value;

// for (let index = 0; index < account.length; index++) {
//     const element = account[index];

//     if (element.name ) {

//     }

// }
// }

// usar camelcase, no var, si es let o const, mirar si usar un framework, funciones pequeñas de cosa en cosa,
