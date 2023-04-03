import styled from "styled-components";
import aboutwork from "../../AboutWork.png"
import { Content } from "../Content";

const AboutEl = styled.div`
    margin-bottom: 60px;

    h1 {
        font-size: var(--fs-large);
        font-weight: var(--fw-bold);
        line-height: var(--lh-large);
        letter-spacing: -0.03em;
    }

    h2 {
        font-size: var(--fs-medium);
        line-height: var(--lh-regular);
        font-weight: var(--fw-bold);
        letter-spacing: -0.03em;
        margin-bottom: 5px;
    }

    a {
        color: var(--color-grey);
        font-size: var(--fs-thin);
        line-height: var(--lh-light);
        font-weight: var(--fw-regular);
        letter-spacing: -0.01em;
    }

    img {
        width: 100%;
        margin-top: 10px;
    }

    @media (min-width: 1435px) {
        margin-bottom: 80px;

        h1 {
            font-size: 80px;
            line-height: 76px;
            letter-spacing: -0.05em;
            font-weight: var(--fw-bold);
            margin-bottom: 80px;
        }

        h2 {
            font-size: 40px;
            line-height: 40px;
            font-weight: var(--fw-bold);
            letter-spacing: -0.03em;
            margin-bottom: 10px;
        }

        a {
            color: var(--color-grey);
            font-size: var(--fs-light);
            line-height: var(--lh-regular);
            font-weight: var(--fw-normal);
            letter-spacing: -0.01em;
        }

        img {
            width: 100%;
            margin-top: 10px;
        }
    }
`

export const About = () => {
    return (
        <>
            <AboutEl>
                <Content>
                    <h1>
                        I`m a system-thinking product designer. 
                        I create things people love to use.
                    </h1>
                </Content>
            </AboutEl>
            <AboutEl>
                <Content>
                    <h2>My approach to work</h2>
                    <a href="/">Article on Medium [soon]</a>
                </Content>
                <img src={aboutwork} alt="My approach to work"/>
            </AboutEl>
        </>
    )
}