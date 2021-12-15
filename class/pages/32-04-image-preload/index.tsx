import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [myLoadedImage, setMyLoadedImage] = useState();
  const divRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setMyLoadedImage(img);
    };
  }, []);
  function onClickButton() {
    divRef.current?.appendChild(myLoadedImage);
  }
  return (
    <>
      <h1>hello welcome to the page</h1>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>display an image</button>
      {/* <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp" /> */}
    </>
  );
}
