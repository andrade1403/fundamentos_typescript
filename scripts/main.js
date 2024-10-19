import { Aprendiz, NivelEducativo } from "./aprendiz.js";
export var ap = new Aprendiz('Juan Pablo', 'Reyes Gómez', 'avatar.png', 30, NivelEducativo.POSGRADO);
var aprendizTable = document.getElementById('aprendiz');
mostrarDatosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement('tbody');
    tbodyAprendiz.innerHTML = "<tr><td colspan = 2 ><img src = './".concat(aprendiz.avatar, " height = '100'></tr>\n    <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n    <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n    <tr><td>Nivel educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n    <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
