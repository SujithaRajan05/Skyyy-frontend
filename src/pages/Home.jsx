import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMobileAlt, 
  FaTv, 
  FaSatelliteDish, 
  FaBolt,
  FaShieldAlt,
  FaClock,
  FaClipboardList,
  FaCloud,
  FaUserFriends,
  FaServer,
  FaHeadset,
  FaListAlt
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-tagline">Fast & Secure Recharges</h1>
          <h2 className="hero-title">Welcome to Sky Recharge</h2>
          <p className="hero-description">
            Recharge made simple. Fast, secure, and hassle-free mobile recharges at your fingertips.
          </p>
          <Link to="/recharge" className="hero-button">
            Start Recharge
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">
        <div className="container">
          <h2 className="section-heading">Choose Your Service</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">
                <FaMobileAlt />
              </div>
              <h3>Mobile Recharge</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <FaTv />
              </div>
              <h3>TV Recharge</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <FaSatelliteDish />
              </div>
              <h3>DTH Recharge</h3>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <FaBolt />
              </div>
              <h3>Electricity Bill</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="container">
          <h2 className="section-heading">Why Choose Sky Recharge?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <FaCloud />
              </div>
              <h3>Cloud Powered</h3>
              <p>Fast and reliable cloud services</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Secure Payments</h3>
              <p>100% safe transactions</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaClock />
              </div>
              <h3>24/7 Service</h3>
              <p>Recharge anytime, anywhere</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaClipboardList />
              </div>
              <h3>Best Plans</h3>
              <p>Curated plans for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <FaUserFriends />
              </div>
              <h3>10M+</h3>
              <p>Happy Users</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaServer />
              </div>
              <h3>99.9%</h3>
              <p>Uptime</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaHeadset />
              </div>
              <h3>24/7</h3>
              <p>Support</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaListAlt />
              </div>
              <h3>100+</h3>
              <p>Plans</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;