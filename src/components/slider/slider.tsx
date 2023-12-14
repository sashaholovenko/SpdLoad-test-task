import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import test from "../../assets/main-banner.jpg";

interface BackgroundProps {
    background: string;
}

export const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <BackgroundImage background={test}>
                    <BannerTextSmall>The space is waiting for</BannerTextSmall>
                    <BannerTextBig>YOU</BannerTextBig>
            </BackgroundImage>
            <BackgroundImage background={test}>
                    <BannerTextSmall>The space is waiting for</BannerTextSmall>
                    <BannerTextBig>YOU</BannerTextBig>
            </BackgroundImage>
            <BackgroundImage background={test}>
                    <BannerTextSmall>The space is waiting for</BannerTextSmall>
                    <BannerTextBig>YOU</BannerTextBig>
            </BackgroundImage>
        </Slider>
    );
};

const BackgroundImage = styled.div<BackgroundProps>`
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	background-image: url(${({ background }) => background});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center top;
	height: 100vh;
	width: 100vw;
	z-index: -5;
`;

const BannerTextSmall = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Syne;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  transform: scale(1.4);
`
const BannerTextBig = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Syne;
  font-size: 310px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  transform: scaleX(1.5);
`
