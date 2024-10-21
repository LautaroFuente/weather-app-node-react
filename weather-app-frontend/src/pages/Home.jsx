import Header from "../components/Header"
import Footer from "../components/Footer"
import FormWeather from "../components/FormWeather"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext.jsx"

function Home() {
    const {stateUser } = useContext(UserContext) || {};

    const { username, token } = stateUser || {};
    return ( 
        <>
            <Header />
            <h1>Busca el clima</h1>
            {token && <h3>Bienvenido: {username}</h3>}
            <FormWeather />
            <Footer />        
        </>
     );
}

export default Home;
/**
 * Paleta de Colores:
Fondo Principal: Azul claro (#E0F7FA) para transmitir frescura y claridad.
Color Primario: Azul marino (#007BFF) para encabezados, botones y elementos destacados.
Color Secundario: Naranja (#FFA726) para resaltar alertas, como notificaciones del clima (por ejemplo, aviso de tormenta).
Color de Texto: Gris oscuro (#333333) para el texto principal, asegurando buena legibilidad.
Color de Fondo Secundario: Blanco (#FFFFFF) para formularios y secciones donde se muestran datos (como historial de búsqueda).
Ejemplo de Uso de Colores:
Home:

Header: Fondo azul marino con texto blanco.
Footer: Fondo azul marino con texto blanco.
Formulario de búsqueda: Fondo blanco con borde azul marino y botón en naranja.
Login / Register:

Fondo azul claro con formularios en blanco, texto en gris oscuro y botones en azul marino.
Mensajes de error o éxito en naranja.
History:

Si el usuario está logueado, mostrar el historial con fondo blanco, encabezados en azul marino y texto gris oscuro.
Si no está logueado, un mensaje en el centro con fondo blanco y texto en azul marino.
Ciudades Más Buscadas:

Lista en fondo blanco, con nombres de ciudades en gris oscuro y botones de acción (como “ver más”) en azul marino o naranja.
Diseño del Favicon:
Para el favicon, considera un icono que represente el clima, como:

Un sol o una nube: Representando el clima.
Un termómetro: Simboliza la temperatura.
 */