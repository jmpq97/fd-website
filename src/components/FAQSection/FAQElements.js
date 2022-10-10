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
/*height: 860px; */
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
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

export const Column1 = styled.div`
margin-bottom: 15px;
    /* padding: 0 15px; */
    /* grid-area: col1; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    align-items: center;
    max-width: 45%;
`;
export const Column2 = styled.div`
margin-bottom: 15px;
    /* padding: 0 15px; */
    /* grid-area: col1; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-items: flex-start;
    max-width: 45%;
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

export const FAQContainer = styled.div`
/*height: 800px;*/
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
background: #010606;
height: 100vh;

@media screen and (max-width: 700px) {
    height: auto;
    margin-top: 5rem;
}
/*
@media screen and (max-width: 480px) {
    heigth: 1300px;
}
*/
`;

export const FAQWrapper = styled.div`
max-width: 100vp;
margin: 0 auto;
display: flex;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;


`;

export const FAQCard = styled.div`
background: black;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
/* max-height: 340px; */
padding-bottom: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
width: 40vw;
@media screen and (max-width: 700px) {
    width: auto;
    margin-top: 5rem;
}
&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;

export const FAQIcon = styled.img`
heigth: 160px;
width: 160px;
margin-bottom: 10px;
`;

export const FAQH1 = styled.h1`
font-size: 1rem;
color: #555555;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;

export const FAQH2 = styled.h2`
color: white;
font-size: 1.5rem;
margin-bottom: 10px;
`;

export const FAQP = styled.p`
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 122%;
/* or 27px */


color: #DBDEE8;
`;
