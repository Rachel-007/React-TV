import "./shows.css";

/** A list of episode names that allows the user to select an episode */
export default function ShowList({ shows, selectedShow, setSelectedShow }) {
  return (
    <nav>
      {" "}
      {shows.map((show) => (
        <a key={show.name} onClick={() => setSelectedShow(show)}>
          {" "}
          {show.name}
        </a>
      ))}
    </nav>
  );
}
