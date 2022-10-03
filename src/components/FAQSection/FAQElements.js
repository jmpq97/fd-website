import styled from "styled-components";

export const InfoContainer = styled.div`
color: #fff;
background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')}
;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`;

export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 50%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 10px;
justify-content: center;
`;

export const InfoRow = styled.div`
display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center
`;

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`;

export const BgElement = styled.img`
width: 100%;
margin-left: 60%;
`

export const TextWrapper = styled.div`
text-align: center;
display: inline-flex;
background: #010606;
justify-content: center;
align-items: flex-end;
`;

export const TopLine = styled.p`
background: linear-gradient(90deg, #3FA1CB 18.08%, #9D57E3 95.76%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
ont-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 100%;
`;

export const BottomLine = styled.li`
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 100%;
/* or 20px */

color: #F9F9F9;
`;

export const Heading = styled.h2`
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 100%;
color: ${({ lightText }) => (lightText ? '#FFFFFF' : '#010606')};

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({ darkText }) => (darkText ? '#010606' : "#fff")};
`;

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`;

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`;

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`;

export const LiWrap = styled.div`
height: auto;
margin-bottom: 62px;
width: 500px;
`
