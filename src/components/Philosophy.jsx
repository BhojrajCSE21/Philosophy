import React from 'react';
import { Link } from 'react-router-dom';
import './Philosophy.css';

function Philosophy() {
  return (
    <div className="App">
      {/* Section 1: Little about us */}
      <div className="section video-section">
        <video autoPlay muted loop className="background-video">
          <source src="/backgroung.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <h1>Little Something About Us</h1>
        </div>
      </div>

      {/* Section 2: IT all began in 2012 */}
      <div className="section about-section">
        <div className="content">
          <p>IT ALL BEGAN in 2012 when the 'Two Brothers' returned to their village to take up farming full-time. With purposeful steps in pursuit of Soil-Health, today the Two Brothers Organic Farms is a biodiverse, self-sustaining food system, certified by ECOCERT, located in Bhodani village, Maharashtra. Our work is inspired by the simplicity and self-reliance of village life and guided by principles of Regenerative Agriculture. While securing Rural livelihoods and employment, we harness the power of Community to offer solutions to Public Health and Climate Change.</p>
        </div>
      </div>

      {/* Section 3: SOIL IS OUR HERO */}
      <div className="section soil-section">
      <img src="/image.png" alt="Soil" />
        <div className="content">
          <h2>SOIL IS OUR HERO</h2>
          <p>Our soil is worth its weight in gold. We wish to leave it in a better shape than when we received it. We want it to breathe, to live, to sustain life. The reason for our regenerative farming practices is to maintain a healthy and enriched soil.</p>
          <button>KNOW MORE</button>
        </div>
      </div>

      {/* Section 4: HEALTHY PLANET HEALTHY PEOPLE */}
      <div className="section healthy-planet-section">
        <img src="/sxjrl7kh.png" alt="Healthy Planet" />
        <div className="content">
          <h2>HEALTHY PLANET HEALTHY PEOPLE</h2>
          <p>We are 4th gen farmers who are inspired by ancient wisdom & values with appropriate blending of new age farming that is environmentally friendly. We follow a 'lifestyle' of farming and a way to replenish soil health everyday while at work.</p>
          <button>OUR FARMING PRACTICES</button>
        </div>
      </div>

      {/* Section 5: CONSCIOUS CATTLE REARING */}
      <div className="section cattle-rearing-section">
        <div className="content">
          <h2>CONSCIOUS CATTLE REARING</h2>
          <p>At the heart of our farming practices are our Cows. We have Pure Indigenous Native Gir Cows at the farm for their dung and urine - the only two things we use as input for our soil. The milk has always been a by-product.</p>
          <button>KNOW MORE</button>
        </div>
        <img src="/18vb2ewt.png" alt="Cattle" />
      </div>

      {/* Section 6: TOGETHER WE CREATE */}
      <div className="section create-section">
        <img src="/5eyfysxq.png" alt="Create" />
        <div className="content">
          <h2>TOGETHER WE CREATE</h2>
          <p>Each time you buy from us, you help secure livelihoods and make good food healthy and accessible to all. Sourcing from indigenous seeds and raised by the tireless hands of our farmer folk, our products are made fresh at our farm-kitchen.</p>
          <button>READ MORE</button>
        </div>
      </div>

      
      {/* Section 7: IMPACT & RECOGNITION */}
<div className="section impact-section">
  <h2 className="section-heading">IMPACT & RECOGNITION</h2>
  <div className="card">
    <img src="/b4dxclss.png" alt="Journey Towards Sustainability" />
    <h3>Journey Towards Sustainability</h3>
    <p>Featured on GQ India</p>
    <Link to="/readmore"><button>READ MORE</button></Link>
  </div>
  <div className="card">
    <img src="/74lyvvi8.png" alt="Empowering 9000 Farmers" />
    <h3>Empowering 9000 Farmers</h3>
    <p>Featured on YourStory</p>
    <button>READ MORE</button>
  </div>
  <div className="card">
    <img src="/k8nav4z1.png" alt="Towards Joy: The Big Switch" />
    <h3>Towards Joy: The Big Switch</h3>
    <p>Featured on TheBetterIndia</p>
    <button>READ MORE</button>
  </div>
</div>

{/* Section 8: Last Image */}
<div className="section last-image-section">
  <img src="/a8w2trwr.png" alt="Last Section" />
</div>
  </div>
  );
}

export default Philosophy;
