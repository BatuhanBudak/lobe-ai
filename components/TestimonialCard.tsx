import { TestimonialCardIndividual, TestimonialCardDesc, TestimonialCardJob, TestimonialCardName, TestimonialPersonalContainer, AvatarContainer, Avatar } from '../styles/TestimonialsStyles';

export default function TestimonialCard({ descText, name, job, avatar }) {
    return (
        <TestimonialCardIndividual>
            <AvatarContainer>
                <Avatar src={avatar} alt='avatar' />
            </AvatarContainer>
            <TestimonialCardDesc>
                {descText}
            </TestimonialCardDesc>
            <TestimonialPersonalContainer>
                <TestimonialCardName>
                    {name}
                </TestimonialCardName>
                <TestimonialCardJob>
                    {job}
                </TestimonialCardJob>
            </TestimonialPersonalContainer>
        </TestimonialCardIndividual>
    )
}
