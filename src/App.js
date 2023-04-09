import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom'
import { Container } from './components/Container';
import { Homepage } from './pages/Homepage';
import { Sberdata } from './pages/Sberdata';
import { Sidebar } from './components/sidebar/Sidebar';

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
                <Routes>
                    <Route path='*' Component={Homepage}/>
                    <Route path='/sberdata' Component={Sberdata}/>
                </Routes>
            </Main>
        </Container>
    );
}

export default App;