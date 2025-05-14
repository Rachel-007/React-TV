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
  console.log(selectedShow);
  const [shows] = useState(tvShows);

  // const [selectedEpisode, setSelectedEpisode] = useState(null);
  return (
    <>
      <header>
        <h1>React TV</h1>
        <nav className="shows">
          <ShowList shows={shows} setSelectedShow={setSelectedShow} />
        </nav>
      </header>

      <main>
        <ShowDetails key={selectedShow?.name} selectedShow={selectedShow} />
      </main>
    </>
  );
}
