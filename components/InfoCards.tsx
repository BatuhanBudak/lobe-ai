import classification from '../public/Classification.jpg';
import detection from '../public/Detection.jpg';
import tabular from '../public/Tabular.jpg';
import {
    ScrollCard,
    CardButton,
    CardTitle,
    CardDetail,
    MediaScroller,
    InfoCardsSection,
    SoonButton
} from '../styles/InfoCardsStyles';
import Image from 'next/image';

export default function InfoCards() {
    return (
        <InfoCardsSection>
            <MediaScroller>
                <ScrollCard >
                    <div>
                        <Image src={classification} alt='' />
                    </div>
                    <CardTitle>Image Classification</CardTitle>
                    <CardDetail>Label an image based
                        on its content.</CardDetail>
                    <CardButton>AVAILABLE NOW</CardButton>
                </ScrollCard>
                <ScrollCard >
                    <div>
                        <Image src={detection} alt='' />
                    </div>
                    <CardTitle>Object Detection</CardTitle>
                    <CardDetail>Locate an object inside of an image.</CardDetail>
                    <SoonButton>COMING SOON</SoonButton>
                </ScrollCard>
                <ScrollCard >
                    <div>
                        <Image src={tabular} alt='' />
                    </div>
                    <CardTitle>Data Classification</CardTitle>
                    <CardDetail>Label data in a table based on its content.</CardDetail>
                    <SoonButton>COMING SOON</SoonButton>
                </ScrollCard>
            </MediaScroller>
        </InfoCardsSection>
    )
}
