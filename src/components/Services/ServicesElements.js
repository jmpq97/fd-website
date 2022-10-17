import styled from "styled-components";

export const Gradient = styled.h2`
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 122%;
/* or 43px */

background: ${({ grad }) => (grad)};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`;

export const ServicesContainer = styled.div`
/* height: 800px; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;
min-height: 100vh;
@media screen and (max-width: 795px) {
    height: auto;
}

// @media screen and (max-width: 480px) {
//     heigth: 1300px;
// }
`;

export const ServicesWrapper = styled.div`
display: flex;
    grid-template-columns: 1fr 1fr 1fr;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

flex-direction: row;
flex-wrap: wrap;
align-content: center;
justify-content: center;
@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 795px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;

export const BgElement = styled.img`
width: 50%;
margin: 0 0 10px 0;
padding-right: 0;
`

export const ServicesCard = styled.div`
background: black;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: min-content;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
width: 30vw;
&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

@media screen and (max-width: 795px) {
width: 80vw;
}
`;

export const ServicesIcon = styled.img`
heigth: 160px;
width: 160px;
margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
font-size: 1rem;
color: #555555;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
    max-width: 80vw;
vw
;
}
`;

export const ServicesH2 = styled.h2`
color: white;
font-size: 1.5rem;
margin-bottom: 10px;
`;

export const ServicesP = styled.p`
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 122%;
/* or 27px */


color: #DBDEE8;
`;