import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled.a`
border-radius: 50px;
background: ${({ primary }) => (primary ? 'inherit' :
        '#000')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: #fff;
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border: 1px solid white;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#48D597' :'inherit')};
    color: #010606;
}


`