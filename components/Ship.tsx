import {
  ShipSection,
  ContentContainer,
  ShipTitle,
  ChangingTitle,
  ShipDetails,
  ShipLink,
  ShipGreen,
  ShipBubblesContainer,
  ShipBubbles,
  BubbleContainer,
  Bubble,
  Icon
} from '../styles/ShipStyles';
import arduino from '../public/icons/arduino.svg';
import azure from '../public/icons/azure.svg';
import framer from '../public/icons/framer.svg';
import onnxai from '../public/icons/onnxai-icon.svg';
import python from '../public/icons/python-icon.svg';
import tensorflow from '../public/icons/tensorflow.svg';
import unity from '../public/icons/unity-new.svg';
import useLogoName from '../hooks/useLogoName';

export default function Ship() {
  const [textName, changeTextName, resetTextName, fadeState] = useLogoName();


  return (
    <ShipSection>
      <ContentContainer>
        <ShipTitle >
          <ShipGreen>Export </ShipGreen>
          <ChangingTitle fadeState={fadeState}>{!fadeState ? textName : ''}</ChangingTitle>
        </ShipTitle>
        <ShipDetails>When you are done, you can export your model to a variety of industry standard formats and ship it on any platform you choose
          .</ShipDetails>

        <ShipDetails>
          <ShipLink href="https://www.lobe.ai/docs/export/export">Learn More</ShipLink>
        </ShipDetails>
      </ContentContainer>
      <ShipBubblesContainer>
        <ShipBubbles>
          <BubbleContainer onMouseEnter={() => changeTextName("Arduino")}
            onMouseLeave={resetTextName} >
            <Bubble logo={'arduino'}>
              <Icon src={arduino} alt='arduino logo' />
            </Bubble>
          </BubbleContainer>
          <BubbleContainer onMouseEnter={() => changeTextName("Azure")}
            onMouseLeave={resetTextName}>
            <Bubble logo={'azure'} >
              <Icon src={azure} alt='azure logo' />
            </Bubble>
          </BubbleContainer>
          <BubbleContainer onMouseEnter={() => changeTextName("Framer")}
            onMouseLeave={resetTextName}>
            <Bubble logo={'framer'}>
              <Icon src={framer} alt='framer logo' />
            </Bubble>
          </BubbleContainer>
          <BubbleContainer onMouseEnter={() => changeTextName("Onnx")}
            onMouseLeave={resetTextName}>
            <Bubble logo={'onnxai'}>
              <Icon src={onnxai} alt='onnxai logo' />
            </Bubble>
          </BubbleContainer>
          <BubbleContainer onMouseEnter={() => changeTextName("Python")}
            onMouseLeave={resetTextName}>
            <Bubble logo={'python'}>
              <Icon src={python} alt='python logo' />
            </Bubble>
          </BubbleContainer>
          <BubbleContainer onMouseEnter={() => changeTextName("Tensorflow")}
            onMouseLeave={resetTextName}>
            <Bubble logo={'tensorflow'}>
              <Icon src={tensorflow} alt='tensorflow logo' />
            </Bubble>
          </BubbleContainer>
          <BubbleContainer onMouseEnter={() => changeTextName("Unity")}
            onMouseLeave={resetTextName}>
            <Bubble logo={'unity'}>
              <Icon src={unity} alt='unity logo' />
            </Bubble>
          </BubbleContainer>
        </ShipBubbles>
      </ShipBubblesContainer>
    </ShipSection >
  )
}
