"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aprendiz = exports.NivelEducativo = void 0;
var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "Universitario";
    NivelEducativo["POSGRADO"] = "Posgrado";
})(NivelEducativo = exports.NivelEducativo || (exports.NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducativo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
    }
    return Aprendiz;
}());
exports.Aprendiz = Aprendiz;
