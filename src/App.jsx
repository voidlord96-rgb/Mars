import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideNav from "./components/side-nav/side-nav";
import Header from "./components/header/header";
import About from "./components/about/about";
import Study from "./components/study/study";
import Satellites from "./components/satellites/satellites";
import Earth from "./components/earth/earth";
import Footer from "./components/footer/footer";
import RegPage from "./components/regPage/RegPage";

function App({ state }) {
  return (
    <BrowserRouter>
      <Routes>
        {/* Основная страница */}
        <Route
          path="/"
          element={
            <>
              <SideNav navItems={state.navItems} />

              <Header headerData={state.headerData} />

              <About aboutData={state.aboutData} />

              <Study studyData={state.studyData} />

              <Satellites satellitesData={state.satellitesData} />

              <Earth earthData={state.earthData} />

              <Footer />
            </>
          }
        />

        {/* Страница регистрации */}
        <Route
          path="/registration"
          element={
            <RegPage
              professionData={state.professionData}
              quotesData={state.quotesData}
              formData={state.formData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
