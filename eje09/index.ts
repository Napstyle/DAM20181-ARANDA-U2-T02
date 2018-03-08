import{create}from "./alumno";
import{show}from "./alumno";
import{erase}from "./alumno";
import{update}from "./alumno";

let cre = new create("Crear");
let sho = new show("Mostrar");
let era = new erase("Eliminar");
let up = new update("Modificar");

console.log("\nInserto \n");
cre.crear("13400381","Nomar","Aranda",90,"M","15-10-1994",true);
cre.crear("13400382","Cesar","Ramses",90,"M","15-10-1994",true);
cre.crear("13400383","Kevin","Mendez",90,"M","15-10-1994",true);
console.log("Muestro \n");
sho.mostrar();
console.log("\nElimino \n");
era.eliminar("13400382");
console.log("Muestro \n");
sho.mostrar();
console.log("\nModifico \n");
up.modificar("13400383","Kevin","Santana",95,"M","20-11-1995",true);
console.log("Muestro \n");
sho.mostrar();