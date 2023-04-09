import styled from "styled-components";
import { Content } from "../Content";

const CardList = styled.div`

`;

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: #232326;
    border-radius: 8px;
    margin-bottom: 5px;

    @media (min-width: 1435px) {
        padding: 20px;
    }
`;

const Number = styled.h6`
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

const Name = styled.h6`
    font-weight: var(--fw-regular);
    font-size: var(--fs-thin);
    line-height: var(--lh-thin);
    letter-spacing: -0.01em;
    margin-left: 5px;
    margin-right: auto;

    @media (min-width: 1435px) {
        font-size: var(--fs-light);
        line-height: var(--lh-regular);
        margin-left: 20px;
    }
`;

const Info = styled.h6`
    font-weight: var(--fw-regular);
    font-size: var(--fs-thin);
    line-height: var(--lh-thin);
    letter-spacing: -0.01em;
    color: var(--color-grey);
    margin-top: 26px;

    @media (min-width: 1435px) {
        font-size: var(--fs-light);
        line-height: var(--lh-regular);
        margin-top: 0;
    }
`;

export const Awards = () => {
    return (
        <Content>
            <CardList>
                <Card>
                    <Number>№1</Number>
                    <Name>Digital-projects: Telemedicine</Name>
                    <Info>Tagline 2021</Info>
                </Card>
                <Card>
                    <Number>№1</Number>
                    <Name>Medicine</Name>
                    <Info>Tagline 2021</Info>
                </Card>
                <Card>
                    <Number>№2</Number>
                    <Name>Digital-projects: Telemedicine</Name>
                    <Info>Tagline 2021</Info>
                </Card>
            </CardList>
        </Content>
    )
}