import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [activities, setActivities] = useState([
    { text: "Comprare il pane", completed: false },
    { text: "Studiare React", completed: false },
    { text: "Fare esercizio fisico", completed: true },
  ]);

  const [inputValue, setInputValue] = useState("ciao");

  console.log("🚀 ~ App ~ activities:", activities);
  return (
    <div className="app-container">
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
        <button
          className="btn"
          onClick={() => {
            const newActivity = { text: inputValue, completed: false };
            const newActivities = [...activities, newActivity];
            setActivities(newActivities);
          }}
        >
          Aggiungi nuova attività
        </button>
      </div>
      <ul>
        {activities.map((activity, currentIndex) => (
          <li key={currentIndex}>
            <span
              className={activity.completed ? "completed" : ""}
              onClick={() => {
                const newActivities = [...activities];
                newActivities.map((activity, index) => {
                  if (currentIndex === index) {
                    activity.completed = !activity.completed;
                  }
                });
                setActivities(newActivities);
              }}
            >
              {activity.text}{" "}
            </span>

            <span
              className="remove"
              onClick={() => {
                const newActivities = [...activities];
                newActivities.splice(currentIndex, 1);
                setActivities(newActivities);
              }}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
