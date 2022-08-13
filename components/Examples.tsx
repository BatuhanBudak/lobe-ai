import React from 'react'
import SplideCarouselFirst from './SplideCarouselFirst'
import SplideCarouselSecond from './SplideCarouselSecond';
import {
    ExamplesSection, SplidesContainer, ExampleTitleContainer, ExampleTitle,
    ExampleDetails,
    ExampleGreen
} from '../styles/ExamplesStyles';

export default function Examples() {
    return (
        <ExamplesSection>
            <ExampleTitleContainer>
                <ExampleTitle><ExampleGreen>Lobe</ExampleGreen> Examples</ExampleTitle>
                <ExampleDetails>One tool, endless possibilities. Discover all the things you can train your app to do with Lobe.</ExampleDetails>
            </ExampleTitleContainer>
            <SplidesContainer>
                <SplideCarouselFirst />
                <SplideCarouselSecond />
            </SplidesContainer>
        </ExamplesSection>
    )
}
