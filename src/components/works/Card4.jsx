import styled from "styled-components";
import previewMessenger from "../../previewMessenger.svg"
import { Content } from "../Content";

const Wrapper = styled.div`
    margin-bottom: 40px;

    @media (min-width: 1435px) {
        margin-bottom: 60px;
    }
`;

const CardBody = styled.div`

`;

const CardPlatforms = styled.div`
    display: flex;
    margin-bottom: 5px;
    @media (min-width: 1435px) {
        margin-bottom: 10px;
    }
`;

const CardPlatformsItem = styled.div`
    background: var(--color-dark-grey);
    border-radius: 4px;
    padding: 0 5px;
    margin-bottom: 5px;
    margin-right: 5px;
    font-family: var(--jetbrains-font);
    font-size: var(--fs-thin);
    line-height: var(--lh-light);
    color: var(--color-light-grey);
    font-weight: 300;

    @media (min-width: 1435px) {
        font-size: var(--fs-light);
        line-height: var(--lh-medium);
    }
`;

const CardName = styled.h2`
    font-size: var(--fs-medium);
    line-height: var(--lh-regular);
    font-weight: var(--fw-bold);
    letter-spacing: -0.03em;
    margin-bottom: 10px;

    @media (min-width: 1435px) {
        font-size: 40px;
        line-height: 40px;
        margin-right: 10px;
    }
`;

const CardInfo = styled.div`
    display: flex;
`;

const CardLink = styled.a`
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

const CardPosition = styled.h6`
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

const CardYear = styled.h6`
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

const CardImage = styled.img`
    width: 100%;
    margin-top: 20px;
`;


export const Card4 = () => {
    return (
        <Wrapper>
            <Content>
                <CardBody>
                    <CardPlatforms>
                        <CardPlatformsItem>iOS</CardPlatformsItem>
                        <CardPlatformsItem>android</CardPlatformsItem>
                        <CardPlatformsItem>web</CardPlatformsItem>
                        <CardPlatformsItem>macOS</CardPlatformsItem>
                        <CardPlatformsItem>win</CardPlatformsItem>
                    </CardPlatforms>
                    <CardName>
                        Corporative messenger for the bank with 270k+ employees
                    </CardName>
                    <CardInfo>
                        <CardLink>Case Study</CardLink>
                        <Dot>&bull;</Dot>
                        <CardPosition>Lead Product Designer</CardPosition>
                        <Dot>&bull;</Dot>
                        <CardYear>2021</CardYear>
                    </CardInfo>
                </CardBody>
            </Content>
            <CardImage src={previewMessenger} alt="image"/>
        </Wrapper>
    )
}