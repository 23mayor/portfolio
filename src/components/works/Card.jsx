import styled from "styled-components";

const Wrapper = styled.div`

`;

const CardBody = styled.div`

`;

const CardPlatforms = styled.div``;

const CardPlatformsItem = styled.div``;

const CardName = styled.h2``;

const CardInfo = styled.div``;

const CardLink = styled.a`
    color: #F18F49;
`;

const CardPosition = styled.h6``;

const CardYear = styled.h6``;

const CardImage = styled.img``;


export const Card = ({platform, name, position, year}) => {
    return (
        <Wrapper>
            <CardBody>
                <CardPlatforms>
                    <CardPlatformsItem></CardPlatformsItem>
                </CardPlatforms>
                <CardName></CardName>
                <CardInfo>
                    <CardLink>Case Study</CardLink>
                    <CardPosition></CardPosition>
                    <CardYear></CardYear>
                </CardInfo>
            </CardBody>
            <CardImage></CardImage>
        </Wrapper>
    )
}