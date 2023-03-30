import { Sidebar } from "./components/sidebar/Sidebar";
import { Container } from "./components/Container";
import { About } from "./components/about/About"

function App() {
    return (
        <>
            <Container>
                <Sidebar />
            </Container>
            <About />
        </>
    );
}

export default App;