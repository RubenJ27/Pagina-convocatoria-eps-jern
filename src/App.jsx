import { useState } from "react";
import reactLogo from "./assets/react.svg";
import bannerImg from "./assets/banner-img.png";
import trickImg from "./assets/trick-treat5-img.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        {/*  <!-- #region ENCABEZADO --> */}
        <header className="header" id="header">
          <nav className="nav container">
            <a href="#" className="nav__logo">
              <img
                src={trickImg}
                alt=""
                className="nav__logo-img"
              />
              PAGES EPS
            </a>
            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active-link">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    Datos EPS
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#new" className="nav__link">
                    Contacto
                  </a>
                </li>
              </ul>
              <div className="nav__close" id="nav-close">
                <i className="bx bx-x"></i>
              </div>
              <img src="assets/img/nav-img.png" alt="" className="nav__img" />
            </div>
            <div className="nav__toggle" id="nav-toggle">
              <i className="bx bx-grid-alt"></i>
            </div>
          </nav>
        </header>
      </div>
      <section className="home container-fluid" id="home">
        <div className="swiper home-swiper">
          <div className="swiper-wrapper">
            <section className="swiper-slide">
              <div className="home__content grid">
                <div className="home__group">
                  <img
                    src={bannerImg}
                    alt=""
                    className="home__img"
                  />
                </div>

                <div className="home__data">
                  <h3 className="home__subtitle">RANKIN DE EPS</h3>
                  <h1 className="home__title">
                    LAS MEJORES <br />
                    EPS DEL PAIS!!
                  </h1>
                  <p className="home__description">
                    Se concibe a la EpS como una serie de intervenciones
                    destinadas a facilitar cambios en la conducta y en los
                    estilos de vida. Su objetivo es con- seguir comportamientos
                    saludables y proporcionar información como parte del proceso
                  </p>
                </div>
              </div>

              <div className="cuadro">
                <div className="container px-4 py-5" id="custom-cards">
                  <h2 className="pb-2 border-bottom">Informate</h2>
              
                  <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                   
              
                    
              
                  
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
