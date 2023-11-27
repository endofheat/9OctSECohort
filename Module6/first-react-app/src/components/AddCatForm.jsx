import { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [name, setname] = useState("");
  const [latinName, setLatinName] = useState("");
  const [imgUrl, setImgURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    onAddCat(Object.fromEntries(data));
    }

  return (
    <div className="AddCatForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
            Name:
          <input
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </label>
        <label>
          latinName Released:
          <input
            name="latinName"
            type="text"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
        </label>
        <label>
            imgUrl:
            <input
                name="imgUrl"
                type="image"
                value={imgUrl}
                onChange={(e) => setImgURL(e.target.value)}
          />
        </label>

        <button>Add Cat</button>
      </form>
    </div>
  )
}

export default AddCatForm;