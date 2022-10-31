import { StaticImageData } from "next/image";
import {
  TestimonialCardIndividual,
  TestimonialCardDesc,
  TestimonialCardJob,
  TestimonialCardName,
  TestimonialPersonalContainer,
  AvatarContainer,
  Avatar,
} from "../styles/TestimonialsStyles";

interface Props {
  descText: string;
  name: string;
  job: string;
  avatar: StaticImageData;
}

export default function TestimonialCard({
  descText,
  name,
  job,
  avatar,
}: Props) {
  return (
    <TestimonialCardIndividual>
      <AvatarContainer>
        <Avatar src={avatar} alt="avatar" />
      </AvatarContainer>
      <TestimonialCardDesc>{descText}</TestimonialCardDesc>
      <TestimonialPersonalContainer>
        <TestimonialCardName>{name}</TestimonialCardName>
        <TestimonialCardJob>{job}</TestimonialCardJob>
      </TestimonialPersonalContainer>
    </TestimonialCardIndividual>
  );
}
