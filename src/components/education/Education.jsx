import styled from "styled-components";
import { Content } from "../Content";

const Wrapper = styled.section`
    margin-bottom: 60px;
`;

const SectionHeading = styled.h6`
        display: flex;
        align-items: center;
        font-family: var(--jetbrains-font);
        font-weight: var(--fw-light);
        font-size: var(--fs-thin);
        line-height: var(--lh-medium);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 20px;

        &:before {
            content: '';
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 100%;
            background-color: var(--color-white);
            margin-right: 10px;
        }

        @media (min-width: 1435px) {
            font-size: var(--fs-light);
            line-height: var(--lh-light);
            margin-bottom: 40px;
        }
`;

const InstituteName = styled.h2`
    font-size: var(--fs-medium);
    line-height: var(--lh-regular);
    font-weight: var(--fw-bold);
    letter-spacing: -0.03em;
    margin-bottom: 5px;

    @media (min-width: 1435px) {
        font-size: 40px;
        line-height: 40px;
        margin-bottom: 10px;
    }
`;

const Info = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Link = styled.a`
    font-size: var(--fs-thin);
    line-height: var(--lh-thin);
    font-weight: var(--fw-regular);
    color: var(--color-orange);
    letter-spacing: -0.01em;

    @media (min-width: 1435px) {
        font-size: var(--fs-light);
        line-height: var(--lh-regular);
    }
`;

const Specialty = styled.h6`
    font-size: var(--fs-thin);
    line-height: var(--lh-thin);
    font-weight: var(--fw-regular);
    color: var(--color-grey);
    letter-spacing: -0.01em;

    @media (min-width: 1435px) {
        font-size: var(--fs-light);
        line-height: var(--lh-regular);
    }
`;

const Year = styled.h6`
    font-size: var(--fs-thin);
    line-height: var(--lh-thin);
    font-weight: var(--fw-regular);
    color: var(--color-grey);
    letter-spacing: -0.01em;

    @media (min-width: 1435px) {
        font-size: var(--fs-light);
        line-height: var(--lh-regular);
    }
`;

const Dot = styled.span`
    display: block;
    margin: 0 5px;
    color: var(--color-grey);
`;

export const Education = () => {
    return (
        <Wrapper>
            <Content>
                <SectionHeading>Education</SectionHeading>
                <InstituteName>
                    Institute of Information Technology and Intelligent Systems at Kazan Federal University
                </InstituteName>
                <Info>
                    <Link>University Website</Link>
                    <Dot>·</Dot>
                    <Specialty>Bachelor’s Degree [Computer Science]</Specialty>
                    <Dot>·</Dot>
                    <Year>2013 – 2017</Year>
                </Info>
            </Content>
        </Wrapper>
    )
}