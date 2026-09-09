import "./profession.css";

import cardIcon1 from "../../img/card-icon-1.svg";
import cardIcon2 from "../../img/card-icon-2.svg";
import cardIcon3 from "../../img/card-icon-3.svg";

function Profession({ professionData }) {
  const cardImages = [cardIcon1, cardIcon2, cardIcon3];

  return (
    <header className="profession">
      <a href="/" className="back">
        {professionData.backText}
      </a>

      <div className="profession-title">
        <h2 className="profession-text">{professionData.title}</h2>

        <div className="profession-type-frame">
          <ul className="profession-type-container">
            {professionData.types.map((type, index) => (
              <li key={index} className="profession-type">
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="profession-cards">
        <div className="profession-cards-container">
          {professionData.cards.map((card, index) => (
            <div className="profession-card" key={card.title}>
              <img
                src={cardImages[index]}
                className="prof-card-logo"
                alt={card.alt}
              />

              <h2 className="prof-card-title">{card.title}</h2>

              <details className="prof-more">
                <summary>Подробнее</summary>

                {card.description}
              </details>
            </div>
          ))}
        </div>
      </section>
    </header>
  );
}

export default Profession;
