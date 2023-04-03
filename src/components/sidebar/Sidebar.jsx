import styled from "styled-components";
import photo from "../../photo.png"

const SidebarContainer = styled.div`
    width: 12%;
    padding: 15px 10px;

    @media (min-width: 1435px) {
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        padding: 30px 30px;
    }

`;

const SidebarWrapper = styled.div`
    display: flex;
    align-items: center;
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

    @media (min-width: 1435px) {
        flex-direction: column;
        align-items: flex-start;

        img {
            width: 124px;
            height: 124px;
            border-radius: 10px;
            margin-right: 0;
            margin-bottom: 17px;
        }

        h5 {
            font-weight: var(--fw-bold);
            font-size: 24px;
            line-height: 24px;
            letter-spacing: -0.03em;
        }
    }
`

const LinkList = styled.div`
    margin-top: 400px;

    @media (max-width: 1435px) {
        display: none;
    }
`;

const Link = styled.a`
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    color: var(--color-orange);
    letter-spacing: -0.03em;
    margin-bottom: 8px;
`;


export const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarWrapper>
                <img src={photo} alt="myPhoto"/>
                <h5>Artem Pchelyakov</h5>
            </SidebarWrapper>
            <LinkList>
                <Link>CV</Link>
                <Link>LinkedIn</Link>
                <Link>Twitter</Link>
                <Link>Telegram</Link>
                <Link>Email</Link>
            </LinkList>
        </SidebarContainer>
    )
}