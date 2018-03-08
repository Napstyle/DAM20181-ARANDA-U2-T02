"use strict";
exports.__esModule = true;
var Alumnos = Array();
var create = /** @class */ (function () {
    function create(theName) {
        this.name = theName;
    }
    create.prototype.crear = function (control, nom, ape, pro, gen, fec, ac) {
        var newAlumno;
        newAlumno = {
            no_control: control,
            nombre: nom,
            apellidos: ape,
            promedio: pro,
            genero: gen,
            fecha: fec,
            activo: ac
        };
        Alumnos.push(newAlumno);
    };
    return create;
}());
exports.create = create;
var show = /** @class */ (function () {
    function show(theName) {
        this.name = theName;
    }
    show.prototype.mostrar = function () {
        for (var i = 0; i < Alumnos.length; i++) {
            console.log(Alumnos[i]);
        }
    };
    return show;
}());
exports.show = show;
var erase = /** @class */ (function () {
    function erase(theName) {
        this.name = theName;
    }
    erase.prototype.eliminar = function (nocontrol) {
        for (var i = 0; i < Alumnos.length; i++) {
            if (Alumnos[i].no_control === nocontrol) {
                Alumnos[i] = { no_control: "", nombre: "", apellidos: "", promedio: 0, fecha: "", genero: "", activo: false };
            }
        }
    };
    return erase;
}());
exports.erase = erase;
var update = /** @class */ (function () {
    function update(theName) {
        this.name = theName;
    }
    update.prototype.modificar = function (con, nom, ape, pro, fec, gen, ac) {
        for (var i = 0; i < Alumnos.length; i++) {
            if (Alumnos[i].no_control === con) {
                Alumnos[i] = { no_control: con, nombre: nom, apellidos: ape, promedio: pro, fecha: fec, genero: gen, activo: ac };
            }
        }
    };
    return update;
}());
exports.update = update;
