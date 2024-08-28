import React from 'react';
import Button from './Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="tagline">Cloud Cost Observability Platform</div>
      <h1>Measure and rightsize cloud costs continuously</h1>
      <div className="hero-buttons">
        <Button text="Sign up" />
        <Button text="Request a demo" />
      </div>
    </section>
  );
};

export default HeroSection;
