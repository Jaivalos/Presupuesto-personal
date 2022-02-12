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
  cargarIngresos();
  cargarEgresos();
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
  let porcentajeEgreso = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgreso);
  document.getElementById("ingresos").innerHTML = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

let formatoMoneda = (valor) =>
  valor.toLocaleString("es-GT", {
    style: "currency",
    currency: "GTQ",
    minimumFractionDigits: 2,
  });

let formatoPorcentaje = (valor) =>
  valor.toLocaleString("es-GT", { style: "percent", minimumFractionDigits: 2 });

const cargarIngresos = () => {
  let ingresosHTML = "";
  for (const ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
  let ingresoHTML = `
   <div class="elemento limpiarEstilos">
     <div class="elemento_descripcion">${ingreso.descripcion}</div>
     <div class="derecha limpiarEstilos">
       <div class="elemento_valor">+${formatoMoneda(ingreso.valor)}</div>
       <div class="elemento_eliminar">
         <button class="elemento_eliminar--btn">
           <ion-icon name="close-circle-outline" 
            onclick = "eliminarIngreso(${ingreso.id})"></ion-icon>
         </button>
       </div>
     </div>
   </div>
  `;
  return ingresoHTML;
};

const eliminarIngreso = (id) =>{
  let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero(); cargarIngresos();
}

const cargarEgresos = () => {
  let egresosHTML = "";
  for (const egreso of egresos) {
    egresosHTML += crearEgresoHTML(egreso);
  }
  document.getElementById("listaEgresos").innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso) => {
  let egresoHTML = `
   <div class="elemento limpiarEstilos">
     <div class="elemento_descripcion">${egreso.descripcion}</div>
     <div class="derecha limpiarEstilos">
       <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
       <div class="elemento_eliminar">
         <button class="elemento_eliminar--btn">
           <ion-icon name="close-circle-outline"
           onclick = eliminarEgreso(${egresos.id})></ion-icon>
         </button>
       </div>
     </div>
   </div>
  `;
  return egresoHTML;
};

const eliminarEgreso = (id) =>{
  let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
  egresos.splice(indiceEliminar, 1);
  cargarCabecero(); cargarEgresos();
}