import React from "react";
import {
    GuideContainer,
    Divider,
    GuideWrapper,
    CarouselContainer,
} from "./GuideElem";
import GuideCarousel from "./GuideCarousel";
import GuideCard from "./GuideCard";
import { images_arr, guides_arr } from "./GuideConstant";

const GuidePage = () => {
    return (
        <>
            <GuideWrapper>
                <GuideContainer>
                    <h1>LUNA Guide</h1>
                    <Divider />
                    <CarouselContainer>
                        <GuideCarousel images={images_arr} />
                    </CarouselContainer>
                    <Divider />
                    <Divider />
                    <h2>COVID-19 Guide</h2>
                    <Divider />
                    <GuideCard guides={guides_arr} />
                </GuideContainer>
            </GuideWrapper>
        </>
    );
};

export default GuidePage;
