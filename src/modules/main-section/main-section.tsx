import Header from "../../components/header/header.tsx";
import {SimpleSlider} from "../../components/slider/slider.tsx";
import styled from "styled-components";
import arrowDown from "../../assets/Arrow - Down.svg"
const MainSection = ({handleClick}: any) => {



    return (
        <>
            <Header/>
            <SimpleSlider></SimpleSlider>
            <ScrollButtonWrapper onClick={handleClick}>
                <ScrollButton>Explore tours</ScrollButton>
                <ScrolledLogoWrapper>
                    <ScrolledLogo src={arrowDown}/>
                </ScrolledLogoWrapper>
            </ScrollButtonWrapper>
        </>
    );
};

const ScrollButtonWrapper = styled.div`
  align-items: center;
  gap: 8px;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 33px;
  &:hover {
    cursor: pointer;
  }
  
`
const ScrollButton = styled.div`
  color: #FFF;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`
const ScrolledLogoWrapper = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 7.917px 9.502px 7.083px 10.416px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;`
const ScrolledLogo = styled.img`

`
export default MainSection;