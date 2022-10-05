import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, BgElement } from './FooterElements'
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
                    <div class="frontera-links">
                        <FooterImageSVG/>
                        <span class="footer-text">frontera devs</span>
                        <div class="social-links">
                            <DiscordSVG />
                            <TwitterSVG />
                            <FacebookSVG/>
                            <InstagramSVG/>
                            <YoutubeSVG/>
                        </div>
                    </div>
                </InfoWrapper>
                
            </InfoContainer>
        </>
    )
}

export default FooterSection
