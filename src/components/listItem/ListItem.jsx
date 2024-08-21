import { useState } from "react";
import "./ListItem.scss";

function ListItem({ activities, setActivities, selectedActivity }) {
  const [isEditIndex, setIsEditIndex] = useState("");
  const [editValue, setEditValue] = useState("");

  return (
    <>
      {activities.map(
        (activity, currentIndex) =>
          (selectedActivity === "Tutte" ||
            activity.completed.toString() === selectedActivity) && (
            <li key={currentIndex}>
              {isEditIndex === currentIndex ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
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
                  {activity.text}
                </span>
              )}
              {isEditIndex === currentIndex ? (
                <>
                  <button
                    onClick={() => {
                      const newActivities = [...activities];
                      newActivities.map((activity, index) => {
                        if (index === currentIndex) {
                          activity.text = editValue;
                        }
                      });
                      setActivities(newActivities);
                      setIsEditIndex("");
                    }}
                    disabled={activity.text === editValue}
                  >
                    Salva
                  </button>
                  <button
                    onClick={() => {
                      setIsEditIndex("");
                    }}
                  >
                    Annulla
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsEditIndex(currentIndex);
                    setEditValue(activity.text);
                  }}
                >
                  Modifica
                </button>
              )}

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
          )
      )}
    </>
  );
}

export default ListItem;
