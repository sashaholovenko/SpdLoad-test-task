import styled from "styled-components";
import rightArrow from '../../assets/Arrow - Right 2.svg'
import leftArrow from '../../assets/Arrow - Left2.svg'
import TourItem from "../../components/tour-item/tour-item.tsx";
import {useRecoilState} from "recoil";
import {tours} from "../../store";
import {LegacyRef, useEffect, useState} from "react";
import client from "../../graphql";
import {ApolloQueryResult, gql} from "@apollo/client";
import ToursItemsSection from "../../components/tours-items-section/tours-items-section.tsx";
import {RocketsRequest, Tour} from "../../types";

interface TourSectionProps {
    myRef: LegacyRef<HTMLElement>
}
const TourSection = ({myRef}: TourSectionProps) => {

    const [toursList, setTours] = useRecoilState(tours)
    const [itemPosition, setPosition] = useState<number>(0)
    const [activeDot, setActiveDot] = useState<number>(0);

    useEffect(() => {
        client.query({
            query: gql`
                query ExampleQuery {
                  rockets {
                      id
                      description
                      name
                  }
                }`
        }).then((result: ApolloQueryResult<RocketsRequest>) => setTours(result.data.rockets));
    }, [])
    if (!toursList) {
        return (
            <div>Error</div>
        )
    }

    const tourPositionHandler = (option: string) => {
        const increment = option === 'minus' ? -1 : 1;
        const newPosition = (itemPosition + increment + toursList.length) % toursList.length;
        setPosition(newPosition);
        setActiveDot(Math.floor(newPosition / 3));
    };

    const handleDotClick = (dotIndex: number) => {
        setPosition(dotIndex * 3);
        setActiveDot(dotIndex);
    };

    const tourListUpdated = toursList.slice(itemPosition, itemPosition + 3)
    console.log(toursList)


    return (
        <TourSectionWrapper ref={myRef}>
            <TitleWrapper>
                <TitleText>
                    popular tours
                </TitleText>
                <TourNavigation>
                    <ArrowFrame onClick={() => tourPositionHandler('minus')}>
                        <img src={leftArrow} alt="<"/>
                    </ArrowFrame>
                    <ArrowFrame onClick={() => tourPositionHandler('plus')}>
                        <img src={rightArrow} alt=">"/>

                    </ArrowFrame>
                </TourNavigation>
            </TitleWrapper>
            <ToursItemsSection length={tourListUpdated.length} >
                {tourListUpdated.map((tour: Tour, index: number) => (
                    <TourItem key={tour.id} tour={tour} index={(itemPosition + index) % toursList.length} />
                ))}
            </ToursItemsSection>
            <NavigationDotsWrapper>
                {Array.from({ length: Math.ceil(toursList.length / 3) }, (_, i) => (
                    <NavigationDots key={i} onClick={() => handleDotClick(i)}>
                        {i === activeDot && <NavigationDotsActive />}
                    </NavigationDots>
                ))}
            </NavigationDotsWrapper>
        </TourSectionWrapper>
    );
};

const TourSectionWrapper = styled.section`
  gap: 40px;
  max-width: 1281px;
  margin: 96px auto;
`
const TitleWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 712px;
  justify-content: space-between;
`
const TitleText = styled.section`
  color: #1E1E1E;
  text-align: center;
  font-family: Syne;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
`
const TourNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
const ArrowFrame = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #ECECEC;
`
const NavigationDotsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px
`
const NavigationDots = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  border: 1px solid black;
  border-radius: 50%;
    `
const NavigationDotsActive = styled.div`
    width: 16px;
  height: 16px;
  border-radius: 50%;
  background: black;
    `
;

// {Math.ceil(toursList.length / 3)}

export default TourSection;