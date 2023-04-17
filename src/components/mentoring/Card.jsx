import styled from "styled-components";
import zuykova from "../../Zuykova.png";
import samokat from "../../samokat.svg";
import VectorLink from "../../VectorLink.svg";
import React from 'react';
import ReactHintFactory from 'react-hint';
const ReactHint = ReactHintFactory(React);

const CardBody = styled.div`
    position: relative;
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
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

const CardInfoItems = styled.div`
    position: relative;
`;

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
    button {
        color: var(--color-grey);
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        letter-spacing: -0.01em;
        text-decoration: underline;
    }
`;

const CardInfoPhoto = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 10px;
`;

const Hint = styled.div`
    display: flex;
    align-items: flex-start;

    img {
        margin-right: 10px;
    }
`;

export const Card = () => {
    return (
        <CardBody>
            <CardName>Not gonna lie he’s built different</CardName>
            <CardInfo>
                <CardInfoItems>
                    <CardInfoName>Lera Zuykova</CardInfoName>
                    <ReactHint
                        autoPosition
                        events
                        onRenderContent={() => (
                            <Hint>
                                <img src={samokat} alt="samokat"></img>
                                <p>
                                    Russian dark store rapid delivery service for food and household goods. 
                                    By 2022, Samokat owned around 1,100 dark stores in 49 cities and handled 
                                    35% of dark store deliveries Russia-wide
                                 </p>
                            </Hint>
                        )}
                    />
                    <CardInfoPosition>Product Designer at <button data-rh data-number="1">Yandex</button></CardInfoPosition>
                </CardInfoItems>
                <CardInfoPhoto src={zuykova}/>
            </CardInfo>
        </CardBody>
    )
}