"use strict";
exports.__esModule = true;
var alumno_1 = require("./alumno");
var alumno_2 = require("./alumno");
var alumno_3 = require("./alumno");
var alumno_4 = require("./alumno");
var cre = new alumno_1.create("Crear");
var sho = new alumno_2.show("Mostrar");
var era = new alumno_3.erase("Eliminar");
var up = new alumno_4.update("Modificar");
console.log("\nInserto \n");
cre.crear("13400381", "Nomar", "Aranda", 90, "M", "15-10-1994", true);
cre.crear("13400382", "Cesar", "Ramses", 90, "M", "15-10-1994", true);
cre.crear("13400383", "Kevin", "Mendez", 90, "M", "15-10-1994", true);
console.log("Muestro \n");
sho.mostrar();
console.log("\nElimino \n");
era.eliminar("13400382");
console.log("Muestro \n");
sho.mostrar();
console.log("\nModifico \n");
up.modificar("13400383", "Kevin", "Santana", 95, "M", "20-11-1995", true);
console.log("Muestro \n");
sho.mostrar();
