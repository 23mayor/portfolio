import { Sidebar } from "./components/sidebar/Sidebar";
import { About } from "./components/about/About";
import { Works } from "./components/works/Works";
import { Teaching } from "./components/teaching/Teaching";
import { Education } from "./components/education/Education";
import { Mentoring } from "./components/mentoring/Mentoring";
import { Footer } from "./components/footer/Footer";

import styled from "styled-components";
import { Container } from "./components/Container";

const Main = styled.div`
    @media (min-width: 1435px) {
        padding-left: 300px;
    }
`;

function App() {
    return (
        <Container>
            <Sidebar />
            <Main>
                <About />
                <Works />
                <Teaching />
                <Mentoring />
                <Education />
                <Footer />
            </Main>
        </Container>
    );
}

export default App;