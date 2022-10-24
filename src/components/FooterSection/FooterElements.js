import styled from "styled-components";

export const InfoContainer = styled.div`
color: #fff;
${({ lightBg }) => (lightBg ? 'background:#f9f9f9;' : 'background:inherit;')}
;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
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
justify-content: flex-end;
    font-weight: 200;
    font-size: xx-large;
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