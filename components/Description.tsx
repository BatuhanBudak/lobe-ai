import Image from "next/image";
import {
    DescriptionSection,
    DescTitle,
    GreenSpan,
    DescriptionDetails,
    DescScreenShootCont,
    DescScreenShoot,
    DescDetailsContainer,
    DescDetailContainer,
    DescriptionItemTitle,
    DescDetailsSVGContainer,
    DescDetailsSVG,
    DescriptionItem,
    DescDetailsSubTitle,

} from '../styles/DescriptionStyles';
import screenShot from '../public/screenshot.jpg';
import home from '../public/icons/Home.jpg';
import block from '../public/icons/Anywhere.jpg';
import lock from '../public/icons/Private.jpg';


export default function Description() {
    return (
        <DescriptionSection>
            <DescTitle>Machine learning made <GreenSpan>easy</GreenSpan></DescTitle>
            <DescriptionDetails>Lobe has everything you need to bring your machine learning ideas to life. Just show it examples of what you want it to learn, and it automatically trains a custom machine learning model that can be shipped in your app.</DescriptionDetails>
            <DescScreenShootCont>
                <DescScreenShoot src={screenShot} alt='' />
            </DescScreenShootCont>
            <DescDetailsContainer>
                <DescDetailContainer>
                    <DescDetailsSVGContainer>
                        <DescDetailsSVG src={home} alt='' />
                    </DescDetailsSVGContainer>
                    <div>
                        <DescriptionItemTitle>Easy to Use</DescriptionItemTitle>
                        <DescriptionItem> Use
                            Designed to be easy enough for anyone to use. No code or experience required.</DescriptionItem>
                    </div>
                </DescDetailContainer>
                <DescDetailContainer>
                    <DescDetailsSVGContainer>
                        <DescDetailsSVG src={lock} alt='' />
                    </DescDetailsSVGContainer>
                    <div>
                        <DescriptionItemTitle>Free and Private</DescriptionItemTitle>
                        <DescriptionItem>
                            Train for free on your own computer without uploading your data to the cloud.</DescriptionItem>
                    </div>
                </DescDetailContainer>
                <DescDetailContainer>
                    <DescDetailsSVGContainer>
                        <DescDetailsSVG src={block} alt='' />
                    </DescDetailsSVGContainer>
                    <div>
                        <DescriptionItemTitle>Export Anywhere</DescriptionItemTitle>
                        <DescriptionItem>Available for Mac and Windows. Export your model and ship it on any platform you choose.</DescriptionItem>
                    </div>
                </DescDetailContainer>
            </DescDetailsContainer>
            <DescDetailsSubTitle><GreenSpan>Project </GreenSpan>Templates</DescDetailsSubTitle>
            <DescriptionDetails>Lobe will automatically select the right machine learning architecture for your project. Image classification is available now, with more templates coming soon.</DescriptionDetails>
        </DescriptionSection>
    )
}
