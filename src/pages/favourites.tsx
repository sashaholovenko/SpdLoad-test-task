import Header from "../components/header/header.tsx";
import styled from "styled-components";
import banner from "../assets/fav-ban.png"
import FavouriteToursSection from "../modules/favourite-tours/favourite-tours-section.tsx";
const Favourites = () => {
    return (
        <div>
            <Header/>
            <TopSectionWrapper>
                <TopSectionText>favourites</TopSectionText>
            </TopSectionWrapper>
            <FavouriteToursSection/>
        </div>
    );
};

const TopSectionWrapper = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center -50px;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TopSectionText = styled.p`
  padding-top: 30px;
  color: #FFF;
  text-align: center;
  font-family: Syne;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  transform: scaleX(1.4);
  

`
export default Favourites;