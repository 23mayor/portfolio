import styled from "styled-components";
import { Card } from "./Card";
import { Card2 } from "./Card2";
import { Card3 } from "./Card3";

const ListContainer = styled.section`
    width: 100%;
`;

export const List = () => {
    return (
        <ListContainer>
            <Card />
            <Card2 />
            <Card3 />
        </ListContainer>
    )
}