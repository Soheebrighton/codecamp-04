import * as A from "./Banner.styles";
import { Carousel } from "antd";

export default function BannerUI() {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <A.Banner>
      {" "}
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <img src="/images/캐러셀이미지.png" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </A.Banner>
  );
}
