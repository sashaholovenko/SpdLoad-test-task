import React from 'react';
import styled, {css} from "styled-components";


const ToursItemsSection = ({length, children}: TourItemsSectionProps) => {
    return (
        <Wrapper length={length}>
            { !length ?
                <NoToursBanner>
                    Sorry, you have no tours in favourite section, please add some...
                </NoToursBanner>
                :
                children
            }

        </Wrapper>
    );
};

interface TourItemsSectionProps {
    length?: number
    children: React.ReactNode
}

const Wrapper = styled.div<TourItemsSectionProps>`
  display: flex;
  ${({ length }) => {
    // length === 2 ? "flex-start" : "space-between"
    if (length === 2) {
        return css`
        justify-content: flex-start;
          gap: 21px;
        `
    } else {
        return css`
        justify-content: space-between;
        `
    }
}}
  margin-top: 40px;
`
const NoToursBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  font-family: Syne;
  font-size: 30px;
`

export default ToursItemsSection;