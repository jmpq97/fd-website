import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, BgElement } from './FAQElements'

import { FAQ } from './Data'

function ListItem(props) {
    return <>
    <TopLine>{props.question}</TopLine>
        <li>{props.answer}</li>
    </>;
}

function FAQSection({lightBg, id, lightText, imgStart}) {
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
                            <ul>
                                {FAQArray.slice(0, FAQArray.length / 2).map((QA) => <ListItem key={QA.id} question={QA.question} answer={QA.answer} />)}
                            </ul>
                        </Column1>
                        <Column2>
                            <ul>
                                {FAQArray.slice(FAQArray.length / 2).map((QA) => <ListItem key={QA.id} question={QA.question} answer={QA.answer} />)}
                            </ul>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default FAQSection;
