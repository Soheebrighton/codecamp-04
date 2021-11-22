import axios from "axios";
import AirqualityUI from "./Airquality.presenter";
import { useEffect, useState } from "react";
export default function AirQualityPage() {
  //   const [dogUrl, setDogUrl] = useState("");

  const [condition, setCondition] = useState("");

  useEffect(() => {
    async function onGeoOk(position) {
      const APIkey = "6394ef75e9a5a1af0599ccb87a131440";
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      console.log(lat, lon);
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${APIkey}`
      );

      const pm10 = result.data.list[0].components.pm10;
      console.log(pm10);
      // 6394ef75e9a5a1af0599ccb87a131440
      // pm 10 미세먼지
      // pm 2.5 초미세먼지

      if (pm10 >= 0 && pm10 <= 25) {
        setCondition("매우 좋음");
      } else if (pm10 >= 26 && pm10 <= 50) {
        setCondition("좋음");
      } else if (pm10 >= 51 && pm10 <= 90) {
        setCondition("보통");
      } else if (pm10 >= 91 && pm10 <= 180) {
        setCondition("나쁨");
      } else if (pm10 >= 181) {
        setCondition("매우 나쁨");
      }
    }

    function onGeoError() {
      console.log("no location");
    }

    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, []);

  return <AirqualityUI condition={condition} />;
}
