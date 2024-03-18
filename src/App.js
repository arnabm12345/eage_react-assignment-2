import logo from './logo.svg';
import './App.css';
import Navigation from './section/Navigation';
import Banner from './section/Banner';
import FeaturesSection from './section/FeatureSection';
import Benefits from './section/Benefits';
import Client from './section/Client';
import WorkFlow from './section/WorkFlow';
import CaseStudy from './section/CaseStudy';
import ClientFeed from './section/ClientFeed';
import ContactSection from './section/ContactSection';
import Footer from './section/Footer';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <FeaturesSection />
      <Benefits />
      <Client />
      <WorkFlow />
      <CaseStudy/>
      <ClientFeed />
      <ContactSection />
      <Footer />  
    </div>
  );
}

export default App;
