import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, BgElement, SocialLinks, SvgWrapper, FooterText } from './FooterElements'
import { ReactComponent as DiscordSVG } from '../../images/discord.svg'
import { ReactComponent as TwitterSVG } from '../../images/twitter.svg'
import { ReactComponent as FacebookSVG } from '../../images/facebook.svg'
import { ReactComponent as InstagramSVG } from '../../images/instagramsvg.svg'
import { ReactComponent as YoutubeSVG } from '../../images/youtube.svg'
import { ReactComponent as FooterImageSVG } from '../../images/footer-background-image.svg'
const FooterSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
    // TODO: make the divs into a styled divs for each. cut the fat. add padding to the links. also dyanimcally assign dimensions
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <div>
                        <FooterImageSVG />
                        <FooterText>frontera devs</FooterText>
                        <SocialLinks>
                            <SvgWrapper href="https://discord.com/invite/fbf3HhN" target="_blank"><DiscordSVG /></SvgWrapper>
                            <SvgWrapper href='https://twitter.com/fronteradevsrgv' target="_blank"><TwitterSVG /></SvgWrapper>
                            <SvgWrapper href='https://www.facebook.com/fronteradevsutrgv' target="_blank"><FacebookSVG /></SvgWrapper>
                            <SvgWrapper href='https://www.instagram.com/fronteradevs/' target="_blank"><InstagramSVG /></SvgWrapper>
                            <SvgWrapper href='https://www.youtube.com/channel/UCXHBRJsa9orzXiwIPGvNGSw' target="_blank"><YoutubeSVG /></SvgWrapper>

                        </SocialLinks>
                    </div>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default FooterSection
