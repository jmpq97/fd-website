import React from 'react'
import { FAQContainer, FAQWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, FAQH2, Subtitle, BtnWrap, ImgWrap, BgElement, BottomLine, LiWrap, FAQCard, FAQP } from './FAQElements'

import { FAQ } from './Data'

function ListItem(props) {
    return <>
        <FAQCard className={props.className}>
            <TopLine>{props.question}</TopLine>
            <BottomLine>{props.answer}</BottomLine>
            <BottomLine><br></br>{props.answer2}</BottomLine>
        </FAQCard>
    </>;
}

function FAQSection({ lightBg, id, lightText, imgStart }) {
    var FAQobj = FAQ;
    const FAQArray = FAQobj.array;

    return (
            <FAQContainer lightBg={lightBg} id={id}>
                <FAQH2 lightText={lightText}>Frequently Asked Questions</FAQH2>
                <FAQWrapper>
                    <InfoRow >
                                {FAQArray.map((QA) => <ListItem className={'faq-' + QA.id} key={QA.id} question={QA.question} answer={QA.answer}/>)}
                    </InfoRow>
                </FAQWrapper>
            </FAQContainer>
    )
}

export default FAQSection;
