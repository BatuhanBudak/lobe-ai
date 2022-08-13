import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css/core';
import { Video } from '@splidejs/splide-extension-video';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Grid } from '@splidejs/splide-extension-grid';
import { VideoContainer, VideoClip, SplideContainer, VideoTitle } from '../styles/ExamplesStyles'

export default function SplideCarouselFirst() {

    const SPLIDE_OPTIONS = {
        gap: "10px",
        arrows: false,
        pagination: false,
        drag: false,
        video: {
            autoplay: true,
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
                <SplideTrack>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop ><source src="/videos/painting.mp4" type="video/mp4" /> </VideoClip>
                            <VideoTitle>Interactive Painting</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop><source src="/videos/Plants.mp4" type="video/mp4" /> </VideoClip>
                            <VideoTitle>Plant Species</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop ><source src="/videos/MaskUp.mp4" type="video/mp4" /> </VideoClip>
                            <VideoTitle>Safety Precautions</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop ><source src="/videos/HandCount.mp4" type="video/mp4" /> </VideoClip>
                            <VideoTitle>Hand Gestures</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop ><source src="/videos/FeeltheBurn.mp4" type="video/mp4" /> </VideoClip>
                            <VideoTitle>Personal Trainer</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop ><source src="/videos/Deforestation.mp4" type="video/mp4" /> </VideoClip>
                            <VideoTitle>Aerial Imagery</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop ><source src="/videos/Laughing.mp4" type="video/mp4" /> </VideoClip>
                            <VideoTitle>Emotional Reactions</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <VideoContainer>
                            <VideoClip playsInline autoPlay loop ><source src="/videos/Telescope.mp4" type="video/mp4" /> </VideoClip>
                            <VideoTitle>Telescopic Imagery</VideoTitle>
                        </VideoContainer>
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </SplideContainer>
    )
}
