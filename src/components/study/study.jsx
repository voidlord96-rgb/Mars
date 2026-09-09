import './study.css';

import rover1 from '../img/section-3-rover-1-ic.svg';
import rover2 from '../img/section-3-rover-2-ic.svg';
import rover3 from '../img/section-3-rover-3-ic.svg';
import rover4 from '../img/section-3-rover-4-ic.svg';

import alien from '../img/section-3-alien.svg';
import rover from '../img/section-3-rover.svg';


function Study({ studyData }) {
  const { title, description, rovers } = studyData;

  const roverImages = {
    rover1,
    rover2,
    rover3,
    rover4,
  };

  return (
    <section className="study">

      <section className="study-top">
        <article className="study-text">

          <h2 className="study-title">
            {title}
          </h2>

          <p className="study-desc">
            {description}
          </p>

          <ul className="study-rovers-list">
            {rovers.map(({ id, name, image }) => (
              <li 
                className="study-rover-item" 
                key={id}
              >
                <img 
                  src={roverImages[image]} 
                  alt={name}
                />

                <p className="rover-item-title">
                  {name}
                </p>
              </li>
            ))}
          </ul>

        </article>
      </section>


      <section className="study-bottom">
        <img 
          src={alien} 
          className="study-alien" 
          alt="Инопланетянин"
        />

        <img 
          src={rover} 
          className="study-rover" 
          alt="Марсоход"
        />
      </section>

    </section>
  );
}

export default Study;