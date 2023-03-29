import styled from "styled-components";
import photo from "../../photo.png"

const SidebarEl = styled.div`
    display: flex;
    align-items: center;
    margin: 0 10px;
`



export const Sidebar = () => {
    return <SidebarEl>
        <img src={photo} alt="myPhoto"/>
        <h5>Artem Pchelyakov</h5>
    </SidebarEl>;
}