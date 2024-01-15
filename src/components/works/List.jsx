import styled from "styled-components";
import { Card } from "./Card";
import { Card2 } from "./Card2";
import { Card3 } from "./Card3";
import { Card4 } from "./Card4";
import { Card5 } from "./Card5";
import { Card6 } from "./Card6";

const ListContainer = styled.section`
    width: 100%;
`;

export const List = () => {
    return (
        <ListContainer>
            <Card />
            <Card2 />
            <Card3 />
            <Card4 />
            <Card5 />
            <Card6 />
        </ListContainer>
    )
}