import useChangeAndFade from '../hooks/useChangeAndFade';
import { IntroSection, IntroSecond, IntroSecondTitle, IntroSecondGreen, IntroSecondButtonGrup, IntroDownloadButton, IntroSecondDesc, IntroWatchButton, IntroVideoContainer, FirstVideo } from '../styles/IntroductionStyles';
import Image from 'next/image';
import logo from "../public/icons/play-button.svg";
import useScreenSize from '../hooks/useScreenSize';

export default function Introduction() {

    const { fadeState, animatedText } = useChangeAndFade();
    const windowWidth = useScreenSize();
    const firstBreakPoint = 650;

    return (
        <IntroSection>
            <IntroVideoContainer>
                {windowWidth < firstBreakPoint && <FirstVideo playsInline autoPlay loop title="Video showing examples of ways to use Lobe to easily create machine learning models."  ><source src="videos/HomeMobile.mp4" type="video/mp4" /></FirstVideo>}
                {windowWidth >= firstBreakPoint && <FirstVideo playsInline autoPlay loop title="Video showing examples of ways to use Lobe to easily create machine learning models."  ><source src="videos/Home.mp4" type="video/mp4" /></FirstVideo>}
            </IntroVideoContainer>

            <IntroSecond>
                <IntroSecondTitle>Train apps to
                    <IntroSecondGreen fadeState={fadeState} >{animatedText}</IntroSecondGreen>
                </IntroSecondTitle>
                <IntroSecondDesc>Create machine learning methods with a free, easy to use tool.</IntroSecondDesc>
                <IntroSecondButtonGrup>
                    <IntroDownloadButton>Download</IntroDownloadButton>
                    <IntroWatchButton>Watch Tour <Image src={logo} alt='play button' /></IntroWatchButton>
                </IntroSecondButtonGrup>
            </IntroSecond>
        </IntroSection>
    )
}
