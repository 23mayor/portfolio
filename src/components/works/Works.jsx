import styled from "styled-components";
import { List } from "./List";

const Wrapper = styled.section`
    h6::before {

    }

    h6 {

    }
`;

const SectionHeading = styled.h6`
        font-family: var(--jetbrains-font);
        font-weight: var(--fw-light);
        font-size: var(--fs-thin);
        line-height: var(--lh-medium);
        letter-spacing: 0.1em;
        text-transform: uppercase;

        &:before {
            content: "";
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 100%;
            background: var(--color-white)
            margin-right: 10px;
        }
`;

export const Works = () => {
    return (
        <Wrapper>
            <SectionHeading>Selected work</SectionHeading>
            <List />
        </Wrapper>
    )
}