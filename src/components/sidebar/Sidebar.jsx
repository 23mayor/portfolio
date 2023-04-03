import styled from "styled-components";
import photo from "../../photo.png"

const SidebarWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-top: 15px;
    margin-bottom: 20px;

    h5 {
        font-size: var(--fs-light);
        font-weight: var(--fw-bold);
        line-height: var(--lh-light);
        letter-spacing: -0.02em;
    }

    img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin-right: 10px;
    }
`



export const Sidebar = () => {
    return (
        <SidebarWrapper>
            <img src={photo} alt="myPhoto"/>
            <h5>Artem Pchelyakov</h5>
        </SidebarWrapper>
    )
}