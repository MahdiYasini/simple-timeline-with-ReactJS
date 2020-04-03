import React from 'react';
import './App.css';

import { FaBrain, FaUser, FaChevronRight, FaChevronLeft } from "react-icons/fa";

function App() {
  return (
    <>
      <header id="main-header">
        <div className="container">
          <h1>
            <FaBrain />
            Knowledge Resume
          </h1>
          <h3>
            <FaUser />
            User
          </h3>
        </div>
      </header>
      <section id="timeline">
        <ul>
          <li>
            <div>
              <h3>
                <FaChevronRight />
                Blob & Blob 2010
              </h3>
              <p>
                Commodo ipsum anim aliqua irure occaecat ipsum fugiat id consequat sunt cillum minim exercitation.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <FaChevronRight />
                Blob & Blob 2010
              </h3>
              <p>
                Commodo ipsum anim aliqua irure occaecat ipsum fugiat id consequat sunt cillum minim exercitation.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <FaChevronRight />
                Blob & Blob 2010
              </h3>
              <p>
                Commodo ipsum anim aliqua irure occaecat ipsum fugiat id consequat sunt cillum minim exercitation.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <FaChevronRight />
                Blob & Blob 2010
              </h3>
              <p>
                Commodo ipsum anim aliqua irure occaecat ipsum fugiat id consequat sunt cillum minim exercitation.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <FaChevronRight />
                Blob & Blob 2010
              </h3>
              <p>
                Commodo ipsum anim aliqua irure occaecat ipsum fugiat id consequat sunt cillum minim exercitation.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <FaChevronRight />
                Blob & Blob 2010
              </h3>
              <p>
                Commodo ipsum anim aliqua irure occaecat ipsum fugiat id consequat sunt cillum minim exercitation.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default App;
