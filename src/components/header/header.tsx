import styled, {css} from "styled-components";
import spaceXLogo from "../../assets/spaceXlogo.png"
import heartLogo from "../../assets/Heart.svg"
import {Link, useLocation, useNavigate} from "react-router-dom";
const Header = () => {

    const navigate = useNavigate()
    const location = useLocation();

    return (
        <HeaderWrapper>
        <HeaderContentWrapper>
            <Link to={'/'}>
                <LogoWrapper>
                    <img src={spaceXLogo} alt="spaceX"/>
                </LogoWrapper>
            </Link>
            <NavWrapper>
                <Link to={'/'}>
                    <HeaderLinks>HOME</HeaderLinks>
                </Link>
                <Link to={'/'}>
                    <HeaderLinks>TOURS</HeaderLinks>
                </Link>
                <Link to={'/'}>
                    <HeaderLinks>ABOUT</HeaderLinks>
                </Link>
                <Link to={'/'}>
                    <HeaderLinks>HELP</HeaderLinks>
                </Link>
            </NavWrapper>
            <FavouriteWrapper>
                <FavouritesButton url={location.pathname} onClick={() => navigate('/favourite')}>
                    <img src={heartLogo} alt="heart"/>
                </FavouritesButton>
                <SignInButton>
                    <SignInText>
                        sign in
                    </SignInText>
                </SignInButton>
            </FavouriteWrapper>
        </HeaderContentWrapper>
        </HeaderWrapper>

    );
};
const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border: 1px solid #000;
  background: rgba(30, 30, 30, 0.48);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 80px;
  z-index: 3;
`

const HeaderContentWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 10px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center; 
`
const LogoWrapper = styled.div`
`
const NavWrapper = styled.div`
  height: 20px;
  display: inline-flex;
  align-items: flex-start;
  gap: 32px;
`
const FavouriteWrapper = styled.div`
  display: flex;
  gap: 12px;
  
`
const HeaderLinks = styled.div`
  color: white;
  font-family: Syne;
  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  
`
interface FavouritesButtonProps {
    url: string
}
const FavouritesButton = styled.button<FavouritesButtonProps>`
  display: flex;
  width: 53px;
  height: 53px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  ${({url}) => {
      if (url === '/favourite') {
          return css`
            background: #DD377D;
          `
      } else {
          return css`
            background: #ECECEC;
          
          `
      }
  }}
`
const SignInButton = styled.button`
  display: flex;
  width: 163px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #D3EAFF;
`
const SignInText = styled.div`
  color: #000;
  text-align: center;
  font-family: Syne;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`


export default Header;