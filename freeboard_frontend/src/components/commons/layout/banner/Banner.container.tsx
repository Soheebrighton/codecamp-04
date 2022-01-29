import * as A from "./Banner.styles";
import { Carousel } from "antd";

export default function Banner() {
  return (
    <A.Banner>
      <Carousel autoplay dots={false}>
        <div>
          <A.contentStyle>
            <A.Wrapper>
              <img src="/images/캐러셀이미지.png" />
            </A.Wrapper>
          </A.contentStyle>
        </div>
        <div>
          <A.contentStyle>
            <A.Wrapper>
              <img src="/images/캐러셀이미지_zero.png" />
            </A.Wrapper>
          </A.contentStyle>
        </div>
        <div>
          <A.contentStyle2>
            <A.Wrapper>
              <img src="/images/캐러셀이미지_less.png" />
            </A.Wrapper>
          </A.contentStyle2>
        </div>
        <div>
          <A.contentStyle>4</A.contentStyle>
        </div>
      </Carousel>
    </A.Banner>
  );
}
