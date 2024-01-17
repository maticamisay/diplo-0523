const bcrypt = require("bcrypt");

const passwordUnhashed = "mati1";
const passwordHashed =
  "$2b$10$hzB84eYHpZRC/2r/r9Y99.YoXWRixDEhoOCWzhijuZesU1kt.BCCO";
// devuelve una contraseña hasheada
// ej: const password = 'mati1'
// ej: devuelve:  $2b$10$hzB84eYHpZRC/2r/r9Y99.YoXWRixDEhoOCWzhijuZesU1kt.BCCO
const hash = bcrypt.hashSync(passwordUnhashed, 10);
console.log(hash);

// devuelve un booleano, true si son iguales, false si no son iguales
const result = bcrypt.compareSync(passwordUnhashed, passwordHashed);
console.log(result);
