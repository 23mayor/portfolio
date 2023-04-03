import styled from "styled-components";
import { Content } from "../Content";

const FooterContainer = styled.section`
    padding-top: 160px;
    padding-bottom: 10px;

    @media (min-width: 1435px) {
        padding-top: 210px;
        padding-bottom: 20px;
    }

    h6 {
        font-size: var(--fs-thin);
        line-height: var(--lh-thin);
        font-weight: var(--fw-regular);
        color: var(--color-grey);
        letter-spacing: -0.01em;

        @media (min-weight: 1435px) {
            font-size: var(--fs-light);
            line-height: var(--lh-regular);
        }
    }
`;

export const Footer = () => {
    return (
        <Content>
            <FooterContainer>
                <h6>© Artem Pchelyakov 2023</h6>
            </FooterContainer>
        </Content>
    )
}