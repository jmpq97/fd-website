import React from 'react'
// import Icon1 from '../../images/svg-1.svg';
// import Icon2 from '../../images/svg-2.svg';
// import Icon3 from '../../images/svg-3.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2, ServicesP, BgElement, Gradient } from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>BY JOINING FRONTERA DEVS, YOU CAN:</ServicesH1>
            <ServicesWrapper>
                <ServicesCard >
                    <ServicesH2>Develop 
                        <Gradient grad="linear-gradient(90.13deg, #8BC7FF 6.44%, #9D6FFF 63.43%, #FF48D7 126.11%);">your skillset</Gradient>
                    </ServicesH2>
                    <ServicesP>Expand your knowledge on modern technologies taught through hands-on workshops and events led by experienced developers.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Shape
                        <Gradient grad="linear-gradient(90.19deg, #A5FFE9 6.6%, #CEFF9D 55.21%, #FFE073 99.93%)">your career</Gradient>
                    </ServicesH2>
                    <ServicesP>Apply your skillset and gain experience by creating tech-driven solutions that solve problems that impact our community</ServicesP>
                </ServicesCard>
                <ServicesCard>

                    <ServicesH2>Build 
                        <Gradient grad="linear-gradient(90.81deg, #FFF0A2 6.67%, #FFB076 47.3%, #FF5A50 102.96%);">your network</Gradient>
                            
                        </ServicesH2>
                    <ServicesP>Network and build relationships with other students, industry professionals and professors in our developer community.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
