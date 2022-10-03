import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, BgElement, BottomLine, LiWrap } from './FAQElements'

import { FAQ } from './Data'

function ListItem(props) {
    return <>
        <LiWrap>
            <TopLine>{props.question}</TopLine>
            <BottomLine>{props.answer}</BottomLine>
        </LiWrap>
    </>;
}

function FAQSection({ lightBg, id, lightText, imgStart }) {
    var FAQobj = FAQ;
    const FAQArray = FAQobj.array;

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <TextWrapper>
                        <Heading lightText={lightText}>Frequently Asked Questions</Heading>
                    </TextWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                                {FAQArray.slice(0, FAQArray.length / 2).map((QA) => <ListItem key={QA.id} question={QA.question} answer={QA.answer} />)}
                           
                        </Column1>
                        <Column2>
                                {FAQArray.slice(FAQArray.length / 2).map((QA) => <ListItem key={QA.id} question={QA.question} answer={QA.answer} />)}
                        
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default FAQSection;
