export const formatDate = (dateString) => {
    // Convierte el string a un objeto Date
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        throw new Error('Fecha inválida');
    }

    // Obtiene el día, mes y año
    const day = String(date.getDate()).padStart(2, '0'); // Asegura que tenga dos dígitos
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // Retorna la fecha y hora en el formato deseado
    return `${day}-${month}-${year} ${hours}:${minutes}`;
};


