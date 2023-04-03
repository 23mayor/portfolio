import { Sidebar } from "./components/sidebar/Sidebar";
import { Container } from "./components/Container";
import { About } from "./components/about/About";
import { Works } from "./components/works/Works";
import { Teaching } from "./components/teaching/Teaching";
import { Education } from "./components/education/Education";
import { Footer } from "./components/footer/Footer";

function App() {
    return (
        <>
            <Container>
                <Sidebar />
            </Container>
            <About />
            <Works />
            <Teaching />
            <Education />
            <Footer />
        </>
    );
}

export default App;