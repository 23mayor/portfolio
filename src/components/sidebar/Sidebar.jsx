import styled from "styled-components";
import photo from "../../photo.png"

const SidebarEl = styled.div``

export const Sidebar = () => {
    return <SidebarEl>
        <img src={photo} alt="myPhoto"/>
        <h5>Artem Pchelyakov</h5>
    </SidebarEl>;
}