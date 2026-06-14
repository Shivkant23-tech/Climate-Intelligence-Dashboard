const profiles = {
  urban: {
    label: "Urban basin",
    tempOffset: 2,
    rainfall: 56,
    treeCover: 24,
    traffic: 68,
    soil: 32,
    seed: 9127
  },
  coastal: {
    label: "Coastal wetland",
    tempOffset: 1,
    rainfall: 72,
    treeCover: 48,
    traffic: 35,
    soil: 64,
    seed: 4218
  },
  farm: {
    label: "Dry farmland",
    tempOffset: 3,
    rainfall: 35,
    treeCover: 14,
    traffic: 24,
    soil: 58,
    seed: 7711
  },
  forest: {
    label: "Forest edge",
    tempOffset: -1,
    rainfall: 68,
    treeCover: 74,
    traffic: 12,
    soil: 82,
    seed: 2186
  }
};

const seasons = {
  summer: {
    label: "Summer",
    baseTemp: 31,
    tempSwing: 5.8,
    baseHumidity: 48,
    rainMax: 18,
    baseWind: 9,
    baseUv: 8.2,
    phase: 0.2
  },
  monsoon: {
    label: "Monsoon",
    baseTemp: 27,
    tempSwing: 3.2,
    baseHumidity: 72,
    rainMax: 38,
    baseWind: 13,
    baseUv: 5.8,
    phase: 1.1
  },
  winter: {
    label: "Winter",
    baseTemp: 18,
    tempSwing: 4.8,
    baseHumidity: 54,
    rainMax: 12,
    baseWind: 8,
    baseUv: 4.6,
    phase: 2.4
  }
};

const countryNames = {
  IN: "India",
  US: "United States",
  GB: "United Kingdom",
  JP: "Japan",
  AU: "Australia",
  BR: "Brazil",
  ZA: "South Africa",
  DE: "Germany",
  CA: "Canada",
  AE: "United Arab Emirates",
  SG: "Singapore"
};

const sampleCities = {
  "delhi|IN": { name: "Delhi", country: "India", countryCode: "IN", temp: 34, humidity: 42, wind: 13, rain: 22, code: 1, latitude: 28.61, longitude: 77.21 },
  "mumbai|IN": { name: "Mumbai", country: "India", countryCode: "IN", temp: 30, humidity: 79, wind: 19, rain: 68, code: 80, latitude: 19.08, longitude: 72.88 },
  "new york|US": { name: "New York", country: "United States", countryCode: "US", temp: 23, humidity: 58, wind: 16, rain: 34, code: 2, latitude: 40.71, longitude: -74.01 },
  "london|GB": { name: "London", country: "United Kingdom", countryCode: "GB", temp: 17, humidity: 70, wind: 18, rain: 46, code: 3, latitude: 51.51, longitude: -0.13 },
  "tokyo|JP": { name: "Tokyo", country: "Japan", countryCode: "JP", temp: 25, humidity: 66, wind: 15, rain: 38, code: 61, latitude: 35.68, longitude: 139.76 },
  "sydney|AU": { name: "Sydney", country: "Australia", countryCode: "AU", temp: 19, humidity: 63, wind: 21, rain: 28, code: 2, latitude: -33.87, longitude: 151.21 },
  "sao paulo|BR": { name: "Sao Paulo", country: "Brazil", countryCode: "BR", temp: 21, humidity: 73, wind: 14, rain: 41, code: 51, latitude: -23.55, longitude: -46.63 },
  "cape town|ZA": { name: "Cape Town", country: "South Africa", countryCode: "ZA", temp: 18, humidity: 61, wind: 24, rain: 31, code: 2, latitude: -33.92, longitude: 18.42 },
  "berlin|DE": { name: "Berlin", country: "Germany", countryCode: "DE", temp: 19, humidity: 64, wind: 17, rain: 35, code: 3, latitude: 52.52, longitude: 13.41 },
  "toronto|CA": { name: "Toronto", country: "Canada", countryCode: "CA", temp: 20, humidity: 59, wind: 18, rain: 32, code: 2, latitude: 43.65, longitude: -79.38 },
  "dubai|AE": { name: "Dubai", country: "United Arab Emirates", countryCode: "AE", temp: 38, humidity: 36, wind: 20, rain: 4, code: 0, latitude: 25.2, longitude: 55.27 },
  "singapore|SG": { name: "Singapore", country: "Singapore", countryCode: "SG", temp: 29, humidity: 78, wind: 12, rain: 72, code: 95, latitude: 1.29, longitude: 103.85 }
};

const weatherCodeLabels = {
  0: "Clear",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Cloudy",
  45: "Fog",
  48: "Rime fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Heavy drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Showers",
  82: "Heavy showers",
  95: "Thunderstorm",
  96: "Storm with hail",
  99: "Severe hailstorm"
};

const weatherMetrics = [
  { key: "temperature", label: "Temp" },
  { key: "humidity", label: "Humidity" },
  { key: "rainfall", label: "Rain" },
  { key: "wind", label: "Wind" }
];

const environmentMetrics = [
  { key: "heatStress", label: "Heat stress" },
  { key: "airPressure", label: "Air pressure" },
  { key: "runoffRisk", label: "Runoff risk" },
  { key: "habitatComfort", label: "Habitat" }
];

const els = {
  profileSelect: document.querySelector("#profileSelect"),
  profileLabel: document.querySelector("#profileLabel"),
  forecastLabel: document.querySelector("#forecastLabel"),
  dayCount: document.querySelector("#dayCount"),
  resetButton: document.querySelector("#resetButton"),
  forecastForm: document.querySelector("#forecastForm"),
  cityInput: document.querySelector("#cityInput"),
  countrySelect: document.querySelector("#countrySelect"),
  applyForecastButton: document.querySelector("#applyForecastButton"),
  forecastStatus: document.querySelector("#forecastStatus"),
  forecastPlace: document.querySelector("#forecastPlace"),
  forecastSource: document.querySelector("#forecastSource"),
  forecastTemp: document.querySelector("#forecastTemp"),
  forecastHumidity: document.querySelector("#forecastHumidity"),
  forecastRain: document.querySelector("#forecastRain"),
  forecastWind: document.querySelector("#forecastWind"),
  forecastCondition: document.querySelector("#forecastCondition"),
  forecastRainNote: document.querySelector("#forecastRainNote"),
  dailyStrip: document.querySelector("#dailyStrip"),
  forecastHeatmap: document.querySelector("#forecastHeatmap"),
  segments: [...document.querySelectorAll(".segment")],
  tempOffset: document.querySelector("#tempOffset"),
  rainfall: document.querySelector("#rainfall"),
  treeCover: document.querySelector("#treeCover"),
  traffic: document.querySelector("#traffic"),
  soil: document.querySelector("#soil"),
  tempOutput: document.querySelector("#tempOutput"),
  rainOutput: document.querySelector("#rainOutput"),
  treeOutput: document.querySelector("#treeOutput"),
  trafficOutput: document.querySelector("#trafficOutput"),
  soilOutput: document.querySelector("#soilOutput"),
  matrix: document.querySelector("#matrix"),
  heatScore: document.querySelector("#heatScore"),
  airScore: document.querySelector("#airScore"),
  runoffScore: document.querySelector("#runoffScore"),
  habitatScore: document.querySelector("#habitatScore"),
  heatTrend: document.querySelector("#heatTrend"),
  airTrend: document.querySelector("#airTrend"),
  runoffTrend: document.querySelector("#runoffTrend"),
  habitatTrend: document.querySelector("#habitatTrend"),
  signalFill: document.querySelector("#signalFill"),
  signalText: document.querySelector("#signalText"),
  signalSubtitle: document.querySelector("#signalSubtitle"),
  scatterCanvas: document.querySelector("#scatterCanvas"),
  lineCanvas: document.querySelector("#lineCanvas")
};

let activeSeason = "summer";
let activeForecast = null;

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function seededRandom(seed) {
  let state = seed % 2147483647;
  if (state <= 0) state += 2147483646;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

function noise(rand, size) {
  return (rand() - 0.5) * size;
}

function numeric(value, fallback = 0) {
  return Number.isFinite(Number(value)) ? Number(value) : fallback;
}

function weatherLabel(code) {
  return weatherCodeLabels[Number(code)] || "Forecast";
}

function setForecastStatus(message, isError = false) {
  els.forecastStatus.textContent = message;
  els.forecastStatus.classList.toggle("error", isError);
}

function parseCityPrompt() {
  const parts = els.cityInput.value.split(",").map((part) => part.trim()).filter(Boolean);
  const city = parts[0] || "Delhi";
  const countryText = parts.slice(1).join(" ").toLowerCase();
  let countryCode = els.countrySelect.value;

  if (countryText) {
    const match = Object.entries(countryNames).find(([code, name]) => {
      return name.toLowerCase() === countryText || name.toLowerCase().includes(countryText) || code.toLowerCase() === countryText;
    });
    countryCode = match ? match[0] : countryCode;
  }

  return { city, countryCode };
}

function sampleKey(city, countryCode) {
  return `${city.trim().toLowerCase()}|${countryCode || ""}`;
}

function findSampleCity(city, countryCode) {
  const exact = sampleCities[sampleKey(city, countryCode)];
  if (exact) return exact;

  const cityOnly = Object.values(sampleCities).find((item) => item.name.toLowerCase() === city.trim().toLowerCase());
  if (cityOnly) return cityOnly;

  return sampleCities["delhi|IN"];
}

function makeDailyForecast(base) {
  const days = [];
  const start = new Date();
  for (let index = 0; index < 7; index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const wave = Math.sin(index * 0.85) * 2;
    const rainShift = Math.round(Math.sin(index * 1.1 + 0.4) * 12);
    days.push({
      date: date.toISOString().slice(0, 10),
      max: Math.round(base.temp + wave + 2),
      min: Math.round(base.temp + wave - 5),
      rain: clamp(base.rain + rainShift, 0, 100),
      code: index % 3 === 0 && base.rain > 55 ? 80 : base.code
    });
  }
  return days;
}

function sampleForecastFor(city, countryCode) {
  const base = findSampleCity(city, countryCode);
  return {
    source: "Sample",
    place: `${base.name}, ${base.country}`,
    latitude: base.latitude,
    longitude: base.longitude,
    countryCode: base.countryCode,
    current: {
      temperature: base.temp,
      humidity: base.humidity,
      wind: base.wind,
      rain: base.rain,
      code: base.code,
      condition: weatherLabel(base.code)
    },
    daily: makeDailyForecast(base)
  };
}

async function fetchLocation(city, countryCode) {
  const params = new URLSearchParams({
    name: city,
    count: "10",
    language: "en",
    format: "json"
  });

  if (countryCode) params.set("countryCode", countryCode);

  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?${params}`);
  if (!response.ok) throw new Error("Location search failed");

  const data = await response.json();
  if (!data.results || data.results.length === 0) {
    throw new Error("No matching city found");
  }

  return data.results
    .slice()
    .sort((a, b) => numeric(b.population, 0) - numeric(a.population, 0))[0];
}

function normalizeForecast(location, forecast) {
  const current = forecast.current || {};
  const daily = forecast.daily || {};
  const days = (daily.time || []).slice(0, 7).map((date, index) => ({
    date,
    max: numeric(daily.temperature_2m_max?.[index], numeric(current.temperature_2m, 0)),
    min: numeric(daily.temperature_2m_min?.[index], numeric(current.temperature_2m, 0)),
    rain: numeric(daily.precipitation_probability_max?.[index], 0),
    code: numeric(daily.weather_code?.[index], current.weather_code)
  }));

  return {
    source: "Live",
    place: `${location.name}${location.admin1 ? `, ${location.admin1}` : ""}, ${location.country}`,
    latitude: location.latitude,
    longitude: location.longitude,
    countryCode: location.country_code,
    current: {
      temperature: numeric(current.temperature_2m, days.length > 0 ? average(days, "max") : 24),
      humidity: numeric(current.relative_humidity_2m, 0),
      wind: numeric(current.wind_speed_10m, 0),
      rain: numeric(current.precipitation, 0),
      code: numeric(current.weather_code, days[0]?.code),
      condition: weatherLabel(current.weather_code)
    },
    daily: days.length > 0 ? days : makeDailyForecast({
      temp: numeric(current.temperature_2m, 24),
      rain: 20,
      code: numeric(current.weather_code, 2)
    })
  };
}

async function fetchForecast(city, countryCode) {
  const location = await fetchLocation(city, countryCode);
  const params = new URLSearchParams({
    latitude: location.latitude,
    longitude: location.longitude,
    current: "temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    timezone: "auto",
    forecast_days: "7"
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
  if (!response.ok) throw new Error("Forecast request failed");

  return normalizeForecast(location, await response.json());
}

function currentSettings() {
  const profile = profiles[els.profileSelect.value];
  return {
    profileKey: els.profileSelect.value,
    profileLabel: profile.label,
    seed: profile.seed + activeSeason.length * 103,
    season: seasons[activeSeason],
    tempOffset: Number(els.tempOffset.value),
    rainfall: Number(els.rainfall.value),
    treeCover: Number(els.treeCover.value),
    traffic: Number(els.traffic.value),
    soil: Number(els.soil.value)
  };
}

function generateData(settings) {
  const rand = seededRandom(settings.seed + Math.round(settings.tempOffset * 10) + settings.rainfall * 3 + settings.treeCover * 7);
  const days = 120;
  const rows = [];

  for (let day = 0; day < days; day += 1) {
    const wave = Math.sin((day / days) * Math.PI * 2 + settings.season.phase);
    const rainWave = Math.max(0, Math.sin((day / 19) * Math.PI * 2 + settings.season.phase * 0.7));
    const stormPulse = rand() > 0.72 ? rand() * settings.season.rainMax * 0.5 : 0;
    const temperature = settings.season.baseTemp + settings.tempOffset + wave * settings.season.tempSwing + noise(rand, 3.8);
    const humidity = clamp(settings.season.baseHumidity + settings.rainfall * 0.18 + rainWave * 12 - settings.tempOffset * 1.1 + noise(rand, 10), 20, 96);
    const rainfall = clamp((settings.rainfall / 100) * settings.season.rainMax * (0.3 + rainWave) + stormPulse + noise(rand, 3), 0, 60);
    const wind = clamp(settings.season.baseWind + noise(rand, 7) + (rainfall > 18 ? 4 : 0), 1, 32);
    const uv = clamp(settings.season.baseUv + temperature * 0.08 - humidity * 0.025 + noise(rand, 1.4), 1, 11);
    const vegetationBuffer = settings.treeCover * 0.34 + settings.soil * 0.12;
    const heatStress = clamp(20 + temperature * 1.85 + humidity * 0.26 + uv * 3.2 + settings.traffic * 0.07 - vegetationBuffer - wind * 0.9 + noise(rand, 7));
    const airPressure = clamp(18 + settings.traffic * 0.58 + temperature * 0.7 - wind * 1.7 - rainfall * 0.45 - settings.treeCover * 0.1 + noise(rand, 8));
    const runoffRisk = clamp(8 + rainfall * 1.45 + humidity * 0.12 - settings.soil * 0.42 - settings.treeCover * 0.12 + settings.traffic * 0.08 + noise(rand, 6));
    const droughtStress = clamp(65 - rainfall * 1.3 - humidity * 0.38 + temperature * 0.8 - settings.soil * 0.12 + noise(rand, 6));
    const habitatComfort = clamp(88 + settings.treeCover * 0.22 + settings.soil * 0.13 + rainfall * 0.16 - heatStress * 0.32 - airPressure * 0.22 - droughtStress * 0.16 + noise(rand, 5));

    rows.push({
      day: day + 1,
      temperature,
      humidity,
      rainfall,
      wind,
      uv,
      heatStress,
      airPressure,
      runoffRisk,
      droughtStress,
      habitatComfort,
      weatherStress: clamp(temperature * 1.5 + humidity * 0.24 + uv * 3 - wind * 0.7),
      ecosystemStress: clamp(heatStress * 0.34 + airPressure * 0.26 + runoffRisk * 0.24 + droughtStress * 0.16)
    });
  }

  return rows;
}

function pearson(rows, xKey, yKey) {
  const n = rows.length;
  const xMean = rows.reduce((sum, row) => sum + row[xKey], 0) / n;
  const yMean = rows.reduce((sum, row) => sum + row[yKey], 0) / n;
  let numerator = 0;
  let xDenominator = 0;
  let yDenominator = 0;

  rows.forEach((row) => {
    const x = row[xKey] - xMean;
    const y = row[yKey] - yMean;
    numerator += x * y;
    xDenominator += x * x;
    yDenominator += y * y;
  });

  const denominator = Math.sqrt(xDenominator * yDenominator);
  return denominator === 0 ? 0 : numerator / denominator;
}

function average(rows, key) {
  return rows.reduce((sum, row) => sum + row[key], 0) / rows.length;
}

function trend(rows, key, positiveIsGood = false) {
  const first = average(rows.slice(0, 30), key);
  const last = average(rows.slice(-30), key);
  const delta = last - first;
  if (Math.abs(delta) < 2.5) return "Stable";
  const improving = positiveIsGood ? delta > 0 : delta < 0;
  return improving ? "Improving" : "Rising";
}

function correlationColor(value) {
  const intensity = Math.round(44 + Math.abs(value) * 28);
  const saturation = Math.round(42 + Math.abs(value) * 34);
  if (value >= 0) {
    return `hsl(151  ${saturation}% ${intensity}%)`;
  }
  return `hsl(199 ${saturation}% ${intensity}%)`;
}

function renderMatrix(rows) {
  els.matrix.innerHTML = "";
  const empty = document.createElement("div");
  els.matrix.append(empty);

  environmentMetrics.forEach((metric) => {
    const header = document.createElement("div");
    header.className = "matrix-header";
    header.textContent = metric.label;
    els.matrix.append(header);
  });

  const pairs = [];
  weatherMetrics.forEach((weather) => {
    const label = document.createElement("div");
    label.className = "matrix-label";
    label.textContent = weather.label;
    els.matrix.append(label);

    environmentMetrics.forEach((environment) => {
      const value = pearson(rows, weather.key, environment.key);
      pairs.push({ weather, environment, value });
      const cell = document.createElement("div");
      cell.className = "matrix-cell";
      cell.style.background = correlationColor(value);
      cell.textContent = value.toFixed(2);
      cell.title = `${weather.label} to ${environment.label}: ${value.toFixed(2)}`;
      els.matrix.append(cell);
    });
  });

  return pairs.sort((a, b) => Math.abs(b.value) - Math.abs(a.value))[0];
}

function fitCanvas(canvas) {
  const context = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const width = Math.max(320, Math.round(rect.width * ratio));
  const height = Math.max(220, Math.round((rect.width * canvas.height / canvas.width) * ratio));
  canvas.width = width;
  canvas.height = height;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  return {
    ctx: context,
    width: width / ratio,
    height: height / ratio
  };
}

function drawAxes(ctx, width, height, padding, xLabel, yLabel) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfdfc";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#d7e0dd";
  ctx.lineWidth = 1;

  for (let i = 0; i <= 4; i += 1) {
    const x = padding.left + ((width - padding.left - padding.right) / 4) * i;
    const y = padding.top + ((height - padding.top - padding.bottom) / 4) * i;
    ctx.beginPath();
    ctx.moveTo(x, padding.top);
    ctx.lineTo(x, height - padding.bottom);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
  }

  ctx.fillStyle = "#62716c";
  ctx.font = "700 12px Inter, system-ui, sans-serif";
  ctx.fillText(xLabel, padding.left, height - 14);
  ctx.save();
  ctx.translate(18, height - padding.bottom);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();
}

function scale(value, min, max, start, end) {
  if (max === min) return start;
  return start + ((value - min) / (max - min)) * (end - start);
}

function drawScatter(rows) {
  const { ctx, width, height } = fitCanvas(els.scatterCanvas);
  const padding = { top: 24, right: 24, bottom: 48, left: 48 };
  drawAxes(ctx, width, height, padding, "Weather stress", "Ecosystem stress");

  const xValues = rows.map((row) => row.weatherStress);
  const yValues = rows.map((row) => row.ecosystemStress);
  const xMin = Math.min(...xValues) - 4;
  const xMax = Math.max(...xValues) + 4;
  const yMin = Math.min(...yValues) - 4;
  const yMax = Math.max(...yValues) + 4;

  rows.forEach((row) => {
    const x = scale(row.weatherStress, xMin, xMax, padding.left, width - padding.right);
    const y = scale(row.ecosystemStress, yMin, yMax, height - padding.bottom, padding.top);
    const radius = 3 + row.runoffRisk / 38;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(46, 139, 87, ${0.28 + row.heatStress / 240})`;
    ctx.fill();
  });
}

function drawLine(rows) {
  const { ctx, width, height } = fitCanvas(els.lineCanvas);
  const padding = { top: 22, right: 28, bottom: 48, left: 46 };
  drawAxes(ctx, width, height, padding, "Day", "Index");

  const series = [
    { key: "weatherStress", label: "Weather stress", color: "#277da1" },
    { key: "ecosystemStress", label: "Ecosystem stress", color: "#c75146" },
    { key: "habitatComfort", label: "Habitat comfort", color: "#2e8b57" }
  ];

  series.forEach((item) => {
    ctx.beginPath();
    rows.forEach((row, index) => {
      const x = scale(index, 0, rows.length - 1, padding.left, width - padding.right);
      const y = scale(row[item.key], 0, 100, height - padding.bottom, padding.top);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = item.color;
    ctx.lineWidth = 2.5;
    ctx.stroke();
  });

  let legendX = padding.left;
  series.forEach((item) => {
    ctx.fillStyle = item.color;
    ctx.fillRect(legendX, 18, 12, 12);
    ctx.fillStyle = "#15201d";
    ctx.font = "700 12px Inter, system-ui, sans-serif";
    ctx.fillText(item.label, legendX + 18, 28);
    legendX += ctx.measureText(item.label).width + 46;
  });
}

function renderScores(rows) {
  const heat = Math.round(average(rows, "heatStress"));
  const air = Math.round(average(rows, "airPressure"));
  const runoff = Math.round(average(rows, "runoffRisk"));
  const habitat = Math.round(average(rows, "habitatComfort"));

  els.heatScore.textContent = heat;
  els.airScore.textContent = air;
  els.runoffScore.textContent = runoff;
  els.habitatScore.textContent = habitat;
  els.heatTrend.textContent = trend(rows, "heatStress");
  els.airTrend.textContent = trend(rows, "airPressure");
  els.runoffTrend.textContent = trend(rows, "runoffRisk");
  els.habitatTrend.textContent = trend(rows, "habitatComfort", true);
}

function renderSignal(pair) {
  const strength = Math.abs(pair.value);
  const percent = Math.round(strength * 100);
  const direction = pair.value >= 0 ? "positive" : "negative";
  els.signalFill.style.width = `${percent}%`;
  els.signalFill.style.background = pair.value >= 0 ? "var(--green)" : "var(--blue)";
  els.signalSubtitle.textContent = `${percent}% ${direction} relationship`;
  els.signalText.textContent = `${pair.weather.label} has the strongest ${direction} correlation with ${pair.environment.label}. This means the model expects these two readings to move ${pair.value >= 0 ? "together" : "in opposite directions"} under the current scenario.`;
}

function dayLabel(dateValue) {
  return new Intl.DateTimeFormat("en", { weekday: "short" }).format(new Date(`${dateValue}T00:00:00`));
}

function heatmapColor(value, min, max, palette) {
  const ratio = clamp(((value - min) / (max - min)) * 100, 0, 100) / 100;
  const palettes = {
    heat: { hueStart: 43, hueEnd: 5, saturation: 78, lightStart: 56, lightEnd: 43 },
    rain: { hueStart: 190, hueEnd: 213, saturation: 68, lightStart: 62, lightEnd: 39 },
    wind: { hueStart: 166, hueEnd: 151, saturation: 56, lightStart: 58, lightEnd: 35 },
    risk: { hueStart: 52, hueEnd: 344, saturation: 70, lightStart: 57, lightEnd: 42 }
  };
  const chosen = palettes[palette];
  const hue = chosen.hueStart + (chosen.hueEnd - chosen.hueStart) * ratio;
  const light = chosen.lightStart + (chosen.lightEnd - chosen.lightStart) * ratio;
  return `hsl(${Math.round(hue)} ${chosen.saturation}% ${Math.round(light)}%)`;
}

function dailyWeatherRisk(day, forecast) {
  const humidity = forecast.current.humidity || 55;
  const wind = forecast.current.wind || 8;
  return clamp(day.max * 1.35 + day.rain * 0.32 + humidity * 0.18 - wind * 0.26);
}

function renderForecastHeatmap(forecast) {
  els.forecastHeatmap.innerHTML = "";
  const empty = document.createElement("div");
  els.forecastHeatmap.append(empty);

  forecast.daily.forEach((day) => {
    const header = document.createElement("div");
    header.className = "heatmap-day";
    header.textContent = dayLabel(day.date);
    els.forecastHeatmap.append(header);
  });

  const rows = [
    { label: "High temp", palette: "heat", min: -5, max: 45, value: (day) => day.max, format: (value) => `${Math.round(value)}\u00b0` },
    { label: "Rain chance", palette: "rain", min: 0, max: 100, value: (day) => day.rain, format: (value) => `${Math.round(value)}%` },
    { label: "Wind", palette: "wind", min: 0, max: 45, value: () => forecast.current.wind, format: (value) => `${Math.round(value)}` },
    { label: "Weather risk", palette: "risk", min: 0, max: 100, value: (day) => dailyWeatherRisk(day, forecast), format: (value) => `${Math.round(value)}` }
  ];

  rows.forEach((row) => {
    const label = document.createElement("div");
    label.className = "heatmap-label";
    label.textContent = row.label;
    els.forecastHeatmap.append(label);

    forecast.daily.forEach((day) => {
      const value = row.value(day);
      const cell = document.createElement("div");
      cell.className = "heatmap-cell";
      cell.style.background = heatmapColor(value, row.min, row.max, row.palette);
      cell.textContent = row.format(value);
      cell.title = `${row.label} on ${day.date}: ${row.format(value)}`;
      els.forecastHeatmap.append(cell);
    });
  });
}

function renderForecast(forecast) {
  const peakRain = Math.max(...forecast.daily.map((day) => day.rain));
  els.forecastPlace.textContent = forecast.place;
  els.forecastSource.textContent = forecast.source;
  els.forecastLabel.textContent = `${forecast.source}: ${forecast.place.split(",")[0]}`;
  els.forecastTemp.innerHTML = `${Math.round(forecast.current.temperature)}&deg;C`;
  els.forecastHumidity.textContent = `${Math.round(forecast.current.humidity)}%`;
  els.forecastRain.textContent = `${Math.round(peakRain)}%`;
  els.forecastWind.textContent = `${Math.round(forecast.current.wind)} km/h`;
  els.forecastCondition.textContent = forecast.current.condition;
  els.forecastRainNote.textContent = forecast.source === "Live" ? "7-day peak" : "Sample peak";
  els.applyForecastButton.disabled = false;
  els.dailyStrip.innerHTML = "";

  forecast.daily.forEach((day) => {
    const card = document.createElement("article");
    card.className = "daily-card";

    const label = document.createElement("span");
    label.textContent = dayLabel(day.date);

    const temp = document.createElement("strong");
    temp.innerHTML = `${Math.round(day.max)}&deg; / ${Math.round(day.min)}&deg;`;

    const rain = document.createElement("small");
    rain.textContent = `${Math.round(day.rain)}% rain`;

    const condition = document.createElement("small");
    condition.textContent = weatherLabel(day.code);

    card.append(label, temp, rain, condition);
    els.dailyStrip.append(card);
  });

  renderForecastHeatmap(forecast);
}

function setSeason(seasonKey) {
  activeSeason = seasonKey;
  els.segments.forEach((segment) => segment.classList.toggle("active", segment.dataset.season === seasonKey));
}

function applyForecastToScenario() {
  if (!activeForecast) return;

  const avgHigh = average(activeForecast.daily, "max");
  const peakRain = Math.max(...activeForecast.daily.map((day) => day.rain));
  const forecastOffset = clamp((avgHigh - 26) / 1.8, -4, 8);
  const seasonKey = peakRain > 58 ? "monsoon" : avgHigh >= 26 ? "summer" : "winter";

  els.tempOffset.value = (Math.round(forecastOffset * 2) / 2).toString();
  els.rainfall.value = Math.round(clamp(peakRain, 5, 100)).toString();
  setSeason(seasonKey);
  render();
  setForecastStatus(`Applied ${activeForecast.place} weather to the model`);
}

async function handleForecastSubmit(event) {
  event.preventDefault();
  const { city, countryCode } = parseCityPrompt();
  const submitButton = els.forecastForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  setForecastStatus(`Searching forecast for ${city}...`);

  try {
    activeForecast = await fetchForecast(city, countryCode);
    renderForecast(activeForecast);
    setForecastStatus(`Updated from Open-Meteo for ${activeForecast.place}`);
  } catch (error) {
    activeForecast = sampleForecastFor(city, countryCode);
    renderForecast(activeForecast);
    setForecastStatus(`Live forecast unavailable. Showing sample for ${activeForecast.place}`, true);
  } finally {
    submitButton.disabled = false;
  }
}

function updateOutputs(settings) {
  els.profileLabel.textContent = settings.profileLabel;
  els.dayCount.textContent = "120 days";
  els.tempOutput.innerHTML = `${settings.tempOffset >= 0 ? "+" : ""}${settings.tempOffset.toFixed(1)}&deg;C`;
  els.rainOutput.textContent = `${settings.rainfall}%`;
  els.treeOutput.textContent = `${settings.treeCover}%`;
  els.trafficOutput.textContent = `${settings.traffic}%`;
  els.soilOutput.textContent = `${settings.soil}%`;
}

function render() {
  const settings = currentSettings();
  const rows = generateData(settings);
  updateOutputs(settings);
  renderScores(rows);
  const strongestPair = renderMatrix(rows);
  renderSignal(strongestPair);
  drawScatter(rows);
  drawLine(rows);
}

function applyProfile(key) {
  const profile = profiles[key];
  els.tempOffset.value = profile.tempOffset;
  els.rainfall.value = profile.rainfall;
  els.treeCover.value = profile.treeCover;
  els.traffic.value = profile.traffic;
  els.soil.value = profile.soil;
}

els.profileSelect.addEventListener("change", () => {
  applyProfile(els.profileSelect.value);
  render();
});

[els.tempOffset, els.rainfall, els.treeCover, els.traffic, els.soil].forEach((input) => {
  input.addEventListener("input", render);
});

els.segments.forEach((button) => {
  button.addEventListener("click", () => {
    setSeason(button.dataset.season);
    render();
  });
});

els.forecastForm.addEventListener("submit", handleForecastSubmit);
els.applyForecastButton.addEventListener("click", applyForecastToScenario);

els.resetButton.addEventListener("click", () => {
  applyProfile(els.profileSelect.value);
  render();
});

window.addEventListener("resize", () => {
  window.requestAnimationFrame(render);
});

applyProfile("urban");
activeForecast = sampleForecastFor("Delhi", "IN");
renderForecast(activeForecast);
render();
