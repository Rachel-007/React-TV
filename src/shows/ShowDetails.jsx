import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  if (!show) {
    return (
      <section className="show-details">
        <h2>Urban Legends</h2>
        <p>Select a show to learn more.</p>
      </section>
    );
  }

  return (
    <section className="show-details">
      <h2>Urban Legends {show.number}</h2>
      <h3>{show.title}</h3>
      <p>{show.description}</p>
      <button>Watch now</button>
    </section>
  );
}
// Update your ShowDetails component to use `show` instead of `showSelected`.
