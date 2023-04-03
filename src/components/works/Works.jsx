import styled from "styled-components";
import { List } from "./List";
import { Content } from "../Content";

const Wrapper = styled.section`
    margin-bottom: 60px;

    @media (min-width: 1435px) {
        margin-bottom: 80px;
    }
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
        margin-bottom: 40px;

        &:before {
            content: '';
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 100%;
            background-color: var(--color-white);
            margin-right: 10px;
        }
`;

export const Works = () => {
    return (
        <Wrapper>
            <Content>
                <SectionHeading>Selected work</SectionHeading>
            </Content>
            <List />
        </Wrapper>
    )
}