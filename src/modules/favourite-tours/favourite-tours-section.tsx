import styled from "styled-components";
import ToursItemsSection from "../../components/tours-items-section/tours-items-section.tsx";
import {useRecoilState} from "recoil";
import {toursFavourite} from "../../store";
import TourItem from "../../components/tour-item/tour-item.tsx";
import {Tour} from "../../types";


const FavouriteToursSection = () => {
    //TODO: MAKE A "ARROWS AND DOTS MENU" TO CONTROL FLOW OF ITEMS
    const [favouriteTours, setFavourite] = useRecoilState(toursFavourite)

    return (
        <Wrapper>
            <ClearButtonWrapper>
                <ClearAllButton onClick={() => setFavourite([])}>Clear all</ClearAllButton>
            </ClearButtonWrapper>
            <ToursItemsSection length={favouriteTours.length}>
                {favouriteTours.map((tour: Tour, index: number) => (
                    <TourItem key={tour.id} tour={tour} index={index}/>
                ) )}
            </ToursItemsSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 55px auto;
  min-height: 500px;
  position: relative;
`
const ClearButtonWrapper = styled.div`
    width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
`
const ClearAllButton = styled.button`
  color: #556B84;
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`
export default FavouriteToursSection;