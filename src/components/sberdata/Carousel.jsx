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
    display: flex !important;
`;

const Marg = styled.div`
    background-color: var(--color-black);
    width: 5px;
`;

const SliderItemContainer = styled.div`
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    background-color: #232326;
    border-radius: 10px;

    @media (min-width: 1435px) {
        height: 320px;
    }
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
    font-weight: var(--fw-bold);
    font-size: var(--fs-light);
    line-height: var(--lh-light);
    letter-spacing: -0.01em;

    @media (min-width: 1435px) {
        font-size: 24px;
        line-height: 24px;
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

export const Carousel = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 200,
        arrows: false,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        rows: 1,
      };

    return (
        <>
            <SliderContainer>
                <Slider {...settings}>
                    <SliderItem>
                        <Marg></Marg>
                        <SliderItemContainer>
                            <ItemName>My Role</ItemName>
                            <ItemDescription>Senior Product Designer <br></br> ↓ <br></br>Lead Product Designer</ItemDescription>
                        </SliderItemContainer>
                    </SliderItem>
                    <SliderItem>
                        <Marg></Marg>
                        <SliderItemContainer>
                            <ItemName>Constraints</ItemName>
                            <ItemDescription>
                                Previously layouts has been created in Sketch. 
                                I needed to transfer them to Figma and create components.
                            </ItemDescription>
                        </SliderItemContainer>
                    </SliderItem>
                    <SliderItem>
                        <Marg></Marg>
                        <SliderItemContainer>
                            <ItemName>Customer Needs</ItemName>
                            <ItemDescription>
                                Easier way to purchase a data for their needs. 
                                Sometimes it&rsquo;s critical to get required data immediately.
                            </ItemDescription>
                        </SliderItemContainer>
                    </SliderItem>
                    <SliderItem>
                        <Marg></Marg>
                        <SliderItemContainer>
                            <ItemName>Responsibilities</ItemName>
                            <ItemDescription>
                                Previously layouts has been created in Sketch.
                                I needed to transfer them to Figma and create components.
                            </ItemDescription>
                        </SliderItemContainer>
                    </SliderItem>
                </Slider>
            </SliderContainer>
            <DesktopWrapper>
                <SliderItemContainer>
                    <ItemName>My Role</ItemName>
                    <ItemDescription>Senior Product Designer <br></br> ↓ <br></br>Lead Product Designer</ItemDescription>
                </SliderItemContainer>
                <SliderItemContainer>
                    <ItemName>Constraints</ItemName>
                    <ItemDescription>
                        Previously layouts has been created in Sketch. 
                        I needed to transfer them to Figma and create components.
                    </ItemDescription>
                </SliderItemContainer>
                <SliderItemContainer>
                    <ItemName>Customer Needs</ItemName>
                    <ItemDescription>
                        Easier way to purchase a data for their needs. 
                        Sometimes it&rsquo;s critical to get required data immediately.
                    </ItemDescription>
                </SliderItemContainer>
                <SliderItemContainer>
                    <ItemName>Responsibilities</ItemName>
                    <ItemDescription>
                        Previously layouts has been created in Sketch.
                        I needed to transfer them to Figma and create components.
                    </ItemDescription>
                </SliderItemContainer>

            </DesktopWrapper>
        </>
    )
}