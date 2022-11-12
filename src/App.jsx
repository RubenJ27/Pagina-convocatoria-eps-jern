import { useState } from "react";
import reactLogo from "./assets/react.svg";
import bannerImg from "./assets/banner-img.png";
import trickImg from "./assets/trick-treat5-img.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div   className="App">
        {/*  <!-- #region ENCABEZADO --> */}
        <header   className="header" id="header">
          <nav   className="nav container">
            <a href="#"   className="nav__logo">
              <img
                src={trickImg}
                alt=""
                  className="nav__logo-img"
              />
              PAGES EPS
            </a>
            <div   className="nav__menu" id="nav-menu">
              <ul   className="nav__list">
                <li   className="nav__item">
                  <a href="#home"   className="nav__link active-link">
                    Home
                  </a>
                </li>
                <li   className="nav__item">
                  <a href="#about"   className="nav__link">
                    Datos EPS
                  </a>
                </li>
                <li   className="nav__item">
                  <a href="#new"   className="nav__link">
                    Contacto
                  </a>
                </li>
              </ul>
              <div   className="nav__close" id="nav-close">
                <i   className="bx bx-x"></i>
              </div>
            </div>
            <div   className="nav__toggle" id="nav-toggle">
              <i   className="bx bx-grid-alt"></i>
            </div>
          </nav>
        </header>
      </div>
      <section   className="home container-fluid" id="home">
        <div   className="swiper home-swiper">
          <div   className="swiper-wrapper">
            <section   className="swiper-slide">
              <div   className="home__content grid">
                <div   className="home__group">
                  <img
                    src={bannerImg}
                    alt=""
                      className="home__img"
                  />
                </div>

                <div   className="home__data">
                  <h3   className="home__subtitle">RANKIN DE EPS</h3>
                  <h1   className="home__title">
                    LAS MEJORES <br />
                    EPS DEL PAIS!!
                  </h1>
                  <p   className="home__description">
                    Se concibe a la EpS como una serie de intervenciones
                    destinadas a facilitar cambios en la conducta y en los
                    estilos de vida. Su objetivo es con- seguir comportamientos
                    saludables y proporcionar información como parte del proceso
                  </p>
                </div>
              </div>

              <div   className="cuadro">
                <div   className="container px-4 py-5" id="custom-cards">
                  <h2   className="pb-2 border-bottom text-start">Informate</h2>
              
                  <div   className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                  <div  className="col">
                      <div  className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                        <div  className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                          <h2  className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Registro EPS</h2>
                          <ul  className="d-flex list-unstyled mt-auto">
                            <li  className="me-auto">
                              <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32"  className="rounded-circle border border-white" />
                            </li>
                            <li  className="d-flex align-items-center me-3">
                              {/* <svg  className="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg> */}
                              <small>Earth</small>
                            </li>
                            <li  className="d-flex align-items-center">
                              {/* <svg  className="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg> */}
                              <small>3d</small>
                            </li>
                          </ul>
                        </div>
                      </div>
                  </div>
              
                  <div class="col">
                      <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                          <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
                          <ul class="d-flex list-unstyled mt-auto">
                            <li class="me-auto">
                              <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                            </li>
                            <li class="d-flex align-items-center me-3">
                              {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg> */}
                              <small>Pakistan</small>
                            </li>
                            <li class="d-flex align-items-center">
                              {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg> */}
                              <small>4d</small>
                            </li>
                          </ul>
                        </div>
                      </div>
                  </div>

                  <div class="col">
                      <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                        <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                          <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
                          <ul class="d-flex list-unstyled mt-auto">
                            <li class="me-auto">
                              <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                            </li>
                            <li class="d-flex align-items-center me-3">
                              {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg> */}
                              <small>California</small>
                            </li>
                            <li class="d-flex align-items-center">
                              {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg> */}
                              <small>5d</small>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
              
                  
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
