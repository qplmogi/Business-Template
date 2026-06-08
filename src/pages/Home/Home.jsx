import Hero      from './sections/Hero';
import About     from './sections/About';
import Values    from './sections/Values';
import Services  from './sections/Services';
import Portfolio from './sections/Portfolio';
import Contact   from './sections/Contact';

function Home() {
    return (
        <div>
        <Hero />
        <About />
        <Values />
        <Services />
        <Portfolio />
        <Contact />
        </div>
    );
}

export default Home;