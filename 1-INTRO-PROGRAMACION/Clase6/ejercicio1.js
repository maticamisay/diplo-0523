const users = [
  {
    nombre: "Marta",
    edad: 34,
  },
  {
    nombre: "Juan",
    edad: 23,
  },
  {
    nombre: "Antonio",
    edad: 45,
  },
  {
    nombre: "Monica",
    edad: 12,
  },
];

function buscarMayor(array) {
  let mayor = 0;
  let user;
  for (let i = 0; i < array.length; i++) {
    if (array[i].edad > mayor) {
      mayor = array[i].edad;
      user = array[i];
    }
  }
  return user.nombre;
}
buscarMayor(users);
