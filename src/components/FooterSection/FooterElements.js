import styled from "styled-components";

export const InfoContainer = styled.div`
color: #fff;
${({ lightBg }) => (lightBg ? 'background:#f9f9f9;' : 'background:inherit;')}
;

// @media screen and (max-width: 768px) {
//     padding: 100px 0;
// }
`;

export const InfoWrapper = styled.div`
display: flex;
    z-index: 1;
    max-width: 80%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 10px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: flex-end;
`;

export const FooterText = styled.span`
display:flex;
align-self: center;
justify-content: center;
    font-weight: 200;
    font-weight: lighter;
    font-size: x-small;
    margin-bottom: 6vh;

    // @media only screen and (max-width: 550px) {
    //     margin-bottom: auto;

    // }
`;

export const SocialLinks = styled.div`
display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-end;
    align-items: flex-start;
    justify-content: space-between;
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: center;
    align-items: stretch;
    margin: 5rem auto 5rem auto;
`;

export const SvgWrapper = styled.a`
    margin: 2%
`

export const FooterImage = styled.img`
max-width: 20%;
height: auto;

@media screen and (max-width: 795px) {
    max-width: 35%;
}

@media screen and (max-width: 550px) {
    max-width: 45%;
}
`;