import styled from "styled-components";
import { Card } from "../mentoring/Card";
import { Card2 } from "../mentoring/Card2";
import { Card3 } from "../mentoring/Card3";
import { Card4 } from "../mentoring/Card4";

const MentoringSection = styled.section`
    display: none;

    h2 {
        font-weight: var(--fw-bold);
        font-size: 40px;
        line-height: 40px;
        letter-spacing: -0.03em;
        margin-bottom: 20px;
    }

    @media (min-width: 1435px) {
        display: block;
        margin-bottom: 80px;
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`;

export const Mentoring = () => {
    return (
        <MentoringSection>
            <h2>Personal mentoring since 2018</h2>
            <Wrapper>
                <Card />
                <Card2 />
                <Card3 />
                <Card4 />
            </Wrapper>
        </MentoringSection>
    )
}