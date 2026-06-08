import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home   from './pages/Home/Home';

function App() {
    return (
        <BrowserRouter>
        <Navbar />
        <main style={{ paddingTop: 'var(--navbar-h)' }}>
            <Routes>
            <Route path="/" element={<Home />} />
            </Routes>
        </main>
        <Footer />
        </BrowserRouter>
    );
}

export default App;