import styled from "styled-components";
import satelite from "../../assets/tourpreview.png"
import austronaut from "../../assets/cosmonaut.png"
import girlSpace from "../../assets/girl-in-space.png"
import heart from "../../assets/Heart.svg"
import backet from "../../assets/Delete.svg"
import {useRecoilState} from "recoil";
import {toursFavourite} from "../../store";
import {Tour, TourItemProps} from "../../types";
import {useLocation} from "react-router-dom";


const TourItem = ({tour, index}: TourItemProps) => {

    const [favoriteTours, setFavoriteTours] = useRecoilState<Tour[]>(toursFavourite);
    const location = useLocation();
    const addFavouriteTourHandler = (id?: string) => {
        if ( location.pathname === '/') {
            if (!favoriteTours.includes(tour) && tour) {
                setFavoriteTours([...favoriteTours, tour])
            }
        } else {
            setFavoriteTours(favoriteTours.filter( tour => tour.id !== id ))
        }

    }

    console.log(favoriteTours)
    return (
        <Wrapper>
            <ImageWrapper key={index}>
                {index % 3 === 0 ? (
                    <img src={satelite} alt={`Satellite for Call ${index + 1}`} />
                ) : index % 3 === 1 ? (
                    <img src={girlSpace} alt={`Girl in Space for Call ${index + 1}`} />
                ) : (
                    <img src={austronaut} alt={`Astronaut for Call ${index + 1}`} />
                )}
            </ImageWrapper>
            <DescriptionWrapper>
                <TourTitle>
                    {tour.name}
                </TourTitle>
                <TourDescription>
                    {tour.description}
                </TourDescription>
            </DescriptionWrapper>
            <ButtonsWrapper>
                <BuyButton>
                    buy
                </BuyButton>
                <ActionButton onClick={() => addFavouriteTourHandler(tour.id)}>
                    { location.pathname === '/'
                        ?
                        <img src={heart} alt=""/>
                        :
                        <img src={backet} alt=""/>
                    }
                </ActionButton>
            </ButtonsWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 411px;
  height: 572px;
  flex-shrink: 0;
  border: 1px solid #D3EAFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ImageWrapper = styled.div`

`

const DescriptionWrapper = styled.div`
  display: flex;
  padding: 0px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-top: 32px;
`
const ButtonsWrapper = styled.div`
  display: flex;
  width: 347px;
  align-items: center;
  gap: 16px;
  margin-top: 64px;
  
`
const TourTitle = styled.p`
  align-self: stretch;
  color: #1E1E1E;
  text-align: center;
  font-family: Syne;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`

const TourDescription = styled.p`
  align-self: stretch;
  color: #556B84;
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  max-height: 80px;
  line-height: 1em;
  overflow: hidden;       
  text-overflow: ellipsis; 
  display: -webkit-box;   
  -webkit-line-clamp: 3;  
  -webkit-box-orient: vertical; 

  
`
const BuyButton = styled.button`
  display: flex;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  background: #D3EAFF;
  color: #000;
  text-align: center;
  font-family: Syne;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`
//TODO: make a beautiful shadow on hover effect
const ActionButton = styled.button`
  display: flex;
  width: 53px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  background: #ECECEC;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`

export default TourItem;