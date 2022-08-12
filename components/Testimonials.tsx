import { TestimonialsContainer } from '../styles/TestimonialsStyles';
import TestimonialCard from './TestimonialCard';
import avatar1 from "../public/icons/avatar1@2x.jpg";
import avatar2 from "../public/icons/avatar2@2x.jpg";
import avatar3 from "../public/icons/avatar3@2x.jpg";

export default function Testimonials() {
    return (
        <TestimonialsContainer>
            <TestimonialCard descText={"As soon as I used Lobe I was completely blown away. I don’t have to spend days trying to learn machine learning. Simply label some images and boom, it really just works."} name={'Chirs Cachor'} job={"Software Engineer"} avatar={avatar1} />
            <TestimonialCard descText={"We’ve been using Lobe to quickly process previously untapped sources of data so that we can improve our models of nature-dependent tourism to promote better decision-making in our oceans."} name={"Kate Longley-Wood"} job={"Ocean Mapper"} avatar={avatar2} />
            <TestimonialCard descText={"As soon as I used Lobe I was completely blown away. I don’t have to spend days trying to learn machine learning. Simply label some images and boom, it really just works."} name={"Sean Cusack"} job={"Beekeeper"} avatar={avatar3} />
        </TestimonialsContainer>
    )
}
