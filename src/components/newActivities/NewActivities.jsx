import { useState } from "react";
import "./NewActivities.scss";

function NewActivities({ addNewActivities }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-activities">
      <label htmlFor="activity" className="activity">
        Inserisci la nuova attività
      </label>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        id="activity"
        value={inputValue}
      />
      <button className="btn" onClick={() => addNewActivities(inputValue)}>
        Aggiungi nuova attività
      </button>
    </div>
  );
}

export default NewActivities;
