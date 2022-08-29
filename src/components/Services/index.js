import React from 'react'
// import Icon1 from '../../images/svg-1.svg';
// import Icon2 from '../../images/svg-2.svg';
// import Icon3 from '../../images/svg-3.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2, ServicesP, BgElement } from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>BY JOINING FRONTERA DEVS, YOU CAN:</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesH2>Develop your skillset</ServicesH2>
                    <ServicesP>Expand your knowledge on modern technologies taught through hands-on workshops and events led by experienced developers.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Shape your career</ServicesH2>
                    <ServicesP>Apply your skillset and gain experience by creating tech-driven solutions that solve problems that impact our community</ServicesP>
                </ServicesCard>
                <ServicesCard>

                    <ServicesH2>Build your network</ServicesH2>
                    <ServicesP>Network and build relationships with other students, industry professionals and professors in our developer community.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
