import { Sidebar } from "./components/sidebar/Sidebar";
import { Container } from "./components/Container";
import { About } from "./components/about/About";
import { Works } from "./components/works/Works";

function App() {
    return (
        <>
            <Container>
                <Sidebar />
            </Container>
            <About />
            <Works />
        </>
    );
}

export default App;