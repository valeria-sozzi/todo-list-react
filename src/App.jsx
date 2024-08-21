import { useState } from "react";
import "./App.scss";
import NewActivities from "./components/newActivities/NewActivities";
import List from "./components/list/List.jsx";

function App() {
  const [activities, setActivities] = useState([
    { text: "Comprare il pane", completed: false },
    { text: "Studiare React", completed: false },
    { text: "Fare esercizio fisico", completed: true },
  ]);
  const [selectedActivity, setSelectedActivity] = useState("Tutte");

  const addNewActivities = (inputValue) => {
    const newActivity = { text: inputValue, completed: false };
    setActivities([...activities, newActivity]);
  };

  return (
    <div className="app-container">
      <NewActivities addNewActivities={addNewActivities} />
      <div>
        <label>Filtra per </label>
        <select
          name="activity"
          value={selectedActivity}
          onChange={(e) => {
            setSelectedActivity(e.target.value);
          }}
        >
          <option value="Tutte">Tutte</option>
          <option value={true}>Completate</option>
          <option value={false}>Non Completate</option>
        </select>
      </div>

      <List
        activities={activities}
        setActivities={setActivities}
        selectedActivity={selectedActivity}
      />
    </div>
  );
}

export default App;
