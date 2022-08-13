import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css/core';
import { Video } from '@splidejs/splide-extension-video';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Grid } from '@splidejs/splide-extension-grid';
import { VideoContainer, VideoClip, SplideContainer, VideoTitle } from '../styles/ExamplesStyles'

export default function SplideCarouselSecond() {

    const SPLIDE_OPTIONS = {
        gap: "10px",
        direction: 'rtl',
        arrows: false,
        pagination: false,
        drag: false,
        video: {
            autoplay: false,
            loop: true,
            mute: true,
            hideControls: true,
        },
        autoScroll: {
            speed: 2,
            autoStart: true,
            rewind: true,

        },
        // grid: {
        //     rows: 2,
        //     cols: 1,
        //     gap: {
        //         row: '.1rem',
        //         col: '10px',
        //     },
        // },
    };
    return (
        <SplideContainer>
            <Splide aria-label="My Favorite Images"
                extensions={{ Video, AutoScroll, Grid }}
                options={SPLIDE_OPTIONS}
                hasTrack={false}>
                <SplideTrack >
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop><source src="/videos/Compression.mp4" type="video/mp4" />
                            </VideoClip>
                            <VideoTitle>Equipment Analytics</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop ><source src="/videos/AfricanWildlife.mp4" type="video/mp4" />
                            </VideoClip>
                            <VideoTitle>Wildfire Watch</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop ><source src="/videos/Microscope.mp4" type="video/mp4" />
                            </VideoClip>
                            <VideoTitle>Scientific Research</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop ><source src="/videos/Wildfire.mp4" type="video/mp4" />
                            </VideoClip>
                            <VideoTitle>Wildlife Behavior</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop ><source src="/videos/Checkout.mp4" type="video/mp4" /> </VideoClip>
                            <VideoTitle>Smart Checkout</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop ><source src="/videos/Sleeping.mp4" type="video/mp4" /> </VideoClip>
                            <VideoTitle>Baby Monitor</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop ><source src="/videos/Bees.mp4" type="video/mp4" /> </VideoClip>
                            <VideoTitle>Beehive Health</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop ><source src="/videos/Whales.mp4" type="video/mp4" /> </VideoClip>
                            <VideoTitle>Whale Watching</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </SplideContainer>
    )
}
