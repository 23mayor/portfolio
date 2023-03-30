import styled from "styled-components";
import { Container } from "../Container";
import aboutwork from "../../AboutWork.png"

const AboutEl = styled.div`
    margin-bottom: 60px;

    h1 {
        font-size: var(--fs-large);
        font-weight: var(--fw-bold);
        font-height: var(--fh-large);
        letter-spacing: -0.03em;
    }

    h2 {
        font-size: var(--fs-medium);
        font-height: var(--fh-regular);
        font-weight: var(--fw-bold);
        letter-spacing: -0.03em;
        margin-bottom: 5px;
    }

    a {
        color: var(--color-grey-text);
        font-size: var(--fs-thin);
        font-height: var(--fh-light);
        font-weight: var(--fw-regular);
        letter-spacing: -0.01em;
    }

    img {
        width: 100%;
        margin-top: 10px;
    }
`

export const About = () => {
    return <>
        <AboutEl>
            <Container>
                <h1>
                    I`m a system-thinking product designer. 
                    I create things people love to use.
                </h1>
            </Container>
        </AboutEl>
        <AboutEl>
            <Container>
                <h2>My approach to work</h2>
                <a href="/">Article on Medium [soon]</a>
            </Container>
            <img src={aboutwork} alt="My approach to work"/>
        </AboutEl>
    </>
}