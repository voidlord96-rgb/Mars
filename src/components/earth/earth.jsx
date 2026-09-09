import "./earth.css";

import rocket from "../img/section-5-rocket.svg";

function Earth({ earthData }) {
  return (
    <section className="earth">
      <div className="earth__header"></div>

      <div className="earth__content">
        <p>{earthData.text}</p>

        <img src={rocket} className="earth__rocket" alt="Картинка ракеты" />
      </div>

      <div className="earth__footer">
        <a href="#" className="earth__button">
          {earthData.buttonText}
        </a>
      </div>
    </section>
  );
}

export default Earth;
