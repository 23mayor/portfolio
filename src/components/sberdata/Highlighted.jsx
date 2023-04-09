import styled from "styled-components";
import { Content } from "../Content";
import cardgreen from "../../cardgreen.svg";

const SectionHeading = styled.h6`
        display: flex;
        align-items: center;
        font-family: var(--jetbrains-font);
        font-weight: var(--fw-light);
        font-size: var(--fs-thin);
        line-height: var(--lh-medium);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-top: 40px;
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

const Info = styled.div`
    @media (min-width: 1435px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Heading = styled.h4`
    font-weight: var(--fw-bold);
    font-size: var(--fs-medium);
    line-height: var(--lh-regular);
    letter-spacing: -0.03em;
    margin-bottom: 5px;

    @media (min-width: 1435px) {
        font-size: 40px;
        line-height: 40px;
    }
`;

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Description = styled.h5`
    width: 50%;
    font-weight: var(--fw-regular);
    font-size: var(--fs-thin);
    line-height: var(--lh-thin);
    letter-spacing: -0.01em;
    color: var(--color-grey);

    @media (min-width: 1435px) {
        font-size: var(--fs-light);
        line-height: var(--lh-regular);
    }
`;

const Image = styled.img`
    width: 100%;
    margin: 10px 0;
`;

const SecondaryHeading = styled.h4`
    font-weight: var(--fw-bold);
    font-size: var(--fs-medium);
    line-height: var(--lh-regular);
    letter-spacing: -0.03em;
    margin-top: 60px;
    margin-bottom: 5px;
`;

export const Highlighted = () => {
    return (
        <>
            <Content>
                <SectionHeading>highlighted</SectionHeading>
                <Info>
                    <Heading>Redesign</Heading>
                    <Description>Mars Inc. digital platform providing various services to pet owners</Description>
                </Info>
            </Content>
            <Image src={cardgreen} alt="image"/>
            <Content>
                <DescriptionContainer>
                    <Description>
                        Mars Inc. digital platform providing various services 
                        to pet owners mars Inc. digital platform providing 
                        various services to pet owners digital platform providing 
                        various services to pet owners mars Inc. digital 
                        platform providing various services to pet owners
                    </Description>
                </DescriptionContainer>
                <SecondaryHeading>
                    A care plan is everything you need 
                    for your pet's health and happiness in one service
                </SecondaryHeading>
            </Content>
            <Image src={cardgreen} alt="image"/>
        </>
    )
}