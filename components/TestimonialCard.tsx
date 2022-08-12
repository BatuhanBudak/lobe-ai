import { TestimonialCardIndividual, TestimonialCardDesc, TestimonialCardJob, TestimonialCardName, TestimonialPersonalContainer } from '../styles/TestimonialsStyles';
import Image from 'next/image';

export default function TestimonialCard({ descText, name, job, avatar }) {
    return (
        <TestimonialCardIndividual>
            <div>
                <Image src={avatar} alt='avatar' />
            </div>
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
