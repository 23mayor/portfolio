import styled from "styled-components";
import { Container } from "../Container";
import spotSchool from "../../spotSchool.png"

const Wrapper = styled.div`
    margin-bottom: 40px;
`;

const CardBody = styled.div`

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
            <Container>
                <CardBody>
                    <CardName>
                        Mentor at the Design Spot School
                    </CardName>
                    <CardInfo>
                        <CardLink>Design Spot School Website</CardLink>
                        <Dot>·</Dot>
                        <CardPosition>EPAM</CardPosition>
                        <Dot>·</Dot>
                        <CardYear>2021</CardYear>
                    </CardInfo>
                </CardBody>
            </Container>
            <CardImage src={spotSchool} alt="image"/>
        </Wrapper>
    )
}