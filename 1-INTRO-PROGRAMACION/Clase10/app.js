let [a, b, c] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);

let [name, surname, age = 1, jobs = []] = ["matias", "camisay"];
console.log(name, surname, age * 1);
console.log(jobs.map((item) => item));

// ==============================================

const vouchers = [
  {
    cliente: {
      nombre: "HEBER MARCOS GARCIA CESPEDES",
    },
    id: "649de075a48a010d26c15d42",
    fecha: "2023-06-29T19:50:13.445Z",
    comprobante: "FACTURA_B",
    monto: 17200,
    numero: "33",
    medio_pago: "contado",
  },
  {
    cliente: {
      nombre: "JUAN MARCO YAÑEZ BASTIDA",
    },
    id: "64ed30467728349381616443",
    fecha: "2023-08-28T23:39:50.619Z",
    comprobante: "FACTURA_B",
    monto: 3000,
    numero: "110",
    medio_pago: "contado",
  },
  {
    cliente: {
      nombre: "mati",
    },
    id: "64ed30467666666666666666666",
    fecha: "2023-08-28T23:39:50.619Z",
    comprobante: "FACTURA_B",
    monto: 30009,
    numero: "110",
    medio_pago: "contado",
  },
];

const [...newArraySales] = vouchers;
const secondNewArraySales = [vouchers[0], vouchers[1], vouchers[2]];
const thirdNewArraySales = vouchers.map((item) => item);
const destructuredVouchers = [...vouchers];

const [firstSale] = vouchers;
// const { comprobante } = firstSale;
// console.log(newArraySales);
// console.log(copyArray);

console.log({
  cliente: firstSale.cliente,
  id: firstSale.id,
  fecha: firstSale.fecha,
  comprobante: firstSale.comprobante,
  monto: firstSale.monto,
  numero: firstSale.numero,
  medio_pago: firstSale.medio_pago,
  numero: 45,
});
console.log({ ...firstSale, numero: 45 });

// ==============================================

const objeto = { nombre: "matias", edad: 24 };
const { nombre } = objeto;
const { ...newAlumno } = objeto;

newAlumno.nombre = "juan";

console.log(objeto);
console.log(newAlumno);
