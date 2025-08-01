import React from "react";
import "../styles/home.scss";

// Import Material Design Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddIcon from '@mui/icons-material/Add';

/**
 * @component HomePage
 * @description The main dashboard screen for the Reflectly app. It's composed of several sections:
 * a header with the app logo and profile icon, a daily reflection card, quick action cards
 * for mood checks and gratitude, informational cards for the latest check-in and affirmations,
 * and a main navigation bar.
 * @returns {JSX.Element} The rendered HomePage component.
 */
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__container">

        {/* --- Header --- */}
        <header className="home-header">
          <p className="app-logo">
            <span className="app-logo--primary">Reflect</span>
            <span className="app-logo--secondary">ly</span>
          </p>
          <AccountCircleOutlinedIcon className="home-header__profile-icon" />
          <h1 className="home-header__date">Today, July 26</h1>
        </header>

        <main className="home-page__main-content">
          {/* --- Daily Reflection Card --- */}
          <section className="daily-reflection-card">
            <h2 className="daily-reflection-card__title">Daily Reflection</h2>
            <p className="daily-reflection-card__prompt">
              What brought you a moment of peace today?
            </p>
            <div className="daily-reflection-card__input-area">
              <div className="icon-wrapper icon-wrapper--gradient">
                <EditOutlinedIcon />
              </div>
              <span className="daily-reflection-card__placeholder">Start writing...</span>
              <div className="icon-wrapper icon-wrapper--primary">
                <CameraAltOutlinedIcon />
              </div>
            </div>
          </section>

          <div className="quick-actions-grid">
            {/* --- Mood Check Card --- */}
            <article className="quick-action-card">
              <div className="icon-wrapper icon-wrapper--secondary">
                <EmojiEmotionsOutlinedIcon />
              </div>
              <div className="quick-action-card__text">
                <h3 className="quick-action-card__title">Mood Check</h3>
                <p className="quick-action-card__description">Track your daily emotions</p>
              </div>
            </article>

            {/* --- Gratitude Card --- */}
            <article className="quick-action-card">
              <div className="icon-wrapper icon-wrapper--primary">
                <StarBorderOutlinedIcon />
              </div>
              <div className="quick-action-card__text">
                <h3 className="quick-action-card__title">Gratitude</h3>
                <p className="quick-action-card__description">Three things you're grateful for</p>
              </div>
            </article>
          </div>

          {/* --- Latest Check-in Card --- */}
          <article className="info-card">
            <div className="icon-wrapper icon-wrapper--secondary">
              <SentimentSatisfiedOutlinedIcon />
            </div>
            <div className="info-card__text">
              <h3 className="info-card__title">Latest Check-in</h3>
              <p className="info-card__description">
                <span>Yesterday:</span>
                <span>Peaceful</span>
              </p>
            </div>
          </article>

          {/* --- Daily Affirmation Card --- */}
          <article className="info-card">
            <div className="icon-wrapper icon-wrapper--primary">
              <StarBorderOutlinedIcon />
            </div>
            <div className="info-card__text">
              <h3 className="info-card__title">Daily Affirmation</h3>
              <p className="info-card__description">
                Every moment is a fresh beginning. Breathe deeply and trust your journey.
              </p>
            </div>
          </article>
        </main>

        {/* --- Navigation Bar --- */}
        <nav className="nav-bar">
          <a href="#home" className="nav-bar__item nav-bar__item--active">
            <HomeOutlinedIcon />
            <span>Home</span>
          </a>
          <a href="#new-entry" className="nav-bar__add-button">
            <AddIcon />
          </a>
          <a href="#entries" className="nav-bar__item">
            <SettingsOutlinedIcon />
            <span>Entries</span>
          </a>
        </nav>

      </div>
    </div>
  );
};

export default HomePage;