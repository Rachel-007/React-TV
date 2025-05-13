import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ selectedShow }) {
  if (!selectedShow) throw new Error("Select a show");
  return <div className="show-details"></div>;
}
