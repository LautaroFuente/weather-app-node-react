export const selectImage = (description) => {
    switch (description) {
        case "Cielo claro":
            return;

        case "Pocas nubes":
            return;

        case "Nubes dispersas":
            return;

        case "Nubes fragmentadas":
            return;

        case "Nubes cubiertas":
            return;

        case "Lluvias débiles":
            return;

        case "Lluvia":
            return;

        case "Tormenta eléctrica":
            return;

        case "Nieve":
            return;

        case "Niebla":
            return;

        default:
            break;
    }
}
/**
 * Clear sky (Cielo claro)
Few clouds (Pocas nubes)
Scattered clouds (Nubes dispersas)
Broken clouds (Nubes fragmentadas)
Overcast clouds (Nubes cubiertas)
Shower rain (Lluvias débiles)
Rain (Lluvia)
Thunderstorm (Tormenta eléctrica)
Snow (Nieve)
Mist (Niebla)
Fog (Niebla)
 */