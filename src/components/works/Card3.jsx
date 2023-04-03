import styled from "styled-components";
import marsInc from "../../marsInc.png"
import { Content } from "../Content";

const Wrapper = styled.div`
    margin-bottom: 40px;
`;

const CardBody = styled.div`

`;

const CardPlatforms = styled.div`
    display: flex;
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
`;

const CardName = styled.h2`
    font-size: var(--fs-medium);
    line-height: var(--lh-regular);
    font-weight: var(--fw-bold);
    letter-spacing: -0.03em;
    margin-bottom: 5px;
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
`;

const CardPosition = styled.h6`
    font-size: var(--fs-thin);
    line-height: var(--lh-thin);
    font-weight: var(--fw-regular);
    color: var(--color-grey);
    letter-spacing: -0.01em;
`;

const CardYear = styled.h6`
    font-size: var(--fs-thin);
    line-height: var(--lh-thin);
    font-weight: var(--fw-regular);
    color: var(--color-grey);
    letter-spacing: -0.01em;
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


export const Card3 = () => {
    return (
        <Wrapper>
            <Content>
                <CardBody>
                    <CardPlatforms>
                        <CardPlatformsItem>iOS</CardPlatformsItem>
                        <CardPlatformsItem>android</CardPlatformsItem>
                        <CardPlatformsItem>web</CardPlatformsItem>
                    </CardPlatforms>
                    <CardName>
                        The Mars Inc. digital platform providing various services to pet owners
                    </CardName>
                    <CardInfo>
                        <CardLink>Case Study</CardLink>
                        <Dot>·</Dot>
                        <CardPosition>Senior Product Designer</CardPosition>
                        <Dot>·</Dot>
                        <CardYear>2020</CardYear>
                    </CardInfo>
                </CardBody>
            </Content>
            <CardImage src={marsInc} alt="image"/>
        </Wrapper>
    )
}