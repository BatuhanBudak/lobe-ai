import {
    PlantsSection,
    ContentContainer,
    GreenSpan,
    PlanstTitle,
    DescSubTitle,
    DescriptionDetails,
    PlantsVideoContainer,
    Video,
    TextContainer
} from '../styles/PlantsStyles';

export default function Plants() {
    return (
        <PlantsSection>
            <PlanstTitle>
                Label, Train, <GreenSpan>Use</GreenSpan>
            </PlanstTitle>
            <DescriptionDetails>Lobe simplifies the process of machine learning into three easy steps. Collect and label your images. Train your model and understand your results. Then play, improve, and export your model.</DescriptionDetails>
            <ContentContainer>
                <PlantsVideoContainer>
                    <Video playsInline autoPlay title="Quickly label images in Lobe by selecting an image, then typing or selecting a label."> <source src='/videos/playmobile.mp4' type="video/mp4" /></Video>
                </PlantsVideoContainer>
                <TextContainer>
                    <DescSubTitle><GreenSpan>Label</GreenSpan> your images</DescSubTitle>
                    <DescriptionDetails>Collect bursts using your webcam, or drag in a folder of images from your computer. Then quickly label your images to create a machine learning dataset.</DescriptionDetails>
                </TextContainer>
            </ContentContainer>
            <ContentContainer>
                <PlantsVideoContainer>
                    <Video playsInline autoPlay title="Once you've added and labeled images, Lobe will automatically start training and showing the predicted label for each image."><source src='/videos/trainmobile.mp4' type="video/mp4" /></Video>
                </PlantsVideoContainer>
                <TextContainer>
                    <DescSubTitle><GreenSpan>Train</GreenSpan> automatically</DescSubTitle>
                    <DescriptionDetails>Automatically train on your own computer without any setup or configuration. Understand the strengths and weaknesses of your model with live visual results.</DescriptionDetails>
                </TextContainer>
            </ContentContainer>
            <ContentContainer>
                <PlantsVideoContainer>
                    <Video playsInline autoPlay title="Finally, you can add image to Lobe from your computer, or use your webcam to get predictions in real-time for images your model has never seen. Mark them correct or incorrect to add them to your dataset." ><source src='/videos/labelmobile.mp4' type="video/mp4" /></Video>
                </PlantsVideoContainer>
                <TextContainer>
                    <DescSubTitle><GreenSpan>Use</GreenSpan> your model</DescSubTitle>
                    <DescriptionDetails>Use your model with your webcam or images from your computer. Improve your results by giving your model feedback on its predictions, then finally export it to your app.</DescriptionDetails>
                </TextContainer>
            </ContentContainer>
        </PlantsSection>
    )
}
