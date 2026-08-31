import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import About from "../components/About";
import Content from "../components/Content";
import Footer from "../components/Footer";
import LogoBar from "../components/LogoBar";


function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <LogoBar />

      <section id="works">
        <Portfolio />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="blog">
        <Content />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default Home;