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
      return res.status(404).json({
        ok: false,
        message: `No se encontró la ciudad: ${query}`,
      });
    }

    let { latitude, longitude, name: locationName } = response.results[0];

    // 2. Pronóstico
    let finalData = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
    );

    if (!finalData.ok) {
      throw new Error(`Error en API de Pronóstico: ${finalData.status}`);
    }

    let finalResponse = await finalData.json();

    if (
      !finalResponse.current ||
      finalResponse.current.temperature_2m == null ||
      finalResponse.current.weather_code == null ||
      !finalResponse.daily ||
      !finalResponse.daily.temperature_2m_max ||
      !finalResponse.daily.temperature_2m_min
    ) {
      return res.status(502).json({
        ok: false,
        message: "Open-Meteo no devolvió datos válidos",
      });
    }

    // 3. Formato limpio
    const cleanedResponse = {
      ok: true,
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

    return res.status(200).json(cleanedResponse);
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      ok: false,
      message: "Error interno al procesar la solicitud del clima",
      details: e.message,
    });
  }
};
