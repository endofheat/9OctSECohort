import { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [synopsis, setSynopsis] = useState("");
  // ++ add support for the synopsis field as well, here and below
  const handleSubmit = (e) => {
    e.preventDefault();
    // Creates key-value pair object with form input names/values
    const data = new FormData(e.target);
    onAddMovie(Object.fromEntries(data));
    }

  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Year Released:
          <input
            name="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label>
            Synopsis:
            <input
                name="synopsis"
                type="text"
                value={synopsis}
                onChange={(e) => setSynopsis(e.target.value)}
          />
        </label>

        <button>Add Movie</button>
      </form>
    </div>
  )
}

export default AddMovieForm;