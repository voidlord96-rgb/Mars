import './satellites.css'

import mars from '../img/section-4-mars.svg'
import phobos from '../img/section-4-phobos.svg'
import deimos from '../img/section-4-deimos.svg'

function Satellites({ satellitesData }) {
  return (
    <section className="satellites">
      <h2 className="satellites-title">
        {satellitesData.title}
      </h2>

      <div className="satellites-box">
        <div className="satellites-orbit">

          <div className="satellites-img">

            <div className="satellit-phobos">
              <img
                src={phobos}
                className="satellit-phobos-img"
              />

              <p className="satellit-text">
                {satellitesData.phobos}
              </p>
            </div>

            <div className="satellit-deimos">
              <img
                src={deimos}
                className="satellit-deimos-img"
              />

              <p className="satellit-text">
                {satellitesData.deimos}
              </p>
            </div>

          </div>

          <img
            src={mars}
            className="planet-mars"
          />

        </div>
      </div>
    </section>
  )
}

export default Satellites