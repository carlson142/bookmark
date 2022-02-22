import styled from "styled-components";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SectionOne from "./components/Section_1/SectionOne";
import Download from "./components/Section_3/Download";
import Faq from "./components/Section_4/Faq";
import Contact from "./components/Section_5/Contact";

const Container = styled.main`
  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

function App() {
  return (
    <Container>
      <Header />
      <SectionOne />
      <Features />
      <Download />
      <Faq />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
