import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


const Homepage = () => {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills/>
        </section>

        <section id="projects">
          <Projects/>
        </section>

        <section id="contact">
          <Contact/>
        </section>
      </main>

      <Footer/>
    </>
  );
};

export default Homepage;