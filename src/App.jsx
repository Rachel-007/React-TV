/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import { tvShows } from "./shows/data.js";
import ShowDetails from "./shows/ShowDetails.jsx";
import ShowList from "./shows/ShowList.jsx";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);
  // const [selectedEpisode, setSelectedEpisode] = useState(null);
  return (
    <>
      <head>
        <body>
          <div id="root">
            <h1>React TV</h1>
            <nav className="shows">
              <a className="show">Galactic Odyssey</a>
              <a className="show">Urban Legends</a>
              <a className="show">Culinary Journeys</a>
              <a className="show">Code Breakers</a>
              <a className="show">Pixel Wars</a>
            </nav>
          </div>

          <main>
            <div className="shows-details">
              <section className="episodes">
                <h2>Episodes</h2>
                <ol>
                  <li>Episode 1</li>
                  <li>Episode 2</li>
                  <li>Episode 3</li>
                  <li>Episode 4</li>
                  <li>Episode 5</li>
                  <li>Episode 6</li>
                  <li>Episode 7</li>
                  <li>Episode 8</li>
                </ol>
              </section>
            </div>
          </main>
        </body>
      </head>

      {/* You may want to pass tvShows and setSelectedShow to ShowList, and selectedShow to ShowDetails */}
      <ShowList shows={tvShows} setSelectedShow={setSelectedShow} />
      <ShowDetails selectedShow={selectedShow} selectedEpisode={null} />
    </>
  );
}
