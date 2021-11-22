import axios from "axios";
import { useEffect, useState } from "react";
export default function OpenapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    async function fetchDog() {
      const result: any = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      console.log(result.response.body.items[0]);
      setDogUrl(result.data.message);
    }
    fetchDog();
  }, []);
  return (
    <div>
      {" "}
      <div>open api practice</div>
      <img src={dogUrl} />
    </div>
  );
}
