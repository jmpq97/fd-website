import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, BgElement } from './InfoElements'
import { Gradient } from '../Services/ServicesElements'


const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline1, headline2, headline3, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline1}</Heading>
                                <Gradient grad="linear-gradient(92.34deg, #5FDCBE -0.67%, #6FA8FF 86.59%);">{headline2}</Gradient>
                                <Heading lightText={lightText}>{headline3}</Heading>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <TopLine>{topLine}</TopLine>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button href="https://linktr.ee/fronteradevsutrgv"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                    <BgElement src={require('../../images/graphic-waves.png')}/>
                </InfoWrapper>
                
            </InfoContainer>
        </>
    )
}

export default InfoSection
