const ingresos = [
  new Ingreso("Salario", 3500),
  new Ingreso("Apartamento", 2000),
];
const egresos = [
  new Egreso("Apartamento", 1800),
  new Ingreso("Internet", 350),
  new Ingreso("Universidad", 875),
];

const cargarApp = () => {
  cargarCabecero();
};

let totalIngresos = () => {
  let totalIngreso = 0;
  for (const ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }
  return totalIngreso;
};
let totalEgresos = () => {
  let totalEgreso = 0;
  for (const egreso of egresos) {
    totalEgreso += egreso.valor;
  }
  return totalEgreso;
};

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalIngresos()/totalEgresos();
    document.getElementById("presupuesto").innerHTML = presupuesto;
    document.getElementById("porcentaje").innerHTML = porcentajeEgreso;
    document.getElementById("ingresos").innerHTML = totalIngresos();
    document.getElementById("egresos").innerHTML = totalEgresos();
};
