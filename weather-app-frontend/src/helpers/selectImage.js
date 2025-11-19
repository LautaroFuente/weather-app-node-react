import CieloDespejado from "../img/CieloDespejado.png";
import ConNiebla from "../img/ConNiebla.png";
import Desconocido from "../img/Desconocido.png";
import Lluvioso from "../img/Lluvioso.png";
import Nevando from "../img/Nevando.png";
import ParcialmenteNublado from "../img/ParcialmenteNublado.png";
import Tormenta from "../img/Tormenta.png";

export const selectImage = (description) => {
  switch (description) {
    case "Cielo Despejado":
      return CieloDespejado;

    case "Parcialmente Nublado":
      return ParcialmenteNublado;

    case "Con Niebla":
      return ConNiebla;

    case "Lluvioso":
      return Lluvioso;

    case "Nevando":
      return Nevando;

    case "Tormenta":
      return Tormenta;

    case "Desconocido":
      return Desconocido;
    default:
      return Desconocido;
  }
};
