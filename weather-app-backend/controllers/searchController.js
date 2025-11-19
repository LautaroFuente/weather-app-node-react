const getWeatherDescription = (code) => {
  // Implementación simple de mapeo del código WMO
  if (code === 0) return "Cielo Despejado";
  if (code >= 1 && code <= 3) return "Parcialmente Nublado";
  if (code >= 45 && code <= 48) return "Con Niebla";
  if (code >= 51 && code <= 67) return "Lluvioso";
  if (code >= 71 && code <= 75) return "Nevando";
  if (code >= 95 && code <= 99) return "Tormenta";
  return "Desconocido";
};

export const searchWeather = async (req, res) => {
  const { city, country } = req.params;
  const query = `${city}, ${country}`;
  const encodedQuery = encodeURIComponent(query);

  try {
    // 1. Geocodificación
    let data = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodedQuery}&count=1&language=es`
    );
    if (!data.ok) {
      throw new Error(`Error en API de Geocodificación: ${data.status}`);
    }
    let response = await data.json();

    if (!response.results || response.results.length === 0) {
      return res
        .status(404)
        .json({ message: `No se encontró la ubicación: ${query}` });
    }

    let latitude = response.results[0].latitude;
    let longitude = response.results[0].longitude;
    let locationName = response.results[0].name;

    // 2. Pronóstico
    let finalData = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
    );
    if (!finalData.ok) {
      throw new Error(`Error en API de Pronóstico: ${finalData.status}`);
    }

    let finalResponse = await finalData.json();

    // 3. Devolver datos limpios al Frontend
    const cleanedResponse = {
      location: locationName,
      current: {
        temp: finalResponse.current.temperature_2m,
        description: getWeatherDescription(finalResponse.current.weather_code),
        code: finalResponse.current.weather_code,
      },
      daily: {
        max: finalResponse.daily.temperature_2m_max[0],
        min: finalResponse.daily.temperature_2m_min[0],
      },
    };

    res.status(200).json(cleanedResponse);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Error interno al procesar la solicitud del clima.",
      details: e.message,
    });
  }
};
