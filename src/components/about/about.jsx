import './about.css';

import alienEye from '../img/section-2-alien-eye.svg';
import planets from '../img/section-2-planets.svg';

function About({ aboutData }) {
  const { title, text } = aboutData;

  return (
    <section className="about">
      <section className="about-left">
        <div className="about-alien">
          <img 
            src={alienEye} 
            className="about-alien-eye" 
            alt="Глаз инопланетянина" 
          />
        </div>

        <img 
          src={planets} 
          className="about-planets" 
          alt="Планеты" 
        />
      </section>

      <article className="about-right">
        <h2 className="about-title">
          {title}
        </h2>

        <p className="about-text">
          {text}
        </p>
      </article>
    </section>
  );
}

export default About;