import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const HeaderOne = styled.h1`
  font-family: ${(props) => props?.gotham || ""};
  font-size: 30pt;
  color: ${(props) => props?.darkGreen || ""};
  //text-shadow: 2px 2px 2px ${(props) => props?.purple || ""};
  animation: ${fadeIn} 1.5s ease-in;
`;

const HeaderTwo = styled.h1`
  font-family: ${(props) => props?.gotham || ""};
  font-size: 30pt;
  color: ${(props) => props?.purple || ""};
  text-shadow: 2px 2px 5px ${(props) => props?.darkGreen || ""};
  animation: ${fadeIn} 1.5s ease-in 0.3s both;
`;

const SubHeader = styled.h1`
  font-family: ${(props) => props?.robotoCondensed || ""};
  font-size: 25pt;
  color: ${(props) => props?.purple || ""};
  text-shadow: 2px 2px 5px ${(props) => props?.darkGreen || ""};
  animation: ${fadeIn} 1.5s ease-in 0.6s both;
`;

const FooterImages = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 19vh;
`;

const ImageContainer = styled.div`
  width: 15%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 40%;
`;
const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${fadeIn} 1.5s ease-in 0.6s both;
`;

const FooterContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 2%;
  left: 0;
  display: flex;
  justify-content: center;
  font-family: ${(props) => props?.robotoCondensed || ""};
  font-weight: 400;
  color: gray;
  font-size: 10pt;
`;

export const WelcomePage = ({
  gotham,
  robotoCondensed,
  fern,
  logo,
  lightGreen,
  appleGreen,
  darkGreen,
  purple,
  pink,
}) => {
  return (
    <>
      <HeaderContainer gotham={gotham}>
        <HeaderOne gotham={gotham} purple={purple} pink={pink} darkGreen={darkGreen}>
          Welcome To
        </HeaderOne>
        <LogoContainer>
          <LogoImage src={logo} />
        </LogoContainer>
        {/* <HeaderTwo gotham={gotham} purple={purple} darkGreen={darkGreen}>
          The Village
        </HeaderTwo>
        <SubHeader
          robotoCondensed={robotoCondensed}
          purple={purple}
          darkGreen={darkGreen}
        >
          Wellness App
        </SubHeader> */}
      </HeaderContainer>
      <FooterImages>
        <ImageContainer>
          <Image src={fern} />
        </ImageContainer>
        <ImageContainer>
          <Image src={fern} />
        </ImageContainer>
      </FooterImages>
      <FooterContainer robotoCondensed={robotoCondensed}>
        &copy; Copyright Brando, Amelia and Tim @CoderAcademy 2026
      </FooterContainer>
    </>
  );
};
