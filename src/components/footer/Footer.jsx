import styled from "styled-components";
import { Container } from "../Container";

const FooterContainer = styled.section`
    padding-top: 160px;
    padding-bottom: 10px;

    h6 {
        font-size: var(--fs-thin);
        line-height: var(--lh-thin);
        font-weight: var(--fw-regular);
        color: var(--color-dark-grey);
        letter-spacing: -0.01em;
    }
`;

export const Footer = () => {
    return (
        <Container>
            <FooterContainer>
                <h6>© Artem Pchelyakov 2023</h6>
            </FooterContainer>
        </Container>
    )
}