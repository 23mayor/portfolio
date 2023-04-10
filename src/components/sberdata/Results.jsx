import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = styled.div`
    @media (min-width: 1435px) {
        display: none;
    }
`;

const SliderItem = styled.div`
    padding: 10px;
    background-color: #232326;
    border-radius: 10px;
`;

const ItemName = styled.h6`
    font-weight: var(--fw-normal);
    font-size: var(--fs-thin);
    line-height: var(--lh-light);
    letter-spacing: -0.01em;
    color: var(--color-grey);

    @media (min-width: 1435px) {
        font-size: var(--fs-light);
        line-height: var(--lh-regular);
    }
`;

const ItemDescription = styled.h4`
    margin-top: 130px;
    font-weight: var(--fw-bold);
    font-size: var(--fs-light);
    line-height: var(--lh-light);
    letter-spacing: -0.01em;

    @media (min-width: 1435px) {
        margin-top: 120px;
        font-size: 24px;
        line-height: 24px;
    }
`;

const NumbersContainer = styled.div`
    display: flex;
    align-items: top;
    margin-top: 170px;

    @media (min-width: 1435px) {
        margin-top: 130px;
    }
`;

const ItemNumbers = styled.h3`
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

const After = styled.span`
    font-weight: var(--fw-bold);
    font-size: var(--fs-light);
    line-height: var(--fs-light);
    letter-spacing: -0.02em;
    color: #2CBC63;
    margin-left: 5px;

    @media (min-width: 1435px) {
        margin-left: 10px;
    }

`;

const DesktopWrapper = styled.div`
    display: none;

    @media (min-width: 1435px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
`;

export const Results = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 1.1,
        slidesToScroll: 1,
      };

    return (
        <>
            <SliderContainer>
                <Slider {...settings}>
                    <SliderItem>
                        <ItemName>Users</ItemName>
                        <NumbersContainer>
                        <ItemNumbers>4000+</ItemNumbers>
                            <After>+2k</After>
                        </NumbersContainer>
                    </SliderItem>
                    <SliderItem>
                        <ItemName>Net Promoter Score</ItemName>
                        <NumbersContainer>
                            <ItemNumbers>4,8</ItemNumbers>
                            <After>+1,8</After>
                        </NumbersContainer>
                    </SliderItem>
                    <SliderItem>
                        <ItemName>Impact across the company</ItemName>
                        <ItemDescription>
                            Created UI Library has been implemented into different products by other departments. 
                            It let to create unified UX for the bank&rsquo;s employees.
                        </ItemDescription>
                    </SliderItem>
                </Slider>
            </SliderContainer>
            <DesktopWrapper>
                <SliderItem>
                    <ItemName>Users</ItemName>
                    <NumbersContainer>
                        <ItemNumbers>4000+</ItemNumbers>
                        <After>+2k</After>
                    </NumbersContainer>
                </SliderItem>
                <SliderItem>
                    <ItemName>Net Promoter Score</ItemName>
                    <NumbersContainer>
                        <ItemNumbers>4000+</ItemNumbers>
                        <After>+1,8</After>
                    </NumbersContainer>
                </SliderItem>
                <SliderItem>
                    <ItemName>Impact across the company</ItemName>
                    <ItemDescription>
                        Created UI Library has been implemented into different products by other departments. 
                        It let to create unified UX for the bank&rsquo;s employees.
                    </ItemDescription>
                </SliderItem>
            </DesktopWrapper>
        </>
    )
}