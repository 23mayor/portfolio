import styled from "styled-components";
import silyutina from "../../silyutina.png"
import VectorLink from "../../VectorLink.svg"

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 240px;
    padding: 10px;
    border-radius: 10px;
    background-color: #232326;
`;

const CardName = styled.h6`
    font-weight: var(--fw-bold);
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.03em;
`;

const CardInfo = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

const CardInfoItems = styled.div``;

const CardInfoName = styled.a`
    display: flex;
    align-items: center;
    font-weight: var(--fw-normal);
    font-size: var(--fs-light);
    line-height: var(--lh-regular);
    letter-spacing: -0.01em;
    color: var(--color-white);

    &:after {
        content: '';
        display: block;
        width: 12px;
        height: 10px;
        background-image: url(${VectorLink});
        margin-left: 5px;
    }
`;

const CardInfoPosition = styled.h6`
    font-weight: var(--fw-normal);
    font-size: var(--fs-light);
    line-height: var(--lh-regular);
    letter-spacing: -0.01em;
    color: var(--color-grey);
`;

const CardInfoPhoto = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 10px;
`;

export const Card2 = () => {
    return (
        <CardBody>
            <CardName>Thanks to him I got a lot of things in design that didn’t understand before</CardName>
            <CardInfo>
                <CardInfoItems>
                    <CardInfoName>Olya Silyutina</CardInfoName>
                    <CardInfoPosition>Senior Product Designer at Samokat</CardInfoPosition>
                </CardInfoItems>
                <CardInfoPhoto src={silyutina}/>
            </CardInfo>
        </CardBody>
    )
}