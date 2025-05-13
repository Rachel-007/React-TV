/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import { tvShows } from "./shows/data.js";
import ShowDetails from "./shows/ShowDetails.jsx";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  return (
    <>
      <header>
        <p>React TV</p>
        <nav className="shows">
          <a className="show">Galatic Odyssey</a>
          <a className="show">Urban Legends</a>
          <a className="show">Culinary Journeys</a>
          <a className="show">Code Breakers</a>
          <a className="show">Pixel Wars</a>
        </nav>
      </header>
      <main>
        <div className="show-Details">
          <section className="episodes">
            <h2>Pixel Wars</h2>
            <ol>
              <li className>Game On</li>
              <li className>Boss Battle</li>
              <li className>Power Up</li>
              <li className>The Rival Guild</li>
              <li className>Quest for the Artifact</li>
              <li className>Victory or Game Over</li>
            </ol>
          </section>
          <section className="episode-details">
            <h2></h2>
            <h3></h3>
            <p></p>
            <button>Watch Now</button>
          </section>
        </div>
      </main>
    </>
  );
}
