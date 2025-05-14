import React, { useState } from "react";
import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ selectedShow }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!selectedShow) {
    return (
      <section className="show-details">
        <p>Select a show to learn more.</p>
      </section>
    );
  }

  return (
    <section className="show-details">
      <EpisodeList
        name={selectedShow.name}
        episodes={selectedShow.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </section>
  );
}
// Update your ShowDetails component to use `show` instead of `showSelected`.
