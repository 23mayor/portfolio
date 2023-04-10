import styled from "styled-components";
import linkweb from "../linkweb.svg";
import linkiOS from "../linkiOS.svg";
import linkandroid from "../linkandroid.svg"
import { Content } from "../components/Content";
import { Carousel } from "../components/sberdata/Carousel";
import cardgreen from "../cardgreen.svg";
import sbersupermarket from "../Sbersupermarket.png"
import { Highlighted } from "../components/sberdata/Highlighted";
import { Results } from "../components/sberdata/Results";
import { Awards } from "../components/sberdata/Awards";

const Platforms = styled.div`
    display: flex;
    margin-bottom: 5px;

    @media (min-width: 1435px) {
        margin-bottom: 10px;
    }
`;

const PlatformsItem = styled.div`
    background: var(--color-dark-grey);
    border-radius: 4px;
    padding: 0 5px;
    margin-bottom: 5px;
    margin-right: 5px;
    font-family: var(--jetbrains-font);
    font-size: var(--fs-thin);
    line-height: var(--lh-light);
    color: var(--color-light-grey);
    font-weight: 300;

    @media (min-width: 1435px) {
        font-size: var(--fs-light);
        line-height: var(--lh-medium);
    }
`;

const Title = styled.h1`
    font-size: var(--fs-large);
    line-height: var(--lh-large);
    font-weight: var(--fw-bold);
    letter-spacing: -0.03em;
    margin-bottom: 10px;

    @media (min-width: 1435px) {
        font-size: 120px;
        line-height: 100px;
    }
`;

const Description = styled.h2`
    font-size: var(--fs-medium);
    line-height: var(--lh-regular);
    font-weight: var(--fw-bold);
    letter-spacing: -0.03em;
    margin-bottom: 20px;

    @media (min-width: 1435px) {
        font-size: 40px;
        line-height: 40px;
    }
`;

const LinkList = styled.div`
    display: flex;
`;

const LinkWeb = styled.a`
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-image: url('${linkweb}');
    margin-right: 5px;
`;

const LinkIOS = styled.a`
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 8px;
    background-image: url('${linkiOS}');
    margin-right: 5px;
`;

const LinkAndroid = styled.a`
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 8px;
    background-image: url('${linkandroid}');
`;

const TitleImage = styled.img`
    width: 100%;
    margin-top: 20px;
`;

const SectionHeading = styled.h6`
        display: flex;
        align-items: center;
        font-family: var(--jetbrains-font);
        font-weight: var(--fw-light);
        font-size: var(--fs-thin);
        line-height: var(--lh-medium);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-top: 40px;
        margin-bottom: 20px;

        &:before {
            content: '';
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 100%;
            background-color: var(--color-white);
            margin-right: 10px;
        }

        @media (min-width: 1435px) {
            font-size: var(--fs-light);
            line-height: var(--lh-light);
            margin-bottom: 20px;
        }
`;

const ProductCard = styled.div`
    width: 100%;
    padding: 10px;
    background-color: #232326;
    border-radius: 10px;
`;

const Name = styled.h5`
    font-weight: var(--fw-bold);
    font-size: var( --fs-light);
    line-height: var(--lh-light);
    letter-spacing: -0.02em;

    @media (min-width: 1435px) {
        font-size: 24px;
        line-height: 24px;
        letter-spacing: -0.03em;
    }
`;

const List = styled.div`
    display: flex;
    margin-top: 100px;

    @media (min-width: 1435px) {
        display: none;
    }
`;

const DesktopList = styled.div`
    display: none;
    @media (min-width: 1435px) {
        display: flex;
        margin-top: 166px;
    }
`;

const ListItem = styled.div`
    
`;

const Line = styled.div`
    width: 1px;
    min-height: 100%;
    background-color: var(--color-white);
    opacity: 0.2;
    margin: 0 20px;

    @media (min-width: 1435px) {
        margin: 0 30px;
    }
`;

const Number = styled.h4`
    font-weight: var(--fw-bold);
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.03em;

    @media (min-width: 1435px) {
        font-size: 60px;
        line-height: 64px;
        letter-spacing: -0.05em;
    }
`;

const AboutNumber = styled.span`
    font-weight: var(--fw-regular);
    font-size: var(--fs-thin);
    line-height: var(--lh-thin);
    letter-spacing: -0.01em;
    color: var(--color-grey);

    @media (min-width: 1435px) {
        font-size: var(--fs-light);
        line-height: var(--lh-regular);
    }
`;

const TeamImage = styled.img`
    width: 100%;
`;

const Heading = styled.h4`
    font-weight: var(--fw-bold);
    font-size: var(--fs-medium);
    line-height: var(--lh-regular);
    letter-spacing: -0.03em;
    margin-bottom: 5px;

    @media (min-width: 1435px) {
        font-size: 40px;
        line-height: 40px;
    }
`;

export function Sberdata() {
    return (
        <>
            <Content>
                <Platforms>
                    <PlatformsItem>iOS</PlatformsItem>
                    <PlatformsItem>android</PlatformsItem>
                    <PlatformsItem>web</PlatformsItem>
                </Platforms>
                <Title>Title</Title>
                <Description>Description</Description>
                <LinkList>
                    <LinkWeb href="/" />
                    <LinkIOS href="/" />
                    <LinkAndroid href="/" />
                </LinkList>
            </Content>
            <TitleImage src={cardgreen} alt="image"/>
            <Content>
                <SectionHeading>About the product</SectionHeading>
                <ProductCard>
                    <Name>
                        Sber Data Supermarket &ndash; Internal product of data purchasing for Data Scientists, 
                        Data Engineers and Data Managers of the biggest bank in Russia
                    </Name>
                    <List>
                        <ListItem>
                            <Number>120k+</Number>
                            <AboutNumber>Users</AboutNumber>
                        </ListItem>
                        <Line />
                        <ListItem>
                            <Number>25k+</Number>
                            <AboutNumber>Consultations</AboutNumber>
                        </ListItem>
                        <ListItem></ListItem>
                    </List>
                    <DesktopList>
                        <ListItem>
                            <Number>100k+</Number>
                            <AboutNumber>Terabytes of data</AboutNumber>
                        </ListItem>
                        <Line />
                        <ListItem>
                            <Number>70k+</Number>
                            <AboutNumber>Purchases per month</AboutNumber>
                        </ListItem>
                        <Line />
                        <ListItem>
                            <Number>4k+</Number>
                            <AboutNumber>Users: Data Scientists, Data Engineers</AboutNumber>
                        </ListItem>
                    </DesktopList>
                </ProductCard>
            </Content>
            <Content>
                <SectionHeading>I joined the team</SectionHeading>
                <Carousel />
            </Content>
            <Content>
                <SectionHeading>team’s collaboration</SectionHeading>
                <TeamImage src={sbersupermarket} alt="image"/>
            </Content>
            <Highlighted />
            <Content>
                <SectionHeading>Doctor's and administrator's personal account</SectionHeading>
                <Heading>
                    A care plan is everything you need for 
                    your pet's health and happiness in one service
                </Heading>
            </Content>
            <TitleImage src={cardgreen} alt="image"/>
            <Content>
                <SectionHeading>Results</SectionHeading>
                <Results />
            </Content>
            <Content>
                <SectionHeading>awards</SectionHeading>
                <Awards />
            </Content>
        </>
    );
}