import "./shows.css";

/** A list of episode names that allows the user to select an episode */
export default function ShowList({
  name,
  shows,
  selectedShow,
  setSelectedShow,
}) {
  return (
    <section className="shows">
      <h2>{name}</h2>
      <ol>
        {shows.map((show) => (
          <li
            key={show.number}
            onClick={() => setSelectedShow(show)}
            className={show === selectedShow ? "selected" : ""}
          >
            {show.title}
          </li>
        ))}
      </ol>
    </section>
  );
}
