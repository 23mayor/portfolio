import styled from "styled-components";

const ListContainer = styled.section`
    width: 100%;
`;

export const List = ({children}) => {
    return (
        <ListContainer>
            {children}
        </ListContainer>
    )
}