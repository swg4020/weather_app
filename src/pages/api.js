import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "0af75d82b0b88142962d8c05d18e665f",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = ({ queryKey }) => {
  // const lat = 35.10414541245795;
  // const lon = 129.08234252256935;
  const [weather, lat, lon] = queryKey;

  console.log(queryKey);
  return instance
    .get(`${weather}?lat=${lat}&lon=${lon}`)
    .then((res) => res.data);
};
