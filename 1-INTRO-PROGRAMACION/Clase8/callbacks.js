function recibeCallback(callback) {
  callback();
}

recibeCallback(function () {
  console.log("Hola mundo");
});

function callbackDos() {
  console.log("Hola mundo");
}

recibeCallback(callbackDos);
