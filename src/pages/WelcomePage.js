import styled from "@emotion/styled";


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const HeaderOne = styled.h1`
  font-family: Arial, sans-serif;
  font-size: 30pt;
  color: ${(props) => props?.purple || ""};
  text-shadow: 2px 2px 5px ${(props) => props?.darkGreen || ""};
  padding-bottom: 5%;
`;

const HeaderTwo = styled.h1`
  font-family: ${(props) => props?.gotham || ""};
  font-size: 30pt;
  color: ${(props) => props?.purple || ""};
  text-shadow: 2px 2px 5px ${(props) => props?.darkGreen || ""};
`;

const SubHeader = styled.h1`
  font-family: ${(props) => props?.robotoCondensed || ""};
  font-size: 25pt;
  color: ${(props) => props?.purple || ""};
  text-shadow: 2px 2px 5px ${(props) => props?.darkGreen || ""};
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

const FooterContainer = styled.div`
  
`

export const WelcomePage = ({
  gotham,
  robotoCondensed,
  fern,
  lightGreen,
  appleGreen,
  darkGreen,
  purple,
  pink,
}) => {
  return (
    <>
      <HeaderContainer gotham={gotham}>
        <HeaderOne gotham={gotham} purple={purple} darkGreen={darkGreen}>
          Welcome to
        </HeaderOne>
        <HeaderTwo gotham={gotham} purple={purple} darkGreen={darkGreen}>
          The Village
        </HeaderTwo>
        <SubHeader
          robotoCondensed={robotoCondensed}
          purple={purple}
          darkGreen={darkGreen}
        >
          Wellness App
        </SubHeader>
      </HeaderContainer>
      <FooterImages>
        <ImageContainer>
          <Image src={fern} />
        </ImageContainer>
        <ImageContainer>
          <Image src={fern} />
        </ImageContainer>
      </FooterImages>
    </>
  );
};
