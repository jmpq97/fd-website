import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, Logo, BgElement } from './HeroElements'
import { Button } from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer id="home">
        <HeroBg>
        </HeroBg>
        <HeroContent>
            <Logo src={require('../../images/logo-white.png')}/>
            <HeroH1></HeroH1>
            <HeroP>
            </HeroP>
            <HeroBtnWrapper>
            <BgElement src={require('../../images/graphic-grid.png')}/>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
