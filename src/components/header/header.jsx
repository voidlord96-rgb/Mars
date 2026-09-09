import './header.css';
import head_planet from '../img/header-planet.svg';
import head_rocket from '../img/header-rocket.svg';

function Header({ headerData }) {
  const { title, subtitle, buttonText } = headerData;

  return (
    <header className="header">
      <section className="header-content">
        <h1 className="header-title">{title}</h1>

        <h2 className="header-sub_title">
          {subtitle}
        </h2>

        <button className="header-btn">
          {buttonText}
        </button>
      </section>

      <section className="header_bg">
        <img 
          src={head_planet} 
          className="header-planet" 
          alt="Планета Марс" 
        />

        <img 
          src={head_rocket} 
          className="header-rocket" 
          alt="Ракета" 
        />
      </section>
    </header>
  );
}

export default Header;