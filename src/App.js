import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/header/navbar';
import { HeroSection } from './components/hero-section/hero-section';
import { SocialSection } from './components/social-section/social-section';
import { FeatureSection } from './components/feature-section/feature-section';
import { Testimonial } from './components/testimonial-section/testimonial-section';
import { FAQSection } from './components/faq-Section/faq-section';
import { BlogSection } from './components/blog-section/blog-section';
import { CTASection } from './components/cta-section/cta-section';
import { Footer } from './components/footer/footer';

function App() {
  return (

    <div className='custom-container'>
      <NavBar />
      <hr className='full-width-hr'/>
      <HeroSection />
      <SocialSection />
      <hr className='hr'/>
      <FeatureSection />
      <Testimonial />
      <FAQSection />
      <hr className='hr'/>
      <BlogSection />
      <CTASection />
      <Footer />

    </div>
  );
}

export default App;
