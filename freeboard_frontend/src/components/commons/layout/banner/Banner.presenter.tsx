import * as A from "./Banner.styles";
import { Carousel } from "antd";

export default function BannerUI() {
  // function onChange(a, b, c) {
  //   console.log(a, b, c);
  // }

  const contentStyle = {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "white",
  };

  const contentStyle2 = {
    height: "300px",
    color: "#80e957",
    lineHeight: "160px",
    textAlign: "center",
    background: "#80e957",
  };

  return (
    <A.Banner>
      {" "}
      <Carousel autoplay dots={false}>
        <div>
          <h3 style={contentStyle}>
            <A.Wrapper>
              {" "}
              <img src="/images/캐러셀이미지.png" />
            </A.Wrapper>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            {" "}
            <A.Wrapper>
              {" "}
              <img src="/images/캐러셀이미지_zero.png" />
            </A.Wrapper>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle2}>
            {" "}
            <A.Wrapper>
              {" "}
              <img src="/images/캐러셀이미지_less.png" />
            </A.Wrapper>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </A.Banner>
  );
}
