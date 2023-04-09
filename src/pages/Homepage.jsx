import { About } from "../components/about/About";
import { Works } from "../components/works/Works";
import { Teaching } from "../components/teaching/Teaching";
import { Education } from "../components/education/Education";
import { Mentoring } from '../components/mentoring/Mentoring';
import { Footer } from '../components/footer/Footer';



export function Homepage() {
    return (
        <>
            <About />
            <Works />
            <Teaching />
            <Mentoring />
            <Education />
            <Footer />
        </>
    );
}